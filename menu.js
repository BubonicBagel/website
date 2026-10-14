(function () {
  // edit your links here, and only here
  const links = [
    { href: '/',           label: 'Home' },
    { href: '/mywife/',    label: 'My Wife' },
    { href: '/minecraft/', label: 'Minecraft Server' },
    { href: '/clips/',     label: 'Epic Clips' },
    { href: '/games/',     label: 'Games' }
  ];

  // hamburger button
  const btn = document.createElement('button');
  btn.className = 'menu-btn';
  btn.type = 'button';
  btn.setAttribute('aria-label', 'Open menu');
  btn.setAttribute('aria-expanded', 'false');
  btn.setAttribute('aria-controls', 'side-nav');
  btn.innerHTML = '<span></span><span></span><span></span>';

  // slide-out panel
  const nav = document.createElement('nav');
  nav.className = 'side-nav';
  nav.id = 'side-nav';
  nav.setAttribute('aria-label', 'Main');

  let here = location.pathname.replace(/index\.html$/, '');
  if (!here.endsWith('/')) here += '/';

  links.forEach((l) => {
    const a = document.createElement('a');
    a.href = l.href;
    a.textContent = l.label;
    if (l.href === here) a.setAttribute('aria-current', 'page');
    nav.appendChild(a);
  });

  // dark overlay behind the panel
  const overlay = document.createElement('div');
  overlay.className = 'menu-overlay';

  function setOpen(open) {
    nav.classList.toggle('open', open);
    overlay.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    if (open) {
      const first = nav.querySelector('a');
      if (first) first.focus();
    } else {
      btn.focus();
    }
  }

  btn.addEventListener('click', () => setOpen(!nav.classList.contains('open')));
  overlay.addEventListener('click', () => setOpen(false));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('open')) setOpen(false);
  });

  document.body.append(overlay, nav, btn);
})();