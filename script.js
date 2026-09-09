(function () {
  'use strict';

  var LOG = [];
  function log(event, detail) {
    LOG.push({ t: new Date().toISOString(), event: event, detail: detail || null });
    try {
      window.__PORTFOLIO_VERIFY_LOG__ = LOG.slice();
      console.info('[verify]', event, detail || '');
    } catch (e) {}
  }

  var ROLES = [
    'Frontend Developer',
    'Backend Developer',
    'UI/UX Developer',
    'Full Stack Developer',
    'AI Team Developer',
    'AI-Augmented',
    'AI-Powered Software',
    'AI-Assisted Creator',
    'AI Trainer',
    'Guitarist'
  ];

  var copy = {
    en: {
      available: 'AVAILABLE FOR SELECT PROJECTS',
      lede: 'I build expressive digital experiences where motion, interface, story, and technology meet.',
      support: 'Open to collaborations, experiments, and products that need craft plus curiosity.',
      explore: 'Explore work',
      contactMe: 'Start a conversation',
      location: 'Philippines',
      mode: 'Always experimenting',
      aboutTitle: 'Design the feeling, then engineer the surface.',
      aboutText: 'Roberto is a creative technologist focused on making digital products feel alive.'
    },
    fil: {
      available: 'AVAILABLE PARA SA PILING PROJECTS',
      lede: 'Gumagawa ako ng makabuluhang digital experiences kung saan nagtatagpo ang motion, interface, kuwento, at teknolohiya.',
      support: 'Bukas para sa collaborations, experiments, at products na kailangan ng craft at curiosity.',
      explore: 'Tingnan ang gawa',
      contactMe: 'Magsimula ng usapan',
      location: 'Pilipinas',
      mode: 'Laging nag-eeksperimento',
      aboutTitle: 'Disenyo muna ng pakiramdam, saka engineering ng surface.',
      aboutText: 'Si Roberto ay isang creative technologist na gumagawa ng digital products na parang buhay.'
    }
  };

  var state = {
    lang: 'en',
    motion: true,
    theme: 'dark',
    scale: 100,
    scaleTouched: false,
    scrolled: false
  };

  function $(sel) { return document.querySelector(sel); }
  function $$(sel) { return document.querySelectorAll(sel); }
  function isMobile() { return window.matchMedia('(max-width: 980px)').matches; }
  /* Default always 100% — 55% transform-scale was the "stick" bug */
  function initialScale() { return 100; }

  function applyLanguage() {
    var dict = copy[state.lang];
    document.documentElement.lang = state.lang === 'fil' ? 'fil' : 'en';
    $$('[data-i18n]').forEach(function (node) {
      var key = node.getAttribute('data-i18n');
      if (dict[key]) node.textContent = dict[key];
    });
    $$('.lang-option').forEach(function (btn) {
      btn.classList.toggle('is-active', btn.getAttribute('data-lang') === state.lang);
    });
    log('language', state.lang);
  }

  function applyScale(value, fromUser) {
    if (fromUser) state.scaleTouched = true;
    state.scale = Number(value);
    if (isNaN(state.scale)) state.scale = initialScale();
    state.scale = Math.max(50, Math.min(100, state.scale));
    /* Layout-aware scale via CSS zoom on html — NOT transform on .app-shell */
    document.documentElement.style.setProperty('--ui-scale', String(state.scale / 100));
    var scaleValue = $('#scaleValue');
    var scaleRange = $('#scaleRange');
    if (scaleValue) scaleValue.textContent = state.scale + '%';
    if (scaleRange) scaleRange.value = String(state.scale);
    log('scale', { value: state.scale, touched: state.scaleTouched, method: 'html-zoom' });
  }

  function applyTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    $$('.theme-option').forEach(function (btn) {
      btn.classList.toggle('is-active', btn.getAttribute('data-theme') === theme);
    });
    log('theme', theme);
  }

  function applyMotion(on) {
    state.motion = on;
    document.body.classList.toggle('motion-off', !on);
    var btn = $('#motionToggle');
    if (btn) btn.textContent = on ? 'Motion on' : 'Motion off';
    log('motion', on);
  }

  var settingsPanel = $('#settingsPanel');
  var settingsToggle = $('#settingsToggle');
  var settingsClose = $('#settingsClose');
  var settingsOpen = false;

  function openSettings() {
    if (!settingsPanel) return;
    settingsOpen = true;
    settingsPanel.classList.add('is-open');
    settingsPanel.setAttribute('aria-hidden', 'false');
    if (settingsToggle) settingsToggle.setAttribute('aria-expanded', 'true');
    log('settings', 'open');
  }
  function closeSettings() {
    if (!settingsPanel) return;
    settingsOpen = false;
    settingsPanel.classList.remove('is-open');
    settingsPanel.setAttribute('aria-hidden', 'true');
    if (settingsToggle) settingsToggle.setAttribute('aria-expanded', 'false');
    log('settings', 'close');
  }

  if (settingsToggle) {
    settingsToggle.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      if (settingsOpen) closeSettings(); else openSettings();
    });
  }
  if (settingsClose) {
    settingsClose.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      closeSettings();
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { closeSettings(); closeNavDropdown(); }
  });
  document.addEventListener('click', function (e) {
    if (!settingsOpen) return;
    if (settingsPanel && settingsPanel.contains(e.target)) return;
    if (settingsToggle && (e.target === settingsToggle || settingsToggle.contains(e.target))) return;
    closeSettings();
  });

  var scaleRange = $('#scaleRange');
  if (scaleRange) {
    scaleRange.addEventListener('input', function (e) {
      applyScale(e.target.value, true);
    });
  }

  $$('.lang-option').forEach(function (btn) {
    btn.addEventListener('click', function () {
      state.lang = btn.getAttribute('data-lang');
      applyLanguage();
    });
  });
  $$('.theme-option').forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (btn.disabled) return;
      applyTheme(btn.getAttribute('data-theme'));
    });
  });
  var motionBtn = $('#motionToggle');
  if (motionBtn) {
    motionBtn.addEventListener('click', function () {
      applyMotion(!state.motion);
    });
  }

  var nav = $('#primaryNav');
  var navToggle = $('#navToggle');
  if (navToggle && nav) {
    navToggle.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var open = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(open));
      log('nav', open ? 'open' : 'close');
    });
  }

  var navDropdownToggle = $('#navDropdownToggle');
  var navDropdownMenu = $('#navDropdownMenu');
  function closeNavDropdown() {
    if (!navDropdownMenu) return;
    navDropdownMenu.hidden = true;
    if (navDropdownToggle) navDropdownToggle.setAttribute('aria-expanded', 'false');
  }
  if (navDropdownToggle && navDropdownMenu) {
    navDropdownToggle.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var open = navDropdownMenu.hidden;
      navDropdownMenu.hidden = !open;
      navDropdownToggle.setAttribute('aria-expanded', String(open));
      log('navDropdown', open ? 'open' : 'close');
    });
  }

  $$('.nav__link').forEach(function (link) {
    link.addEventListener('click', function () {
      if (nav) nav.classList.remove('is-open');
      if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
      closeNavDropdown();
      closeSettings();
    });
  });

  var header = $('#siteHeader');
  var brandName = $('#brandName');
  var brandSub = $('#brandSub');
  var SCROLL_THRESHOLD = 80;

  function setScrolled(on) {
    if (state.scrolled === on) return;
    state.scrolled = on;
    document.body.classList.toggle('is-scrolled', on);
    if (header) header.classList.toggle('topbar--scrolled', on);
    if (brandName) brandName.textContent = on ? 'Roberto' : 'Roberto Morales III';
    if (brandSub) brandSub.style.display = on ? 'none' : '';
    log('header', on ? 'scrolled' : 'top');
  }

  function onScroll() {
    setScrolled(window.scrollY > SCROLL_THRESHOLD);
    updateActiveNav();
    updateParallax();
  }

  var sections = ['about', 'services', 'projects', 'education', 'contact'];
  var navLinks = $$('.nav__link');
  function updateActiveNav() {
    var scrollY = window.scrollY + 120;
    var current = '';
    sections.forEach(function (id) {
      var el = document.getElementById(id);
      if (el && el.offsetTop <= scrollY) current = id;
    });
    navLinks.forEach(function (link) {
      link.classList.toggle('is-active', link.getAttribute('data-nav') === current);
    });
  }

  var typedEl = $('#typedRole');
  var roleIndex = 0;
  var charIndex = 0;
  var deleting = false;
  var typeTimer = null;

  function typeTick() {
    if (!typedEl || !state.motion) {
      if (typedEl) typedEl.textContent = ROLES[roleIndex % ROLES.length];
      return;
    }
    var current = ROLES[roleIndex % ROLES.length];
    if (!deleting) {
      charIndex += 1;
      typedEl.textContent = current.slice(0, charIndex);
      if (charIndex >= current.length) {
        deleting = true;
        typeTimer = setTimeout(typeTick, 1600);
        return;
      }
      typeTimer = setTimeout(typeTick, 55 + Math.random() * 40);
    } else {
      charIndex -= 1;
      typedEl.textContent = current.slice(0, Math.max(0, charIndex));
      if (charIndex <= 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % ROLES.length;
        typeTimer = setTimeout(typeTick, 280);
        return;
      }
      typeTimer = setTimeout(typeTick, 28);
    }
  }

  function startTyping() {
    if (typeTimer) clearTimeout(typeTimer);
    roleIndex = 0; charIndex = 0; deleting = false;
    typeTick();
    log('typing', 'start');
  }

  var sceneVideo = $('.scene__video');
  var parallaxRaf = null;
  function updateParallax() {
    parallaxRaf = null;
    if (!sceneVideo || !state.motion) return;
    var shift = Math.min(window.scrollY * 0.15, 220);
    sceneVideo.style.transform = 'translate3d(0,' + shift + 'px,0)';
  }
  window.addEventListener('scroll', function () {
    if (parallaxRaf) return;
    parallaxRaf = requestAnimationFrame(onScroll);
  }, { passive: true });

  var tilt = $('[data-tilt]');
  if (tilt && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    tilt.addEventListener('pointermove', function (event) {
      if (!state.motion) return;
      var rect = tilt.getBoundingClientRect();
      var x = (event.clientX - rect.left) / rect.width - 0.5;
      var y = (event.clientY - rect.top) / rect.height - 0.5;
      var card = tilt.querySelector('.hero-card');
      if (card) card.style.transform = 'perspective(1200px) rotateX(' + (y * -4) + 'deg) rotateY(' + (x * 9 - 6) + 'deg)';
    });
    tilt.addEventListener('pointerleave', function () {
      var card = tilt.querySelector('.hero-card');
      if (card) card.style.transform = '';
    });
  }

  applyLanguage();
  applyScale(initialScale(), false);
  applyTheme('dark');
  applyMotion(true);
  startTyping();
  onScroll();
  log('boot', { mobile: isMobile(), scale: state.scale, scaleMethod: 'html-zoom' });

  window.addEventListener('resize', function () {
    if (!state.scaleTouched) applyScale(initialScale(), false);
  });

  window.__PORTFOLIO_VERIFY__ = {
    getLog: function () { return LOG.slice(); },
    logLength: function () { return LOG.length; },
    assertLogGrew: function (before) {
      var ok = LOG.length > before;
      log('assertLogGrew', { before: before, after: LOG.length, pass: ok });
      return ok;
    }
  };
})();
