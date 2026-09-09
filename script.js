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
    glass: 'Glass + Skeuomorph',
    selectedWork: 'SELECTED WORK',
    workTitle: 'Small number, high signal.',
    workText: 'A portfolio system designed to expand from a single visual identity into a living collection of experiments, products, and interfaces.',
    aboutTitle: 'Design the feeling, then engineer the surface.',
    aboutLead: 'Roberto is a creative technologist focused on making digital products feel alive.',
    aboutText: 'The work sits between product thinking and visual experimentation: elegant interfaces, expressive motion, immersive 3D, and practical systems that still behave beautifully on a phone.',
    labTitle: 'The background is not decoration.',
    labText: 'This portfolio is prepared for a cinematic video layer. The supplied portrait is the hero asset today; the background engine is ready for a live video texture when one is dropped into the project.',
    readyNote: 'System ready for the next visual asset.',
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
    glass: 'Glass + Skeuomorph',
    selectedWork: 'PINILING GAWA',
    workTitle: 'Kaunti pero matindi ang signal.',
    workText: 'Isang portfolio system na puwedeng lumawak mula sa iisang visual identity tungo sa koleksiyon ng experiments, produkto, at interfaces.',
    aboutTitle: 'Disenyo muna ng pakiramdam, saka engineering ng surface.',
    aboutLead: 'Si Roberto ay isang creative technologist na gumagawa ng digital products na parang buhay.',
    aboutText: 'Nasa pagitan ng product thinking at visual experimentation ang trabaho: eleganteng interfaces, expressive motion, immersive 3D, at praktikal na systems na maayos pa rin sa mobile.',
    labTitle: 'Hindi dekorasyon ang background.',
    labText: 'Handa ang portfolio para sa cinematic video layer. Ang portrait na ibinigay ay hero asset sa ngayon; nakahanda ang background engine para sa live video texture kapag may video nang ilalagay sa project.',
    readyNote: 'Handa ang system para sa susunod na visual asset.',
    contactTitle: 'Buuin natin ang susunod na screen.',
    contactText: 'Para sa collaborations, experiments, o interface na nangangailangan ng mas personalidad.'
  }
};

const state = { lang: 'en', motion: true };
const $ = (sel) => document.querySelector(sel);

function applyLanguage() {
  const dict = copy[state.lang];
  document.documentElement.lang = state.lang === 'fil' ? 'fil' : 'en';
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.dataset.i18n;
    if (dict[key]) node.textContent = dict[key];
  });
  $('#langLabel').textContent = state.lang === 'en' ? 'EN' : 'FIL';
  $('#langAlt').textContent = state.lang === 'en' ? 'FIL' : 'EN';
}

$('#langSwitch').addEventListener('click', () => {
  state.lang = state.lang === 'en' ? 'fil' : 'en';
  applyLanguage();
});

$('#motionToggle').addEventListener('click', () => {
  state.motion = !state.motion;
  document.body.classList.toggle('motion-off', !state.motion);
  $('#motionToggle').setAttribute('aria-pressed', String(!state.motion));
});

const tilt = $('[data-tilt]');
if (tilt && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  tilt.addEventListener('pointermove', (event) => {
    if (!state.motion) return;
    const rect = tilt.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    tilt.querySelector('.hero-card').style.transform = `perspective(1200px) rotateX(${y * -4}deg) rotateY(${x * 9 - 6}deg) translateZ(0)`;
  });
  tilt.addEventListener('pointerleave', () => {
    tilt.querySelector('.hero-card').style.transform = '';
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.section .reveal').forEach((el) => {
  el.style.animationPlayState = 'paused';
  observer.observe(el);
});
document.addEventListener('animationstart', () => {
  document.querySelectorAll('.is-visible').forEach((el) => el.style.animationPlayState = 'running');
});

// The background architecture is intentionally asset-light. A future MP4 can be added
// without changing the page composition: place it at assets/background.mp4 and swap
// the scene layer to a <video> texture in a later iteration.
applyLanguage();
