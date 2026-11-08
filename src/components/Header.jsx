import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Header.css';

const Header = () => {
  const { getCartCount, isCartOpen, setIsCartOpen } = useCart();
  const [cartCount, setCartCount] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setCartCount(getCartCount());
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [getCartCount]);

  const navLinks = [
    { path: '/', label: 'Ana Sayfa' },
    { path: '/urunler', label: 'Ürünler' },
    { path: '/hakkimizda', label: 'Hakkımızda' },
    { path: '/uretim', label: 'Üretim Süreci' },
    { path: '/oduller', label: 'Ödüller' },
    { path: '/iletisim', label: 'İletişim' }
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo" aria-label="Baysan Zeytinyağı - Ana Sayfa">
          <svg className="logo-icon" viewBox="0 0 60 60" fill="none" aria-hidden="true">
            <ellipse cx="30" cy="42" rx="18" ry="8" fill="#2D5A27" opacity="0.3"/>
            <path d="M30 12 C20 12 14 20 14 30 C14 36 18 40 22 42 C26 44 30 44 30 44 C30 44 34 44 38 42 C42 40 46 36 46 30 C46 20 40 12 30 12 Z" fill="#2D5A27"/>
            <path d="M30 18 C35 18 38 22 38 27 C38 30 36 32 33 33" stroke="#F4E4A1" strokeWidth="2" strokeLinecap="round" fill="none"/>
            <circle cx="30" cy="25" r="1.5" fill="#F4E4A1"/>
          </svg>
          <span className="logo-text">BAYSAN</span>
          <span className="logo-tagline">ZEYTINYAĞI</span>
        </Link>

        <nav className={`nav ${mobileMenuOpen ? 'open' : ''}`} role="navigation" aria-label="Ana navigasyon">
          <ul className="nav-list">
            {navLinks.map(link => (
              <li key={link.path}>
                <Link to={link.path} className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <button
            className="cart-btn"
            onClick={() => setIsCartOpen(!isCartOpen)}
            aria-label={`Sepet ${cartCount > 0 ? `(${cartCount} ürün)` : '(boş)'}`}
            aria-expanded={isCartOpen}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1 0 8"/>
            </svg>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={mobileMenuOpen}
          >
            <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`} aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;