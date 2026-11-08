import './Awards.css';

const Awards = () => {
  const awardsData = [
    {
      competition: 'NYIOOC World Olive Oil Competition',
      year: '2024',
      location: 'New York, USA',
      awards: [
        { medal: 'Gold', product: 'Baysan Erken Hasat Sıvı Yağ', category: 'Northern Hemisphere - Early Harvest' },
        { medal: 'Gold', product: 'Baysan Monovarietal Memecik', category: 'Best in Class - Monovarietal' },
        { medal: 'Silver', product: 'Baysan Mature Sıvı Yağ', category: 'Northern Hemisphere - Medium' }
      ]
    },
    {
      competition: 'EVOOLEUM Awards',
      year: '2024',
      location: 'Madrid, Spain',
      awards: [
        { medal: 'Top 100', product: 'Baysan Erken Hasat', category: 'World\'s Best EVOOs' },
        { medal: 'Gold', product: 'Baysan Organik Sıvı Yağ', category: 'Organic Category' },
        { medal: 'Silver', product: 'Baysan Monovarietal Memecik', category: 'Premium Category' }
      ]
    },
    {
      competition: 'Flora Olive Oil Competition',
      year: '2024',
      location: 'İzmir, Türkiye',
      awards: [
        { medal: 'Gold', product: 'Baysan Monovarietal Memecik', category: 'Monovarietal' },
        { medal: 'Silver', product: 'Baysan Erken Hasat', category: 'Early Harvest' }
      ]
    },
    {
      competition: 'BioFach Organic Awards',
      year: '2024',
      location: 'Nuremberg, Germany',
      awards: [
        { medal: 'Gold', product: 'Baysan Organik Sıvı Yağ', category: 'Best Organic EVOO' }
      ]
    },
    {
      competition: 'London IOOC',
      year: '2023',
      location: 'London, UK',
      awards: [
        { medal: 'Gold', product: 'Baysan Erken Hasat', category: 'Early Harvest' },
        { medal: 'Silver', product: 'Baysan Mature', category: 'Medium Intensity' }
      ]
    },
    {
      competition: 'Olive Japan',
      year: '2023',
      location: 'Tokyo, Japan',
      awards: [
        { medal: 'Gold', product: 'Baysan Erken Hasat', category: 'Northern Hemisphere' }
      ]
    },
    {
      competition: 'NYIOOC World Olive Oil Competition',
      year: '2023',
      location: 'New York, USA',
      awards: [
        { medal: 'Gold', product: 'Baysan Erken Hasat', category: 'Early Harvest' },
        { medal: 'Silver', product: 'Baysan Organik', category: 'Organic' }
      ]
    },
    {
      competition: 'EVOOLEUM Awards',
      year: '2022',
      location: 'Madrid, Spain',
      awards: [
        { medal: 'Top 100', product: 'Baysan Erken Hasat', category: 'World\'s Best EVOOs' },
        { medal: 'Gold', product: 'Baysan Mature', category: 'Medium Intensity' }
      ]
    }
  ];

  const certifications = [
    { name: 'ISO 22000:2018', desc: 'Gıda Güvenliği Yönetim Sistemi', issuer: 'TÜV Rheinland', validUntil: '2026-03-15', logo: 'ISO' },
    { name: 'ISO 9001:2015', desc: 'Kalite Yönetim Sistemi', issuer: 'TÜV Rheinland', validUntil: '2026-03-15', logo: 'ISO' },
    { name: 'EU Organic', desc: 'AB Organik Tarım Sertifikası (EC 834/2007)', issuer: 'Ecocert', validUntil: '2025-12-31', logo: '🌿' },
    { name: 'USDA Organic', desc: 'ABD Organik Standartları (NOP)', issuer: 'USDA', validUntil: '2025-12-31', logo: '🌱' },
    { name: 'Halal', desc: 'Helal Gıda Sertifikası', issuer: 'GIMDES', validUntil: '2025-06-30', logo: '☪' },
    { name: 'Kosher', desc: 'Koşer Sertifikası', issuer: 'OK Kosher', validUntil: '2025-09-15', logo: '✡' },
    { name: 'HACCP', desc: 'Tehlike Analizi ve Kritik Kontrol Noktaları', issuer: 'TÜV Rheinland', validUntil: '2026-03-15', logo: 'HACCP' },
    { name: 'BRCGS Food Safety', desc: 'Global Standart Gıda Güvenliği', issuer: 'BRCGS', validUntil: '2025-11-20', logo: 'BRCGS' }
  ];

  return (
    <div className="awards-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="hero-badge">DÜNYA ÇAPINDA TANINAN KALİTE</span>
          <h1>Ödüllerimiz ve Sertifikalarımız</h1>
          <p>
            Baysan zeytinyağları, dünyanın en prestijli yarışmalarda kör testlerle 
            değerlendirilmiş ve jüri tarafından onaylanmıştır.
          </p>
        </div>
      </section>

      {/* Awards Stats */}
      <section className="awards-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">25+</span>
              <span className="stat-label">Uluslararası Altın Madalya</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Gümüş ve Bronz Madalya</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">8</span>
              <span className="stat-label">Uluslararası Sertifika</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">12</span>
              <span className="stat-label">Yarışma Katılımı (Son 5 Yıl)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Awards by Competition */}
      <section className="awards-competitions">
        <div className="container">
          <header className="section-header">
            <h2>Yarışma Bazında Ödüller</h2>
            <p>Son 5 yılda katıldığımız yarışmalarda kazandığımız ödüller</p>
          </header>
          <div className="competitions-grid">
            {awardsData.map((comp, index) => (
              <article key={index} className="competition-card">
                <div className="comp-header">
                  <div className="comp-info">
                    <h3>{comp.competition}</h3>
                    <div className="comp-meta">
                      <span>{comp.year}</span>
                      <span>{comp.location}</span>
                    </div>
                  </div>
                  <div className="comp-trophy">🏆</div>
                </div>
                <div className="comp-awards">
                  {comp.awards.map((award, i) => (
                    <div key={i} className={`award-item ${award.medal.toLowerCase()}`}>
                      <span className="medal-badge">{award.medal}</span>
                      <div className="award-details">
                        <span className="award-product">{award.product}</span>
                        <span className="award-category">{award.category}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="certifications-section">
        <div className="container">
          <header className="section-header">
            <h2>Sertifikalarımız</h2>
            <p>Dünya standartlarında kalite, güvenlik ve sürdürülebilirlik</p>
          </header>
          <div className="certs-grid">
            {certifications.map((cert, index) => (
              <article key={index} className="cert-card">
                <div className="cert-header">
                  <span className="cert-logo" aria-hidden="true">{cert.logo}</span>
                  <div>
                    <h3>{cert.name}</h3>
                    <span className="cert-issuer">{cert.issuer}</span>
                  </div>
                </div>
                <p className="cert-desc">{cert.desc}</p>
                <div className="cert-validity">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  <span>Geçerlilik: {new Date(cert.validUntil).toLocaleDateString('tr-TR', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Lab */}
      <section className="lab-section">
        <div className="container">
          <header className="section-header">
            <h2>Laboratuvar Yetkinliklerimiz</h2>
            <p>Kendi laboratuvarımız ve akredite laboratuvarlarla çalışma şeffaflığı</p>
          </header>
          <div className="lab-grid">
            {[
              { title: 'Kendi İç Laboratuvar', desc: 'Hızlı rutin analizler (asidite, peroksit, nem, kirlenme) için tam donanımlı laboratuvar.', items: ['Asidite (Oleik asit %)', 'Peroksit Değeri', 'Nem ve Katı Madde', 'Görsel/Koku Kontrolü'] },
              { title: 'Akredite Laboratuvarlar', desc: 'Resmi raporlar için TÜRKAK akreditasyonlu bağımsız laboratuvarlarla sözleşmeliyiz.', items: ['Polifenol (HPLC)', 'Vitamin E (HPLC)', 'Sterol Profili (GC)', 'Yağ Asidi Kompozisyonu', 'K232/K270/ΔK', 'Pestisit/Metal Kalıntıları'] },
              { title: 'Sensorial Panel', desc: 'IOC standartlarında eğitilmiş 8-12 kişilik uzman panel grubumuz mevcut.', items: ['Meydel (Fruitiness)', 'Acılık (Bitterness)', 'Yanma (Pungency)', 'Kusur Tespiti', 'Profil Belirleme'] },
              { title: 'Takip ve Şeffaflık', desc: 'Her şişe QR kod ile parti bazlı analiz raporlarına erişim sağlar.', items: ['Blok Zincir (Blockchain) Takip', 'QR Kodlu Analiz Raporu', 'Parti Numarası / Lot Kodu', 'Üretim / SKT Tarihleri'] }
            ].map((lab, index) => (
              <article key={index} className="lab-card">
                <h3>{lab.title}</h3>
                <p>{lab.desc}</p>
                <ul>
                  {lab.items.map((item, i) => (
                    <li key={i}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <h2>Analiz Raporlarımıza Erişin</h2>
            <p>Ürünlerinizdeki QR kodu tarayarak veya parti numarasını girerek tam analiz raporlarını görüntüleyin.</p>
            <a href="/urunler" className="btn btn-primary btn-lg">Ürünleri İncele</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Awards;