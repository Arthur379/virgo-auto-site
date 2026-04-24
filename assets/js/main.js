document.addEventListener('DOMContentLoaded', () => {

  // --- Mobile menu toggle ---
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (hamburger && mobileMenu) {
    const toggleMenu = (open) => {
      const isOpen = typeof open === 'boolean' ? open : !mobileMenu.classList.contains('active');
      hamburger.classList.toggle('active', isOpen);
      mobileMenu.classList.toggle('active', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    };
    hamburger.addEventListener('click', () => toggleMenu());
    mobileMenu.querySelectorAll('a').forEach(link =>
      link.addEventListener('click', () => toggleMenu(false))
    );
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('active')) toggleMenu(false);
    });
  }

  // --- FAQ accordion with smooth height animation ---
  document.querySelectorAll('.faq-list details').forEach(details => {
    const summary = details.querySelector('summary');
    if (!summary) return;
    let anim = null;
    summary.addEventListener('click', (e) => {
      e.preventDefault();
      if (anim) anim.cancel();
      if (details.open) {
        anim = details.animate(
          { height: [details.offsetHeight + 'px', summary.offsetHeight + 'px'] },
          { duration: 250, easing: 'ease-out' }
        );
        anim.onfinish = () => { details.open = false; anim = null; };
      } else {
        // Close siblings in the same .faq-list
        details.closest('.faq-list')?.querySelectorAll('details[open]').forEach(sib => {
          if (sib !== details) sib.open = false;
        });
        details.open = true;
        anim = details.animate(
          { height: [summary.offsetHeight + 'px', details.offsetHeight + 'px'] },
          { duration: 250, easing: 'ease-out' }
        );
        anim.onfinish = () => { anim = null; };
      }
    });
  });

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
    });
  });

  // --- Sticky nav shadow (throttled via rAF) ---
  const nav = document.querySelector('.nav');
  if (nav) {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        nav.classList.toggle('scrolled', window.scrollY > 50);
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // --- Dropdown menus (hover on desktop, click/tap on mobile) ---
  const dropdownItems = document.querySelectorAll('.nav-item.has-dropdown');
  dropdownItems.forEach(item => {
    if (!item.querySelector('.nav-dropdown')) return;
    item.addEventListener('click', (e) => {
      if (e.target.closest('.nav-dropdown')) return;
      e.preventDefault();
      const isOpen = item.classList.contains('open');
      dropdownItems.forEach(d => d.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
  // Close dropdowns when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-item.has-dropdown'))
      dropdownItems.forEach(d => d.classList.remove('open'));
  });

});
