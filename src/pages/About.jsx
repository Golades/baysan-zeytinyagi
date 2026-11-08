import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  const timeline = [
    { year: '1985', title: 'Köklerimiz', desc: 'Büyükbabamız Ayvalık\'ta ilk zeytin bahçesini satın alarak, geleneksel yöntemlerle zeytinyağı üretimine başlar.', icon: '🌱' },
    { year: '1998', title: 'Modernizasyon', desc: 'İkinci nesil yönetim devralır, ilk soğuk pres makinesi kurulur ve higyenik üretim standartları uygulanmaya başlanır.', icon: '⚙️' },
    { year: '2005', title: 'Marka Doğuşu', desc: '"Baysan" markası tescil edilir, şişeli zeytinyağı satışına geçilir. İlk ihracat (Almanya, Hollanda) gerçekleşir.', icon: '🏷️' },
    { year: '2012', title: 'Organik Dönüşüm', desc: 'Tüm bahçeler organik tarıma geçirilir. EU Organik ve USDA Organik sertifikaları alınır. Sürdürülebilir tarım uygulamaları başlar.', icon: '🌿' },
    { year: '2018', title: 'Uluslararası Ödüller', desc: 'NYIOOC, EVOOLEUM, London IOOC gibi dünya yarışmalarında ilk altın madalyalar kazanılır. Premium segmentte yer alınır.', icon: '🏆' },
    { year: '2024', title: 'Dördüncü Nesil', desc: 'Genç nesil yönetimde, dijitalleşme, e-ticaret ve yeni pazarlar (ABD, Japonya, Güney Kore) hedeflenir.', icon: '🚀' }
  ];

  const values = [
    { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>', title: 'Kalite Önceliği', desc: 'Her damla zeytinyağımız, uluslararası standartlarda laboratuvar testlerinden geçer. Asidite, polifenol ve sensorial analizlerle kalite garantilenir.' },
    { icon: '<svg viewBox="0  0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>', title: 'Sürdürülebilirlik', desc: 'Doğal gübre, su tasarrufu sulama, güneş enerjili tesisler ve sıfır atık hedefleriyle çevre dostu üretim yapıyoruz.' },
    { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>', title: 'Aile Değerleri', desc: 'Dört nesildir aile işletmesi olarak; güven, şeffaflık ve misafirperverlik ilkelerimizle müşterilerimize hizmet veriyoruz.' },
    { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>', title: 'İnovasyon', desc: 'Geleneksel bilgi birikimimizi modern teknolojiyle birleştiriyoruz. Blockchain takip sistemi, QR kodlu şeffaflık ve akıllı sulama sistemleri kullanıyoruz.' }
  ];

  const team = [
    { name: 'Ahmet Baysan', role: 'Kurucu / Danışman', desc: '1985\'ten beri zeytinyağı ustası', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80' },
    { name: 'Mehmet Baysan', role: 'Genel Müdür', desc: 'İşletme yönetimi ve strateji', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80' },
    { name: 'Ayşe Baysan', role: 'Kalite Müdürü', desc: 'Kimya mühendisi, sensorial analiz uzmanı', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80' },
    { name: 'Can Baysan', role: 'Pazarlama ve E-ticaret', desc: 'Dijital pazarlama ve yeni pazarlar', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80' },
    { name: 'Dr. Elif Yılmaz', role: 'Gıda Mühendisi', desc: 'R&D ve yeni ürün geliştirme', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&q=80' },
    { name: 'Ali Koç', role: 'Üretim Şefi', desc: '20 yıllık soğuk pres deneyimi', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80' }
  ];

  return (
    <div className="about-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="hero-badge">1985\'TEN BERİ 4. NESİL AİLE İŞLETMESİ</span>
          <h1>Baysan Hikayesi</h1>
          <p>
            Ayvalık\'ın eşsiz iklim ve toprağında, dördüncü nesil ailemiz olarak 
            doğanın en saf formunda zeytinyağı üretiyoruz.
          </p>
        </div>
      </section>

      {/* Mission Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <article className="mv-card">
              <div className="mv-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              </div>
              <h2>Misyonumuz</h2>
              <p>
                Doğanın bize armağan ettiği en değerli meyve zeytin, 
                dört nesilden gelen aile bilgeciği ve modern teknoloji 
                birleşimiyle; dünyanın en kaliteli, en sağlıklı ve en lezzetli 
                extra virgin zeytinyağına dönüştürülerek, her sofraya 
                sağlık ve lezzet taşımak.
              </p>
            </article>
            <article className="mv-card">
              <div className="mv-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <h2>Vizyonumuz</h2>
              <p>
                Türkiye\'nin önde gelen, dünya markası olacak premium 
                zeytinyağı üreticisi olmak. Sürdürülebilir tarım 
                uygulamalarıyla çevreye saygılı, topluma faydalı ve 
                müşterilerimize güven veren bir marka yaratmak.
              </p>
            </article>
            <article className="mv-card">
              <div className="mv-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h2>Değerlerimiz</h2>
              <ul>
                <li><strong>Şeffaflık:</strong> Taranadan sofraya tam takip</li>
                <li><strong>Kalite:</strong> Hiçbir konuda kompromis yok</li>
                <li><strong>Saygı:</strong> Doğa, insan ve geleceğe</li>
                <li><strong>İnovasyon:</strong> Sürekli iyileştirme ve yenilik</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section">
        <div className="container">
          <header className="section-header">
            <h2>Yıllar İçinde Baysan</h2>
            <p>1985\'ten bugüne zeytinyağı tutkumuzun yol haritası</p>
          </header>
          <div className="timeline">
            {timeline.map((item, index) => (
              <article key={index} className="timeline-item">
                <div className="timeline-marker">
                  <span className="timeline-icon" aria-hidden="true">{item.icon}</span>
                  <span className="timeline-year">{item.year}</span>
                </div>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="container">
          <header className="section-header">
            <h2>Bizi Farklı Yapan Değerler</h2>
          </header>
          <div className="values-grid">
            {values.map((value, index) => (
              <article key={index} className="value-card">
                <div className="value-icon" dangerouslySetInnerHTML={{ __html: value.icon }} />
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="team-section">
        <div className="container">
          <header className="section-header">
            <h2>Baysan Ailesi</h2>
            <p>Zeytinyağına hayatını adayan uzman ekibimiz</p>
          </header>
          <div className="team-grid">
            {team.map((member, index) => (
              <article key={index} className="team-card">
                <div className="team-image">
                  <img src={member.img} alt={member.name} loading="lazy" />
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <span className="team-role">{member.role}</span>
                  <p>{member.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="certs-section">
        <div className="container">
          <header className="section-header">
            <h2>Sertifikalarımız</h2>
            <p>Dünya standartlarında kalite ve güvenilirlik</p>
          </header>
          <div className="certs-grid">
            {[
              { name: 'ISO 22000', desc: 'Gıda Güvenliği Yönetim Sistemi', issuer: 'TÜV Rheinland' },
              { name: 'ISO 9001', desc: 'Kalite Yönetim Sistemi', issuer: 'TÜV Rheinland' },
              { name: 'EU Organic', desc: 'AB Organik Tarım Sertifikası', issuer: 'Ecocert' },
              { name: 'USDA Organic', desc: 'ABD Organik Sertifikası', issuer: 'USDA NOP' },
              { name: 'Halal', desc: 'Helal Gıda Sertifikası', issuer: 'GIMDES' },
              { name: 'Kosher', desc: 'Koşer Sertifikası', issuer: 'OK Kosher' },
              { name: 'HACCP', desc: 'Tehlike Analizi ve Kritik Kontrol Noktaları', issuer: 'TÜV Rheinland' },
              { name: 'BRCGS', desc: 'Global Gıda Güvenlik Standardı', issuer: 'BRCGS' }
            ].map((cert, index) => (
              <article key={index} className="cert-card">
                <h3>{cert.name}</h3>
                <p>{cert.desc}</p>
                <span className="cert-issuer">{cert.issuer}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <h2>Zeytin Bahçelerimizi Ziyaret Edin</h2>
            <p>Ayvalık\'ta fabrikamızı ve bahçelerimizi görmek, üretim sürecini yakından tanımak ve tadım yapmak için randevu alın.</p>
            <Link to="/iletisim" className="btn btn-primary btn-lg">Randevu Al / Bize Ulaşın</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;