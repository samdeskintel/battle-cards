(function() {
  const links = [
    { href: 'index.html',           label: 'Home' },
    { href: 'discovery.html',       label: 'Discovery' },
    { href: 'use-cases.html',       label: 'Use Cases' },
    { href: 'library.html',         label: 'Library' },
    { href: 'stories.html',         label: 'Stories' },
    { href: 'competitor-intel.html',label: 'Competitor PR' },
  ];

  const current = location.pathname.split('/').pop() || 'index.html';

  const nav = document.createElement('nav');
  nav.className = 'topnav';
  nav.innerHTML =
    `<span class="nav-logo">⬡ samdesk</span>` +
    links.map(l =>
      `<a href="${l.href}"${current === l.href ? ' class="active"' : ''}>${l.label}</a>`
    ).join('');

  document.currentScript.insertAdjacentElement('beforebegin', nav);
})();
