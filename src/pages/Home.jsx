import { Link } from 'react-router-dom';
import { products, categories } from '../data/products';
import './Home.css';

const Home = () => {
  const featuredProducts = products.filter(p => p.featured).slice(0, 4);
  const stats = [
    { value: '38+', label: 'Yıl Deneyim', suffix: '' },
    { value: '1200+', label: 'Zeytin Ağacı', suffix: '' },
    { value: '15+', label: 'Uluslararası Ödül', suffix: '' },
    { value: '50+', label: 'Ülkeye İhracat', suffix: '' }
  ];

  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
          <path d="M12 6v6l4 2"/>
        </svg>
      ),
      title: 'Erken Hasat',
      desc: 'Zeytinler optimum olgunlukta, erken sabah saatlerinde el ile toplanır.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v6l4 2"/>
        </svg>
      ),
      title: 'Soğuk Presleme',
      desc: '27°C altında, besin değerlerini koruyan modern soğuk pres teknolojisi.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      ),
      title: 'Hemen Şişeleme',
      desc: 'Üretimden 2 saat içinde koyu cam şişelerde, azotla koruyarak ambalajlanır.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
      ),
      title: 'Kalite Garantili',
      desc: 'Her parti laboratuvarda test edilir, asidite ve polifenol değerleri raporlanır.'
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-background" aria-hidden="true">
          <div className="hero-shape shape-1"></div>
          <div className="hero-shape shape-2"></div>
          <div className="hero-shape shape-3"></div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
              2024 Hasat Sezonu - Yeni Ürünler Stokta
            </span>
            <h1 id="hero-title" className="hero-title">
              Doğanın En Saf Formunda<br/>
              <span className="highlight">Zeytinyağı</span>
            </h1>
            <p className="hero-description">
              1985'ten beri Ayvalık'ın eşsiz ikliminde, ailemizin dördüncü nesli olarak 
              ürettiğimiz, uluslararası ödüllü, soğuk presli extra virgin zeytinyağları.
            </p>
            <div className="hero-actions">
              <Link to="/urunler" className="btn btn-primary btn-lg">
                <span>Ürünleri Keşfet</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </Link>
              <Link to="/hakkimizda" className="btn btn-outline btn-lg">
                Hikayemiz
              </Link>
            </div>
            <div className="hero-trust">
              <div className="trust-item">
                <span className="trust-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </span>
                <span>%100 Doğal & Saf</span>
              </div>
              <div className="trust-item">
                <span className="trust-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                </span>
                <span>Soğuk Presleme</span>
              </div>
              <div className="trust-item">
                <span className="trust-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </span>
                <span>Organik Sertifikalı</span>
              </div>
              <div className="trust-item">
                <span className="trust-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="23 4 23 10 17 10"/>
                    <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
                  </svg>
                </span>
                <span>Hızlı & Güvenli Kargo</span>
              </div>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="hero-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&q=80" 
                alt="Baysan Erken Hasat Zeytinyağı şişesi" 
                className="hero-main-image"
              />
              <div className="hero-floating-card card-1">
                <div className="card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </div>
                <div className="card-info">
                  <span className="card-value">0.18%</span>
                  <span className="card-label">Asidite Oranı</span>
                </div>
              </div>
              <div className="hero-floating-card card-2">
                <div className="card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                </div>
                <div className="card-info">
                  <span className="card-value">520</span>
                  <span className="card-label">mg/kg Polifenol</span>
                </div>
              </div>
              <div className="hero-floating-card card-3">
                <div className="card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <div className="card-info">
                  <span className="card-value">27°C</span>
                  <span className="card-label">Maks. Sıcaklık</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-scroll" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats" aria-labelledby="stats-title">
        <div className="container">
          <h2 id="stats-title" className="sr-only">İstatistiklerimiz</h2>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number" data-target={stat.value.replace(/\D/g, '')}>
                  {stat.value}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" aria-labelledby="features-title">
        <div className="container">
          <header className="section-header">
            <h2 id="features-title" className="section-title">Neden Baysan?</h2>
            <p className="section-subtitle">
              Dört nesilden gelen deneyim ve modern teknolojinin buluştuğu benzersiz kalite
            </p>
          </header>
          <div className="features-grid">
            {features.map((feature, index) => (
              <article key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products" aria-labelledby="featured-title">
        <div className="container">
          <header className="section-header">
            <div>
              <h2 id="featured-title" className="section-title">Öne Çıkan Ürünlerimiz</h2>
              <p className="section-subtitle">Seçkin lezzetler, ödüllü kaliteler</p>
            </div>
            <Link to="/urunler" className="btn btn-outline">
              Tüm Ürünleri Gör
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
          </header>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <article key={product.id} className="product-card">
                <Link to={`/urun/${product.slug}`} className="product-image-link" aria-label={`${product.name} detayları`}>
                  <div className="product-image">
                    <img src={product.image} alt={product.name} loading="lazy" />
                    {product.originalPrice > product.price && (
                      <span className="product-badge">-%{Math.round((1 - product.price / product.originalPrice) * 100)}</span>
                    )}
                    {product.featured && (
                      <span className="product-badge featured">Öne Çıkan</span>
                    )}
                  </div>
                </Link>
                <div className="product-info">
                  <span className="product-category">{product.category}</span>
                  <Link to={`/urun/${product.slug}`} className="product-name">
                    {product.name}
                  </Link>
                  <p className="product-desc">{product.shortDesc}</p>
                  <div className="product-meta">
                    <span className="product-volume">{product.volume}</span>
                    <div className="product-price">
                      <span className="current-price">
                        {new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(product.price)}
                      </span>
                      {product.originalPrice > product.price && (
                        <span className="original-price">
                          {new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(product.originalPrice)}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="product-specs">
                    <span className="spec"><strong>Asidite:</strong> {product.acidity}</span>
                    <span className="spec"><strong>Polifenol:</strong> {product.polyphenol}</span>
                  </div>
                  <Link to={`/urun/${product.slug}`} className="btn btn-primary btn-block product-btn">
                    İncele & Sepete Ekle
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="awards" aria-labelledby="awards-title">
        <div className="container">
          <header className="section-header">
            <h2 id="awards-title" className="section-title">Uluslararası Ödüllerimiz</h2>
            <p className="section-subtitle">Dünyanın en prestijli zeytinyağı yarışmalarında onaylanan kalitemiz</p>
          </header>
          <div className="awards-grid">
            {[
              { name: 'NYIOOC World Olive Oil Competition', year: '2024', awards: ['Gold Award - Erken Hasat', 'Best in Class - Memecik', 'Silver Award - Mature'], logo: '🏆' },
              { name: 'EVOOLEUM Awards', year: '2024', awards: ['Top 100 World\'s Best EVOOs', 'Gold Award - Organik'], logo: '🥇' },
              { name: 'Flora Olive Oil Competition', year: '2024', awards: ['Gold Award - Monovarietal'], logo: '🌿' },
              { name: 'BioFach Organic Awards', year: '2024', awards: ['Gold - Organic Category'], logo: '🌱' },
              { name: 'London IOOC', year: '2023', awards: ['Gold - Early Harvest', 'Silver - Mature'], logo: '🏅' },
              { name: 'Olive Japan', year: '2023', awards: ['Gold Award'], logo: '🎌' }
            ].map((award, index) => (
              <article key={index} className="award-card">
                <div className="award-header">
                  <span className="award-logo" aria-hidden="true">{award.logo}</span>
                  <div>
                    <h3 className="award-name">{award.name}</h3>
                    <span className="award-year">{award.year}</span>
                  </div>
                </div>
                <ul className="award-list">
                  {award.awards.map((a, i) => (
                    <li key={i}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {a}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="awards-cta">
            <Link to="/oduller" className="btn btn-outline btn-lg">
              Tüm Ödül ve Sertifikaları Gör
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta" aria-labelledby="cta-title">
        <div className="container">
          <div className="cta-content">
            <h2 id="cta-title">Hâlâ Karar Veremediniz mi?</h2>
            <p>Ücretsiz tadım seti için bize ulaşın veya uzmanlarımızdan danışmanlık alın.</p>
            <div className="cta-actions">
              <Link to="/iletisim" className="btn btn-primary btn-lg">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Bize Ulaşın
              </Link>
              <Link to="/sss" className="btn btn-outline btn-lg">
                Sık Sorulan Sorular
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section" aria-labelledby="newsletter-title">
        <div className="container">
          <div className="newsletter-card">
            <div className="newsletter-content">
              <h2 id="newsletter-title">Bültenimize Abone Olun</h2>
              <p>Yeni hasat duyuruları, özel indirimler ve zeytinyağı tarifleri için abone olun.</p>
            </div>
            <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); alert('Abone oldunuz! Teşekkürler.'); }}>
              <label htmlFor="newsletter-email" className="sr-only">E-posta adresiniz</label>
              <input 
                type="email" 
                id="newsletter-email" 
                placeholder="E-posta adresiniz" 
                required 
              />
              <button type="submit" className="btn btn-primary">
                Abone Ol
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </button>
            </form>
            <p className="newsletter-note">Spam göndermeyiz. İstediğiniz zaman abonelikten çıkabilirsiniz.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;