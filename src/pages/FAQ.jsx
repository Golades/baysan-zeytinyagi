import { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const faqCategories = [
    { id: 'all', label: 'Tümü', count: 28 },
    { id: 'general', label: 'Genel', count: 6 },
    { id: 'products', label: 'Ürünler', count: 8 },
    { id: 'orders', label: 'Sipariş ve Ödeme', count: 6 },
    { id: 'shipping', label: 'Kargo ve Teslimat', count: 4 },
    { id: 'quality', label: 'Kalite ve Sertifikalar', count: 4 }
  ];

  const faqs = [
    {
      id: 1,
      category: 'general',
      question: 'Baysan Zeytinyağı nerede üretiliyor?',
      answer: 'Ürünlerimiz Ayvalık, Balıkesir\'deki kendi zeytin bahçelerimizde (1200+ ağaç) yetiştirilen zeytinlerden, fabrikamızda soğuk presleme yöntemiyle üretilmektedir. Tüm süreç taranadan şişeye kadar bizim kontrolümüzdedir.'
    },
    {
      id: 2,
      category: 'general',
      question: 'Hangi zeytin çeşitlerini kullanıyorsunuz?',
      answer: 'Ana çeşitimiz Ayvalık (Edremit) zeytinidir. Ayrıca Milas yöresinden Memecik zeytini ile monovarietal (tek çeşit) seri de üretmekteyiz. Her iki çeşit de bölgemizin yerli, kayıtlı çeşitleridir.'
    },
    {
      id: 3,
      category: 'general',
      question: 'Organik sertifikanız var mı?',
      answer: 'Evet, EU Organik (Ecocert) ve USDA Organic (NOP) çift sertifikamız bulunmaktadır. Tüm bahçelerimiz organik tarım standartlarında, kimyasal gübre ve ilaç kullanmadan yönetilmektedir.'
    },
    {
      id: 4,
      category: 'general',
      question: 'Fabrika ziyareti ve tadım yapabilir miyim?',
      answer: 'Evet, randevu ile fabrikamızı ve bahçelerimizi ziyaret edebilir, üretim sürecini yakından görebilir ve ürünlerimizi tadabilirsiniz. İletişim sayfasından randevu talebinde bulunun.'
    },
    {
      id: 5,
      category: 'general',
      question: 'Toptan satış / bayilik yapıyor musunuz?',
      answer: 'Evet, restoranlar, marketler, delikatessenler, bayiler ve ihracat firmaları için özel toptan fiyatlandırma ve lojistik çözümlerimiz mevcut. Satış ekibimizle iletişime geçebilirsiniz.'
    },
    {
      id: 6,
      category: 'general',
      question: 'Kurumsal hediye setiniz var mı?',
      answer: 'Evet, özel ambalajlı (ahşap kutu, altın folyo, mesaj kartı opsiyonu) 3lü ve 6lı kurumsal hediye setlerimiz bulunmaktadır. Logo baskılı özel ambalaj da mümkündür.'
    },
    {
      id: 7,
      category: 'products',
      question: 'Erken hasat ve mature (olgun) zeytinyağı farkı nedir?',
      answer: 'Erken hasat (Ekim-Aralık): Yeşil zeytinlerden, yüksek polifenol, yoğun aromalı, acımsı/biberimsi karakter. Mature (Ocak-Mart): Olgun zeytinlerden, daha yumuşak, meyve siyahı tonları, dengeli karakter. İkisi de extra virgin standartındadır.'
    },
    {
      id: 8,
      category: 'products',
      question: 'Asidite oranı ne anlama gelir?',
      answer: 'Serbest yağ asidi miktarını (oleik asit %) gösterir. Extra virgin için <0.8% şarttır. Baysan ürünlerimiz 0.18%-0.35% arasındadır. Düşük asidite = daha kaliteli, daha az işlenmiş yağ.'
    },
    {
      id: 9,
      category: 'products',
      question: 'Polifenol nedir ve neden önemli?',
      answer: 'Polifenoller, zeytinyağında doğal olarak bulunan güçlü antioksidan bileşenlerdir. Antioksidan koruma,抗炎症 etki ve yağın dayanıklılığını sağlar. Baysan erken hasat 420-520 mg/kg (sehr yüksek), mature 280 mg/kg (yüksek) polifenol içerir.'
    },
    {
      id: 10,
      category: 'products',
      question: 'Zeytinyağınızı pişirmede kullanabilir miyim?',
      answer: 'Evet. Duman noktası ~190°C olduğu için düşük/orta ısıda sauté, haşlama, fırında pişirme güvenlidir. Ancak en yüksek besin değeri ve aroma için soğuk yemeklerde (salata, kahvaltı, meze) tüketmenizi öneririz.'
    },
    {
      id: 11,
      category: 'products',
      question: 'Filtresiz ve filtreli yağ farkı nedir?',
      answer: 'Filtresiz: Doğal tortu (zeytin parçacıkları) içerir, daha yoğun aroma, daha kısa raf ömrü (12-18 ay). Filtreli: Berrak, daha uzun raf ömrü (24 ay), biraz daha yumuşak aroma. Baysan erken hasat filtresiz, mature hafif filtreli sunulur.'
    },
    {
      id: 12,
      category: 'products',
      question: 'Monovarietal (tek çeşit) ne demek?',
      answer: 'Sadece tek bir zeytin çeşidinden (Memecik) üretilen yağdır. Çeşidin karakteristik aroması (tomurcuk, fesleğen, yeşil biber) net hissedilir. Dünyada nadir, gourmet segmentte değerlendirilir.'
    },
    {
      id: 13,
      category: 'products',
      question: 'Zeytinyağı rengi kaliteyi gösterir mi?',
      answer: 'Hayır. Renk (yeşilden altına kadar) zeytin çeşitine, hasat dönemine ve klorofil miktarına göre değişir. Kalite asidite, peroksit, polifenol ve sensorial analizle belirlenir, renkle değil.'
    },
    {
      id: 14,
      category: 'products',
      question: 'Ürünlerinizde katkı maddesi var mı?',
      answer: 'Hayır, %100 saf zeytinyağıdır. Hiçbir koruyucu, renklendirici, lezzet artırıcı veya yağlaştırıcı maddesizdir. Sadece zeytin meyvesinden soğuk presleme ile elde edilir.'
    },
    {
      id: 15,
      category: 'orders',
      question: 'Minimum sipariş tutarı var mı?',
      answer: 'Hayır, minimum sipariş tutarı yoktur. 1 şişeden başlayarak sipariş verebilirsiniz.'
    },
    {
      id: 16,
      category: 'orders',
      question: 'Hangi ödeme yöntemlerini kabul ediyorsunuz?',
      answer: 'Kredi kartı (Visa, Mastercard, Troy), BKM Express, havale/EFT ve kapıda ödeme (nakit/kart) seçeneklerimiz mevcut. Güvenli ödeme altyapısı (SSL/3D Secure) kullanılır.'
    },
    {
      id: 17,
      category: 'orders',
      question: 'Fatura / e-fatura kesiliyor mu?',
      answer: 'Evet, tüm siparişler için e-fatura/e-arşiv fatura kesilmektedir. Kurumsal müşterilerimiz için özel fatura bilgileri (VKN/TCKN, unvan, adres) sipariş aşamasında girilebilir.'
    },
    {
      id: 18,
      category: 'orders',
      question: 'Siparişimi nasıl takip edebilirim?',
      answer: 'Sipariş onaylandıktan sonra kargo takip numarası SMS ve e-posta ile gönderilir. Hesabınızdan "Siparişlerim" bölümünden de takip edebilirsiniz.'
    },
    {
      id: 19,
      category: 'orders',
      question: 'Sipariş değiştirme / iptal edebilir miyim?',
      answer: 'Kargo çıkışı yapılmamış siparişler değiştirilebilir veya iptal edilebilir. Lütfen en hızlı müşteri hizmetlerimizle iletişime geçin.'
    },
    {
      id: 20,
      category: 'orders',
      question: 'İade / değiştirme koşulları nelerdir?',
      answer: '14 gün içinde, orijinal ambalajı bozulmamış, şişe açılmamış ürünlerde iade/değişim kabul edilir. Bozulmamış şartıyla kargo bedelimizle size geri ödeme yapılır.'
    },
    {
      id: 21,
      category: 'shipping',
      question: 'Kargo ücreti ne kadardır?',
      answer: '1.500 TL ve üzeri alışverişlerde kargo ücretsizdir. Altında standart kargo 49 TL\'dir. Kargo 1-2 iş günü içinde teslim edilir (uzak bölgeler 3 gün).'
    },
    {
      id: 22,
      category: 'shipping',
      question: 'Hangi kargo firmasıyla çalışıyorsunuz?',
      answer: 'MNG Kargo, Yurtiçi Kargo ve Aras Kargo ile anlaşmalıyız. Bölgeye göre en hızlı ve güvenli firmayı otomatik seçeriz.'
    },
    {
      id: 23,
      category: 'shipping',
      question: 'Kırılma / hasar durumunda ne yapmalıyım?',
      answer: 'Kargo teslim alınırken kutuyu kontrol edin. Hasarlı gelirse kargo görevlisi karşısında "hasarlı teslim" tutanağı tutun, fotoğraf çekin ve bizimle 24 saat içinde iletişime geçin. Hemen yenisi gönderilir.'
    },
    {
      id: 24,
      category: 'shipping',
      question: 'Dışarıya (yurtdışı) gönderim yapıyor musunuz?',
      answer: 'Evet, AB ülkeleri, UK, ABD, Kanada, Japonya, Kore ve Ortadoğu\'ya DHL/FedEx/UPS ile gönderim yapıyoruz. Gümrük ve vergiler alıcıya aittir. Minimum sipariş ve özel fiyatlandırma için iletişime geçin.'
    },
    {
      id: 25,
      category: 'quality',
      question: 'Ürünleriniz laboratuvarda test ediliyor mu?',
      answer: 'Evet, her üretim partisi kendi laboratuvarımızda (asidite, peroksit, nem) ve TÜRKAK akredite bağımsız laboratuvarlarda (polifenol, vitamin E, sterol, yağ asidi, pestisit, K232/K270) tam panel analizden geçirilir.'
    },
    {
      id: 26,
      category: 'quality',
      question: 'Analiz raporlarına nasıl erişebilirim?',
      answer: 'Her şişenin üzerindeki QR kodu tarayın veya web sitemizden parti/lot numarasını girerek o partinin tam analiz raporunu (kimyasal + sensorial) görüntüleyebilirsiniz. Blok zincir (blockchain) takip sistemi de mevcuttur.'
    },
    {
      id: 27,
      category: 'quality',
      question: 'Hangi uluslararası standartlara uygun musunuz?',
      answer: 'IOC (Uluslararası Zeytin Konseyi), COI, Türk Gıda Kodeksi, EU 2568/91, ISO 22000, ISO 9001 standartlarına tam uygunuz. Her yıl NYIOOC, EVOOLEUM, London IOOC, Olive Japan gibi yarışmalarda kör testle değerlendiriliriz.'
    },
    {
      id: 28,
      category: 'quality',
      question: 'Zeytinyağımın bozulup bozulmadığını nasıl anlarım?',
      answer: 'Koku: Eski yağ, kuru ot/ahududu kokar. Tat: Ağızı yapan, metalik/balyoz tadı bırakır. Görünüm: Çok koyu/kahverengi, bulanıksız berrak olmalı (filtresiz hariç). Şüphe varsa tüketmeyin, bizimle iletişime geçin.'
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="hero-badge">SIK SORULAN SORULAR</span>
          <h1>Yardım Merkezi</h1>
          <p>
            En çok merak edilen konuların cevapları burada. 
            Bulamadığınız soru için <a href="/iletisim">bize yazın</a>.
          </p>
        </div>
      </section>

      {/* Search & Categories */}
      <section className="faq-toolbar">
        <div className="container">
          <div className="search-box">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              type="search"
              placeholder="Sorunuzu yazın... (örn: asidite, kargo, organik)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="category-tabs" role="tablist" aria-label="Soru kategorileri">
            {faqCategories.map(cat => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeCategory === cat.id}
                className={`category-tab ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => { setActiveCategory(cat.id); setOpenIndex(null); }}
              >
                {cat.label}
                <span className="tab-count">({cat.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="faq-list-section">
        <div className="container">
          <div className="faq-grid">
            {filteredFAQs.length === 0 ? (
              <div className="no-results">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="11" cy="11" r="8"/>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
                <h3>Sonuç Bulunamadı</h3>
                <p>"{searchQuery}" için eşleşen soru bulunamadı. Farklı anahtar kelimeler deneyin veya kategoriyi değiştirin.</p>
                <button className="btn btn-outline" onClick={() => setSearchQuery('')}>Aramayı Temizle</button>
              </div>
            ) : (
              filteredFAQs.map((faq, index) => (
                <article key={faq.id} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
                  <button
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${faq.id}`}
                    id={`faq-question-${faq.id}`}
                  >
                    <span className="faq-q-text">{faq.question}</span>
                    <span className="faq-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="6 9 12 15 18 9"/>
                      </svg>
                    </span>
                  </button>
                  <div
                    className="faq-answer"
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${faq.id}`}
                    hidden={openIndex !== index}
                  >
                    <div className="faq-answer-content">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="faq-cta-section">
        <div className="container">
          <div className="cta-card">
            <h2>Sorunuzun Cevabını Bulamadınız mı?</h2>
            <p>Uzman ekibimiz size yardımcı olmak için buradayız. Detaylı bilgi için bize yazın veya arayın.</p>
            <div className="cta-actions">
              <a href="/iletisim" className="btn btn-primary btn-lg">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Bize Yazın
              </a>
              <a href="tel:+90266314XXXX" className="btn btn-outline btn-lg">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Ara: +90 (266) 314 XX XX
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;