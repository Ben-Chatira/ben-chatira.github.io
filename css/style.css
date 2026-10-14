/* ==========================================================
   Ben Chatira — art portfolio

   Two moods. The home page opens like a film still: a pale pink
   and sage wash drifting slowly, with paintings fading through
   the right-hand side. Every other page is a quiet white wall
   where the work does the talking (after jockmcfadyen.com).

   The site is deliberately light only.
   ========================================================== */

:root {
  /* colour tokens */
  --bg: #fbf9f9;
  --ink: #1b2236;
  --muted: #566078;
  --line: #e3dcdd;
  --pink: #efbcc5;
  --sage: #bfd6cd;
  --blush: #f4dfe2;
  --focus: #2b4fd8;

  /* type tokens */
  --display: "Newsreader", "Iowan Old Style", Georgia, serif;
  --body: "Hanken Grotesk", "Helvetica Neue", Arial, sans-serif;

  --gutter: clamp(20px, 4vw, 56px);
  --max: 1480px;
  color-scheme: light;
}

*, *::before, *::after { box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  margin: 0;
  background: var(--bg);
  color: var(--ink);
  font-family: var(--body);
  font-size: 1rem;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

img { display: block; max-width: 100%; height: auto; }
a { color: inherit; text-decoration-thickness: 1px; text-underline-offset: 0.2em; }
:focus-visible { outline: 2px solid var(--focus); outline-offset: 3px; }

.skip-link {
  position: absolute; left: var(--gutter); top: -3rem;
  background: var(--ink); color: var(--bg); padding: 0.5rem 1rem; z-index: 50;
}
.skip-link:focus { top: 0.75rem; }

.wrap { width: 100%; max-width: var(--max); margin-inline: auto; padding-inline: var(--gutter); }

/* ---------- header ---------- */
.site-header { padding-block: 1.5rem; position: relative; z-index: 2; }
.site-header .wrap { display: flex; align-items: baseline; justify-content: space-between; gap: 1.5rem; flex-wrap: wrap; }
.wordmark { font-family: var(--display); font-size: 1.6rem; font-weight: 400; letter-spacing: -0.01em; text-decoration: none; }
.nav { display: flex; gap: clamp(1.2rem, 3vw, 2.4rem); }
.nav a { text-decoration: none; font-size: 0.95rem; color: var(--muted); padding-block: 0.25rem; border-bottom: 1px solid transparent; }
.nav a:hover { color: var(--ink); }
.nav a[aria-current="page"] { color: var(--ink); border-bottom-color: var(--ink); }

/* ---------- home hero ---------- */
.hero {
  position: relative; isolation: isolate; overflow: hidden;
  height: clamp(560px, 92vh, 900px);
  display: flex; flex-direction: column;
  background: #e8d9d6;
}
.hero-stage { position: absolute; inset: 0; z-index: -1; }
.hero-wash {
  position: absolute; inset: -10%;
  background:
    radial-gradient(60% 70% at 85% 40%, var(--pink) 0%, transparent 70%),
    radial-gradient(55% 80% at 5% 75%, var(--sage) 0%, transparent 70%),
    radial-gradient(70% 70% at 45% 5%, #ece3d9 0%, transparent 70%),
    #e8d9d6;
  animation: wash 22s ease-in-out infinite alternate;
}
.hero-slide {
  position: absolute; top: 0; right: 0; height: 100%; width: 66%;
  object-fit: cover; opacity: 0;
  filter: saturate(0.6) brightness(1.1) contrast(0.95);
  -webkit-mask-image: linear-gradient(to right, transparent 0%, #000 38%);
  mask-image: linear-gradient(to right, transparent 0%, #000 38%);
  transition: opacity 1.8s ease;
  will-change: opacity, transform;
}
.hero-slide.is-active { opacity: 1; }
.hero-slide.is-active, .hero-slide.is-leaving { animation: drift 10s linear forwards; }
.hero-tint {
  position: absolute; inset: 0; mix-blend-mode: screen;
  background: linear-gradient(105deg, rgba(191, 214, 205, 0.45), rgba(239, 188, 197, 0.6));
}
.hero-grain {
  position: absolute; inset: -50%; width: 200%; height: 200%; opacity: 0.3; pointer-events: none;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 .5 0'/></filter><rect width='240' height='240' filter='url(%23n)'/></svg>");
  animation: grain 0.9s steps(6) infinite;
}
@keyframes wash {
  from { transform: translate3d(-2%, 0, 0) scale(1.02); }
  to   { transform: translate3d(2%, -2%, 0) scale(1.08); }
}
@keyframes drift {
  from { transform: scale(1.04) translate3d(0, 0, 0); }
  to   { transform: scale(1.12) translate3d(-1.5%, -1%, 0); }
}
@keyframes grain {
  0% { transform: translate(0, 0); } 20% { transform: translate(-3%, 2%); }
  40% { transform: translate(2%, -3%); } 60% { transform: translate(-2%, -1%); }
  80% { transform: translate(3%, 3%); } 100% { transform: translate(0, 0); }
}

.hero-body { flex: 1; display: flex; align-items: flex-end; padding-bottom: clamp(1.5rem, 4vw, 3rem); }
.hero-name {
  margin: 0; max-width: 55%;
  font-family: var(--display); font-weight: 300;
  font-size: clamp(3.4rem, 9.5vw, 9rem); line-height: 0.92; letter-spacing: -0.035em;
}

.hero-plus {
  position: absolute; left: 62%; top: 46%; width: 76px; height: 76px; padding: 0; z-index: 2;
  border: 0; border-radius: 20px; cursor: pointer;
  background: linear-gradient(135deg, rgba(243, 184, 196, 0.95), rgba(222, 156, 172, 0.92));
  box-shadow: 0 10px 30px -12px rgba(120, 50, 70, 0.5);
  transition: transform 0.25s ease;
}
.hero-plus::before, .hero-plus::after {
  content: ""; position: absolute; left: 50%; top: 50%; background: #fff;
  transform: translate(-50%, -50%);
}
.hero-plus::before { width: 28px; height: 1.5px; }
.hero-plus::after { width: 1.5px; height: 28px; }
.hero-plus:hover { transform: scale(1.07); }

.hero-bar {
  display: flex; justify-content: space-between; align-items: baseline; gap: 1rem 2rem; flex-wrap: wrap;
  border-top: 1px solid rgba(27, 34, 54, 0.5);
  padding-block: 1.1rem 1.5rem;
  font-size: 0.78rem; letter-spacing: 0.14em; text-transform: uppercase;
}
.hero-bar-right { display: flex; gap: 1.75rem; align-items: baseline; }
.hero-bar a { text-decoration: none; border-bottom: 1px solid currentColor; padding-bottom: 0.1rem; }
.hero-bar a:hover { border-bottom-color: transparent; }

@media (max-width: 700px) {
  .hero-name { max-width: 100%; }
  .hero-slide { width: 100%; }
  .hero-plus { left: calc(50% - 38px); top: 34%; }
}

/* ---------- section scaffolding ---------- */
.section { padding-block: 4.5rem; }
.section.tight { padding-top: 0; }
.section-head { display: flex; align-items: baseline; justify-content: space-between; gap: 1rem; margin-bottom: 2rem; flex-wrap: wrap; }
.section-head h2 { font-family: var(--display); font-weight: 400; font-size: clamp(1.7rem, 3vw, 2.3rem); letter-spacing: -0.01em; margin: 0; text-wrap: balance; }
.text-link { font-size: 0.95rem; }

.statement { font-family: var(--display); font-size: clamp(1.6rem, 3.2vw, 2.6rem); line-height: 1.25; letter-spacing: -0.012em; max-width: 30ch; margin: 0; text-wrap: balance; }
.statement-wrap { display: grid; gap: 1.5rem; grid-template-columns: minmax(0, 1fr); }
.statement-side { max-width: 46ch; color: var(--muted); }
.statement-side p { margin: 0 0 1rem; }
@media (min-width: 900px) {
  .statement-wrap { grid-template-columns: minmax(0, 7fr) minmax(0, 4fr); gap: 5rem; align-items: end; }
}

/* ---------- works: rows of images, each at its natural proportions ---------- */
.rows {
  --row-h: clamp(220px, 24vw, 340px);
  display: flex; flex-wrap: wrap; gap: clamp(1.5rem, 2.4vw, 2.25rem) clamp(1.25rem, 2.2vw, 2rem);
}
.rows::after { content: ""; flex-grow: 1000; }
.work { margin: 0; min-width: 0; flex: calc(var(--ar) * 100) 1 calc(var(--ar) * var(--row-h)); }
.work button { display: block; width: 100%; padding: 0; border: 0; background: none; cursor: zoom-in; color: inherit; font: inherit; text-align: left; }
.work img { width: 100%; height: auto; transition: opacity 0.2s; }
.work button:hover img { opacity: 0.9; }
.work figcaption { margin-top: 0.55rem; font-size: 0.85rem; color: var(--muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.work .work-title { font-family: var(--display); font-style: italic; font-size: 0.98rem; color: var(--ink); }
@media (max-width: 560px) { .rows { --row-h: 100vw; } }

.page-title { font-family: var(--display); font-weight: 400; margin: 0 0 2.5rem; font-size: clamp(2.2rem, 5vw, 3.6rem); letter-spacing: -0.015em; }

/* ---------- lightbox ---------- */
.lightbox { border: 0; padding: 0; margin: 0; max-width: none; max-height: none; width: 100%; height: 100%; background: var(--bg); color: var(--ink); }
.lightbox::backdrop { background: rgba(251, 249, 249, 0.9); }
.lightbox[open] { display: grid; grid-template-rows: auto minmax(0, 1fr) auto; }
.lb-bar { display: flex; justify-content: space-between; align-items: center; padding: 1rem var(--gutter); font-size: 0.9rem; color: var(--muted); }
.lb-bar button, .lb-nav button { background: none; border: 0; font: inherit; color: var(--ink); cursor: pointer; padding: 0.4rem 0.2rem; }
.lb-stage { display: flex; align-items: center; justify-content: center; padding: 0 var(--gutter); min-height: 0; }
.lb-stage img { max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain; }
.lb-foot { display: flex; flex-wrap: wrap; gap: 0.75rem 2rem; justify-content: space-between; align-items: baseline; padding: 1rem var(--gutter) 1.5rem; font-size: 0.9rem; color: var(--muted); }
.lb-foot .lb-title { font-family: var(--display); font-style: italic; font-size: 1.2rem; color: var(--ink); }
.lb-nav { display: flex; gap: 1.5rem; }

/* ---------- about ---------- */
.about-grid { display: grid; gap: 3rem; grid-template-columns: minmax(0, 1fr); align-items: start; }
@media (min-width: 900px) {
  .about-grid { grid-template-columns: minmax(0, 5fr) minmax(0, 6fr); gap: clamp(3rem, 7vw, 7rem); }
  .about-photo { position: sticky; top: 2rem; }
}
.about-photo { margin: 0; }
.about-photo figcaption { margin-top: 0.6rem; font-size: 0.85rem; color: var(--muted); }
.prose { max-width: 60ch; }
.prose p { margin: 0 0 1.25rem; }
.prose .lede { font-family: var(--display); font-size: clamp(1.4rem, 2.4vw, 1.85rem); line-height: 1.3; letter-spacing: -0.01em; }
/* ---------- contact ---------- */
.contact-lead { max-width: 46ch; color: var(--muted); margin: -1.25rem 0 1.5rem; }
.contact-email { margin: 0; font-family: var(--display); font-weight: 300; font-size: clamp(1.8rem, 5vw, 3.4rem); letter-spacing: -0.02em; overflow-wrap: anywhere; }
.contact-email a { text-decoration-thickness: 1px; text-underline-offset: 0.18em; }

/* ---------- closing band: pale pink to sage ---------- */
.band { background: linear-gradient(100deg, var(--blush), #dfe8e2); padding-block: clamp(3.5rem, 8vw, 6rem); }
.band .wrap { display: grid; gap: 1.5rem; grid-template-columns: minmax(0, 1fr); }
.band h2 { font-family: var(--display); font-weight: 300; margin: 0; max-width: 20ch; font-size: clamp(2rem, 4.5vw, 3.4rem); line-height: 1.1; letter-spacing: -0.02em; text-wrap: balance; }
.band p { margin: 0; color: var(--muted); max-width: 46ch; }
.band a.cta { justify-self: start; font-size: 1.05rem; padding-bottom: 0.2rem; border-bottom: 1px solid var(--ink); text-decoration: none; }
.band a.cta:hover { border-bottom-color: transparent; }

.site-footer { padding-block: 2rem; font-size: 0.875rem; color: var(--muted); }
.site-footer .wrap { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 0.75rem 2rem; }
.site-footer a { color: var(--muted); }

/* ---------- reduced motion: stills only ---------- */
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  .hero-wash, .hero-grain, .hero-slide.is-active, .hero-slide.is-leaving { animation: none; }
  .hero-slide { transition: none; }
  .hero-plus { transition: none; }
}
