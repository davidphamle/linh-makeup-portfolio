// Local content only. No CMS, no API, no env vars.
// Every fact below is from Linh's verified background. Nothing invented:
// no phone number, no prices, no testimonials, no client names, no real
// portfolio photos yet. Gallery items are labelled placeholders.

export type Lang = 'en' | 'vi';

export type PortfolioItem = {
  id: string;
  categoryEn: string;
  categoryVi: string;
  titleEn: string;
  titleVi: string;
  descEn: string;
  descVi: string;
  gradient: string;
};

export const portfolioItems: PortfolioItem[] = [
  { id: 'bridal', categoryEn: 'Bridal', categoryVi: 'Cô dâu', titleEn: 'Bridal makeup', titleVi: 'Trang điểm cô dâu', descEn: 'Soft, long-lasting bridal looks for the whole day.', descVi: 'Lớp trang điểm cô dâu nhẹ nhàng, bền đẹp suốt cả ngày.', gradient: 'linear-gradient(135deg,#f5e9d9,#e8b4a0 55%,#bc8d60)' },
  { id: 'wedding-guest', categoryEn: 'Wedding guest', categoryVi: 'Khách dự tiệc cưới', titleEn: 'Wedding guest makeup', titleVi: 'Trang điểm khách dự tiệc cưới', descEn: 'Polished, photo-ready makeup for wedding guests.', descVi: 'Trang điểm chỉn chu, lên hình đẹp cho khách dự tiệc cưới.', gradient: 'linear-gradient(135deg,#fbe4e8,#e8c8d8 55%,#a06b3f)' },
  { id: 'event-party', categoryEn: 'Event / party', categoryVi: 'Tiệc / sự kiện', titleEn: 'Event & party makeup', titleVi: 'Trang điểm tiệc & sự kiện', descEn: 'Glam or natural looks for parties and special events.', descVi: 'Phong cách quyến rũ hoặc tự nhiên cho các buổi tiệc và sự kiện.', gradient: 'linear-gradient(135deg,#e8d0b4,#d4b08a 55%,#724422)' },
  { id: 'theatre', categoryEn: 'Theatre', categoryVi: 'Sân khấu', titleEn: 'Theatre face layout', titleVi: 'Thiết kế gương mặt sân khấu', descEn: 'Creative face layouts designed for the stage.', descVi: 'Thiết kế gương mặt sáng tạo dành cho sân khấu.', gradient: 'linear-gradient(135deg,#3d1f0a,#8a5530 55%,#d4b08a)' },
  { id: 'natural', categoryEn: 'Natural', categoryVi: 'Tự nhiên', titleEn: 'Natural / everyday makeup', titleVi: 'Trang điểm tự nhiên / hằng ngày', descEn: 'Fresh, natural makeup that still looks like you.', descVi: 'Trang điểm tươi tắn, tự nhiên, vẫn là chính bạn.', gradient: 'linear-gradient(135deg,#fdf8f3,#f5e9d9 55%,#e8c8a8)' },
  { id: 'photoshoot', categoryEn: 'Photoshoot', categoryVi: 'Chụp hình', titleEn: 'Photoshoot makeup', titleVi: 'Trang điểm chụp hình', descEn: 'Camera-ready makeup for portraits and shoots.', descVi: 'Trang điểm lên hình đẹp cho chân dung và các buổi chụp.', gradient: 'linear-gradient(135deg,#f3c2cb,#bc8d60 55%,#5c3318)' },
  { id: 'formal', categoryEn: 'Formal', categoryVi: 'Trang trọng', titleEn: 'Formal / special occasion', titleVi: 'Trang điểm dịp trang trọng', descEn: 'Elegant makeup for formal occasions and celebrations.', descVi: 'Trang điểm thanh lịch cho các dịp trang trọng và lễ kỷ niệm.', gradient: 'linear-gradient(135deg,#e8d0b4,#fbe4e8 55%,#a06b3f)' },
  { id: 'cultural', categoryEn: 'Cultural celebration', categoryVi: 'Lễ truyền thống', titleEn: 'Cultural / Vietnamese celebration', titleVi: 'Trang điểm lễ truyền thống Việt Nam', descEn: 'Makeup for Vietnamese and cultural celebrations in Adelaide and Vietnam.', descVi: 'Trang điểm cho các lễ kỷ niệm truyền thống Việt Nam tại Adelaide và Việt Nam.', gradient: 'linear-gradient(135deg,#d4b08a,#f5e9d9 55%,#bc4a3a)' },
];

export const services = [
  { id: 'bridal', icon: '✦', titleEn: 'Bridal makeup', titleVi: 'Trang điểm cô dâu', descEn: 'A calm, personal bridal service: a look planned with you, finished on the day, and made to last from morning to the last dance.', descVi: 'Dịch vụ cô dâu tận tâm: cùng bạn lên ý tưởng, trang điểm vào ngày cưới và giữ lớp nền bền đẹp từ sáng đến cuối buổi tiệc.' },
  { id: 'wedding-event', icon: '❀', titleEn: 'Wedding / event makeup', titleVi: 'Trang điểm tiệc cưới / sự kiện', descEn: 'Makeup for bridesmaids, wedding guests and family, so everyone feels confident and photographs beautifully.', descVi: 'Trang điểm cho phù dâu, khách mời và gia đình, để ai cũng tự tin và lên hình thật đẹp.' },
  { id: 'party', icon: '✧', titleEn: 'Event & party makeup', titleVi: 'Trang điểm tiệc & sự kiện', descEn: 'From soft and natural to full glam, for birthdays, graduations, dinners and nights out.', descVi: 'Từ nhẹ nhàng tự nhiên đến quyến rũ nổi bật, cho sinh nhật, lễ tốt nghiệp, tiệc tối và những buổi đi chơi.' },
  { id: 'theatre', icon: '🎭', titleEn: 'Theatre / creative face layout', titleVi: 'Thiết kế gương mặt sân khấu / sáng tạo', descEn: 'Creative face layouts for theatre and performance, drawing on Linh\u2019s experience designing face layouts for a theatre production.', descVi: 'Thiết kế gương mặt sáng tạo cho sân khấu và biểu diễn, dựa trên kinh nghiệm từng thiết kế gương mặt cho một vở diễn sân khấu.' },
  { id: 'lesson', icon: '♡', titleEn: 'Makeup lesson / consultation', titleVi: 'Dạy trang điểm / tư vấn', descEn: 'A relaxed one-to-one lesson: your everyday routine, the products you already own, and a look that suits you.', descVi: 'Buổi học riêng thoải mái: quy trình trang điểm hằng ngày, tận dụng sản phẩm bạn đã có, và phong cách hợp với bạn.' },
];

export const t = {
  en: {
    navPortfolio: 'Portfolio', navServices: 'Services', navAbout: 'About', navExperience: 'Experience', navContact: 'Contact',
    heroEyebrow: 'Make-up Artist · Adelaide, South Australia',
    heroTitleA: 'Beauty that',
    heroTitleB: 'still looks like you',
    heroIntro: 'Freelance make-up artist with 8 years of experience in weddings and events across Adelaide and Vietnam, working mainly with Asian clients. Bilingual in English and Vietnamese.',
    heroCtaPortfolio: 'View portfolio', heroCtaEnquire: 'Enquire now',
    heroNote: 'Available in Adelaide · Enquiries by email',
    statsYears: '8 years', statsYearsLabel: 'freelance makeup artistry',
    statsPlaces: 'Adelaide + Vietnam', statsPlacesLabel: 'weddings & events',
    statsLang: 'English · Tiếng Việt', statsLangLabel: 'bilingual service',
    portfolioEyebrow: 'Portfolio', portfolioTitle: 'Recent looks',
    portfolioIntro: 'A selection of the looks Linh creates. The images below are placeholders: real photos of Linh\u2019s work will be added here as soon as they are ready.',
    placeholderNote: 'Photos to add — replace these placeholders with Linh\u2019s real work. See the README for how to add photos to /public/portfolio/.',
    placeholderTag: 'Photo placeholder',
    servicesEyebrow: 'Services', servicesTitle: 'What Linh offers',
    servicesIntro: 'Every service is tailored to you, your skin and your occasion. Prices are on enquiry, please email for a quote.',
    priceOnEnquiry: 'Price on enquiry',
    aboutEyebrow: 'About', aboutTitle: 'Hi, I\u2019m Linh',
    aboutP1: 'I\u2019m a freelance make-up artist based in Adelaide, close to the CBD, with 8 years of experience in weddings and events in Adelaide and Vietnam. Most of my clients are Asian, and I love creating looks that suit Asian features, skin tones and style, from soft and natural to full glam.',
    aboutP2: 'I once designed face layouts for a theatre production, and I bring that same care with detail, colour and character to every face I work on. I speak English well and Vietnamese, so you can enquire in whichever language you are most comfortable with.',
    aboutP3: 'I\u2019m also looking for low-stress work in Adelaide or fully remote, full-time, part-time or casual. If you are hiring, or you would like makeup for your wedding or event, I would love to hear from you.',
    aboutListTitle: 'At a glance',
    aboutList: ['8 years freelance make-up artistry', 'Weddings & events in Adelaide and Vietnam', 'Mainly Asian clients', 'Designed face layouts for a theatre production', 'English & Vietnamese', 'Based near Adelaide CBD'],
    expEyebrow: 'Experience', expTitle: 'Experience',
    expIntro: 'A short summary. Exact dates and employer details are in Linh\u2019s CV, which is available on request.',
    expItems: [
      { title: 'Freelance Make-up Artist', org: 'Adelaide & Vietnam', period: '8 years', desc: 'Weddings and events, mainly Asian clients. Also designed face layouts for a theatre production.' },
      { title: 'Bar & Gaming Attendant (casual)', org: 'Talbot Hotel, Gouger St, Adelaide', period: '3 years', desc: 'Casual bar and gaming work. Holds RSA, a gaming licence and TAB accreditation.' },
      { title: 'Vocational Certificate in Accounting', org: 'Vocational qualification', period: 'Certificate', desc: 'Holds a vocational certificate in Accounting, but has not worked in accounting and is not seeking accounting, bookkeeping, payroll or data entry work.' },
    ],
    contactEyebrow: 'Contact', contactTitle: 'Enquire',
    contactIntro: 'For makeup bookings, lessons, or work opportunities, email Linh. Please include your date, occasion and location, and she will reply as soon as she can.',
    formName: 'Your name', formEmail: 'Your email', formDate: 'Date of event (if any)', formOccasion: 'Occasion / what you need', formMessage: 'Message',
    formOccasionPlaceholder: 'e.g. Bridal makeup, wedding guest, makeup lesson, job opportunity',
    formMessagePlaceholder: 'Tell Linh about your event, your look, or the role…',
    formSubmit: 'Open email to Linh', formNote: 'This opens your email app with the enquiry addressed to Linh. No details are sent or stored anywhere else.',
    contactEmailLabel: 'Email', contactLocationLabel: 'Location', contactLocation: 'Adelaide, near the CBD · South Australia',
    availabilityTitle: 'Availability', availabilityText: 'Linh is travelling from 5 December 2026 to 6 January 2027. She is available for bookings and work before or after the trip, please enquire to confirm dates. She does not hold a driver\u2019s licence yet, so please consider location and transport when booking.',
    cvTitle: 'CV', cvText: 'Linh\u2019s CV is a draft and still to be confirmed. Please email to request a copy.',
    cvButton: 'Request CV by email',
    footerNote: 'Make-up Artist · Adelaide, SA · English & Tiếng Việt',
    footerPlaceholder: 'Portfolio photos are placeholders until Linh\u2019s real work is added.',
    backToTop: 'Back to top',
  },
  vi: {
    navPortfolio: 'Bộ sưu tập', navServices: 'Dịch vụ', navAbout: 'Giới thiệu', navExperience: 'Kinh nghiệm', navContact: 'Liên hệ',
    heroEyebrow: 'Chuyên viên Trang điểm · Adelaide, Nam Úc',
    heroTitleA: 'Vẻ đẹp vẫn',
    heroTitleB: 'là chính bạn',
    heroIntro: 'Chuyên viên trang điểm tự do với 8 năm kinh nghiệm trong các đám cưới và sự kiện tại Adelaide và Việt Nam, chủ yếu phục vụ khách hàng châu Á. Giao tiếp bằng tiếng Anh và tiếng Việt.',
    heroCtaPortfolio: 'Xem bộ sưu tập', heroCtaEnquire: 'Liên hệ ngay',
    heroNote: 'Phục vụ tại Adelaide · Liên hệ qua email',
    statsYears: '8 năm', statsYearsLabel: 'trang điểm tự do',
    statsPlaces: 'Adelaide + Việt Nam', statsPlacesLabel: 'đám cưới & sự kiện',
    statsLang: 'Tiếng Anh · Tiếng Việt', statsLangLabel: 'phục vụ song ngữ',
    portfolioEyebrow: 'Bộ sưu tập', portfolioTitle: 'Các phong cách gần đây',
    portfolioIntro: 'Một số phong cách Linh thực hiện. Các hình dưới đây chỉ là ảnh giữ chỗ: ảnh thật từ các công việc của Linh sẽ được thêm vào ngay khi sẵn sàng.',
    placeholderNote: 'Ảnh sẽ được thêm — hãy thay các ảnh giữ chỗ này bằng ảnh thật của Linh. Xem README để biết cách thêm ảnh vào /public/portfolio/.',
    placeholderTag: 'Ảnh giữ chỗ',
    servicesEyebrow: 'Dịch vụ', servicesTitle: 'Linh cung cấp',
    servicesIntro: 'Mỗi dịch vụ đều được thiết kế riêng theo bạn, làn da và dịp của bạn. Giá báo theo yêu cầu, vui lòng gửi email để được báo giá.',
    priceOnEnquiry: 'Giá báo theo yêu cầu',
    aboutEyebrow: 'Giới thiệu', aboutTitle: 'Xin chào, mình là Linh',
    aboutP1: 'Mình là chuyên viên trang điểm tự do tại Adelaide, gần khu trung tâm, với 8 năm kinh nghiệm trong các đám cưới và sự kiện tại Adelaide và Việt Nam. Phần lớn khách hàng của mình là người châu Á, và mình rất thích tạo nên những phong cách hợp với nét đẹp, tông da và gu thẩm mỹ châu Á, từ nhẹ nhàng tự nhiên đến quyến rũ nổi bật.',
    aboutP2: 'Mình từng thiết kế gương mặt cho một vở diễn sân khấu, và mình mang sự tỉ mỉ về chi tiết, màu sắc và cá tính đó vào từng gương mặt mình trang điểm. Mình nói tiếng Anh tốt và tiếng Việt, nên bạn có thể liên hệ bằng ngôn ngữ nào bạn thấy thoải mái nhất.',
    aboutP3: 'Mình cũng đang tìm công việc nhẹ nhàng tại Adelaide hoặc làm việc từ xa hoàn toàn, toàn thời gian, bán thời gian hoặc thời vụ. Nếu bạn đang tuyển dụng, hoặc muốn trang điểm cho đám cưới hay sự kiện của mình, mình rất mong nhận được tin từ bạn.',
    aboutListTitle: 'Tóm tắt',
    aboutList: ['8 năm trang điểm tự do', 'Đám cưới & sự kiện tại Adelaide và Việt Nam', 'Chủ yếu là khách hàng châu Á', 'Từng thiết kế gương mặt cho một vở diễn sân khấu', 'Tiếng Anh & tiếng Việt', 'Ở gần trung tâm Adelaide'],
    expEyebrow: 'Kinh nghiệm', expTitle: 'Kinh nghiệm',
    expIntro: 'Tóm tắt ngắn gọn. Ngày tháng và thông tin nhà tuyển dụng cụ thể có trong CV của Linh, vui lòng liên hệ để nhận bản CV.',
    expItems: [
      { title: 'Chuyên viên Trang điểm Tự do', org: 'Adelaide & Việt Nam', period: '8 năm', desc: 'Đám cưới và sự kiện, chủ yếu là khách hàng châu Á. Từng thiết kế gương mặt cho một vở diễn sân khấu.' },
      { title: 'Nhân viên Bar & Gaming (thời vụ)', org: 'Talbot Hotel, Gouger St, Adelaide', period: '3 năm', desc: 'Công việc bar và gaming thời vụ. Có chứng chỉ RSA, giấy phép gaming và chứng nhận TAB.' },
      { title: 'Chứng chỉ Nghề Kế toán', org: 'Bằng cấp nghề', period: 'Chứng chỉ', desc: 'Có chứng chỉ nghề Kế toán, nhưng chưa từng làm kế toán và không tìm việc kế toán, sổ sách, tính lương hay nhập liệu.' },
    ],
    contactEyebrow: 'Liên hệ', contactTitle: 'Liên hệ',
    contactIntro: 'Để đặt lịch trang điểm, đăng ký buổi học, hoặc trao đổi cơ hội việc làm, vui lòng gửi email cho Linh. Hãy ghi rõ ngày, dịp và địa điểm, Linh sẽ trả lời sớm nhất có thể.',
    formName: 'Tên của bạn', formEmail: 'Email của bạn', formDate: 'Ngày sự kiện (nếu có)', formOccasion: 'Dịp / nhu cầu của bạn', formMessage: 'Lời nhắn',
    formOccasionPlaceholder: 'VD: Trang điểm cô dâu, khách dự tiệc cưới, học trang điểm, cơ hội việc làm',
    formMessagePlaceholder: 'Chia sẻ với Linh về sự kiện, phong cách bạn muốn, hoặc vị trí công việc…',
    formSubmit: 'Mở email gửi cho Linh', formNote: 'Thao tác này sẽ mở ứng dụng email của bạn với thư gửi cho Linh. Không có thông tin nào được gửi hay lưu trữ ở nơi khác.',
    contactEmailLabel: 'Email', contactLocationLabel: 'Địa điểm', contactLocation: 'Adelaide, gần khu trung tâm · Nam Úc',
    availabilityTitle: 'Thời gian làm việc', availabilityText: 'Linh sẽ đi du lịch từ ngày 5 tháng 12 năm 2026 đến ngày 6 tháng 1 năm 2027. Linh nhận lịch trang điểm và công việc trước hoặc sau chuyến đi, vui lòng liên hệ để xác nhận ngày. Linh chưa có bằng lái xe, nên khi đặt lịch xin vui lòng cân nhắc địa điểm và phương tiện di chuyển.',
    cvTitle: 'CV', cvText: 'CV của Linh hiện là bản nháp và vẫn cần xác nhận. Vui lòng gửi email để nhận bản CV.',
    cvButton: 'Yêu cầu CV qua email',
    footerNote: 'Chuyên viên Trang điểm · Adelaide, SA · Tiếng Anh & Tiếng Việt',
    footerPlaceholder: 'Ảnh trong bộ sưu tập là ảnh giữ chỗ cho đến khi ảnh thật của Linh được thêm vào.',
    backToTop: 'Về đầu trang',
  },
} as const;

export const EMAIL = 'nguyenlinhlinh9494@gmail.com';
