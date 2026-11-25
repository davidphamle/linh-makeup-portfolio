'use client';

import dynamic from 'next/dynamic';
import { useCallback, useEffect, useRef, useState } from 'react';
import { EMAIL, HERO_IMAGE, PHONE, altFor, categories, lookLabel, portfolioItems, services, t, type Category, type Lang } from '@/lib/content';

const HeroCanvas = dynamic(() => import('@/components/HeroCanvas'), { ssr: false });

// One icon set, one size (18px), one stroke (1.5), text-role colour.
function IconClose() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>;
}
function IconChevron({ flip = false }: { flip?: boolean }) {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={flip ? 'rotate-180' : ''}><path d="M15 6l-6 6 6 6" /></svg>;
}

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { el.classList.add('is-visible'); io.disconnect(); } }),
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

export default function Home() {
  const [lang, setLang] = useState<Lang>('en');
  const [filter, setFilter] = useState<Category | 'all'>('all');
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [name, setName] = useState('');
  const [fromEmail, setFromEmail] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');
  const copy = t[lang];

  const shown = filter === 'all' ? portfolioItems : portfolioItems.filter((i) => i.category === filter);
  const catLabel = (c: Category) => {
    const found = categories.find((x) => x.id === c);
    return lang === 'en' ? found?.en ?? c : found?.vi ?? c;
  };

  const close = useCallback(() => setLightbox(null), []);
  const step = useCallback((d: number) => {
    setLightbox((cur) => {
      if (cur === null) return cur;
      const idx = shown.findIndex((i) => i.id === portfolioItems[cur]?.id);
      const next = (idx + d + shown.length) % shown.length;
      return portfolioItems.findIndex((i) => i.id === shown[next].id);
    });
  }, [shown]);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, close, step]);

  const mailto = () => {
    const subject = encodeURIComponent(`Makeup enquiry${date ? ` (${date})` : ''}`);
    const body = encodeURIComponent(`Hi Linh,\n\n${message}\n\n— ${name}${fromEmail ? ` (${fromEmail})` : ''}${date ? `\nDate: ${date}` : ''}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const current = lightbox !== null ? portfolioItems[lightbox] : null;

  return (
    <div className="min-h-screen bg-[#fdf8f3] text-ink antialiased">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#fdf8f3]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
          <a href="#top" className="text-lg font-medium text-brand-800">Linh Nguyen <span className="block text-xs text-ink-muted">Make-up Artist</span></a>
          <nav className="hidden items-center gap-6 text-sm md:flex" aria-label="Main">
            <a className="hover:text-brand-600" href="#work">{copy.navWork}</a>
            <a className="hover:text-brand-600" href="#services">{copy.navServices}</a>
            <a className="hover:text-brand-600" href="#about">{copy.navAbout}</a>
            <a className="rounded-lg bg-brand-800 px-4 py-2 text-white hover:bg-brand-700" href="#contact">{copy.navContact}</a>
          </nav>
          <div className="flex items-center rounded-lg border border-black/10 p-1 text-sm" role="group" aria-label="Language / Ngôn ngữ">
            <button onClick={() => setLang('en')} aria-pressed={lang === 'en'} className={`rounded-md px-3 py-1 ${lang === 'en' ? 'bg-brand-800 text-white' : 'text-ink-secondary'}`}>EN</button>
            <button onClick={() => setLang('vi')} aria-pressed={lang === 'vi'} className={`rounded-md px-3 py-1 ${lang === 'vi' ? 'bg-brand-800 text-white' : 'text-ink-secondary'}`}>VI</button>
          </div>
        </div>
      </header>

      <main id="top">
        {/* Hero: calm paper with the Three.js shimmer behind, one line, one real photo. */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0"><HeroCanvas /></div>
          <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-6 py-16 md:grid-cols-2 md:py-24">
            <div>
              <h1 className="font-display text-4xl leading-[1.05] text-brand-900 md:text-6xl">Linh Nguyen</h1>
              <p className="mt-3 max-w-md text-lg text-ink-secondary">{copy.heroLine}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#work" className="rounded-lg bg-brand-800 px-6 py-3 text-sm text-white hover:bg-brand-700">{copy.heroCta}</a>
                <a href="#contact" className="rounded-lg border border-black/10 bg-white px-6 py-3 text-sm text-brand-800 hover:bg-brand-50">{copy.heroCta2}</a>
              </div>
              <dl className="mt-8 flex flex-wrap">
                {[[copy.chipYears, copy.chipYearsSub], [copy.chipWhere, copy.chipWhereSub], [copy.chipLang, copy.chipLangSub]].map(([v, l], i) => (
                  <div key={l} className={`pr-4 ${i > 0 ? 'border-l border-black/10 pl-4' : ''} mr-4`}>
                    <dt className="sr-only">{l}</dt>
                    <dd className="text-2xl font-medium tabular-nums text-brand-900">{v}</dd>
                    <dd className="mt-1 text-xs text-ink-muted">{l}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <Reveal className="relative">
              <img src={HERO_IMAGE} alt="Linh Nguyen — bridal makeup" className="aspect-[3/4] w-full rounded-2xl object-cover object-top shadow-[0_8px_24px_rgba(0,0,0,0.08)]" />
            </Reveal>
          </div>
        </section>

        {/* Work: full-bleed masonry gallery */}
        <section id="work" className="scroll-mt-20 bg-white py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <h2 className="font-display text-4xl text-brand-900">{copy.workTitle}</h2>
              <div className="mt-4 h-px w-12 bg-brand-300" aria-hidden="true" />
              <p className="mt-4 text-sm text-ink-muted">{copy.workSub}</p>
              <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Filter">
                {categories.map((c) => (
                  <button key={c.id} onClick={() => setFilter(c.id)} aria-pressed={filter === c.id} className={`rounded-lg border px-4 py-1.5 text-sm transition-colors duration-200 ${filter === c.id ? 'border-brand-800 bg-brand-800 text-white' : 'border-black/10 hover:bg-brand-50'}`}>{lang === 'en' ? c.en : c.vi}</button>
                ))}
              </div>
            </Reveal>
            <div className="mt-8 columns-2 gap-4 md:columns-3 [&>*]:mb-4">
              {shown.map((item) => (
                <Reveal key={item.id}>
                  <button onClick={() => setLightbox(portfolioItems.findIndex((p) => p.id === item.id))} className="group block w-full overflow-hidden rounded-2xl bg-white text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500" aria-label={altFor(item, lang)}>
                    <img src={item.src} alt={altFor(item, lang)} loading="lazy" className="w-full object-cover transition-opacity duration-200 ease-out group-hover:opacity-90" />
                    <span className="block px-3 py-2 font-mono text-xs text-ink-muted">{lookLabel(item, lang)}</span>
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Services: visual cards, one line each. Varied widths so the row has rhythm. */}
        <section id="services" className="scroll-mt-20 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <h2 className="font-display text-4xl text-brand-900">{copy.servicesTitle}</h2>
              <div className="mt-4 h-px w-12 bg-brand-300" aria-hidden="true" />
            </Reveal>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
              {services.map((s) => (
                <Reveal key={s.id} className={s.cols}>
                  <article className="h-full overflow-hidden rounded-2xl bg-white shadow-sm">
                    <img src={s.image} alt={lang === 'en' ? s.titleEn : s.titleVi} loading="lazy" className="aspect-[4/3] w-full object-cover object-top" />
                    <div className="p-4">
                      <h3 className="text-lg font-medium text-brand-900">{lang === 'en' ? s.titleEn : s.titleVi}</h3>
                      <p className="mt-1 text-sm text-ink-secondary">{lang === 'en' ? s.lineEn : s.lineVi}</p>
                      <p className="mt-2 text-xs text-ink-muted">{copy.price}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* About: four short sentences + timeline strip */}
        <section id="about" className="scroll-mt-20 bg-white py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <h2 className="font-display text-4xl text-brand-900">{copy.aboutTitle}</h2>
              <div className="mt-4 h-px w-12 bg-brand-300" aria-hidden="true" />
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-secondary">{copy.about1}</p>
              <p className="mt-2 max-w-2xl text-lg leading-relaxed text-ink-secondary">{copy.about2}</p>
              <p className="mt-2 max-w-2xl text-lg leading-relaxed text-ink-secondary">{copy.about3}</p>
              <p className="mt-2 max-w-2xl text-lg leading-relaxed text-ink-secondary">{copy.about4}</p>
            </Reveal>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {copy.timeline.map((e) => (
                <div key={e.year} className="rounded-2xl bg-brand-50 px-5 py-4">
                  <p className="text-xl font-medium tabular-nums text-brand-800">{e.year}</p>
                  <p className="mt-1 text-sm text-ink-secondary">{e.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact: one line + slim form */}
        <section id="contact" className="scroll-mt-20 bg-brand-800 py-16 text-white md:py-24">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2">
            <div>
              <h2 className="font-display text-4xl">{copy.contactTitle}</h2>
              <div className="mt-4 h-px w-12 bg-brand-300" aria-hidden="true" />
              <p className="mt-4 text-brand-100">{copy.contactIntro}</p>
              <p className="mt-3 text-sm text-brand-200">{copy.contactNote}</p>
              <p className="mt-6 text-lg"><a className="underline" href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
              <p className="mt-1 text-lg"><a className="underline" href={`tel:${PHONE}`}>{PHONE}</a></p>
              <p className="mt-1 text-sm text-brand-200">North Adelaide, SA</p>
            </div>
            <form className="rounded-2xl bg-white p-6 text-ink shadow-[0_1px_2px_rgba(0,0,0,0.05)]" onSubmit={(e) => { e.preventDefault(); mailto(); }}>
              <label className="block text-sm font-medium">{copy.formName}<input required value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2" /></label>
              <label className="mt-4 block text-sm font-medium">{copy.formEmail}<input required type="email" value={fromEmail} onChange={(e) => setFromEmail(e.target.value)} className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2" /></label>
              <label className="mt-4 block text-sm font-medium">{copy.formDate}<input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2" /></label>
              <label className="mt-4 block text-sm font-medium">{copy.formMessage}<textarea required rows={3} value={message} onChange={(e) => setMessage(e.target.value)} className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2" /></label>
              <button type="submit" className="mt-5 w-full rounded-lg bg-brand-800 py-3 text-sm text-white transition-colors duration-200 hover:bg-brand-700">{copy.formSubmit}</button>
              <p className="mt-3 text-xs text-ink-muted">{copy.formHint}</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-sm text-ink-muted">
        <p className="text-base font-medium text-brand-800">Linh Nguyen — Make-up Artist</p>
        <p className="mt-1">{copy.footer}</p>
        <p className="mt-1"><a className="underline" href={`mailto:${EMAIL}`}>{EMAIL}</a> · <a className="underline" href={`tel:${PHONE}`}>{PHONE}</a></p>
      </footer>

      {/* Lightbox */}
      {current && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4" role="dialog" aria-modal="true" aria-label={catLabel(current.category)} onClick={close}>
          <button onClick={(e) => { e.stopPropagation(); close(); }} className="absolute right-4 top-4 rounded-lg bg-white/90 p-2 text-ink" aria-label="Close"><IconClose /></button>
          <button onClick={(e) => { e.stopPropagation(); step(-1); }} className="absolute left-2 top-1/2 rounded-lg bg-white/90 p-2 text-ink md:left-6" aria-label="Previous"><IconChevron /></button>
          <figure className="max-h-full" onClick={(e) => e.stopPropagation()}>
            <img src={current.src} alt={altFor(current, lang)} className="max-h-[80vh] w-auto max-w-full rounded-xl object-contain" />
            <figcaption className="mt-3 text-center font-mono text-xs text-white/80">{lookLabel(current, lang)} · {portfolioItems.findIndex((p) => p.id === current.id) + 1} {copy.lightboxOf} {portfolioItems.length}</figcaption>
          </figure>
          <button onClick={(e) => { e.stopPropagation(); step(1); }} className="absolute right-2 top-1/2 rounded-lg bg-white/90 p-2 text-ink md:right-6" aria-label="Next"><IconChevron flip /></button>
        </div>
      )}
    </div>
  );
}
