import { chromium } from 'playwright-core';

const url = process.env.ADVENUBI_URL ?? 'http://127.0.0.1:4173/advenubi-landing/';
const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const scenarios = [
  { name: 'mobile-320', width: 320, height: 800 },
  { name: 'tablet-768', width: 768, height: 900 },
  { name: 'desktop-1024', width: 1024, height: 900 },
  { name: 'desktop-1440', width: 1440, height: 960 },
];

const browser = await chromium.launch({
  executablePath: chromePath,
  headless: true,
});

const failures = [];

try {
  for (const scenario of scenarios) {
    const context = await browser.newContext({
      colorScheme: scenario.name === 'desktop-1024' ? 'dark' : 'light',
      locale: 'ru-RU',
      reducedMotion: scenario.name === 'tablet-768' ? 'reduce' : 'no-preference',
      viewport: { width: scenario.width, height: scenario.height },
    });
    const page = await context.newPage();
    const runtimeIssues = [];

    page.on('console', (message) => {
      if (message.type() === 'error' || message.type() === 'warning') {
        runtimeIssues.push(`console ${message.type()}: ${message.text()}`);
      }
    });
    page.on('pageerror', (error) => runtimeIssues.push(`page error: ${error.message}`));
    page.on('requestfailed', (request) => {
      runtimeIssues.push(`request failed: ${request.url()} ${request.failure()?.errorText ?? ''}`);
    });
    page.on('response', (response) => {
      if (response.status() >= 400) {
        runtimeIssues.push(`response ${response.status()}: ${response.url()}`);
      }
    });

    await page.goto(url, { waitUntil: 'networkidle' });
    await page.locator('h1').waitFor();

    const measurements = await page.evaluate(() => {
      const root = document.documentElement;
      const heroActions = document.querySelector('.heroActions');
      const heroActionsRect = heroActions?.getBoundingClientRect();
      const heroImage = document.querySelector('.heroVisual img');
      const parentIcon = document.querySelector('.appIconFrame img');
      const parentIconRect = parentIcon?.getBoundingClientRect();
      const labelledSections = Array.from(document.querySelectorAll('[aria-labelledby]'));

      return {
        documentLanguage: root.lang,
        heroImageSource: heroImage instanceof HTMLImageElement ? heroImage.currentSrc : '',
        parentIconAspectRatio: parentIconRect && parentIconRect.height > 0
          ? parentIconRect.width / parentIconRect.height
          : 0,
        horizontalOverflow: root.scrollWidth - root.clientWidth,
        heroActionsVisible: Boolean(
          heroActionsRect && heroActionsRect.top >= 0 && heroActionsRect.bottom <= window.innerHeight,
        ),
        labelledSectionsValid: labelledSections.every((section) => {
          const headingId = section.getAttribute('aria-labelledby');
          return Boolean(headingId && document.getElementById(headingId));
        }),
      };
    });

    if (measurements.documentLanguage !== 'ru') {
      runtimeIssues.push(`expected ru document language, got ${measurements.documentLanguage}`);
    }
    if (measurements.horizontalOverflow > 1) {
      runtimeIssues.push(`horizontal overflow: ${measurements.horizontalOverflow}px`);
    }
    if (!measurements.heroActionsVisible) {
      runtimeIssues.push('hero actions are outside the initial viewport');
    }
    if (!measurements.labelledSectionsValid) {
      runtimeIssues.push('an aria-labelledby target is missing');
    }
    if (scenario.name === 'mobile-320' && !measurements.heroImageSource.includes('hero-nubi-640.webp')) {
      runtimeIssues.push(`mobile hero did not use responsive source: ${measurements.heroImageSource}`);
    }
    if (Math.abs(measurements.parentIconAspectRatio - 1) > 0.02) {
      runtimeIssues.push(`parent icon aspect ratio is distorted: ${measurements.parentIconAspectRatio}`);
    }

    await page.keyboard.press('Tab');
    const focusedClass = await page.evaluate(() => document.activeElement?.className ?? '');
    if (!String(focusedClass).includes('skipLink')) {
      runtimeIssues.push(`first keyboard focus is not the skip link: ${focusedClass}`);
    }
    await page.locator('h1').click();

    if (scenario.name === 'mobile-320') {
      const menuButton = page.getByRole('button', { name: 'Открыть меню' });

      await menuButton.click();
      const mobileNavigation = page.getByRole('navigation', { name: 'Мобильная навигация' });

      await mobileNavigation.waitFor();
      const visibleMobileLinks = await mobileNavigation.getByRole('link').all();
      const visibleMobileLinkCount = (await Promise.all(
        visibleMobileLinks.map((link) => link.isVisible()),
      )).filter(Boolean).length;

      if (visibleMobileLinkCount !== 4) {
        runtimeIssues.push(`expected 4 visible mobile links, got ${visibleMobileLinkCount}`);
      }

      await mobileNavigation
        .getByRole('link', { name: 'Приключения' })
        .click();

      if (await menuButton.getAttribute('aria-expanded') !== 'false') {
        runtimeIssues.push('mobile navigation did not close after selecting a section');
      }

      await page.getByRole('button', { name: 'Switch to English' }).click();
      await page.getByRole('heading', { name: 'Every language starts with an adventure' }).waitFor();
      const englishLanguage = await page.evaluate(() => document.documentElement.lang);
      if (englishLanguage !== 'en') {
        runtimeIssues.push(`locale toggle did not set en: ${englishLanguage}`);
      }
    }

    for (const image of await page.locator('.adventureImage img').all()) {
      await image.scrollIntoViewIfNeeded();
    }
    await page.waitForFunction(() =>
      Array.from(document.querySelectorAll('.adventureImage img')).every(
        (image) => image.complete && image.naturalWidth > 0,
      ),
    );
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    await page.locator('h1').click();

    const screenshotPath = `/private/tmp/advenubi-${scenario.name}.png`;
    await page.screenshot({ fullPage: true, path: screenshotPath });

    if (runtimeIssues.length > 0) {
      failures.push(`${scenario.name}:\n  ${runtimeIssues.join('\n  ')}`);
    } else {
      console.log(`PASS ${scenario.name} -> ${screenshotPath}`);
    }

    await context.close();
  }
} finally {
  await browser.close();
}

if (failures.length > 0) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
}
