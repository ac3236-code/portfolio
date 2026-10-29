(() => {
  document.querySelectorAll('.project-viewer').forEach((viewer) => {
    const pages = [...viewer.querySelectorAll('.pdf-page')];
    const controls = viewer.querySelector('.viewer-controls');
    const viewport = viewer.querySelector('.viewer-viewport');
    const status = viewer.querySelector('.viewer-status');
    let page = 0;
    let zoom = 100;
    const update = () => {
      pages.forEach((figure, index) => { figure.hidden = index !== page; });
      viewport.style.setProperty('--page-zoom', `${zoom}%`);
      status.textContent = `Page ${page + 1} of ${pages.length} · ${zoom}%`;
      // Keep page buttons focusable at the ends so focus never disappears.
      controls.querySelector('[data-viewer="previous"]').setAttribute('aria-disabled', String(page === 0));
      controls.querySelector('[data-viewer="next"]').setAttribute('aria-disabled', String(page === pages.length - 1));
      controls.querySelector('[data-viewer="out"]').setAttribute('aria-disabled', String(zoom === 100));
      controls.querySelector('[data-viewer="in"]').setAttribute('aria-disabled', String(zoom === 300));
    };
    controls.addEventListener('click', (event) => {
      const button = event.target.closest('button[data-viewer]');
      if (!button || button.getAttribute('aria-disabled') === 'true') return;
      switch (button.dataset.viewer) {
        case 'previous': page = Math.max(0, page - 1); break;
        case 'next': page = Math.min(pages.length - 1, page + 1); break;
        case 'in': zoom = Math.min(300, zoom + 25); break;
        case 'out': zoom = Math.max(100, zoom - 25); break;
        case 'fit': zoom = 100; break;
      }
      update();
      viewport.scrollTo(0, 0);
    });
    update();
    controls.hidden = false;
  });

  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#main-navigation');
  const themeButton = document.querySelector('.theme-toggle');
  const mobile = window.matchMedia('(max-width: 760px)');

  if (menuButton && navigation) {
    const closeMenu = (restoreFocus = false) => {
      if (restoreFocus) menuButton.focus();
      menuButton.setAttribute('aria-expanded', 'false');
      navigation.hidden = mobile.matches;
    };

    menuButton.hidden = !mobile.matches;
    closeMenu();
    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') !== 'true';
      menuButton.setAttribute('aria-expanded', String(open));
      navigation.hidden = !open;
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && mobile.matches && !navigation.hidden) {
        closeMenu(true);
      }
    });
    navigation.addEventListener('click', (event) => {
      if (mobile.matches && event.target.closest('a')) closeMenu();
    });
    mobile.addEventListener('change', () => {
      const focusInside = navigation.contains(document.activeElement);
      const focusOnButton = document.activeElement === menuButton;
      // Move focus before hiding the element that currently contains it.
      if (mobile.matches && focusInside) menuButton.hidden = false;
      closeMenu(mobile.matches && focusInside);
      if (!mobile.matches && focusOnButton) navigation.querySelector('a').focus();
      menuButton.hidden = !mobile.matches;
    });
  }

  if (themeButton) {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
    let preference;
    try { preference = localStorage.getItem('portfolio-theme'); } catch { /* Storage may be unavailable. */ }
    const applyTheme = (dark) => {
      document.documentElement.dataset.theme = dark ? 'dark' : 'light';
      themeButton.setAttribute('aria-pressed', String(dark));
    };
    applyTheme(preference === 'dark' || (preference !== 'light' && systemTheme.matches));
    themeButton.hidden = false;
    themeButton.addEventListener('click', () => {
      const dark = document.documentElement.dataset.theme !== 'dark';
      preference = dark ? 'dark' : 'light';
      applyTheme(dark);
      try { localStorage.setItem('portfolio-theme', preference); } catch { /* Toggle still works for this page. */ }
    });
    systemTheme.addEventListener('change', () => {
      if (preference !== 'dark' && preference !== 'light') applyTheme(systemTheme.matches);
    });
  }
})();
