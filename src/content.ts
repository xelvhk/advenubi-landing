import type { Locale } from './lib/locale';

type Adventure = {
  title: string;
  description: string;
  detail: string;
  image: string;
  imageAlt: string;
};

type Copy = {
  skip: string;
  navigationLabel: string;
  nav: {
    how: string;
    adventures: string;
    safety: string;
    parents: string;
  };
  languageAction: string;
  menuLabel: string;
  menuOpenAction: string;
  menuCloseAction: string;
  mobileNavigationLabel: string;
  pilot: string;
  heroTitle: string;
  heroBody: string;
  primaryAction: string;
  secondaryAction: string;
  heroAlt: string;
  methodTitle: string;
  methodBody: string;
  method: Array<{ title: string; body: string }>;
  adventuresTitle: string;
  adventuresBody: string;
  adventures: Adventure[];
  safetyLabel: string;
  safetyTitle: string;
  safetyBody: string;
  safetyFacts: Array<{ title: string; body: string }>;
  parentsTitle: string;
  parentsBody: string;
  parentPoints: string[];
  parentImageAlt: string;
  faqTitle: string;
  faq: Array<{ question: string; answer: string }>;
  closeTitle: string;
  closeBody: string;
  closeAction: string;
  footerSummary: string;
  repository: string;
  assetNotice: string;
};

export const content: Record<Locale, Copy> = {
  ru: {
    skip: 'Перейти к содержанию',
    navigationLabel: 'Основная навигация',
    nav: {
      how: 'Как это работает',
      adventures: 'Приключения',
      safety: 'Безопасность',
      parents: 'Родителям',
    },
    languageAction: 'Switch to English',
    menuLabel: 'Меню',
    menuOpenAction: 'Открыть меню',
    menuCloseAction: 'Закрыть меню',
    mobileNavigationLabel: 'Мобильная навигация',
    pilot: 'Android MVP для закрытого пилота',
    heroTitle: 'Языки начинаются с приключения',
    heroBody: 'Нуби помогает детям 4-6 лет слушать, выбирать картинки и говорить.',
    primaryAction: 'Как это работает',
    secondaryAction: 'Для родителей',
    heroAlt: 'Нуби приветствует ребёнка на дороге к игровым заданиям со словами',
    methodTitle: 'Сначала слышим. Потом понимаем. Затем говорим.',
    methodBody: 'Короткое занятие превращает новое слово в понятное действие.',
    method: [
      {
        title: 'Слушаем',
        body: 'Нуби произносит слово, а ребёнок знакомится с его звучанием.',
      },
      {
        title: 'Выбираем',
        body: 'Большие картинки помогают понять слово без необходимости читать.',
      },
      {
        title: 'Повторяем',
        body: 'Можно ответить голосом или продолжить занятие только с картинками.',
      },
    ],
    adventuresTitle: 'Три приключения уже можно пройти',
    adventuresBody: 'Тридцать английских слов про тело, семью и знакомые вещи дома.',
    adventures: [
      {
        title: 'Я и моё тело',
        description: 'Глаза, руки и другие части тела.',
        detail: '10 слов',
        image: 'adventure-body.webp',
        imageAlt: 'Лицо ребёнка для игрового задания про части тела',
      },
      {
        title: 'Моя семья',
        description: 'Близкие люди и простые семейные слова.',
        detail: '10 слов',
        image: 'adventure-family.webp',
        imageAlt: 'Семья и Нуби вместе в игровом мире AdveNubi',
      },
      {
        title: 'Вещи дома',
        description: 'Кровать, книга, чашка и знакомые предметы.',
        detail: '10 слов',
        image: 'adventure-home.webp',
        imageAlt: 'Красная книга со звездой из приключения про вещи дома',
      },
    ],
    safetyLabel: 'Приватность по умолчанию',
    safetyTitle: 'Ребёнок учится. Данные остаются под контролем взрослого.',
    safetyBody: 'В текущем MVP нет аккаунтов, рекламы, аналитики, платежей и облачных профилей детей.',
    safetyFacts: [
      {
        title: 'Без записи голоса',
        body: 'AdveNubi не сохраняет аудиозаписи и не отправляет их на собственный сервер.',
      },
      {
        title: 'Без микрофона тоже можно',
        body: 'Каждое занятие доступно через выбор картинок.',
      },
      {
        title: 'Прогресс на устройстве',
        body: 'Настройки, этапы и награды хранятся локально.',
      },
      {
        title: 'Взрослый управляет',
        body: 'Настройки защищены простым заданием для взрослого.',
      },
    ],
    parentsTitle: 'Настройте занятие под ребёнка',
    parentsBody: 'Взрослый выбирает язык, длину занятия, тему и способ ответа.',
    parentPoints: [
      'Пять или десять карточек за занятие',
      'Голосовой ответ или выбор картинки',
      'Русский и английский интерфейс',
      'Английский, французский, немецкий, испанский и итальянский для практики',
    ],
    parentImageAlt: 'Иконка приложения AdveNubi с портретом Нуби',
    faqTitle: 'Коротко о главном',
    faq: [
      {
        question: 'Для какого возраста AdveNubi?',
        answer: 'Текущий сценарий рассчитан на детей 4-6 лет и совместное использование со взрослым.',
      },
      {
        question: 'Нужно ли ребёнку уметь читать?',
        answer: 'Нет. Задания построены вокруг звука, крупных картинок и понятных действий.',
      },
      {
        question: 'Где скачать приложение?',
        answer: 'Сейчас Android MVP проходит закрытый пилот. Публичной страницы в магазине приложений пока нет.',
      },
      {
        question: 'Что происходит с голосом ребёнка?',
        answer: 'AdveNubi не хранит запись. Распознавание выполняет системный сервис Android согласно настройкам устройства.',
      },
    ],
    closeTitle: 'Познакомьтесь с Нуби до публичного запуска',
    closeBody: 'Посмотрите исходный код, дизайн-систему и проверки публичного лендинга.',
    closeAction: 'Посмотреть код',
    footerSummary: 'Игровая практика иностранных слов для детей 4-6 лет.',
    repository: 'Репозиторий',
    assetNotice: 'Код открыт по MIT. Права на бренд и иллюстрации сохраняются за владельцем.',
  },
  en: {
    skip: 'Skip to content',
    navigationLabel: 'Primary navigation',
    nav: {
      how: 'How it works',
      adventures: 'Adventures',
      safety: 'Safety',
      parents: 'For parents',
    },
    languageAction: 'Переключить на русский',
    menuLabel: 'Menu',
    menuOpenAction: 'Open menu',
    menuCloseAction: 'Close menu',
    mobileNavigationLabel: 'Mobile navigation',
    pilot: 'Android MVP in a private pilot',
    heroTitle: 'Every language starts with an adventure',
    heroBody: 'Nubi helps children aged 4-6 listen, choose pictures, and speak.',
    primaryAction: 'How it works',
    secondaryAction: 'For parents',
    heroAlt: 'Nubi welcomes a child to a path of playful picture and word activities',
    methodTitle: 'Hear it. Understand it. Say it.',
    methodBody: 'A short session turns each new word into a clear action.',
    method: [
      {
        title: 'Listen',
        body: 'Nubi says a word and lets the child become familiar with its sound.',
      },
      {
        title: 'Choose',
        body: 'Large pictures make meaning clear without requiring the child to read.',
      },
      {
        title: 'Repeat',
        body: 'Children can answer aloud or complete every session with pictures only.',
      },
    ],
    adventuresTitle: 'Three adventures are ready to play',
    adventuresBody: 'Thirty English words about the body, family, and familiar things at home.',
    adventures: [
      {
        title: 'Me and My Body',
        description: 'Eyes, hands, and other body parts.',
        detail: '10 words',
        image: 'adventure-body.webp',
        imageAlt: 'A child face used in a playful activity about body parts',
      },
      {
        title: 'My Family',
        description: 'Close relatives and simple family words.',
        detail: '10 words',
        image: 'adventure-family.webp',
        imageAlt: 'A family and Nubi together in the AdveNubi world',
      },
      {
        title: 'Things at Home',
        description: 'A bed, book, cup, and familiar objects.',
        detail: '10 words',
        image: 'adventure-home.webp',
        imageAlt: 'A red book with a star from the things-at-home adventure',
      },
    ],
    safetyLabel: 'Private by default',
    safetyTitle: 'Children learn. Their data stays under adult control.',
    safetyBody: 'The current MVP has no accounts, ads, analytics, payments, or cloud child profiles.',
    safetyFacts: [
      {
        title: 'No voice recordings',
        body: 'AdveNubi does not store recordings or upload them to its own server.',
      },
      {
        title: 'Works without a microphone',
        body: 'Every session can be completed by choosing pictures.',
      },
      {
        title: 'Progress stays on device',
        body: 'Settings, stages, and rewards are stored locally.',
      },
      {
        title: 'Adults stay in control',
        body: 'Settings are protected by a simple adult challenge.',
      },
    ],
    parentsTitle: 'Shape each session around your child',
    parentsBody: 'An adult chooses the language, session length, topic, and answer mode.',
    parentPoints: [
      'Five or ten cards per session',
      'Voice response or picture choice',
      'Russian and English interface',
      'English, French, German, Spanish, and Italian practice',
    ],
    parentImageAlt: 'AdveNubi app icon featuring Nubi',
    faqTitle: 'The essentials',
    faq: [
      {
        question: 'What age is AdveNubi for?',
        answer: 'The current experience is designed for children aged 4-6 with an adult nearby.',
      },
      {
        question: 'Does a child need to read?',
        answer: 'No. Activities use sound, large pictures, and clear actions.',
      },
      {
        question: 'Where can I download the app?',
        answer: 'The Android MVP is currently in a private pilot. There is no public app-store listing yet.',
      },
      {
        question: "What happens to a child's voice?",
        answer: 'AdveNubi does not store recordings. Recognition uses the Android system service under the device provider settings.',
      },
    ],
    closeTitle: 'Meet Nubi before the public launch',
    closeBody: 'Explore the public landing source, design system, and quality checks.',
    closeAction: 'View the code',
    footerSummary: 'Playful foreign-word practice for children aged 4-6.',
    repository: 'Repository',
    assetNotice: 'Code is MIT licensed. Brand and illustration rights remain with their owner.',
  },
};
