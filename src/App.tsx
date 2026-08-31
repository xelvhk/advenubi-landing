import { useEffect, useState, type ReactNode } from 'react';
import { content } from './content';
import { localeStorageKey, toggleLocale, type Locale } from './lib/locale';
import './styles.css';

type AppProps = {
  initialLocale: Locale;
};

const assetUrl = (fileName: string) => `${import.meta.env.BASE_URL}assets/${fileName}`;

function BrandMark() {
  return (
    <a className="brand" href="#top">
      <img src={assetUrl('nubi-app-icon.png')} alt="" width="40" height="40" />
      <span>AdveNubi</span>
    </a>
  );
}

function SectionTitle({ children, id }: { children: ReactNode; id: string }) {
  return (
    <h2 className="sectionTitle" id={id}>
      {children}
    </h2>
  );
}

export function App({ initialLocale }: AppProps) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const copy = content[locale];

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = `AdveNubi | ${copy.heroTitle}`;
    window.localStorage.setItem(localeStorageKey, locale);
  }, [copy.heroTitle, locale]);

  function changeLocale() {
    setLocale((currentLocale) => toggleLocale(currentLocale));
  }

  return (
    <>
      <a className="skipLink" href="#main">
        {copy.skip}
      </a>

      <header className="siteHeader">
        <div className="shell headerInner">
          <BrandMark />
          <nav aria-label={copy.navigationLabel}>
            <a href="#how">{copy.nav.how}</a>
            <a href="#adventures">{copy.nav.adventures}</a>
            <a href="#safety">{copy.nav.safety}</a>
            <a href="#parents">{copy.nav.parents}</a>
          </nav>
          <button className="localeButton" type="button" onClick={changeLocale} aria-label={copy.languageAction}>
            {locale === 'ru' ? 'EN' : 'RU'}
          </button>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="shell heroGrid">
            <div className="heroCopy">
              <p className="eyebrow">{copy.pilot}</p>
              <h1 id="hero-title">{copy.heroTitle}</h1>
              <p className="heroBody">{copy.heroBody}</p>
              <div className="heroActions">
                <a className="button buttonPrimary" href="#how">
                  {copy.primaryAction}
                </a>
                <a className="button buttonSecondary" href="#parents">
                  {copy.secondaryAction}
                </a>
              </div>
            </div>
            <div className="heroVisual">
              <img
                src={assetUrl('hero-nubi.webp')}
                alt={copy.heroAlt}
                width="1536"
                height="1024"
                fetchPriority="high"
              />
            </div>
          </div>
        </section>

        <section className="method section" id="how" aria-labelledby="method-title">
          <div className="shell">
            <div className="sectionIntro">
              <SectionTitle id="method-title">{copy.methodTitle}</SectionTitle>
              <p>{copy.methodBody}</p>
            </div>
            <ol className="methodPath">
              {copy.method.map((item, index) => (
                <li key={item.title}>
                  <span className="methodNumber" aria-hidden="true">
                    {index + 1}
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="adventures section" id="adventures" aria-labelledby="adventures-title">
          <div className="shell">
            <div className="sectionIntro adventuresIntro">
              <SectionTitle id="adventures-title">{copy.adventuresTitle}</SectionTitle>
              <p>{copy.adventuresBody}</p>
            </div>
            <div className="adventureGrid">
              {copy.adventures.map((adventure, index) => (
                <article className={`adventure adventure${index + 1}`} key={adventure.title}>
                  <div className="adventureImage">
                    <img
                      src={assetUrl(adventure.image)}
                      alt={adventure.imageAlt}
                      width="768"
                      height="768"
                      loading="lazy"
                    />
                  </div>
                  <div className="adventureCopy">
                    <p className="adventureDetail">{adventure.detail}</p>
                    <h3>{adventure.title}</h3>
                    <p>{adventure.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="safety section" id="safety" aria-labelledby="safety-title">
          <div className="shell safetyLayout">
            <div className="safetyStatement">
              <p className="eyebrow">{copy.safetyLabel}</p>
              <SectionTitle id="safety-title">{copy.safetyTitle}</SectionTitle>
              <p>{copy.safetyBody}</p>
            </div>
            <div className="safetyFacts">
              {copy.safetyFacts.map((fact) => (
                <article key={fact.title}>
                  <h3>{fact.title}</h3>
                  <p>{fact.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="parents section" id="parents" aria-labelledby="parents-title">
          <div className="shell parentsLayout">
            <div className="parentVisual" aria-hidden="true">
              <div className="appIconFrame">
                <img
                  src={assetUrl('nubi-app-icon.png')}
                  alt=""
                  width="512"
                  height="512"
                  loading="lazy"
                />
              </div>
              <span className="orbit orbitOne" />
              <span className="orbit orbitTwo" />
            </div>
            <div className="parentCopy">
              <SectionTitle id="parents-title">{copy.parentsTitle}</SectionTitle>
              <p>{copy.parentsBody}</p>
              <ul>
                {copy.parentPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="faq section" aria-labelledby="faq-title">
          <div className="shell faqLayout">
            <SectionTitle id="faq-title">{copy.faqTitle}</SectionTitle>
            <div className="faqList">
              {copy.faq.map((item) => (
                <details key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="closing section" aria-labelledby="closing-title">
          <div className="shell closingInner">
            <div>
              <SectionTitle id="closing-title">{copy.closeTitle}</SectionTitle>
              <p>{copy.closeBody}</p>
            </div>
            <a
              className="button buttonPrimary"
              href="https://github.com/xelvhk/advenubi-landing"
              target="_blank"
              rel="noreferrer"
            >
              {copy.closeAction}
            </a>
          </div>
        </section>
      </main>

      <footer className="siteFooter">
        <div className="shell footerGrid">
          <div>
            <BrandMark />
            <p>{copy.footerSummary}</p>
          </div>
          <div className="footerLinks">
            <a href="https://github.com/xelvhk/advenubi-landing">{copy.repository}</a>
            <button className="footerLanguage" type="button" onClick={changeLocale}>
              {locale === 'ru' ? 'English' : 'Русский'}
            </button>
          </div>
          <p className="assetNotice">{copy.assetNotice}</p>
        </div>
      </footer>
    </>
  );
}
