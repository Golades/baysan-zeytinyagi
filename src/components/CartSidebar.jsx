import { useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './CartSidebar.css';

const CartSidebar = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    clearCart
  } = useCart();

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsCartOpen(false);
    };
    if (isCartOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isCartOpen, setIsCartOpen]);

  if (!isCartOpen) return null;

  const total = getCartTotal();
  const shipping = total >= 1500 ? 0 : (total > 0 ? 49 : 0);
  const grandTotal = total + shipping;

  const formatPrice = (price) => {
    return new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: 'TRY',
      minimumFractionDigits: 2
    }).format(price);
  };

  return (
    <>
      <div className="cart-overlay" onClick={() => setIsCartOpen(false)} aria-hidden="true" />
      <aside className="cart-sidebar" role="dialog" aria-label="Alışveriş sepeti" aria-modal="true">
      <div className="cart-header">
        <h2>Alışveriş Sepeti</h2>
        <button
          className="cart-close"
          onClick={() => setIsCartOpen(false)}
          aria-label="Sepeti kapat"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>

      <div className="cart-content">
        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1 0 8"/>
            </svg>
            <h3>Sepetiniz Boş</h3>
            <p>Harika zeytinyağları keşfetmek için alışverişe başlayın.</p>
            <Link to="/urunler" className="btn btn-primary" onClick={() => setIsCartOpen(false)}>
              Ürünleri Gör
            </Link>
          </div>
        ) : (
          <>
            <ul className="cart-items" role="list" aria-label="Sepet ürünleri">
              {cartItems.map(item => (
                <li key={item.id} className="cart-item">
                  <Link to={`/urun/${item.slug}`} className="cart-item-image" onClick={() => setIsCartOpen(false)}>
                    <img src={item.image} alt={item.name} loading="lazy" />
                  </Link>
                  <div className="cart-item-details">
                    <Link to={`/urun/${item.slug}`} className="cart-item-name" onClick={() => setIsCartOpen(false)}>
                      {item.name}
                    </Link>
                    <div className="cart-item-meta">
                      <span>{item.volume}</span>
                      {item.originalPrice > item.price && (
                        <span className="cart-item-original-price">
                          {formatPrice(item.originalPrice)}
                        </span>
                      )}
                    </div>
                    <div className="cart-item-price-row">
                      <span className="cart-item-price">{formatPrice(item.price)}</span>
                      <div className="quantity-selector" role="group" aria-label={`${item.name} miktarı`}>
                        <button
                          className="qty-btn"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          aria-label="Azalt"
                          disabled={item.quantity <= 1}
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="5" y1="12" x2="19" y2="12"/>
                          </svg>
                        </button>
                        <span className="qty-value" aria-live="polite">{item.quantity}</span>
                        <button
                          className="qty-btn"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          aria-label="Artır"
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="12" y1="5" x2="12" y2="19"/>
                            <line x1="5" y1="12" x2="19" y2="12"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    className="cart-item-remove"
                    onClick={() => removeFromCart(item.id)}
                    aria-label={`${item.name} ürününü sepetten kaldır`}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="3 6 5 6 21 6"/>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                    </svg>
                  </button>
                </li>
              ))}
            </ul>

            <div className="cart-summary">
              <div className="summary-row">
                <span>Ara Toplam</span>
                <span>{formatPrice(total)}</span>
              </div>
              <div className="summary-row">
                <span>Kargo</span>
                <span>
                  {shipping === 0 ? (
                    <span className="free-shipping">Ücretsiz</span>
                  ) : (
                    formatPrice(shipping)
                  )}
                </span>
              </div>
              {shipping > 0 && total > 0 && (
                <div className="shipping-progress">
                  <div className="shipping-bar">
                    <div
                      className="shipping-fill"
                      style={{ width: `${Math.min((total / 1500) * 100, 100)}%` }}
                    />
                  </div>
                  <p className="shipping-text">
                    Ücretsiz kargo için {formatPrice(1500 - total)} daha alışveriş yapın
                  </p>
                </div>
              )}
              <div className="summary-row total">
                <span>Genel Toplam</span>
                <span>{formatPrice(grandTotal)}</span>
              </div>
              <div className="summary-note">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 16v-4M12 8h.01"/>
                </svg>
                <span>KDV dahildir. Kargo ücreti ödeme sayfasında hesaplanır.</span>
              </div>

              <Link to="/odeme" className="btn btn-primary btn-block checkout-btn" onClick={() => setIsCartOpen(false)}>
                <span>Ödemeye Geç</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </Link>

              <button
                className="btn btn-outline btn-block continue-shopping"
                onClick={() => setIsCartOpen(false)}
              >
                Alışverişe Devam Et
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
    </>
  );
};

export default CartSidebar;