import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import './ProductDetail.css';

const ProductDetail = () => {
  const { slug } = useParams();
  const { addToCart, getItemQuantity } = useCart();
  const product = getProductBySlug(slug);
  const relatedProducts = product ? getRelatedProducts(product.id, product.category) : [];

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const cartQuantity = product ? getItemQuantity(product.id) : 0;

  useEffect(() => {
    setQuantity(cartQuantity > 0 ? cartQuantity : 1);
  }, [cartQuantity]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      setAddedToCart(true);
      setTimeout(() => setAddedToCart(false), 3000);
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: 'TRY',
      minimumFractionDigits: 2
    }).format(price);
  };

  if (!product) {
    return (
      <div className="product-not-found">
        <div className="container">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <h1>Ürün Bulunamadı</h1>
          <p>Aradığınız ürün mevcut değil veya kaldırılmış olabilir.</p>
          <Link to="/urunler" className="btn btn-primary">Ürünlere Dön</Link>
        </div>
      </div>
    );
  }

  const savings = product.originalPrice > product.price 
    ? product.originalPrice - product.price 
    : 0;

  return (
    <div className="product-detail-page">
      {/* Breadcrumb */}
      <nav className="breadcrumb-nav" aria-label="Breadcrumb">
        <div className="container">
          <ol className="breadcrumb">
            <li><Link to="/">Ana Sayfa</Link></li>
            <li><Link to="/urunler">Ürünler</Link></li>
            <li><Link to={`/urunler?category=${product.category}`}>{product.category}</Link></li>
            <li aria-current="page">{product.name}</li>
          </ol>
        </div>
      </nav>

      {/* Main Content */}
      <main className="product-main">
        <div className="container">
          <div className="product-layout">
            {/* Gallery */}
            <div className="product-gallery">
              <div className="main-image-wrapper">
                <img 
                  src={product.images[selectedImage]} 
                  alt={`${product.name} - Görsel ${selectedImage + 1}`}
                  className="main-image"
                  id="main-product-image"
                />
                {product.originalPrice > product.price && (
                  <span className="discount-badge">-%{Math.round((1 - product.price / product.originalPrice) * 100)}</span>
                )}
                {product.featured && (
                  <span className="featured-badge">Öne Çıkan</span>
                )}
              </div>
              {product.images.length > 1 && (
                <div className="thumbnails" role="group" aria-label="Ürün görselleri">
                  {product.images.map((img, index) => (
                    <button
                      key={index}
                      className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                      onClick={() => setSelectedImage(index)}
                      aria-label={`Görsel ${index + 1} ${selectedImage === index ? '(seçili)' : ''}`}
                      aria-pressed={selectedImage === index}
                    >
                      <img src={img} alt="" loading="lazy" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="product-info-panel">
              <span className="product-category-tag">{product.category}</span>
              <h1 className="product-title">{product.name}</h1>
              
              <div className="product-rating">
                <div className="stars" aria-label="5 üzerinden 5 puan">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" fill="#F4E4A1" stroke="#F4E4A1" strokeWidth="2" aria-hidden="true">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  ))}
                </div>
                <span className="rating-text">Değerlendirme yok</span>
              </div>

              <p className="product-short-desc">{product.shortDesc}</p>

              {/* Price */}
              <div className="product-price-block">
                <div className="price-row">
                  <span className="current-price">{formatPrice(product.price)}</span>
                  {product.originalPrice > product.price && (
                    <>
                      <span className="original-price">{formatPrice(product.originalPrice)}</span>
                      <span className="save-badge">{formatPrice(savings)} tasarruf</span>
                    </>
                  )}
                </div>
                <p className="price-note">KDV dahildir. Kargo ücreti ödeme sayfasında hesaplanır.</p>
              </div>

              {/* Volume Selector */}
              <div className="volume-selector">
                <label className="selector-label">Hacim</label>
                <div className="volume-options">
                  <button
                    className={`volume-option ${product.volume === '250 ml' ? 'active' : ''}`}
                    disabled={product.volume !== '250 ml'}
                  >
                    <span>250 ml</span>
                    {product.volume === '250 ml' && <span className="option-price">{formatPrice(Math.round(product.price * 0.55))}</span>}
                  </button>
                  <button
                    className={`volume-option ${product.volume === '500 ml' ? 'active' : ''}`}
                    disabled={product.volume !== '500 ml'}
                  >
                    <span>500 ml</span>
                    {product.volume === '500 ml' && <span className="option-price">{formatPrice(product.price)}</span>}
                  </button>
                  <button
                    className={`volume-option ${product.volume === '1 Litre' ? 'active' : ''}`}
                    disabled={product.volume !== '1 Litre'}
                  >
                    <span>1 Litre</span>
                    {product.volume === '1 Litre' && <span className="option-price">{formatPrice(Math.round(product.price * 1.8))}</span>}
                  </button>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="quantity-selector-block">
                <label className="selector-label">Miktar</label>
                <div className="quantity-input">
                  <button
                    className="qty-btn"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                    aria-label="Azalt"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/></svg>
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    min="1"
                    max="99"
                    className="qty-value"
                    aria-label="Miktar"
                  />
                  <button
                    className="qty-btn"
                    onClick={() => setQuantity(quantity + 1)}
                    aria-label="Artır"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <button
                className={`btn btn-primary btn-lg btn-block add-to-cart-main ${addedToCart ? 'added' : ''}`}
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                {addedToCart ? (
                  <>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    Sepete Eklendi!
                  </>
                ) : (
                  <>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1 0 8"/></svg>
                    Sepete Ekle
                  </>
                )}
              </button>

              {/* Quick Info */}
              <div className="quick-info">
                <div className="quick-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                  <span>Hemen kargo<br/><strong>1-2 iş günü</strong></span>
                </div>
                <div className="quick-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  <span>14 gün içinde<br/><strong>İade garantisi</strong></span>
                </div>
                <div className="quick-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 6v6l4 2"/></svg>
                  <span>Güvenli ödeme<br/><strong>SSL korumalı</strong></span>
                </div>
              </div>

              {/* Features */}
              <div className="product-features">
                {product.features.map((feature, index) => (
                  <span key={index} className="feature-tag">{feature}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="product-tabs">
            <div className="tabs-header" role="tablist">
              <button role="tab" aria-selected={true} aria-controls="tab-description" className="tab-btn active" id="tab-btn-description">
                Açıklama
              </button>
              <button role="tab" aria-selected={false} aria-controls="tab-specs" className="tab-btn" id="tab-btn-specs">
                Teknik Özellikler
              </button>
              <button role="tab" aria-selected={false} aria-controls="tab-usage" className="tab-btn" id="tab-btn-usage">
                Kullanım Önerileri
              </button>
              <button role="tab" aria-selected={false} aria-controls="tab-awards" className="tab-btn" id="tab-btn-awards">
                Ödüller
              </button>
            </div>

            <div className="tabs-content">
              <div role="tabpanel" id="tab-description" aria-labelledby="tab-btn-description" className="tab-panel active">
                <div className="description-content">
                  <p>{product.description}</p>
                  
                  <h3>Bu Ürünün Özelliği</h3>
                  <ul className="feature-list">
                    <li><strong>Hasat Dönemi:</strong> {product.harvestPeriod}</li>
                    <li><strong>Asidite Oranı:</strong> {product.acidity} (Extra Virgin standartları: {"<0.8%"})</li>
                    <li><strong>Polifenol İçeriği:</strong> {product.polyphenol} (Yüksek antioksidan)</li>
                    <li><strong>Menşei:</strong> {product.origin}</li>
                    <li><strong>Zeytin Çeşidi:</strong> {product.variety}</li>
                    <li><strong>Üretim Yöntemi:</strong> Soğuk presleme (max 27°C)</li>
                    <li><strong>Ambalaj:</strong> Koyu cam şişe, azotlu koruma</li>
                  </ul>

                  <h3>Depolama Koşulları</h3>
                  <p>Zeytinyağınızı ılık, karanlık ve kuru bir ortamda (15-20°C), güneş ışığından ve ısı kaynağından uzak tutun. Şişeyi her kullanımından sonra kapağını sıkı kapatın. Doğru depolandığında 24 ay kadar taze kalır.</p>
                </div>
              </div>

              <div role="tabpanel" id="tab-specs" aria-labelledby="tab-btn-specs" className="tab-panel">
                <div className="specs-table">
                  <div className="specs-row header">
                    <span>Özellik</span>
                    <span>Değer</span>
                  </div>
                  <div className="specs-row"><span>Ürün Adı</span><span>{product.name}</span></div>
                  <div className="specs-row"><span>Kategori</span><span>{product.category}</span></div>
                  <div className="specs-row"><span>Hacim</span><span>{product.volume}</span></div>
                  <div className="specs-row"><span>Asidite Oranı</span><span>{product.acidity}</span></div>
                  <div className="specs-row"><span>Polifenol (mg/kg)</span><span>{product.polyphenol}</span></div>
                  <div className="specs-row"><span>Peroksit Değeri</span><span>{"< 10 meq O₂/kg"}</span></div>
                  <div className="specs-row"><span>K232 / K270</span><span>1.8 / 0.15</span></div>
                  <div className="specs-row"><span>Hasat Dönemi</span><span>{product.harvestPeriod}</span></div>
                  <div className="specs-row"><span>Menşei</span><span>{product.origin}</span></div>
                  <div className="specs-row"><span>Zeytin Çeşidi</span><span>{product.variety}</span></div>
                  <div className="specs-row"><span>Üretim Yöntemi</span><span>{"Soğuk Presleme (≤27°C)"}</span></div>
                  <div className="specs-row"><span>Filtrasyon</span><span>{product.features.includes('Filtresiz') ? 'Filtresiz (Doğal tortu)' : 'Hafif filtreli'}</span></div>
                  <div className="specs-row"><span>Ambalaj</span><span>Koyu cam şişe, azotlu boşluk</span></div>
                  <div className="specs-row"><span>Raf Ömrü</span><span>Üretim tarihinden 24 ay</span></div>
                  <div className="specs-row"><span>Depolama</span><span>15-20°C, karanlık, kuru ortam</span></div>
                  <div className="specs-row"><span>Sertifikalar</span><span>{product.awards.filter(a => a.includes('Certified') || a.includes('Organic') || a.includes('ISO')).join(', ') || 'ISO 22000, ISO 9001, Organik'}</span></div>
                </div>
              </div>

              <div role="tabpanel" id="tab-usage" aria-labelledby="tab-btn-usage" className="tab-panel">
                <div className="usage-content">
                  <h3>En İyi Kullanım Alanları</h3>
                  <div className="usage-grid">
                    <article className="usage-card">
                      <div className="usage-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M12 6v6l4 2"/></svg>
                      </div>
                      <h4>Kahvaltılık</h4>
                      <p>Taze beyaz peynir, zeytin, domates ve köy ekmeği ile klasik Türk kahvaltısının vazgeçilmezi.</p>
                    </article>
                    <article className="usage-card">
                      <div className="usage-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                      </div>
                      <h4>Salatalar</h4>
                      <p>Yeşil salatalar, çoban salatası, meze tabağı ve zeytinyağlı yaprak sarması için ideal.</p>
                    </article>
                    <article className="usage-card">
                      <div className="usage-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                      </div>
                      <h4>Soğuk Yemekler</h4>
                      <p>Zeytinyağlı enginar, barbunya, bakla, pırasa ve kabak gibi klasik Türk mutfağı yemekleri.</p>
                    </article>
                    <article className="usage-card">
                      <div className="usage-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                      </div>
                      <h4>Pişirme (Düşük Isı)</h4>
                      <p>Düşük ısıda sauté, haşlama ve fırında pişirme için kullanabilirsiniz (duman noktası ~190°C).</p>
                    </article>
                    <article className="usage-card">
                      <div className="usage-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                      </div>
                      <h4>Marinasyon</h4>
                      <p>Et, tavuk, balık ve sebze marinasyonları için aromatik baz olarak mükemmel sonuç verir.</p>
                    </article>
                    <article className="usage-card">
                      <div className="usage-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 6v6l4 2"/></svg>
                      </div>
                      <h4>Tatlı & Ekmek</h4>
                      <p>Zeytinyağlı kurabiye, kek tarifi ve fırından çıkan sıcak ekmeğin üzerine damlatma.</p>
                    </article>
                  </div>

                  <div className="usage-tip">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
                    <div>
                      <strong>İpucu:</strong> Erken hasat yağlarımızı (yoğun aromalı) soğuk yemeklerde, mature yağlarımızı (dengeli) ise hem soğuk hem ısılı yemeklerde kullanmanızı öneririz.
                    </div>
                  </div>
                </div>
              </div>

              <div role="tabpanel" id="tab-awards" aria-labelledby="tab-btn-awards" className="tab-panel">
                <div className="awards-content">
                  {product.awards.map((award, index) => (
                    <div key={index} className="award-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="6"/><path d="M20.21 15.89A10 10 0 0 1 3.79 15.89"/></svg>
                      <span>{award}</span>
                    </div>
                  ))}
                  <p className="awards-note">
                    Baysan zeytinyağlarımız dünyanın en prestijli zeytinyağı yarışmalarında 
                    jüri tarafından kör testlerle değerlendirilmiş ve ödüllendirilmiştir.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section className="related-products" aria-labelledby="related-title">
              <div className="related-header">
                <h2 id="related-title" className="section-title">Benzer Ürünler</h2>
                <Link to="/urunler" className="btn btn-outline">Tümünü Gör</Link>
              </div>
              <div className="related-grid">
                {relatedProducts.map(p => (
                  <article key={p.id} className="related-card">
                    <Link to={`/urun/${p.slug}`} className="related-image">
                      <img src={p.image} alt={p.name} loading="lazy" />
                    </Link>
                    <div className="related-info">
                      <Link to={`/urun/${p.slug}`} className="related-name">{p.name}</Link>
                      <div className="related-price">
                        <span>{formatPrice(p.price)}</span>
                        {p.originalPrice > p.price && <span className="original">{formatPrice(p.originalPrice)}</span>}
                      </div>
                      <button
                        className="btn btn-sm btn-primary"
                        onClick={(e) => { e.preventDefault(); addToCart(p); }}
                      >
                        Sepete Ekle
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;