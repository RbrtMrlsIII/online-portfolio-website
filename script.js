const copy = {
  en: {
    available: 'AVAILABLE FOR SELECT PROJECTS',
    kicker: 'CREATIVE TECHNOLOGIST · DIGITAL EXPERIENCE BUILDER',
    lede: 'I build expressive digital experiences where motion, interface, story, and technology meet.',
    explore: 'Explore work',
    contactMe: 'Start a conversation',
    location: 'Philippines',
    focus: 'Web · AI · 3D',
    mode: 'Always experimenting',
    glass: 'Glassmorphism',
    aboutKicker: 'ABOUT ME',
    aboutTitle: 'Design the feeling, then engineer the surface.',
    aboutText: 'Roberto is a creative technologist focused on making digital products feel alive. The work sits between product thinking and visual experimentation.',
    aboutLead: 'I care about interfaces that feel intentional — where motion, hierarchy, and technology serve the story.',
    aboutBody: 'From product UI systems to experimental WebGL and AI-assisted workflows, I build experiences that remain usable on a phone while still feeling expressive on a large screen.',
    servicesKicker: 'SERVICES',
    servicesTitle: 'What I can help with.',
    servicesText: 'Selected capabilities for product teams, startups, and experimental projects.',
    svc1Title: 'Product UI & Design Systems',
    svc1Text: 'Clean, scalable interface systems with strong hierarchy, responsive behavior, and thoughtful interaction details.',
    svc2Title: 'Interactive & Motion Experiences',
    svc2Text: 'Motion systems, microinteractions, and cinematic UI that feel intentional rather than decorative.',
    svc3Title: 'WebGL & Spatial Interfaces',
    svc3Text: 'Lightweight 3D / WebGL layers used as progressive enhancement on top of solid DOM experiences.',
    svc4Title: 'AI-Assisted Prototyping',
    svc4Text: 'Fast exploration of ideas using modern tooling while keeping craft and product thinking central.',
    projectsKicker: 'PROJECTS',
    projectsTitle: 'Selected work & experiments.',
    projectsText: 'A small set of high-signal projects. More case studies can be added here later.',
    eduKicker: 'EDUCATION',
    eduTitle: 'Learning path.',
    eduText: 'Formal studies and continuous self-directed learning. Details can be expanded later.',
    edu1Title: 'Education item placeholder',
    edu1Text: 'Institution / program details will go here.',
    edu2Title: 'Continuous learning',
    edu2Text: 'Self-directed studies in interface design, creative coding, and emerging tools.',
    contactKicker: 'CONTACT',
    contactTitle: "Let's build the next screen.",
    contactText: 'For collaborations, experiments, or a serious interface that needs more personality.'
  },
  fil: {
    available: 'AVAILABLE PARA SA PILING PROJECTS',
    kicker: 'CREATIVE TECHNOLOGIST · TAGABUO NG DIGITAL EXPERIENCES',
    lede: 'Gumagawa ako ng makabuluhang digital experiences kung saan nagtatagpo ang motion, interface, kuwento, at teknolohiya.',
    explore: 'Tingnan ang gawa',
    contactMe: 'Magsimula ng usapan',
    location: 'Pilipinas',
    focus: 'Web · AI · 3D',
    mode: 'Laging nag-eeksperimento',
    glass: 'Glassmorphism',
    aboutKicker: 'TUNGKOL SA AKIN',
    aboutTitle: 'Disenyo muna ng pakiramdam, saka engineering ng surface.',
    aboutText: 'Si Roberto ay isang creative technologist na gumagawa ng digital products na parang buhay.',
    aboutLead: 'Mahalaga sa akin ang interfaces na intentional — kung saan nagsisilbi ang motion, hierarchy, at teknolohiya sa kuwento.',
    aboutBody: 'Mula product UI systems hanggang experimental WebGL at AI-assisted workflows, gumagawa ako ng experiences na usable sa phone at expressive pa rin sa malaking screen.',
    servicesKicker: 'SERBISYO',
    servicesTitle: 'Ano ang maitutulong ko.',
    servicesText: 'Mga piling kakayahan para sa product teams, startups, at experimental projects.',
    svc1Title: 'Product UI & Design Systems',
    svc1Text: 'Malinis at scalable na interface systems na may malakas na hierarchy at thoughtful interaction details.',
    svc2Title: 'Interactive & Motion Experiences',
    svc2Text: 'Motion systems at cinematic UI na intentional, hindi dekorasyon lamang.',
    svc3Title: 'WebGL & Spatial Interfaces',
    svc3Text: 'Magaan na 3D / WebGL layers bilang progressive enhancement sa solid DOM experiences.',
    svc4Title: 'AI-Assisted Prototyping',
    svc4Text: 'Mabilis na exploration ng ideas gamit ang modern tooling habang nananatiling sentral ang craft.',
    projectsKicker: 'MGA PROYEKTO',
    projectsTitle: 'Mga piling gawa at eksperimento.',
    projectsText: 'Isang maliit na set ng high-signal projects.',
    eduKicker: 'EDUKASYON',
    eduTitle: 'Landas ng pag-aaral.',
    eduText: 'Pormal na pag-aaral at tuloy-tuloy na self-directed learning.',
    edu1Title: 'Education item placeholder',
    edu1Text: 'Ilalagay dito ang detalye ng institusyon / programa.',
    edu2Title: 'Tuloy-tuloy na pag-aaral',
    edu2Text: 'Self-directed studies sa interface design, creative coding, at emerging tools.',
    contactKicker: 'KONTAK',
    contactTitle: 'Buuin natin ang susunod na screen.',
    contactText: 'Para sa collaborations, experiments, o interface na nangangailangan ng mas personalidad.'
  }
};

const state = { lang: 'en', motion: true, theme: 'dark', scale: 100 };
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function applyLanguage() {
  const dict = copy[state.lang];
  document.documentElement.lang = state.lang === 'fil' ? 'fil' : 'en';
  $$('[data-i18n]').forEach((node) => {
    const key = node.dataset.i18n;
    if (dict[key]) node.textContent = dict[key];
  });
  $$('.lang-option').forEach((btn) => {
    btn.classList.toggle('is-active', btn.dataset.lang === state.lang);
  });
}

function applyScale(value) {
  state.scale = Number(value);
  const ratio = state.scale / 100;
  document.documentElement.style.setProperty('--ui-scale', String(ratio));
  const scaleValue = $('#scaleValue');
  const scaleRange = $('#scaleRange');
  if (scaleValue) scaleValue.textContent = state.scale + '%';
  if (scaleRange) {
    scaleRange.value = String(state.scale);
    scaleRange.setAttribute('aria-valuenow', String(state.scale));
  }
}

function applyTheme(theme) {
  state.theme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  $$('.theme-option').forEach((btn) => {
    btn.classList.toggle('is-active', btn.dataset.theme === theme);
  });
}

function applyMotion(on) {
  state.motion = on;
  document.body.classList.toggle('motion-off', !on);
  const btn = $('#motionToggle');
  if (btn) {
    btn.setAttribute('aria-pressed', String(!on));
    btn.textContent = on ? 'Motion on' : 'Motion off';
  }
}

/* Settings — class-based open (reliable) */
const settingsPanel = $('#settingsPanel');
const settingsToggle = $('#settingsToggle');
const settingsClose = $('#settingsClose');

function openSettings() {
  if (!settingsPanel) return;
  settingsPanel.classList.add('is-open');
  settingsPanel.setAttribute('aria-hidden', 'false');
  if (settingsToggle) settingsToggle.setAttribute('aria-expanded', 'true');
}

function closeSettings() {
  if (!settingsPanel) return;
  settingsPanel.classList.remove('is-open');
  settingsPanel.setAttribute('aria-hidden', 'true');
  if (settingsToggle) settingsToggle.setAttribute('aria-expanded', 'false');
}

if (settingsToggle) {
  settingsToggle.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (settingsPanel && settingsPanel.classList.contains('is-open')) closeSettings();
    else openSettings();
  });
}

if (settingsClose) {
  settingsClose.addEventListener('click', function (e) {
    e.preventDefault();
    closeSettings();
  });
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeSettings();
});

document.addEventListener('click', function (e) {
  if (!settingsPanel || !settingsPanel.classList.contains('is-open')) return;
  if (settingsPanel.contains(e.target)) return;
  if (settingsToggle && settingsToggle.contains(e.target)) return;
  closeSettings();
});

const scaleRange = $('#scaleRange');
if (scaleRange) {
  scaleRange.addEventListener('input', function (e) {
    applyScale(e.target.value);
  });
}

$$('.lang-option').forEach(function (btn) {
  btn.addEventListener('click', function () {
    state.lang = btn.dataset.lang;
    applyLanguage();
  });
});

$$('.theme-option').forEach(function (btn) {
  btn.addEventListener('click', function () {
    if (btn.disabled) return;
    applyTheme(btn.dataset.theme);
  });
});

var motionBtn = $('#motionToggle');
if (motionBtn) {
  motionBtn.addEventListener('click', function () {
    applyMotion(!state.motion);
  });
}

/* Mobile nav */
var nav = $('#primaryNav');
var navToggle = $('#navToggle');

if (navToggle && nav) {
  navToggle.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    var open = nav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
}

$$('.nav__link').forEach(function (link) {
  link.addEventListener('click', function () {
    if (nav) nav.classList.remove('is-open');
    if (navToggle) {
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Open menu');
    }
    closeSettings();
  });
});

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

window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();

var tilt = $('[data-tilt]');
if (tilt && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  tilt.addEventListener('pointermove', function (event) {
    if (!state.motion) return;
    var rect = tilt.getBoundingClientRect();
    var x = (event.clientX - rect.left) / rect.width - 0.5;
    var y = (event.clientY - rect.top) / rect.height - 0.5;
    var card = tilt.querySelector('.hero-card');
    if (card) {
      card.style.transform = 'perspective(1200px) rotateX(' + (y * -4) + 'deg) rotateY(' + (x * 9 - 6) + 'deg) translateZ(0)';
    }
  });
  tilt.addEventListener('pointerleave', function () {
    var card = tilt.querySelector('.hero-card');
    if (card) card.style.transform = '';
  });
}

applyLanguage();
applyScale(100);
applyTheme('dark');
applyMotion(true);
