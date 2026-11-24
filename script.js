/* Aishwarya K G — pixel portfolio
   One data set (below) feeds the skills inventory, the project levels
   and the chatbot, so they can never disagree with each other. */
(() => {
  'use strict';

  // ---------------------------------------------------------------
  // DATA (edit here to update the site and the chatbot together)
  // ---------------------------------------------------------------

  const LINKS = {
    email: 'mailto:aishwaryakg04xb@gmail.com',
    github: 'https://github.com/aishwaryakg2415',
    linkedin: 'https://www.linkedin.com/in/aishwarya-k-g/',
    leetcode: 'https://leetcode.com/u/aishwarya_kg_/',
  };

  // The stack map: BUILD / REASON / SHIP / EVOLVE branches.
  const STACK = [
    {
      tier: 'BUILD', name: 'FRONTEND', accent: '#8fbcff',
      blurb: 'Interfaces that load fast and stay honest about what they know.',
      groups: [{ items: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'] }],
    },
    {
      tier: 'BUILD', name: 'BACKEND', accent: '#8fbcff',
      blurb: 'APIs and services with tests around every endpoint.',
      groups: [
        { label: 'SERVICES', items: ['Python', 'Java', 'Node.js', 'Express', 'FastAPI', 'REST APIs'] },
        { label: 'DATA STORES', items: ['SQL', 'SQLite', 'Room (SQL)'] },
      ],
    },
    {
      tier: 'REASON', name: 'AI / ML', accent: '#e08aa8',
      blurb: 'Models and agents that explain their answers.',
      groups: [
        { label: 'MODELS', items: ['scikit-learn', 'TensorFlow/Keras', 'LightGBM', 'pandas', 'NumPy', 'SHAP'] },
        { label: 'AGENTS & LLMS', items: ['LLM APIs', 'RAG', 'IBM Cloud (watsonx.ai)'] },
      ],
    },
    {
      tier: 'SHIP', name: 'CLOUD & DELIVERY', accent: '#7fd6a0',
      blurb: 'Containers, deploys and scripts that get it running anywhere.',
      groups: [{ items: ['Docker', 'Render', 'Vercel', 'Linux/Unix shell', 'Bash', 'Git & GitHub', 'Postman/curl'] }],
    },
    {
      tier: 'EVOLVE', name: 'MOBILE', accent: '#f8b83a',
      blurb: 'On-device apps that keep working with no network.',
      groups: [{ items: ['Kotlin', 'Android (Room)', 'Gradle', 'Android Debug Bridge (adb)'] }],
    },
    {
      tier: 'EVOLVE', name: 'CS FUNDAMENTALS', accent: '#f8b83a',
      blurb: 'The foundations under everything else.',
      groups: [{ items: ['C', 'Data structures', 'Algorithms & complexity', 'OOP design', 'Operating systems', 'DBMS', 'Computer networks (DNS, HTTP)'] }],
    },
  ];
  // Flat view used by the readout and the chatbot.
  const SKILLS = STACK.map((b) => ({ cat: b.name, items: b.groups.flatMap((g) => g.items) }));

  // Certifications (LinkedIn + resume), newest first. `url` is the public credential page.
  const CERTS = [
    { name: 'Internship in Emerging Technologies: Agentic AI, Cyber Security & Quantum Computing', by: 'Edunet Foundation · AICTE · IBM SkillsBuild', when: 'NOV 2026' },
    { name: 'AWS Academy Graduate: Cloud Foundations', by: 'Amazon Web Services', when: 'NOV 2026', url: 'https://www.credly.com/badges/44337d96-bf91-425e-ac54-a00f38cf587d' },
    { name: 'Cloud Computing Fundamentals', by: 'IBM', when: 'SEP 2026', url: 'https://www.credly.com/badges/07c2e5ae-76af-46b0-ac53-832d7402baa3' },
    { name: 'Supervised Machine Learning: Regression and Classification', by: 'DeepLearning.AI', when: 'SEP 2026', url: 'https://www.coursera.org/account/accomplishments/records/O9N8WAIRS34E' },
    { name: 'Certificate of Participation: Bug Bash', by: 'Unstop', when: 'SEP 2026', url: 'https://unstop.com/certificate-preview/3008dbdf-d4f6-4f33-9829-978e92415092' },
    { name: 'Certificate of Excellence in Machine Learning', by: 'Humans Care Foundation', when: 'AUG 2025' },
    { name: 'Problem Solving', by: 'HackerRank' },
    { name: 'Python', by: 'HackerRank' },
    { name: 'Introduction to Symbolic Math', by: 'MATLAB' },
  ];

  // Public profiles used by the live-stats cards.
  const GITHUB_USER = 'aishwaryakg2415';
  const LEETCODE_USER = 'aishwarya_kg_';

  // Extra words the chatbot recognises for each skill.
  const SKILL_ALIASES = {
    'Python': ['python'], 'Java': ['java'], 'JavaScript': ['javascript', 'js'], 'TypeScript': ['typescript', 'ts'],
    'Kotlin': ['kotlin'], 'C': ['c language', 'c programming'], 'SQL': ['sql'], 'Bash': ['bash', 'shell script', 'shell scripting'],
    'Linux/Unix shell': ['linux', 'unix'], 'Git & GitHub': ['git'], 'Docker': ['docker', 'containers'],
    'REST APIs': ['rest', 'rest api', 'rest apis'], 'Postman/curl': ['postman', 'curl'], 'Gradle': ['gradle'],
    'Android Debug Bridge (adb)': ['adb'], 'Node.js': ['node', 'nodejs', 'node.js'], 'Express': ['express', 'expressjs'],
    'FastAPI': ['fastapi'], 'React': ['react', 'reactjs'], 'Next.js': ['nextjs', 'next.js', 'next js'],
    'Android (Room)': ['android'], 'Tailwind CSS': ['tailwind'], 'SQLite': ['sqlite'], 'Room (SQL)': ['room db', 'room database'],
    'IBM Cloud (watsonx.ai)': ['watsonx', 'ibm cloud'], 'Render': ['render'], 'Vercel': ['vercel'],
    'scikit-learn': ['scikit', 'sklearn', 'scikit-learn'], 'TensorFlow/Keras': ['tensorflow', 'keras'], 'LightGBM': ['lightgbm'],
    'pandas': ['pandas'], 'NumPy': ['numpy'], 'SHAP': ['shap'], 'LLM APIs': ['llm', 'llms', 'claude', 'groq', 'gemini'],
    'RAG': ['rag', 'retrieval augmented'], 'Data structures': ['data structures', 'dsa'],
    'Algorithms & complexity': ['algorithm', 'algorithms'], 'OOP design': ['oop', 'object oriented'],
    'Operating systems': ['operating system', 'operating systems'], 'DBMS': ['dbms', 'databases'],
    'Computer networks (DNS, HTTP)': ['networking', 'computer networks', 'dns'],
  };

  const PROJECTS = [
    {
      id: 'offer-lens', accent: '#ee7a5a', kinds: ['WEB', 'LLM'], cat: 'SECURITY / FULL-STACK',
      title: 'Offer Lens', sub: 'Explainable job-scam risk checker', date: 'OCT 2026',
      stat: ['35', 'offline tests covering every API endpoint'],
      tech: ['Node.js', 'Express', 'SQLite', 'Docker', 'Render', 'Claude/Groq APIs'],
      uses: ['JavaScript', 'Node.js', 'Express', 'SQLite', 'SQL', 'Docker', 'Render', 'REST APIs', 'LLM APIs', 'Computer networks (DNS, HTTP)'],
      blurb: 'A full-stack web app that scores job posts and recruiter messages from 0 to 100 and quotes the exact phrase behind every finding.',
      bullets: [
        'Scores job posts and recruiter messages from 0 to 100 using about 40 rules in 11 risk categories, quoting the exact phrase behind every finding. One shared rule module runs in both browser and server, so results always agree.',
        'Domain checks with RDAP (domain age) and DNS MX (mail-server) lookups, cached and fail-safe so a slow or failed lookup never breaks an assessment.',
        'Accounts with scrypt password hashing, hashed session tokens, CSRF protection, lockout after 5 failed logins, per-IP rate limiting and strict security headers (CSP, HSTS).',
        '35 offline tests (node:test) covering every API endpoint, with AI and network calls stubbed. Containerized with Docker (non-root user) and deployed on Render.',
      ],
      live: 'https://offer-lens.onrender.com/', code: 'https://github.com/aishwaryakg2415/offer-lens',
      aliases: ['offer lens', 'offerlens', 'job scam', 'job-scam', 'recruiter'],
    },
    {
      id: 'netra-sahayak', accent: '#8fbcff', kinds: ['MOBILE', 'ML'], cat: 'MOBILE / HEALTH AI',
      title: 'Netra Sahayak', sub: 'Offline diabetic retinopathy screening app · SIH 2026, team', date: 'AUG – OCT 2026',
      stat: ['0.876', 'quadratic weighted kappa on the DDR test set'],
      tech: ['Kotlin', 'Android', 'LiteRT', 'Room', 'Python', 'TensorFlow', 'Bash'],
      uses: ['Kotlin', 'Python', 'Bash', 'Android (Room)', 'Room (SQL)', 'TensorFlow/Keras', 'Android Debug Bridge (adb)'],
      blurb: 'An Android app for rural health workers that grades retinal images on the phone with no internet at all.',
      bullets: [
        'Android app for rural health workers that grades retinal images on the phone with no internet (the release APK ships without the INTERNET permission), with an image-quality gate and explainable heatmaps.',
        'Trained EfficientNetV2-B2 on Kaggle GPUs: quadratic weighted kappa 0.876 on the DDR test set and 0.851 on external IDRiD data. Measured INT8 quantization (84.9–97.4% agreement) and shipped a 17.4 MB FP16 model instead.',
        'Kept Python and Kotlin preprocessing identical with golden-file parity tests. 50+ unit and instrumentation tests pass, including a Room v1→v2 migration test, and inference was verified on a physical phone in airplane mode.',
        'Wrote a Bash script that locates the Android SDK and JDK, builds the APK, and installs and launches it on a device or emulator via adb.',
      ],
      code: 'https://github.com/aishwaryakg2415/netra-sahayak',
      aliases: ['netra', 'sahayak', 'retinopathy', 'retina', 'retinal', 'diabetic', 'eye'],
    },
    {
      id: 'salvage', accent: '#7fd6a0', kinds: ['ML', 'WEB'], cat: 'AI / FINTECH',
      title: 'SALVAGE', sub: 'AI revenue leak investigator · Razorpay AI Buildathon 2026', date: 'AUG – SEP 2026',
      stat: ['0.97', 'ROC-AUC predicting recoverable payments'],
      tech: ['Python', 'FastAPI', 'Pydantic', 'scikit-learn', 'pandas', 'React'],
      uses: ['Python', 'FastAPI', 'scikit-learn', 'pandas', 'React', 'REST APIs'],
      blurb: 'A FastAPI backend that diagnoses why a merchant\'s revenue dropped and predicts which failed payments are worth recovering.',
      bullets: [
        'FastAPI backend that diagnoses why a merchant\'s revenue dropped, flagging anomalies against a rolling 7-day baseline and breaking down payment failures by reason and method.',
        'Gradient-boosting model that predicts which failed payments are recoverable (ROC-AUC 0.97, precision 0.93 vs 0.48 for a retry-everything baseline), recovering about 93% of the baseline\'s revenue with 58% fewer customer contacts.',
        'A deterministic policy engine blocks unsafe automated actions and logs every decision to an audit trail.',
      ],
      code: 'https://github.com/aishwaryakg2415/salvage-revenue-recovery',
      aliases: ['salvage', 'revenue', 'razorpay', 'payment', 'payments'],
    },
    {
      id: 'not-yet', accent: '#e08aa8', kinds: ['WEB', 'LLM'], cat: 'AI / PWA',
      title: 'Not Yet', sub: 'Skincare check for teens · YouCam Skin AI Hackathon', date: 'NOV 2026',
      stat: ['22', 'tests, plus an offline demo mode'],
      tech: ['Node.js', 'Progressive Web App', 'YouCam API', 'Gemini', 'BM25 retrieval'],
      uses: ['JavaScript', 'Node.js', 'LLM APIs'],
      blurb: 'A zero-dependency Node server and installable PWA that checks a product\'s ingredients against a selfie-based skin analysis.',
      bullets: [
        'Zero-dependency Node server and installable PWA that compares a product\'s ingredient list (Open Beauty Facts and brand stores) with a selfie-based skin analysis and gives an evidence-backed verdict.',
        'Guarded against AI errors: any ingredient the LLM extracts that does not appear on the source page is discarded.',
        'Added daily usage caps, an offline demo mode and 22 tests.',
      ],
      code: 'https://github.com/aishwaryakg2415/not-yet',
      aliases: ['not yet', 'skincare', 'skin care', 'youcam', 'teens'],
    },
    {
      id: 'pcos', accent: '#f8b83a', kinds: ['ML', 'WEB'], cat: 'ML / HEALTH',
      title: 'PCOS Early-Risk Screening Assistant', sub: 'Explainable screening tool · Hacktivate 2.0', date: 'AUG 2026',
      stat: ['82.9%', 'recall from 15 self-reportable symptoms'],
      tech: ['Python', 'scikit-learn', 'SHAP', 'FastAPI', 'React'],
      uses: ['Python', 'scikit-learn', 'SHAP', 'FastAPI', 'React', 'REST APIs'],
      blurb: 'An explainable screening tool that needs only 15 self-reportable symptoms and no lab tests.',
      bullets: [
        'Explainable screening tool that uses only 15 self-reportable symptoms (no lab tests). Logistic regression with SMOTE reached 82.9% recall and 0.869 AUC, served through a FastAPI API with a React front-end.',
        'Used SHAP to turn each prediction into plain-language reasons a patient can understand.',
      ],
      code: 'https://github.com/aishwaryakg2415/pcos-screening-assistant',
      aliases: ['pcos', 'hacktivate'],
    },
    {
      id: 'digital-dark-spot', accent: '#a9c4f5', kinds: ['WEB', 'LLM'], cat: 'AI / RESEARCH TOOL',
      title: 'Digital Dark Spot', sub: 'Research source checker', date: 'OCT 2026',
      stat: ['4', 'checks: gaps, conflicts, stale dates, copied content'],
      tech: ['Next.js', 'TypeScript', 'Groq API', 'Vercel'],
      uses: ['TypeScript', 'Next.js', 'Vercel', 'LLM APIs'],
      blurb: 'A web app that checks research sources for gaps, conflicts, stale dates and copied content.',
      bullets: [
        'Web app that checks research sources for gaps, conflicts, stale dates and copied content.',
        'Every quote is verified against the full source text.',
        'An offline keyword mode keeps it working without an API key.',
      ],
      live: 'https://digital-dark-spot-iv3z.vercel.app/', code: 'https://github.com/aishwaryakg2415/digital-dark-spot',
      aliases: ['digital dark spot', 'dark spot', 'source checker', 'dds'],
    },
  ];

  // Non-project work, so the inventory can point at it too.
  const OTHER_WORK = [
    { id: 'quest', title: 'ArthSaathi (IBM SkillsBuild internship)', section: '#experience', uses: ['JavaScript', 'IBM Cloud (watsonx.ai)', 'LLM APIs', 'RAG'] },
    { id: 'icu', title: 'ICU Mortality Prediction (research)', section: '#research', uses: ['LightGBM'] },
  ];

  // ---------------------------------------------------------------
  // helpers
  // ---------------------------------------------------------------

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  const store = {
    get(key, area = 'localStorage') { try { return window[area].getItem(key); } catch { return null; } },
    set(key, val, area = 'localStorage') { try { window[area].setItem(key, val); } catch { /* storage blocked */ } },
  };

  function el(tag, attrs = {}, ...kids) {
    const node = document.createElement(tag);
    for (const [key, val] of Object.entries(attrs)) {
      if (val == null || val === false) continue;
      if (key === 'class') node.className = val;
      else if (key === 'text') node.textContent = val;
      else if (key === 'style') node.style.cssText = val;
      else if (key.startsWith('on')) node.addEventListener(key.slice(2), val);
      else node.setAttribute(key, val === true ? '' : val);
    }
    for (const kid of kids.flat(Infinity)) {
      if (kid == null || kid === false) continue;
      node.append(kid.nodeType ? kid : document.createTextNode(kid));
    }
    return node;
  }

  const extLink = (label, href, cls = 'btn btn--small btn--ghost') =>
    el('a', { class: cls, href, target: '_blank', rel: 'noopener', text: label });

  // ---------------------------------------------------------------
  // sound effects (off until the visitor turns them on)
  // ---------------------------------------------------------------

  let sfxOn = false;
  let audioCtx = null;
  function blip(freq = 660, dur = 0.07, when = 0) {
    if (!sfxOn) return;
    try {
      audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
      const t = audioCtx.currentTime + when;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'square';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.04, t);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      osc.connect(gain).connect(audioCtx.destination);
      osc.start(t);
      osc.stop(t + dur);
    } catch { /* audio unavailable */ }
  }
  const fanfare = () => [523, 659, 784, 1047].forEach((f, i) => blip(f, 0.12, i * 0.09));

  const soundToggle = $('#soundToggle');
  soundToggle.addEventListener('click', () => {
    sfxOn = !sfxOn;
    soundToggle.setAttribute('aria-pressed', String(sfxOn));
    soundToggle.textContent = sfxOn ? 'SFX ON' : 'SFX OFF';
    blip(880);
  });
  document.addEventListener('click', (e) => {
    if (e.target.closest('a, button') && !e.target.closest('#soundToggle')) blip(520, 0.05);
  });

  // ---------------------------------------------------------------
  // toast
  // ---------------------------------------------------------------

  const toastEl = $('#toast');
  let toastTimer = 0;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { toastEl.hidden = true; }, 3600);
  }

  // ---------------------------------------------------------------
  // title screen
  // ---------------------------------------------------------------

  const boot = $('#boot');
  if (!store.get('booted', 'sessionStorage')) {
    boot.hidden = false;
    document.body.classList.add('is-booting');
    $('#bootStart').focus();
    const start = () => {
      if (!document.body.classList.contains('is-booting')) return;
      document.body.classList.remove('is-booting');
      store.set('booted', '1', 'sessionStorage');
      document.removeEventListener('keydown', onKey);
      if (reducedMotion) { boot.hidden = true; return; }
      boot.classList.add('is-leaving');
      setTimeout(() => { boot.hidden = true; }, 460);
    };
    const onKey = (e) => {
      if (['Enter', ' ', 'Escape'].includes(e.key)) { e.preventDefault(); start(); }
    };
    boot.addEventListener('click', start);
    document.addEventListener('keydown', onKey);
  }

  // ---------------------------------------------------------------
  // day / night scene
  // ---------------------------------------------------------------

  const timeToggle = $('#timeToggle');
  function setTime(time) {
    document.documentElement.dataset.time = time;
    const night = time === 'night';
    timeToggle.textContent = night ? 'DUSK' : 'NIGHT';
    timeToggle.setAttribute('aria-label', night ? 'Switch the scene to dusk' : 'Switch the scene to night');
  }
  setTime(store.get('scene-time') === 'night' ? 'night' : 'dusk');
  timeToggle.addEventListener('click', () => {
    const next = document.documentElement.dataset.time === 'night' ? 'dusk' : 'night';
    setTime(next);
    store.set('scene-time', next);
  });

  // ---------------------------------------------------------------
  // typed role line
  // ---------------------------------------------------------------

  const typed = $('#typed');
  const ROLES = ['SOFTWARE ENGINEER', 'FULL-STACK DEVELOPER', 'MACHINE-LEARNING BUILDER', 'ROOT-CAUSE HUNTER'];
  if (!reducedMotion) {
    let role = 0, pos = ROLES[0].length, dir = -1, wait = 22;
    setInterval(() => {
      if (wait > 0) { wait--; return; }
      pos += dir;
      typed.textContent = ROLES[role].slice(0, pos);
      if (pos === 0) { dir = 1; role = (role + 1) % ROLES.length; }
      else if (pos === ROLES[role].length) { dir = -1; wait = 22; }
    }, 70);
  }

  // ---------------------------------------------------------------
  // skills inventory
  // ---------------------------------------------------------------

  // Featured projects come first (the first FEATURED_COUNT are shown by default).
  const PROJECT_ORDER = ['offer-lens', 'netra-sahayak', 'salvage', 'digital-dark-spot', 'not-yet', 'pcos'];
  const FEATURED_COUNT = 4;
  PROJECTS.sort((a, b) => PROJECT_ORDER.indexOf(a.id) - PROJECT_ORDER.indexOf(b.id));

  const ALL_WORK = [...PROJECTS, ...OTHER_WORK];
  const workUsing = (skill) => ALL_WORK.filter((w) => w.uses.includes(skill));

  const stackMap = $('#stackMap');
  const readout = $('#skillReadout');
  const openBranches = new Set(STACK.map((b) => b.name));
  let skillPicked = null;

  function skillSlot(name) {
    return el('button', {
      class: 'slot', type: 'button', 'aria-pressed': String(name === skillPicked), text: name,
      onclick: () => { skillPicked = name; renderStack(); renderReadout(); },
    });
  }

  function renderStack() {
    stackMap.replaceChildren(...STACK.map((b, i) => {
      const open = openBranches.has(b.name);
      const bodyId = `branch-${i}`;
      return el('article', { class: 'branch', style: `--accent:${b.accent}` },
        el('button', {
          class: 'branch__head', type: 'button', 'aria-expanded': String(open), 'aria-controls': bodyId,
          onclick: () => { if (open) openBranches.delete(b.name); else openBranches.add(b.name); renderStack(); },
        },
        el('span', { class: 'branch__tier', text: b.tier }),
        el('span', { class: 'branch__name', text: b.name }),
        el('span', { class: 'branch__toggle', 'aria-hidden': 'true', text: open ? '−' : '+' })),
        el('div', { class: 'branch__body', id: bodyId },
          el('p', { class: 'branch__blurb', text: b.blurb }),
          open ? b.groups.map((g) => [
            g.label ? el('p', { class: 'branch__group', text: g.label }) : null,
            el('div', { class: 'slots' }, g.items.map(skillSlot)),
          ]) : null),
      );
    }));
  }

  function workButton(work) {
    return el('button', {
      class: 'btn btn--small btn--ghost', type: 'button', text: work.title,
      onclick: () => (work.section ? goTo(work.section) : openProject(work.id)),
    });
  }

  function renderReadout() {
    const used = workUsing(skillPicked);
    const cat = SKILLS.find((s) => s.items.includes(skillPicked)).cat;
    readout.replaceChildren(
      el('p', { class: 'readout__title', text: `${skillPicked.toUpperCase()} · ${cat}` }),
      used.length
        ? el('p', { class: 'readout__body', text: `Used in ${used.length} ${used.length === 1 ? 'build' : 'builds'}:` })
        : el('p', { class: 'readout__body', text: 'Part of my core toolkit. Ask me about it and I\'ll happily go into detail.' }),
      used.length ? el('div', { class: 'readout__links' }, used.map(workButton)) : null,
    );
  }

  renderStack();

  // ---------------------------------------------------------------
  // projects
  // ---------------------------------------------------------------

  const projGrid = $('#projGrid');
  const projFilters = $('#projFilters');
  let projKind = 'ALL';

  function projectCard(p) {
    const level = `LEVEL ${String(PROJECTS.indexOf(p) + 1).padStart(2, '0')}`;
    return el('article', { class: 'level', style: `--accent:${p.accent}` },
      el('p', { class: 'level__meta' }, el('span', { text: level }), el('span', { text: p.date })),
      el('p', { class: 'level__cat' }, p.cat, p.live ? el('span', { class: 'level__live', text: 'LIVE PROJECT' }) : null),
      el('h3', { class: 'level__title', text: p.title }),
      el('p', { class: 'level__sub', text: p.sub }),
      el('p', { class: 'level__stat' }, el('b', { text: p.stat[0] }), el('span', { text: p.stat[1] })),
      el('ul', { class: 'chips' }, p.tech.slice(0, 4).map((t) => el('li', { text: t }))),
      el('div', { class: 'level__actions' },
        el('button', { class: 'btn btn--small', type: 'button', text: '> DETAILS', onclick: () => openProject(p.id) }),
        p.live ? extLink('LIVE', p.live, 'btn btn--small btn--blue') : null,
        extLink('CODE', p.code),
      ),
    );
  }

  function renderProjects() {
    projFilters.replaceChildren(...['ALL', 'WEB', 'ML', 'MOBILE', 'LLM'].map((kind) =>
      el('button', {
        class: 'tab', type: 'button', 'aria-pressed': String(kind === projKind), text: kind,
        onclick: () => { projKind = kind; renderProjects(); },
      })));
    const matching = PROJECTS.filter((p) => projKind === 'ALL' || p.kinds.includes(projKind));
    // "ALL" shows the featured four until the visitor asks for the rest
    const shown = projKind === 'ALL' && !projShowAll ? matching.slice(0, FEATURED_COUNT) : matching;
    projGrid.replaceChildren(...shown.map(projectCard));
    projMore.hidden = projKind !== 'ALL';
    projMore.setAttribute('aria-expanded', String(projShowAll));
    projMore.textContent = projShowAll ? 'SHOW FEATURED ONLY ↑' : `VIEW ALL ${PROJECTS.length} PROJECTS →`;
  }
  const projMore = $('#projMore');
  let projShowAll = false;
  projMore.addEventListener('click', () => { projShowAll = !projShowAll; renderProjects(); });
  renderProjects();

  // ---------------------------------------------------------------
  // certifications
  // ---------------------------------------------------------------

  $('#certList').replaceChildren(...CERTS.map((c) =>
    el('li', {},
      el('div', {},
        el('b', { text: c.name }),
        el('span', { text: c.when ? `${c.by} · ${c.when}` : c.by }),
        c.url ? extLink('VERIFY ↗', c.url, 'cert__verify') : null))));

  // ---------------------------------------------------------------
  // live stats (public GitHub + LeetCode numbers, cached for 6 hours)
  // ---------------------------------------------------------------

  const STATS_KEY = 'live-stats-v1';
  const STATS_TTL = 6 * 60 * 60 * 1000;
  const fmt = (n) => (typeof n === 'number' ? n.toLocaleString('en-IN') : '—');

  async function getJson(url, ms = 15000) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), ms);
    try {
      const res = await fetch(url, { signal: ctrl.signal });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } finally {
      clearTimeout(timer);
    }
  }

  async function fetchGithub() {
    const [user, contrib] = await Promise.all([
      getJson(`https://api.github.com/users/${GITHUB_USER}`),
      getJson(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USER}?y=last`).catch(() => null),
    ]);
    return {
      repos: user.public_repos,
      followers: user.followers,
      since: new Date(user.created_at).getFullYear(),
      total: contrib && contrib.total ? contrib.total.lastYear : null,
      days: contrib && Array.isArray(contrib.contributions)
        ? contrib.contributions.map((d) => [d.date, d.level])
        : null,
    };
  }

  // LeetCode has no public CORS API, so this tries two community proxies in turn.
  async function fetchLeetcode() {
    try {
      const d = await getJson(`https://leetcode-api-faisalshohag.vercel.app/${LEETCODE_USER}`);
      if (typeof d.totalSolved !== 'number') throw new Error('unexpected LeetCode response');
      return { total: d.totalSolved, easy: d.easySolved, medium: d.mediumSolved, hard: d.hardSolved };
    } catch {
      const d = await getJson(`https://alfa-leetcode-api.onrender.com/${LEETCODE_USER}/solved`, 20000);
      if (typeof d.solvedProblem !== 'number') throw new Error('unexpected LeetCode response');
      return { total: d.solvedProblem, easy: d.easySolved, medium: d.mediumSolved, hard: d.hardSolved };
    }
  }

  function renderGithub(gh) {
    if (!gh) {
      $('#ghNote').textContent = 'Live stats are taking a breather. Open the profile for the latest numbers.';
      return;
    }
    $('#ghContrib').textContent = fmt(gh.total);
    $('#ghRepos').textContent = fmt(gh.repos);
    $('#ghFollowers').textContent = fmt(gh.followers);
    $('#ghNote').textContent = `Building on GitHub since ${gh.since}.`;

    // 12 columns x 7 rows, Sunday-aligned, ending with the current week
    const grid = $('#ghGrid');
    if (!gh.days) { grid.hidden = true; grid.previousElementSibling.hidden = true; return; }
    const levels = new Map(gh.days);
    const today = new Date();
    const start = new Date(today);
    start.setDate(today.getDate() - today.getDay() - 77);
    const cells = [];
    for (let i = 0; i < 84; i++) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
      const future = d > today;
      cells.push(el('i', { 'data-l': future ? null : String(levels.get(key) || 0), style: future ? 'visibility:hidden' : null }));
    }
    grid.replaceChildren(...cells);
  }

  function renderLeetcode(lc) {
    if (!lc) {
      $('#lcNote').textContent = 'Live stats are taking a breather. Open the profile for the latest numbers.';
      return;
    }
    $('#lcTotal').textContent = fmt(lc.total);
    $('#lcMedium').textContent = fmt(lc.medium);
    $('#lcHard').textContent = fmt(lc.hard);
    $('#lcEasy').textContent = fmt(lc.easy);
    $('#lcMedium2').textContent = fmt(lc.medium);
    $('#lcHard2').textContent = fmt(lc.hard);
    const pct = (n) => `${lc.total ? Math.round((n / lc.total) * 100) : 0}%`;
    $('#lcEasyBar').style.width = pct(lc.easy);
    $('#lcMediumBar').style.width = pct(lc.medium);
    $('#lcHardBar').style.width = pct(lc.hard);
    $('#lcNote').textContent = 'Solved split by difficulty.';
  }

  async function loadStats() {
    let cached = null;
    try { cached = JSON.parse(store.get(STATS_KEY) || 'null'); } catch { cached = null; }
    const fresh = cached && Date.now() - cached.t < STATS_TTL;
    if (cached) { renderGithub(cached.gh); renderLeetcode(cached.lc); }
    if (fresh && cached.gh && cached.lc) return;

    const [gh, lc] = await Promise.all([
      fetchGithub().catch(() => (cached && cached.gh) || null),
      fetchLeetcode().catch(() => (cached && cached.lc) || null),
    ]);
    renderGithub(gh);
    renderLeetcode(lc);
    if (gh || lc) store.set(STATS_KEY, JSON.stringify({ t: Date.now(), gh, lc }));
  }

  // fetch only when the visitor gets near the section
  const liveSection = $('#achievements');
  if ('IntersectionObserver' in window) {
    const liveIo = new IntersectionObserver((entries) => {
      if (!entries.some((e) => e.isIntersecting)) return;
      liveIo.disconnect();
      loadStats();
    }, { rootMargin: '400px 0px' });
    liveIo.observe(liveSection);
  } else {
    loadStats();
  }

  const dialog = $('#projDialog');
  function openProject(id) {
    const p = PROJECTS.find((x) => x.id === id);
    if (!p) return;
    $('#projLevel').textContent = `LEVEL ${String(PROJECTS.indexOf(p) + 1).padStart(2, '0')} · ${p.date}`;
    $('#projTitle').textContent = p.title;
    $('#projSub').textContent = p.sub;
    $('#projTech').replaceChildren(...p.tech.map((t) => el('li', { text: t })));
    $('#projBullets').replaceChildren(...p.bullets.map((b) => el('li', { text: b })));
    $('#projLinks').replaceChildren(
      ...(p.live ? [extLink('> PLAY LIVE DEMO', p.live, 'btn')] : []),
      extLink('VIEW CODE ON GITHUB', p.code, 'btn btn--blue'),
    );
    if (dialog.open) dialog.close();
    dialog.showModal();
  }
  $('#projClose').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });

  function goTo(hash) {
    const target = $(hash);
    if (target) target.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' });
  }

  // ---------------------------------------------------------------
  // exploration counter, active nav link, reveal-on-scroll
  // ---------------------------------------------------------------

  const tracked = $$('[data-track]');
  const navLinks = $$('.hud__nav a');
  const seen = new Set();
  const xpCount = $('#xpCount');
  $('#xpTotal').textContent = tracked.length;

  if ('IntersectionObserver' in window) {
    // a section counts as "current" while it crosses the middle of the screen
    const sectionIo = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const id = entry.target.id;
        navLinks.forEach((a) => a.classList.toggle('is-active', a.getAttribute('href') === `#${id}`));
        if (seen.has(id) || document.body.classList.contains('is-booting')) continue;
        seen.add(id);
        xpCount.textContent = seen.size;
        if (seen.size === tracked.length) {
          toast('ACHIEVEMENT UNLOCKED: EXPLORED THE WHOLE MAP');
          fanfare();
        }
      }
    }, { rootMargin: '-45% 0px -45% 0px' });
    tracked.forEach((sec) => sectionIo.observe(sec));
  }

  if ('IntersectionObserver' in window && !reducedMotion) {
    const revealIo = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const node = entry.target;
        revealIo.unobserve(node);
        node.classList.add('is-in');
        setTimeout(() => node.classList.remove('reveal', 'is-in'), 420);
      }
    }, { rootMargin: '0px 0px -8% 0px' });
    $$('.sec .px-box').forEach((node) => { node.classList.add('reveal'); revealIo.observe(node); });
  }

  // ---------------------------------------------------------------
  // chatbot: a scripted NPC that answers from the data above
  // ---------------------------------------------------------------

  const chat = $('#chat');
  const chatFab = $('#chatFab');
  const chatHint = $('#chatHint');
  const chatLog = $('#chatLog');
  const chatChips = $('#chatChips');
  const chatForm = $('#chatForm');
  const chatInput = $('#chatInput');

  const DEFAULT_CHIPS = ['Who are you?', 'Top projects', 'Skills', 'Experience', 'Research', 'Contact'];

  const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const hasWord = (text, word) => new RegExp(`(^|[^a-z0-9])${escapeRe(word)}([^a-z0-9]|$)`).test(text);

  const projectLinks = (p) => [
    { label: '> DETAILS', project: p.id },
    ...(p.live ? [{ label: 'LIVE', href: p.live }] : []),
    { label: 'CODE', href: p.code },
  ];

  function projectReply(p) {
    return {
      text: `${p.title}: ${p.sub}.\n\n${p.blurb}\n\nHeadline number: ${p.stat[0]} (${p.stat[1]}).\nBuilt with ${p.tech.join(', ')}.`,
      links: projectLinks(p),
      chips: ['Another project', 'Skills', 'Contact'],
    };
  }

  function skillReply(skill) {
    const used = workUsing(skill);
    if (!used.length) {
      return { text: `Yes, ${skill} is in my toolkit. It's listed on my resume under ${SKILLS.find((s) => s.items.includes(skill)).cat.toLowerCase()}.`, links: [{ label: 'SEE STACK', section: '#stack' }] };
    }
    return {
      text: `Yes! I've used ${skill} in ${used.length === 1 ? 'this build' : `${used.length} builds`}:\n${used.map((w) => `• ${w.title}`).join('\n')}`,
      links: used.slice(0, 4).map((w) => (w.section ? { label: w.title.split(' (')[0].toUpperCase(), section: w.section } : { label: w.title.toUpperCase(), project: w.id })),
    };
  }

  let lastProject = -1;
  const INTENTS = [
    {
      test: /^(hi|hii+|hey|hello|yo|hola|namaste|sup|good (morning|afternoon|evening))\b/,
      reply: () => ({ text: 'Hey there, traveller! I\'m Pixel Aishwarya, the 8-bit version of Aishwarya. Ask me about my projects, skills, internship or research.' }),
    },
    {
      test: /\b(thanks|thank you|thx|ty|awesome|cool|nice|great)\b/,
      reply: () => ({ text: 'Anytime! +10 XP for good manners. Anything else you want to know?' }),
    },
    {
      test: /\b(bye|goodbye|see you|cya)\b/,
      reply: () => ({ text: 'Game saved. Come back any time, and feel free to send a real message too.', links: [{ label: 'EMAIL ME', href: LINKS.email }] }),
    },
    {
      test: /\b(another project|random project|surprise me)\b/,
      reply: () => { lastProject = (lastProject + 1) % PROJECTS.length; return projectReply(PROJECTS[lastProject]); },
    },
    {
      test: /\b(speak|spoken|kannada|hindi|english|mother tongue)\b/,
      reply: () => ({ text: 'I speak English, Kannada and Hindi. (And a little Bash, when the build breaks.)' }),
    },
    {
      test: /(why .*hire|hire you|strength|strengths|why should|what makes you|stand out)/,
      reply: () => ({
        text: 'Three reasons:\n• I ship: 6 hackathon projects in 2026 plus a completed IBM SkillsBuild internship.\n• I test: 100+ automated tests across my projects.\n• I dig: I enjoy tracing a failure to its root cause, and I document things so others can run what I build.',
        links: [{ label: 'SEE PROJECTS', section: '#projects' }, { label: 'EMAIL ME', href: LINKS.email }],
      }),
    },
    {
      test: /\b(contact|email|e-mail|mail|reach|linkedin|github|leetcode|connect|social|socials|phone|number|message you|dm)\b/,
      reply: () => ({
        text: 'Best way to reach me is email. You can also find me on GitHub, LinkedIn and LeetCode.',
        links: [{ label: 'EMAIL', href: LINKS.email }, { label: 'GITHUB', href: LINKS.github }, { label: 'LINKEDIN', href: LINKS.linkedin }, { label: 'LEETCODE', href: LINKS.leetcode }],
      }),
    },
    {
      test: /\b(education|college|university|degree|cgpa|gpa|grade|grades|study|studying|studied|school|btech|b\.tech|coursework|marks|graduate|graduation|graduating)\b/,
      reply: () => ({
        text: 'I\'m doing a B.Tech in Computer Science & Engineering (AI & ML) at Dayananda Sagar University, Bengaluru (2024 to 2028, expected) with a CGPA of 9.00 / 10.\n\nBefore that: 95% in PCMB at MES Kishora Kendra PU College, and 99% in the State Board exams at MES Kishora Kendra High School.',
        links: [{ label: 'EDUCATION', section: '#education' }],
      }),
    },
    {
      test: /\b(experience|intern|internship|ibm|arthsaathi|arth saathi|skillsbuild|edunet|job|work|working|worked)\b/,
      reply: () => ({
        text: 'I was an AI & Agentic AI Intern with IBM SkillsBuild and Edunet Foundation (AICTE) in 2026; the internship wrapped up in November 2026.\n\nThere I built ArthSaathi, a retrieval-augmented agent for digital financial literacy. It answers questions on UPI, loans, budgeting and scam safety from RBI, NPCI and government documents, names its source, does EMI and budget maths with tool calling, and never asks for a PIN, OTP or CVV.',
        links: [{ label: 'EXPERIENCE', section: '#experience' }],
        chips: ['Top projects', 'RAG', 'Contact'],
      }),
    },
    {
      test: /\b(research|paper|papers|publication|publications|icu|mortality|sacenet|cyberbullying|hinglish|sarcasm|ieee|manuscript)\b/,
      reply: () => ({
        text: 'Two research projects:\n• ICU Mortality Prediction (manuscript in preparation): LightGBM on the WiDS 2020 ICU dataset, AUROC 0.906 with 5-fold CV and 0.905 on hospital-held-out data, about 0.044 above the APACHE IV score.\n• SACENet (team, IEEE conference paper): sarcasm-aware, explainable early detection of cyberbullying in Hinglish conversations.',
        links: [{ label: 'SIDE QUESTS', section: '#research' }],
      }),
    },
    {
      test: /\b(achievement|achievements|award|awards|hackathon|hackathons|sih|smart india|trophy|trophies|win|won|prize)\b/,
      reply: () => ({
        text: 'In 2026 I built and submitted 6 hackathon projects, including the Razorpay AI Buildathon, Smart India Hackathon, Hacktivate 2.0 and the YouCam Skin AI Hackathon.\n\nFor Smart India Hackathon 2026, my team was selected for the internal (department-level) round with Netra Sahayak.',
        links: [{ label: 'ACHIEVEMENTS', section: '#achievements' }],
      }),
    },
    {
      test: /\b(certificate|certificates|certification|certifications|certified|course|courses)\b/,
      reply: () => ({
        text: `My certifications:\n${CERTS.map((c) => `• ${c.name} (${c.by})`).join('\n')}`,
        links: [{ label: 'ACHIEVEMENTS', section: '#achievements' }],
      }),
    },
    {
      test: /\b(test|tests|testing|tested|quality|debug|debugging|bugs?)\b/,
      reply: () => ({
        text: 'Testing is my favourite boss fight. Across my projects there are 100+ automated tests: 35 offline tests in Offer Lens, 50+ unit and instrumentation tests in Netra Sahayak, and 22 in Not Yet. AI and network calls are stubbed, so the tests run offline.',
        links: [{ label: 'OFFER LENS', project: 'offer-lens' }, { label: 'NETRA SAHAYAK', project: 'netra-sahayak' }],
      }),
    },
    {
      test: /\b(project|projects|built|build|builds|made|portfolio|apps?|showcase|top|best|favourite|favorite)\b/,
      reply: () => ({
        text: `I've got six levels to show you:\n${PROJECTS.map((p, i) => `${i + 1}. ${p.title}: ${p.sub.split(' · ')[0]}`).join('\n')}\n\nName one and I'll tell you more.`,
        links: [{ label: 'LEVEL SELECT', section: '#projects' }],
        chips: ['Offer Lens', 'Netra Sahayak', 'SALVAGE', 'Not Yet', 'PCOS', 'Digital Dark Spot'],
      }),
    },
    {
      test: /\b(ml|machine learning|ai|artificial intelligence|deep learning|models?|data science)\b/,
      reply: () => ({
        text: `My AI / ML stack: ${SKILLS.find((s) => s.cat === 'AI / ML').items.join(', ')}.\n\nBest examples: Netra Sahayak (EfficientNetV2-B2, QWK 0.876), SALVAGE (gradient boosting, ROC-AUC 0.97) and my ICU mortality research (LightGBM, AUROC 0.906).`,
        links: [{ label: 'NETRA SAHAYAK', project: 'netra-sahayak' }, { label: 'SALVAGE', project: 'salvage' }, { label: 'RESEARCH', section: '#research' }],
      }),
    },
    {
      test: /\b(skill|skills|stack|tech|technology|technologies|tools?|language|languages|framework|frameworks|know|good at|toolkit|inventory)\b/,
      reply: () => ({
        text: SKILLS.map((s) => `${s.cat}: ${s.items.join(', ')}`).join('\n\n'),
        links: [{ label: 'OPEN STACK', section: '#stack' }],
        chips: ['Python', 'Docker', 'React', 'RAG', 'Top projects'],
      }),
    },
    {
      test: /\b(who|about|yourself|introduce|intro|summary|tell me|bio)\b/,
      reply: () => ({
        text: 'I\'m Pixel Aishwarya, the 8-bit stand-in for Aishwarya K G: a Computer Science (AI & ML) undergraduate at Dayananda Sagar University in Bengaluru with a 9.00 CGPA.\n\nI build, test, deploy and debug full-stack and machine-learning systems, and I like tracing a failure all the way to its root cause.',
        links: [{ label: 'PLAYER BIO', section: '#about' }],
      }),
    },
    {
      test: /\b(where|location|located|based|city|live|from)\b/,
      reply: () => ({ text: 'I\'m based in Bengaluru, India.' }),
    },
    {
      test: /\b(resume|cv)\b/,
      reply: () => ({ text: 'This whole site is my resume in playable form. For a PDF copy, drop me an email and I\'ll send it over.', links: [{ label: 'EMAIL ME', href: LINKS.email }] }),
    },
    {
      test: /\b(joke|funny|fun|hobby|hobbies|game|games)\b/,
      reply: () => ({ text: 'Why did the developer go broke?\nBecause they used up all their cache.\n\n(I\'ll stick to shipping projects.)' }),
    },
    {
      test: /\b(help|what can you|options|menu|commands)\b/,
      reply: () => ({ text: 'You can ask me about: who I am, education, skills (or one skill, like "Docker"), my internship, any project by name, research, hackathons, certifications or how to contact me.' }),
    },
    {
      test: /\b(are you (an? )?(ai|bot|robot|human|real)|chatgpt|llm powered)\b/,
      reply: () => ({ text: 'I\'m a scripted NPC, not an AI model. Every answer comes straight from Aishwarya\'s resume, so I can\'t improvise, but I also can\'t make things up.' }),
    },
  ];

  function answer(raw) {
    const text = raw.toLowerCase().replace(/[^a-z0-9.+#&\s-]/g, ' ').replace(/\s+/g, ' ').trim();
    if (!text) return { text: 'Type a question, or tap one of the suggestions below.' };

    const isBot = INTENTS[INTENTS.length - 1];
    if (isBot.test.test(text)) return isBot.reply();

    const project = PROJECTS.find((p) => p.aliases.some((a) => hasWord(text, a)) || hasWord(text, p.title.toLowerCase()));
    if (project) return projectReply(project);

    for (const [skill, aliases] of Object.entries(SKILL_ALIASES)) {
      if (aliases.some((a) => hasWord(text, a))) return skillReply(skill);
    }

    const intent = INTENTS.find((i) => i.test.test(text));
    if (intent) return intent.reply();

    return {
      text: 'Hmm, that one isn\'t in my dialogue tree. Try asking about my projects, skills, internship, research or how to contact me.',
      chips: DEFAULT_CHIPS,
    };
  }

  function setChips(labels) {
    chatChips.replaceChildren(...labels.map((label) =>
      el('button', { class: 'chip-btn', type: 'button', text: label, onclick: () => send(label) })));
  }

  const scrollLog = () => { chatLog.scrollTop = chatLog.scrollHeight; };

  function addUserMsg(text) {
    chatLog.append(el('div', { class: 'msg msg--me', text }));
    scrollLog();
  }

  function linkButton(link) {
    if (link.href) {
      const mail = link.href.startsWith('mailto:');
      return el('a', { class: 'btn btn--small', href: link.href, target: mail ? null : '_blank', rel: mail ? null : 'noopener', text: link.label });
    }
    return el('button', {
      class: 'btn btn--small btn--blue', type: 'button', text: link.label,
      onclick: () => {
        if (link.project) openProject(link.project);
        else { goTo(link.section); if (matchMedia('(max-width: 900px)').matches) toggleChat(false); }
      },
    });
  }

  // Type the reply out one character at a time, like a game dialogue box.
  function addBotMsg({ text, links = [], chips = DEFAULT_CHIPS }) {
    return new Promise((resolve) => {
      const body = el('span');
      const bubble = el('div', { class: 'msg msg--bot' }, body);
      chatLog.append(bubble);
      const finish = () => {
        body.textContent = text;
        if (links.length) bubble.append(el('div', { class: 'msg__links' }, links.map(linkButton)));
        setChips(chips);
        scrollLog();
        resolve();
      };
      if (reducedMotion) { finish(); return; }
      let i = 0;
      const step = Math.max(1, Math.ceil(text.length / 90));
      const timer = setInterval(() => {
        i += step;
        body.textContent = text.slice(0, i);
        scrollLog();
        if (i % (step * 4) === 0) blip(300 + (i % 5) * 40, 0.02);
        if (i >= text.length) { clearInterval(timer); finish(); }
      }, 16);
    });
  }

  let chatQueue = Promise.resolve();
  function send(text) {
    const clean = text.trim().slice(0, 200);
    if (!clean) return;
    addUserMsg(clean);
    chatQueue = chatQueue.then(() => addBotMsg(answer(clean)));
  }

  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    send(chatInput.value);
    chatInput.value = '';
  });

  let greeted = false;
  function toggleChat(open = chat.hidden) {
    chat.hidden = !open;
    chatFab.setAttribute('aria-expanded', String(open));
    chatFab.setAttribute('aria-label', open ? 'Close chat' : 'Open chat with Pixel Aishwarya');
    chatHint.hidden = true;
    if (!open) return;
    if (!greeted) {
      greeted = true;
      chatQueue = chatQueue.then(() => addBotMsg({
        text: 'Hi! I\'m Pixel Aishwarya, the 8-bit version of Aishwarya.\nAsk me about my projects, skills, internship or research, or tap a suggestion below.',
      }));
    }
    chatInput.focus({ preventScroll: true });
  }

  chatFab.addEventListener('click', () => toggleChat());
  $('#chatClose').addEventListener('click', () => { toggleChat(false); chatFab.focus(); });
  $$('[data-open-chat]').forEach((btn) => btn.addEventListener('click', () => toggleChat(true)));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !chat.hidden && !dialog.open) { toggleChat(false); chatFab.focus(); }
  });

  // a one-time nudge towards the chat
  setTimeout(() => {
    if (chat.hidden && !greeted && !document.body.classList.contains('is-booting')) {
      chatHint.hidden = false;
      setTimeout(() => { chatHint.hidden = true; }, 6000);
    }
  }, 5000);
})();
