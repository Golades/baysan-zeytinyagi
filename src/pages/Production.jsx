import './Production.css';

const Production = () => {
  const steps = [
    {
      number: '01',
      title: 'Bahçe Bakımı & Hasat',
      desc: 'Zeytin ağaçlarımız yıl boyunca doğal gübrelerle beslenir, kimyasal ilaç kullanılmaz. Ekim-Aralık arası erken sabah saatlerinde, zeytinler optimum olgunlukta el ile tek tek toplanır. Hasat sırasında ağaca zarar vermez, meyve yıpranmaz.',
      image: 'https://images.unsplash.com/photo-1500936938177-9e0a6d9f8a7f?w=800&q=80',
      details: [
        'Organik gübreleme (yılın 4-mevsimi)',
        'Damla sulama ile su tasarrufu (%60)',
        'El hasadı - meyve hasarsız toplanır',
        'Kutu başına max 20 kg - basılmaz',
        '4 saat içinde fabrika giriş'
      ]
    },
    {
      number: '02',
      title: 'Yıkama & Yaprak Ayrıştırma',
      desc: 'Toplanan zeytinler, hareketli bandlarla yıkama bölümüne gelir. İki aşamalı yıkama sisteminde (hava + su) toz, toprak ve yapraklar tamamen temizlenir. Su, filtrelenerek geri kazanılır.',
      image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&q=80',
      details: [
        'Havaเจท ile hafif çamur/toplak atılır',
        'İki basamaklı su yıkaması',
        'Manyetik metal ayırıcı',
        'Su geri kazanım sistemi (%90)',
        'Hijyenik inox boru hatları'
      ]
    },
    {
      number: '03',
      title: 'Kırırma & Malakseme',
      desc: 'Temiz zeytinler, metal kütleli hamur kırmacı ile kırılır. Elde edilen hamur, 20-25 dakika boyunca 27°C\'nin altında malakseme (karıştırma) tabi tutulur. Bu süreç aromatik bileşenlerin ve polifenollerin yağa geçmesini sağlar.',
      image: 'https://images.unsplash.com/photo-1608216308903-4e6b0f3b4f7a?w=800&q=80',
      details: [
        'Metal kütleli hamur kırmacı (açık sistem)',
        'Malakseme süresi: 20-25 dakika',
        'Sıcaklık kontrolü: ≤27°C (soğuk pres)',
        'Azot inert ortamı (oksidasyon önleme)',
        'Polifenol transferi optimize edilir'
      ]
    },
    {
      number: '04',
      title: 'Ayrıştırma (Desanter & Separatör)',
      desc: 'İki fazlı (yağ + kulp/su) veya üç fazlı (yağ + kulp + su) desanter santrifüjlerde katı ve sıvı fazlar ayrılır. Ardından dikey disk separatörlerde yağ, su ve mikro parçacıklardan arındırılarak saf yağ elde edilir.',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80',
      details: [
        'İki fazlı desanter (su tasarrufu %50)',
        'Dikey disk separatör (2 aşamalı)',
        'Otomatik sıcaklık ve debi kontrolü',
        'Filtresiz opsiyon (doğal tortu koruma)',
        'Hız: 6000-7000 rpm'
      ]
    },
    {
      number: '05',
      title: 'Depolama & Kalite Kontrol',
      desc: 'Elde edilen yağ, azot gazı ile boşluk doldurulmuş inox tanklarda (15-18°C) depolanır. Her parti laboratuvarda asidite, peroksit, K232, K270, polifenol ve sensorial analizden geçirilir. Sadece standartları karşılayan yağ şişelenir.',
      image: 'https://images.unsplash.com/photo-1618164436241-4473940d1f5c?w=800&q=80',
      details: [
        'İnox depolama tankları (azotlu koruma)',
        'Sıcaklık: 15-18°C sabit',
        'Her parti tam panel laboratuvar analizi',
        'Sensorial panel testi (IOC standartları)',
        'Blok zincir takip sistemi (QR kodlu)'
      ]
    },
    {
      number: '06',
      title: 'Şişeleme & Ambalajlama',
      desc: 'Koyu cam şişeler (UV korumalı), otomatik şişeleme hattında doldurulur. Kapaklar manyetik indüksiyonla contalanır, etiketler ve kutu ambalajları yerleştirilir. Her şişe benzersiz seri numarası ile takip edilebilir.',
      image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&q=80',
      details: [
        'Koyu cam şişe (UV %99 bloke)',
        'Manyetik indüksiyon contalama',
        'Azot gazı ile başlık boşluğu doldurma',
        'Seri numaralı takip etiketi',
        'Geridönüştürülebilir karton ambalaj'
      ]
    }
  ];

  const techSpecs = [
    { label: 'Günlük İşleme Kapasitesi', value: '50 Ton Zeytin / Gün' },
    { label: 'Soğuk Pres Sıcaklığı', value: 'Maksimum 27°C' },
    { label: 'Malakseme Süresi', value: '20-25 Dakika' },
    { label: 'Desanter Tipi', value: 'İki Fazlı (Pieralisi / Alfa Laval)' },
    { label: 'Separatör Tipi', value: 'Dikey Disk (2 Aşamalı)' },
    { label: 'Depolama Kapasitesi', value: '200 Ton (İnox Tank)' },
    { label: 'Şişeleme Hızı', value: '3.000 Şişe / Saat' },
    { label: 'Enerji Kaynağı', value: '%40 Güneş Enerjisi (GES)' },
    { label: 'Su Geri Kazanım', value: '%90' },
    { label: 'Atık Değerlendirme', value: 'Kulp → Organik Gübre / Biyogaz' }
  ];

  return (
    <div className="production-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="hero-badge">TARANAN DAN ŞİŞEYE - %100 ŞEFFAF SÜREÇ</span>
          <h1>Üretim Sürecimiz</h1>
          <p>
            Ayvalık\'ın bereketli toprağından, dördüncü nesil aile deneyimi ve 
            modern teknolojinin buluştuğu soğuk pres zeytinyağı üretim hatlarımız.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="steps-section">
        <div className="container">
          <header className="section-header">
            <h2>6 Aşamada Üretim</h2>
            <p>Her damla zeytinyağının izlediği yol: Bahçeden sofranıza</p>
          </header>
          <div className="steps-timeline">
            {steps.map((step, index) => (
              <article key={index} className={`step-card ${index % 2 === 0 ? 'reverse' : ''}`}>
                <div className="step-visual">
                  <span className="step-number">{step.number}</span>
                  <img src={step.image} alt={step.title} loading="lazy" />
                </div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                  <ul className="step-details">
                    {step.details.map((detail, i) => (
                      <li key={i}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Specs */}
      <section className="tech-section">
        <div className="container">
          <header className="section-header">
            <h2>Teknik Özellikler</h2>
            <p>Üretim tesisimizin donanım ve kapasite detayları</p>
          </header>
          <div className="tech-grid">
            {techSpecs.map((spec, index) => (
              <div key={index} className="tech-card">
                <span className="tech-label">{spec.label}</span>
                <span className="tech-value">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Control */}
      <section className="quality-section">
        <div className="container">
          <header className="section-header">
            <h2>Kalite Kontrol Süreçlerimiz</h2>
            <p>Her parti, uluslararası standartlarda denetlenir</p>
          </header>
          <div className="quality-grid">
            {[
              { title: 'Kimyasal Analizler', icon: '🧪', tests: ['Serbest Asidite (Oleik asit %)', 'Peroksit Değeri (meq O₂/kg)', 'K232 / K270 (UV emilim)', 'ΔK (Saflık kontrolü)', 'Polifenol (mg/kg)', 'Vitamin E (α-tokoferol)', 'Sterol profili', 'Yağ asidi kompozisyonu'] },
              { title: 'Sensorial Analiz', icon: '👃', tests: ['Meydel (Fruitiness)', 'Acılık (Bitterness)', 'Yanma/Acıksızlık (Pungency)', 'Kusur tespiti (Fusty, Musty, Winey, Rancid)', 'IOC profili uygunluğu', 'Panel testi (8-12 uzman)'] },
              { title: 'Fiziksel Kontroller', icon: '⚖️', tests: ['Renk ve görünüm', 'Koku ve lezzet profili', 'Sıvılık ve berraklık', 'Ambalaj bütünlüğü', 'Etiket doğruluğu', 'Seri no / lot takibi', 'SKT / Üretim tarihi'] },
              { title: 'Sertifika & Standartlar', icon: '📜', tests: ['ISO 22000 / ISO 9001', 'EU Organic / USDA Organic', 'IOC / COI standartları', 'Turkish Food Codex', 'HACCP / BRCGS', 'Halal / Kosher'] }
            ].map((cat, index) => (
              <article key={index} className="quality-card">
                <div className="quality-icon" aria-hidden="true">{cat.icon}</div>
                <h3>{cat.title}</h3>
                <ul>
                  {cat.tests.map((test, i) => (
                    <li key={i}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {test}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="sustainability-section">
        <div className="container">
          <header className="section-header">
            <h2>Sürdürülebilir Üretim</h2>
            <p>Doğaya verdiğimizden fazlasını almayız, geleceğe yatırım yaparız</p>
          </header>
          <div className="sustain-grid">
            {[
              { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>', title: 'Güneş Enerjisi', desc: 'Fabrika çatılarımızdaki GES panellerimizle yıllık elektrik ihtiyacımızın %40\'ını karşılarız. karbon ayak izimizi minimize ederiz.' },
              { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>', title: 'Sıfır Atık Hedefi', desc: 'Zeytin pulpu (kulp) organik gübre ve biyogaz üretiminde değerlendirilir. Su filtrelenip sulamada tekrar kullanılır.' },
              { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>', title: 'Su Tasarrufu', desc: 'İki fazlı desanter sistemimizle yeğen sistemlere göre %50 daha az su tüketiriz. Yağ yıkama suyu %90 oranında geri kazanılır.' },
              { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>', title: 'Toplumsal Sorumluluk', desc: 'Yerel istihdam, köy okullarına destek, zeytin yetiştiriciliği eğitimleri ve kadın kooperatifleriyle iş birliği yapıyoruz.' }
            ].map((item, index) => (
              <article key={index} className="sustain-card">
                <div className="sustain-icon" dangerouslySetInnerHTML={{ __html: item.icon }} />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <h2>Tesisimizi Ziyaret Edin</h2>
            <p>Ayvalık fabrikamızda üretim hattını yakından görün, tadım yapın ve süreç hakkında detaylı bilgi alın.</p>
            <a href="/iletisim" className="btn btn-primary btn-lg">Ziyaret Randevusu Al</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Production;