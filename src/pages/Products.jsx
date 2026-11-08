import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';
import './Products.css';

const Products = () => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');

  const filteredProducts = useMemo(() => {
    let result = [...products];
    
    if (selectedCategory !== 'all' && selectedCategory !== 'featured') {
      result = result.filter(p => p.category === selectedCategory);
    } else if (selectedCategory === 'featured') {
      result = result.filter(p => p.featured);
    }

    switch (sortBy) {
      case 'price-asc':
        return result.sort((a, b) => a.price - b.price);
      case 'price-desc':
        return result.sort((a, b) => b.price - a.price);
      case 'name-asc':
        return result.sort((a, b) => a.name.localeCompare(b.name));
      case 'newest':
        return result.sort((a, b) => b.id - a.id);
      default:
        return result.sort((a, b) => (b.featured === a.featured ? 0 : b.featured ? 1 : -1));
    }
  }, [selectedCategory, sortBy]);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="products-page">
      {/* Page Header */}
      <header className="page-header">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Ana Sayfa</Link>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
            <span aria-current="page">Ürünler</span>
          </nav>
          <h1 className="page-title">Zeytinyağı Koleksiyonumuz</h1>
          <p className="page-subtitle">
            Ayvalık'ın eşsiz toprağından, dördüncü nesil aile deneyimiyle yetiştirdiğimiz 
            ödüllü extra virgin zeytinyağları
          </p>
        </div>
      </header>

      {/* Filters & Toolbar */}
      <div className="products-toolbar">
        <div className="container">
          <div className="toolbar-left">
            <div className="category-tabs" role="tablist" aria-label="Kategori filtreleri">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={selectedCategory === cat.id}
                  aria-controls={`panel-${cat.id}`}
                  className={`category-tab ${selectedCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  {cat.name}
                  <span className="tab-count">({cat.count})</span>
                </button>
              ))}
            </div>
          </div>
          <div className="toolbar-right">
            <div className="sort-select">
              <label htmlFor="sort-select" className="sr-only">Sıralama</label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-input"
              >
                <option value="featured">Öne Çıkanlar</option>
                <option value="price-asc">Fiyat: Artan</option>
                <option value="price-desc">Fiyat: Azalan</option>
                <option value="name-asc">İsim: A-Z</option>
                <option value="newest">En Yeniler</option>
              </select>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="sort-icon">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </div>
            <div className="view-toggle" role="group" aria-label="Görünüm modu">
              <button
                className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
                aria-label="Izgara görünümü"
                aria-pressed={viewMode === 'grid'}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7" rx="1"/>
                  <rect x="14" y="3" width="7" height="7" rx="1"/>
                  <rect x="3" y="14" width="7" height="7" rx="1"/>
                  <rect x="14" y="14" width="7" height="7" rx="1"/>
                </svg>
              </button>
              <button
                className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
                aria-label="Liste görünümü"
                aria-pressed={viewMode === 'list'}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <line x1="3" y1="12" x2="21" y2="12"/>
                  <line x1="3" y1="18" x2="21" y2="18"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid/List */}
      <main className="products-main">
        <div className="container">
          <div className={`products-grid ${viewMode}`} role="list" aria-label="Ürün listesi">
            {filteredProducts.length === 0 ? (
              <div className="no-products" role="status">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="11" cy="11" r="8"/>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
                <h3>Ürün Bulunamadı</h3>
                <p>Bu kategoride şu an stokta ürün yok. Lütfen başka bir kategori seçin.</p>
                <button className="btn btn-outline" onClick={() => setSelectedCategory('all')}>
                  Tüm Ürünleri Göster
                </button>
              </div>
            ) : (
              filteredProducts.map(product => (
                <article 
                  key={product.id} 
                  className="product-card"
                  role="listitem"
                >
                  <Link to={`/urun/${product.slug}`} className="product-image-link" aria-label={`${product.name} detayları`}>
                    <div className="product-image">
                      <img src={product.image} alt={product.name} loading="lazy" />
                      {product.originalPrice > product.price && (
                        <span className="product-badge">-%{Math.round((1 - product.price / product.originalPrice) * 100)}</span>
                      )}
                      {product.featured && (
                        <span className="product-badge featured">Öne Çıkan</span>
                      )}
                      {!product.inStock && (
                        <span className="product-badge out-of-stock">Stokta Yok</span>
                      )}
                    </div>
                  </Link>
                  <div className="product-info">
                    <span className="product-category">{product.category}</span>
                    <Link to={`/urun/${product.slug}`} className="product-name">
                      {product.name}
                    </Link>
                    <p className="product-desc">{product.shortDesc}</p>
                    
                    <div className="product-specs">
                      <span className="spec"><strong>Asidite:</strong> {product.acidity}</span>
                      <span className="spec"><strong>Polifenol:</strong> {product.polyphenol}</span>
                      <span className="spec"><strong>Menşei:</strong> {product.origin}</span>
                    </div>

                    <div className="product-footer">
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
                      <button
                        className="btn btn-primary add-to-cart-btn"
                        onClick={() => handleAddToCart(product)}
                        disabled={!product.inStock}
                        aria-label={`${product.name} sepete ekle`}
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                          <line x1="3" y1="6" x2="21" y2="6"/>
                          <path d="M16 10a4 4 0 0 1 0 8"/>
                        </svg>
                        Sepete Ekle
                      </button>
                    </div>
                  </div>
                </article>
              ))
            )}
          </div>

          {filteredProducts.length > 0 && (
            <div className="products-summary">
              <p>{filteredProducts.length} ürün listeleniyor</p>
            </div>
          )}
        </div>
      </main>

      {/* Category Info Sections */}
      <section className="category-info" aria-labelledby="category-info-title">
        <div className="container">
          <h2 id="category-info-title" className="sr-only">Kategori Bilgileri</h2>
          <div className="info-grid">
            <article className="info-card">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <h3>Erken Hasat Avantajı</h3>
              <p>Ekim-Aralık aylarında toplanan yeşil zeytinler, en yüksek polifenol ve antioksidan seviyesine sahiptir. Acımsı, yenileyici bir lezzet profili sunar.</p>
            </article>
            <article className="info-card">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <h3>Soğuk Presleme Teknolojisi</h3>
              <p>27°C'ın altındaki sıcaklıkta presleme, vitamin E, polifenoller ve aromatik bileşenlerin hasar görmeden korunmasını sağlar.</p>
            </article>
            <article className="info-card">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              </div>
              <h3>Hemen Şişeleme</h3>
              <p>Üretimden maksimum 2 saat içinde koyu cam şişelerde, azot gazı ile boşluk doldurularak oksidasyon engellenir.</p>
            </article>
            <article className="info-card">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3>Organik & Sertifikalı</h3>
              <p>EU Organik, USDA Organik, ISO 22000, ISO 9001, Halal ve Kosher sertifikalarıyla dünya standartlarında kalite.</p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;