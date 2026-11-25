// Local content only. No CMS, no API, no env vars.
// v2: visual first. Copy cut by ~70% vs v1. Gallery is real photos from
// Linh's own Framer site (dieplammakeup.framer.website), 2016 to now.
// Nothing invented: no prices, no testimonials, no client names, no venues.

export type Lang = 'en' | 'vi';
export type Category = 'bridal' | 'stage' | 'film' | 'workshop';

export type PortfolioItem = {
  id: string;
  src: string;
  category: Category;
  wide?: boolean;
};

export const HERO_IMAGE = '/portfolio/hero.jpg';

export const portfolioItems: PortfolioItem[] = [
  { id: 'bridal-01', src: '/portfolio/bridal-01.jpg', category: 'bridal' },
  { id: 'stage-01', src: '/portfolio/stage-01.jpg', category: 'stage' },
  { id: 'bridal-02', src: '/portfolio/bridal-02.jpg', category: 'bridal' },
  { id: 'film-01', src: '/portfolio/film-01.jpg', category: 'film', wide: true },
  { id: 'bridal-03', src: '/portfolio/bridal-03.jpg', category: 'bridal' },
  { id: 'workshop-01', src: '/portfolio/workshop-01.jpg', category: 'workshop', wide: true },
  { id: 'bridal-04', src: '/portfolio/bridal-04.jpg', category: 'bridal' },
  { id: 'stage-02', src: '/portfolio/stage-02.jpg', category: 'stage', wide: true },
  { id: 'film-02', src: '/portfolio/film-02.jpg', category: 'film', wide: true },
  { id: 'bridal-05', src: '/portfolio/bridal-05.jpg', category: 'bridal' },
  { id: 'workshop-02', src: '/portfolio/workshop-02.jpg', category: 'workshop', wide: true },
  { id: 'stage-03', src: '/portfolio/stage-03.jpg', category: 'stage', wide: true },
  { id: 'film-03', src: '/portfolio/film-03.jpg', category: 'film', wide: true },
  { id: 'workshop-03', src: '/portfolio/workshop-03.jpg', category: 'workshop' },
  { id: 'workshop-04', src: '/portfolio/workshop-04.jpg', category: 'workshop', wide: true },
];

export const categories: { id: Category | 'all'; en: string; vi: string }[] = [
  { id: 'all', en: 'All', vi: 'Tất cả' },
  { id: 'bridal', en: 'Bridal', vi: 'Cô dâu' },
  { id: 'stage', en: 'Stage', vi: 'Sân khấu' },
  { id: 'film', en: 'Film & TV', vi: 'Phim & TV' },
  { id: 'workshop', en: 'Workshops', vi: 'Lớp học' },
];

// Descriptive alt text: category + look number + artist + city.
// No invented client names, venues or dates.
export function altFor(item: PortfolioItem, lang: Lang): string {
  const num = item.id.replace(/^[a-z]+-/, '');
  const label = categories.find((c) => c.id === item.category);
  const cat = lang === 'en' ? label?.en ?? item.category : label?.vi ?? item.category;
  return lang === 'en'
    ? `${cat} makeup look ${num} by Linh Nguyen, Diep Lam Make Up, Adelaide`
    : `Mẫu trang điểm ${cat} số ${num} của Linh Nguyen, Diep Lam Make Up, Adelaide`;
}

// Quiet visible caption under each gallery photo (unslop signature detail:
// small mono meta, not a pill). Same numbering as the alt text.
export function lookLabel(item: PortfolioItem, lang: Lang): string {
  const num = item.id.replace(/^[a-z]+-/, '');
  const label = categories.find((c) => c.id === item.category);
  const cat = lang === 'en' ? label?.en ?? item.category : label?.vi ?? item.category;
  return lang === 'en' ? `${cat} · Look ${num}` : `${cat} · Mẫu ${num}`;
}

export const services = [
  { id: 'bridal', cols: 'lg:col-span-2', image: '/portfolio/bridal-01.jpg', titleEn: 'Bridal', titleVi: 'Cô dâu', lineEn: 'Calm, long-lasting bridal looks.', lineVi: 'Trang điểm cô dâu bền đẹp, nhẹ nhàng.' },
  { id: 'event', cols: 'lg:col-span-2', image: '/portfolio/bridal-04.jpg', titleEn: 'Wedding & Event', titleVi: 'Tiệc cưới & sự kiện', lineEn: 'Bridesmaids, guests & family.', lineVi: 'Phù dâu, khách mời & gia đình.' },
  { id: 'party', cols: 'lg:col-span-2', image: '/portfolio/bridal-02.jpg', titleEn: 'Party & Glam', titleVi: 'Tiệc & quyến rũ', lineEn: 'Soft natural to full glam.', lineVi: 'Từ tự nhiên đến quyến rũ nổi bật.' },
  { id: 'theatre', cols: 'lg:col-span-3', image: '/portfolio/stage-01.jpg', titleEn: 'Theatre', titleVi: 'Sân khấu', lineEn: 'Stage face layouts.', lineVi: 'Thiết kế gương mặt sân khấu.' },
  { id: 'lesson', cols: 'lg:col-span-3', image: '/portfolio/workshop-01.jpg', titleEn: 'Lesson', titleVi: 'Dạy trang điểm', lineEn: 'One-to-one makeup lesson.', lineVi: 'Học trang điểm một kèm một.' },
];

export const t = {
  en: {
    navWork: 'Work', navServices: 'Services', navAbout: 'About', navContact: 'Contact',
    heroLine: 'Bridal, event & theatrical makeup artist',
    heroCta: 'See the work', heroCta2: 'Enquire',
    chipYears: '8+ years', chipYearsSub: 'makeup artistry',
    chipWhere: 'Adelaide + Vietnam', chipWhereSub: 'bridal · stage · film',
    chipLang: 'English · Tiếng Việt', chipLangSub: 'bilingual',
    workTitle: 'Selected work', workSub: '2016–now · from Diep Lam Make Up',
    servicesTitle: 'Services', price: 'Price on enquiry',
    aboutTitle: 'Hi, I’m Linh',
    about1: 'Freelance makeup artist & coach in Adelaide, working in bridal, stage and film since 2016.',
    about2: 'Former Makeup Artist Host on Vietnam Television (VTV). I work in English and Vietnamese.',
    about3: 'I trained at Tra Thu Le Makeup Academy in Hanoi in 2016 and Quan Nguyen Pu Le Academy in 2019–2020.',
    about4: 'I work with brides and events in Adelaide and Vietnam, mainly for Asian clients, and teach one-to-one lessons in Vietnamese.',
    timeline: [
      { year: '2016', label: 'Freelance makeup artist & coach' },
      { year: '2016–19', label: 'Makeup Artist Host · VTV' },
      { year: '2019–20', label: 'Makeup Academy · Hanoi' },
      { year: '2023–now', label: 'Talbot Hotel · Adelaide' },
    ],
    contactTitle: 'Enquire',
    contactNote: 'Not available Christmas / New Year · Travel 5 Dec 2026 – 6 Jan 2027',
    contactIntro: 'Tell me your date and what you have in mind — bridal, event, stage or a one-to-one lesson. I work in Adelaide and Vietnam.',
    formName: 'Your name', formEmail: 'Your email', formDate: 'Date (if any)', formMessage: 'Message',
    formSubmit: 'Open email to Linh', formHint: 'Opens your email app. Nothing is stored.',
    footer: 'Make-up Artist · North Adelaide, SA · English & Tiếng Việt',
    lightboxOf: 'of',
  },
  vi: {
    navWork: 'Tác phẩm', navServices: 'Dịch vụ', navAbout: 'Giới thiệu', navContact: 'Liên hệ',
    heroLine: 'Chuyên viên trang điểm cô dâu, sự kiện & sân khấu',
    heroCta: 'Xem tác phẩm', heroCta2: 'Liên hệ',
    chipYears: '8+ năm', chipYearsSub: 'trang điểm',
    chipWhere: 'Adelaide + Việt Nam', chipWhereSub: 'cô dâu · sân khấu · phim',
    chipLang: 'Tiếng Anh · Tiếng Việt', chipLangSub: 'song ngữ',
    workTitle: 'Tác phẩm chọn lọc', workSub: '2016–nay · từ Diep Lam Make Up',
    servicesTitle: 'Dịch vụ', price: 'Giá báo theo yêu cầu',
    aboutTitle: 'Xin chào, mình là Linh',
    about1: 'Chuyên viên trang điểm & giảng dạy tự do tại Adelaide, làm cô dâu, sân khấu và phim từ năm 2016.',
    about2: 'Từng là Makeup Artist Host trên Đài Truyền hình Việt Nam (VTV). Mình giao tiếp bằng tiếng Anh và tiếng Việt.',
    about3: 'Mình được đào tạo tại Học viện Trang điểm Tra Thu Le ở Hà Nội năm 2016 và Học viện Quan Nguyen Pu Le năm 2019–2020.',
    about4: 'Mình làm việc với cô dâu và sự kiện tại Adelaide và Việt Nam, chủ yếu cho khách châu Á, và dạy trang điểm một kèm một bằng tiếng Việt.',
    timeline: [
      { year: '2016', label: 'Trang điểm tự do & giảng dạy' },
      { year: '2016–19', label: 'Makeup Artist Host · VTV' },
      { year: '2019–20', label: 'Học viện Trang điểm · Hà Nội' },
      { year: '2023–nay', label: 'Talbot Hotel · Adelaide' },
    ],
    contactTitle: 'Liên hệ',
    contactNote: 'Không nhận lịch Giáng sinh / Năm mới · Du lịch 5 Dec 2026 – 6 Jan 2027',
    contactIntro: 'Cho mình biết ngày của bạn và điều bạn mong muốn — cô dâu, sự kiện, sân khấu hay học trang điểm một kèm một. Mình làm việc tại Adelaide và Việt Nam.',
    formName: 'Tên của bạn', formEmail: 'Email của bạn', formDate: 'Ngày (nếu có)', formMessage: 'Lời nhắn',
    formSubmit: 'Mở email gửi cho Linh', formHint: 'Mở ứng dụng email của bạn. Không lưu trữ thông tin.',
    footer: 'Chuyên viên Trang điểm · North Adelaide, SA · Tiếng Anh & Tiếng Việt',
    lightboxOf: '/',
  },
} as const;

export const EMAIL = 'nguyenlinhlinh9494@gmail.com';
export const PHONE = '0424785266';
export const SITE_URL = 'https://linh-makeup-portfolio.vercel.app';
