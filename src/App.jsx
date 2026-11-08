import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Production from './pages/Production';
import Awards from './pages/Awards';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Checkout from './pages/Checkout';
import './index.css';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="app">
          <Header />
          <main className="main-content" id="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/urunler" element={<Products />} />
              <Route path="/urun/:slug" element={<ProductDetail />} />
              <Route path="/hakkimizda" element={<About />} />
              <Route path="/uretim" element={<Production />} />
              <Route path="/oduller" element={<Awards />} />
              <Route path="/iletisim" element={<Contact />} />
              <Route path="/sss" element={<FAQ />} />
              <Route path="/odeme" element={<Checkout />} />
            </Routes>
          </main>
          <Footer />
          <CartSidebar />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;