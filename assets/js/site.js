(() => {
  const root = document.documentElement;
  const languageButton = document.querySelector('.language-toggle');
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');

  const setLanguage = (language) => {
    root.dataset.language = language;
    root.lang = language === 'zh' ? 'zh-CN' : 'en';
    localStorage.setItem('site-language', language);
  };

  const preferred = localStorage.getItem('site-language');
  setLanguage(preferred === 'zh' ? 'zh' : 'en');

  languageButton?.addEventListener('click', () => {
    setLanguage(root.dataset.language === 'en' ? 'zh' : 'en');
  });

  menuButton?.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    nav?.classList.toggle('is-open', !expanded);
  });

  nav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton?.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
    });
  });
})();

