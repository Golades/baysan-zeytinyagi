import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    kurumsal: [
      { label: 'Hakkımızda', to: '/hakkimizda' },
      { label: 'Üretim Süreci', to: '/uretim' },
      { label: 'Ödüller', to: '/oduller' },
      { label: 'Sürdürülebilirlik', to: '/surdurulebilirlik' },
      { label: 'Kariyer', to: '/kariyer' }
    ],
    yardim: [
      { label: 'Sık Sorulan Sorular', to: '/sss' },
      { label: 'Teslimat ve İade', to: '/teslimat-iade' },
      { label: 'Gizlilik Politikası', to: '/gizlilik' },
      { label: 'Kullanım Koşulları', to: '/kullanim-kosullari' },
      { label: 'İletişim', to: '/iletisim' }
    ],
    urunler: [
      { label: 'Erken Hasat', to: '/urunler?category=erken-hasat' },
      { label: 'Mature (Olgun)', to: '/urunler?category=mature' },
      { label: 'Organik Serisi', to: '/urunler?category=organik' },
      { label: 'Premium Seçkiler', to: '/urunler?category=premium' },
      { label: 'Hediye Setleri', to: '/urunler?category=hediye' }
    ]
  };

  const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com/baysanzeytinyagi', icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
    )},
    { name: 'Facebook', href: 'https://facebook.com/baysanzeytinyagi', icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
    )},
    { name: 'YouTube', href: 'https://youtube.com/@baysanzeytinyagi', icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h20a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><polygon points="23 7 16 12 23 17 23 7"/></svg>
    )},
    { name: 'LinkedIn', href: 'https://linkedin.com/company/baysan-zeytinyagi', icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
    )}
  ];

  const certifications = [
    { name: 'ISO 22000', desc: 'Gıda Güvenliği Yönetim Sistemi' },
    { name: 'ISO 9001', desc: 'Kalite Yönetim Sistemi' },
    { name: 'Organic EU', desc: 'AB Organik Tarım Sertifikası' },
    { name: 'USDA Organic', desc: 'ABD Organik Sertifikası' },
    { name: 'Halal', desc: 'Helal Gıda Sertifikası' },
    { name: 'Kosher', desc: 'Koşer Sertifikası' }
  ];

  const paymentMethods = [
    { name: 'Visa', icon: <svg viewBox="0 0 60 40"><text x="30" y="26" text-anchor="middle" font-size="20" font-weight="bold" fill="currentColor">VISA</text></svg> },
    { name: 'Mastercard', icon: <svg viewBox="0 0 60 40"><text x="30" y="26" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">MASTERCARD</text></svg> },
    { name: 'Troy', icon: <svg viewBox="0 0 60 40"><text x="30" y="26" text-anchor="middle" font-size="18" font-weight="bold" fill="currentColor">TROY</text></svg> },
    { name: 'BKM Express', icon: <svg viewBox="0 0 60 40"><text x="30" y="26" text-anchor="middle" font-size="12" font-weight="bold" fill="currentColor">BKM</text></svg> },
    { name: 'Havale/EFT', icon: <svg viewBox="0 0 60 40"><text x="30" y="26" text-anchor="middle" font-size="12" font-weight="bold" fill="currentColor">HAVALE/EFT</text></svg> }
  ];

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-main">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo" aria-label="Baysan Zeytinyağı - Ana Sayfa">
              <svg className="logo-icon" viewBox="0 0 60 60" fill="none" aria-hidden="true">
                <ellipse cx="30" cy="42" rx="18" ry="8" fill="#2D5A27" opacity="0.3"/>
                <path d="M30 12 C20 12 14 20 14 30 C14 36 18 40 22 42 C26 44 30 44 30 44 C30 44 34 44 38 42 C42 40 46 36 46 30 C46 20 40 12 30 12 Z" fill="#2D5A27"/>
                <path d="M30 18 C35 18 38 22 38 27 C38 30 36 32 33 33" stroke="#F4E4A1" strokeWidth="2" strokeLinecap="round" fill="none"/>
                <circle cx="30" cy="25" r="1.5" fill="#F4E4A1"/>
              </svg>
              <span>BAYSAN</span>
            </Link>
            <p className="brand-desc">
              1985'ten beri Ayvalık'ın benzersiz iklim ve toprağında, 
              geleneksel yöntemlerle yetiştirdiğimiz zeytinlerden 
              doğal, sağlıklı ve ödüllü zeytinyağı üreten aile işletmesi.
            </p>
            <div className="contact-info">
              <a href="tel:+90266314XXXX" className="contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span>+90 (266) 314 XX XX</span>
              </a>
              <a href="mailto:info@baysanzeytinyagi.com" className="contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <span>info@baysanzeytinyagi.com</span>
              </a>
              <address className="contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>Zeytinli Mah., Fabrika Sk. No:12<br/>Ayvalık / Balıkesir</span>
              </address>
            </div>
          </div>

          <nav className="footer-nav" aria-label="Kurumsal linkler">
            <h4>Kurumsal</h4>
            <ul>
              {footerLinks.kurumsal.map(link => (
                <li key={link.to}><Link to={link.to}>{link.label}</Link></li>
              ))}
            </ul>
          </nav>

          <nav className="footer-nav" aria-label="Yardım linkleri">
            <h4>Yardım & Destek</h4>
            <ul>
              {footerLinks.yardim.map(link => (
                <li key={link.to}><Link to={link.to}>{link.label}</Link></li>
              ))}
            </ul>
          </nav>

          <nav className="footer-nav" aria-label="Ürün kategorileri">
            <h4>Ürünlerimiz</h4>
            <ul>
              {footerLinks.urunler.map(link => (
                <li key={link.to}><Link to={link.to}>{link.label}</Link></li>
              ))}
            </ul>
          </nav>

          <div className="footer-newsletter">
            <h4>Bültenimize Abone Olun</h4>
            <p>Kampanyalar, yeni ürünler ve zeytinyağı dünyasından haberler için abone olun.</p>
            <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); alert('Abone oldunuz! Teşekkürler.'); }}>
              <label htmlFor="email" className="sr-only">E-posta adresiniz</label>
              <input type="email" id="email" placeholder="E-posta adresiniz" required />
              <button type="submit" className="btn btn-primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                Abone Ol
              </button>
            </form>
            <div className="social-links" role="list" aria-label="Sosyal medya hesapları">
              {socialLinks.map(social => (
                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="social-link" aria-label={social.name}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="footer-certifications">
        <div className="container">
          <p className="cert-title">Sertifikalarımız & Standartlarımız</p>
          <div className="cert-grid">
            {certifications.map(cert => (
              <div key={cert.name} className="cert-item">
                <span className="cert-name">{cert.name}</span>
                <span className="cert-desc">{cert.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-payment">
        <div className="container">
          <p className="payment-title">Güvenli Ödeme Seçenekleri</p>
          <div className="payment-methods" role="list" aria-label="Ödeme yöntemleri">
            {paymentMethods.map(method => (
              <div key={method.name} className="payment-method" role="listitem">
                {method.icon}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            © {currentYear} Baysan Zeytinyağı. Tüm hakları saklıdır.
          </p>
          <p className="made-with">
            Ayvalık'ta ❤️ ile üretilmiştir.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;