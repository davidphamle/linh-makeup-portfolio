'use client';

import { useState } from 'react';
import { EMAIL, portfolioItems, services, t, type Lang } from '@/lib/content';

export default function Home() {
  const [lang, setLang] = useState<Lang>('en');
  const [name, setName] = useState('');
  const [fromEmail, setFromEmail] = useState('');
  const [date, setDate] = useState('');
  const [occasion, setOccasion] = useState('');
  const [message, setMessage] = useState('');
  const [filter, setFilter] = useState('all');
  const copy = t[lang];

  const mailto = () => {
    const subject = encodeURIComponent(
      `Makeup enquiry${occasion ? ` — ${occasion}` : ''}${date ? ` (${date})` : ''}`,
    );
    const body = encodeURIComponent(
      `Hi Linh,\n\n${message || ''}\n\n— ${name || ''}${fromEmail ? ` (${fromEmail})` : ''}${date ? `\nDate: ${date}` : ''}${occasion ? `\nOccasion: ${occasion}` : ''}`,
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const shown = filter === 'all' ? portfolioItems : portfolioItems.filter((i) => i.id === filter);

  return (
    <div className="min-h-screen bg-brand-50 text-stone-800 antialiased">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-brand-200/70 bg-brand-50/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <a href="#top" className="font-display text-xl tracking-wide text-brand-800">
            Linh Nguyen <span className="block text-[11px] uppercase tracking-[0.3em] text-brand-500">Make-up Artist</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm md:flex" aria-label="Main">
            <a className="hover:text-brand-600" href="#portfolio">{copy.navPortfolio}</a>
            <a className="hover:text-brand-600" href="#services">{copy.navServices}</a>
            <a className="hover:text-brand-600" href="#about">{copy.navAbout}</a>
            <a className="hover:text-brand-600" href="#experience">{copy.navExperience}</a>
            <a className="rounded-full bg-brand-800 px-4 py-2 text-white hover:bg-brand-700" href="#contact">{copy.navContact}</a>
          </nav>
          <div className="flex items-center rounded-full border border-brand-300 p-1 text-sm" role="group" aria-label="Language / Ngôn ngữ">
            <button onClick={() => setLang('en')} aria-pressed={lang === 'en'} className={`rounded-full px-3 py-1 ${lang === 'en' ? 'bg-brand-800 text-white' : 'text-brand-700'}`}>EN</button>
            <button onClick={() => setLang('vi')} aria-pressed={lang === 'vi'} className={`rounded-full px-3 py-1 ${lang === 'vi' ? 'bg-brand-800 text-white' : 'text-brand-700'}`}>VI</button>
          </div>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-brand-500">{copy.heroEyebrow}</p>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] text-brand-900 md:text-6xl">
              {copy.heroTitleA}<br /><em className="text-brand-600">{copy.heroTitleB}</em>
            </h1>
            <p className="mt-6 max-w-lg leading-relaxed text-stone-600">{copy.heroIntro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#portfolio" className="rounded-full bg-brand-800 px-6 py-3 text-sm text-white hover:bg-brand-700">{copy.heroCtaPortfolio}</a>
              <a href="#contact" className="rounded-full border border-brand-400 px-6 py-3 text-sm text-brand-800 hover:bg-brand-100">{copy.heroCtaEnquire}</a>
            </div>
            <p className="mt-4 text-sm text-stone-500">{copy.heroNote}</p>
            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-brand-200 pt-6">
              {[[copy.statsYears, copy.statsYearsLabel], [copy.statsPlaces, copy.statsPlacesLabel], [copy.statsLang, copy.statsLangLabel]].map(([v, l]) => (
                <div key={l}><dt className="font-display text-lg leading-tight text-brand-800">{v}</dt><dd className="mt-1 text-xs leading-snug text-stone-500">{l}</dd></div>
              ))}
            </dl>
          </div>
          <div className="relative" aria-label="Portfolio preview placeholder">
            <div className="flex h-full min-h-[320px] flex-col items-center justify-center rounded-[2rem] p-8 text-center text-white shadow-lg" style={{ background: 'linear-gradient(135deg,#724422,#bc8d60 45%,#e8b4a0)' }}>
              <p className="font-display text-4xl italic">Linh Nguyen</p>
              <p className="mt-2 text-xs uppercase tracking-[0.35em]">Make-up Artist · Adelaide</p>
              <p className="mt-8 max-w-xs text-sm leading-relaxed opacity-90">{copy.placeholderTag} — {copy.placeholderNote}</p>
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="scroll-mt-24 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-500">{copy.portfolioEyebrow}</p>
            <h2 className="mt-2 font-display text-4xl text-brand-900">{copy.portfolioTitle}</h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-stone-600">{copy.portfolioIntro}</p>
            <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">{copy.placeholderNote}</div>
            <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Filter portfolio">
              <button onClick={() => setFilter('all')} className={`rounded-full border px-4 py-1.5 text-sm ${filter === 'all' ? 'bg-brand-800 text-white' : 'border-brand-300'}`}>{lang === 'en' ? 'All' : 'Tất cả'}</button>
              {portfolioItems.map((i) => (
                <button key={i.id} onClick={() => setFilter(i.id)} className={`rounded-full border px-4 py-1.5 text-sm ${filter === i.id ? 'bg-brand-800 text-white' : 'border-brand-300'}`}>{lang === 'en' ? i.categoryEn : i.categoryVi}</button>
              ))}
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {shown.map((item) => (
                <article key={item.id} className="overflow-hidden rounded-2xl border border-brand-100 bg-brand-50 shadow-sm">
                  <div className="flex aspect-[4/5] flex-col items-center justify-center p-6 text-center text-white" style={{ background: item.gradient }}>
                    <span className="rounded-full bg-white/25 px-3 py-1 text-[11px] uppercase tracking-widest">{copy.placeholderTag}</span>
                    <p className="mt-4 font-display text-2xl leading-tight">{lang === 'en' ? item.titleEn : item.titleVi}</p>
                    <p className="mt-2 text-sm opacity-90">{lang === 'en' ? item.categoryEn : item.categoryVi}</p>
                  </div>
                  <div className="p-4"><p className="text-sm leading-relaxed text-stone-600">{lang === 'en' ? item.descEn : item.descVi}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="scroll-mt-24 py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-500">{copy.servicesEyebrow}</p>
            <h2 className="mt-2 font-display text-4xl text-brand-900">{copy.servicesTitle}</h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-stone-600">{copy.servicesIntro}</p>
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <article key={s.id} className="rounded-2xl border border-brand-100 bg-white p-6 shadow-sm">
                  <span className="text-2xl" aria-hidden="true">{s.icon}</span>
                  <h3 className="mt-3 font-display text-xl text-brand-900">{lang === 'en' ? s.titleEn : s.titleVi}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">{lang === 'en' ? s.descEn : s.descVi}</p>
                  <p className="mt-4 text-sm font-medium text-brand-600">{copy.priceOnEnquiry}</p>
                </article>
              ))}
              <article className="flex flex-col justify-center rounded-2xl bg-brand-800 p-6 text-white shadow-sm">
                <h3 className="font-display text-xl">{lang === 'en' ? 'Not sure what you need?' : 'Chưa chắc bạn cần gì?'}</h3>
                <p className="mt-2 text-sm leading-relaxed opacity-90">{lang === 'en' ? 'Email Linh with your occasion and date, and she will help you choose the right service.' : 'Hãy gửi email cho Linh kèm dịp và ngày của bạn, Linh sẽ giúp bạn chọn dịch vụ phù hợp.'}</p>
                <a href="#contact" className="mt-4 inline-block w-fit rounded-full bg-white px-5 py-2 text-sm text-brand-800">{copy.heroCtaEnquire}</a>
              </article>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-24 bg-white py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-5">
            <div className="md:col-span-3">
              <p className="text-xs uppercase tracking-[0.3em] text-brand-500">{copy.aboutEyebrow}</p>
              <h2 className="mt-2 font-display text-4xl text-brand-900">{copy.aboutTitle}</h2>
              <p className="mt-4 leading-relaxed text-stone-600">{copy.aboutP1}</p>
              <p className="mt-4 leading-relaxed text-stone-600">{copy.aboutP2}</p>
              <p className="mt-4 leading-relaxed text-stone-600">{copy.aboutP3}</p>
            </div>
            <aside className="rounded-2xl bg-brand-50 p-6 md:col-span-2">
              <h3 className="font-display text-xl text-brand-900">{copy.aboutListTitle}</h3>
              <ul className="mt-4 space-y-3 text-sm text-stone-700">
                {copy.aboutList.map((x) => (<li key={x} className="flex gap-2"><span className="text-brand-500" aria-hidden="true">✦</span>{x}</li>))}
              </ul>
            </aside>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-24 py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-500">{copy.expEyebrow}</p>
            <h2 className="mt-2 font-display text-4xl text-brand-900">{copy.expTitle}</h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-stone-600">{copy.expIntro}</p>
            <ol className="mt-8 space-y-5">
              {copy.expItems.map((e) => (
                <li key={e.title} className="rounded-2xl border border-brand-100 bg-white p-6 shadow-sm md:flex md:gap-8">
                  <div className="md:w-48 md:shrink-0"><p className="font-display text-lg text-brand-800">{e.period}</p><p className="text-sm text-stone-500">{e.org}</p></div>
                  <div><h3 className="font-display text-xl text-brand-900">{e.title}</h3><p className="mt-1 text-sm leading-relaxed text-stone-600">{e.desc}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24 bg-brand-800 py-16 text-white md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-brand-200">{copy.contactEyebrow}</p>
              <h2 className="mt-2 font-display text-4xl">{copy.contactTitle}</h2>
              <p className="mt-3 leading-relaxed text-brand-100">{copy.contactIntro}</p>
              <dl className="mt-8 space-y-4 text-sm">
                <div><dt className="uppercase tracking-widest text-brand-200">{copy.contactEmailLabel}</dt><dd className="mt-1"><a className="underline" href={`mailto:${EMAIL}`}>{EMAIL}</a></dd></div>
                <div><dt className="uppercase tracking-widest text-brand-200">{copy.contactLocationLabel}</dt><dd className="mt-1">{copy.contactLocation}</dd></div>
                <div><dt className="uppercase tracking-widest text-brand-200">{copy.availabilityTitle}</dt><dd className="mt-1 leading-relaxed text-brand-100">{copy.availabilityText}</dd></div>
                <div><dt className="uppercase tracking-widest text-brand-200">{copy.cvTitle}</dt><dd className="mt-1 leading-relaxed text-brand-100">{copy.cvText}</dd><dd className="mt-2"><a className="inline-block rounded-full bg-white px-4 py-2 text-brand-800" href={`mailto:${EMAIL}?subject=${encodeURIComponent('CV request — Linh Nguyen')}`}>{copy.cvButton}</a></dd></div>
              </dl>
            </div>
            <form className="rounded-2xl bg-white p-6 text-stone-800 shadow-lg" onSubmit={(e) => { e.preventDefault(); mailto(); }}>
              <label className="block text-sm font-medium">{copy.formName}<input required value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2" /></label>
              <label className="mt-4 block text-sm font-medium">{copy.formEmail}<input required type="email" value={fromEmail} onChange={(e) => setFromEmail(e.target.value)} className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2" /></label>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-medium">{copy.formDate}<input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2" /></label>
                <label className="block text-sm font-medium">{copy.formOccasion}<input value={occasion} onChange={(e) => setOccasion(e.target.value)} placeholder={copy.formOccasionPlaceholder} className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2" /></label>
              </div>
              <label className="mt-4 block text-sm font-medium">{copy.formMessage}<textarea required rows={5} value={message} onChange={(e) => setMessage(e.target.value)} placeholder={copy.formMessagePlaceholder} className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2" /></label>
              <button type="submit" className="mt-5 w-full rounded-full bg-brand-800 py-3 text-sm text-white hover:bg-brand-700">{copy.formSubmit}</button>
              <p className="mt-3 text-xs leading-relaxed text-stone-500">{copy.formNote}</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-brand-200 py-8 text-center text-sm text-stone-500">
        <p className="font-display text-lg text-brand-800">Linh Nguyen — Make-up Artist</p>
        <p className="mt-1">{copy.footerNote}</p>
        <p className="mt-1"><a className="underline" href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
        <p className="mt-3 text-xs">{copy.footerPlaceholder}</p>
        <a href="#top" className="mt-4 inline-block underline">{copy.backToTop}</a>
      </footer>
    </div>
  );
}
