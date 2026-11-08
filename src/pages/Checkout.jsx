import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Checkout.css';

const Checkout = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Billing
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    taxNumber: '',
    address: '',
    district: '',
    city: '',
    postalCode: '',
    country: 'Türkiye',
    // Shipping
    sameAsBilling: true,
    sFirstName: '',
    sLastName: '',
    sPhone: '',
    sAddress: '',
    sDistrict: '',
    sCity: '',
    sPostalCode: '',
    // Payment
    paymentMethod: 'credit-card',
    cardName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: '',
    // Notes
    orderNotes: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const shippingCost = getCartTotal() >= 1500 ? 0 : (getCartTotal() > 0 ? 49 : 0);
  const grandTotal = getCartTotal() + shippingCost;

  const formatPrice = (price) => {
    return new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: 'TRY',
      minimumFractionDigits: 2
    }).format(price);
  };

  const validateStep = (step) => {
    const newErrors = {};
    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'Ad zorunludur';
      if (!formData.lastName.trim()) newErrors.lastName = 'Soyad zorunludur';
      if (!formData.email.trim()) newErrors.email = 'E-posta zorunludur';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Geçerli e-posta girin';
      if (!formData.phone.trim()) newErrors.phone = 'Telefon zorunludur';
      if (!formData.address.trim()) newErrors.address = 'Adres zorunludur';
      if (!formData.district.trim()) newErrors.district = 'İlçe zorunludur';
      if (!formData.city.trim()) newErrors.city = 'İl zorunludur';
      if (!formData.postalCode.trim()) newErrors.postalCode = 'Posta kodu zorunludur';
    }
    if (step === 2 && !formData.sameAsBilling) {
      if (!formData.sFirstName.trim()) newErrors.sFirstName = 'Ad zorunludur';
      if (!formData.sLastName.trim()) newErrors.sLastName = 'Soyad zorunludur';
      if (!formData.sPhone.trim()) newErrors.sPhone = 'Telefon zorunludur';
      if (!formData.sAddress.trim()) newErrors.sAddress = 'Adres zorunludur';
      if (!formData.sDistrict.trim()) newErrors.sDistrict = 'İlçe zorunludur';
      if (!formData.sCity.trim()) newErrors.sCity = 'İl zorunludur';
      if (!formData.sPostalCode.trim()) newErrors.sPostalCode = 'Posta kodu zorunludur';
    }
    if (step === 3 && formData.paymentMethod === 'credit-card') {
      if (!formData.cardName.trim()) newErrors.cardName = 'Kart sahibi adı zorunludur';
      if (!formData.cardNumber.replace(/\s/g, '').match(/^\d{16}$/)) newErrors.cardNumber = '16 haneli kart numarası girin';
      if (!formData.cardExpiry.match(/^\d{2}\/\d{2}$/)) newErrors.cardExpiry = 'AA/YY formatında girin';
      else {
        const [month, year] = formData.cardExpiry.split('/').map(Number);
        const now = new Date();
        const currentYear = now.getFullYear() % 100;
        const currentMonth = now.getMonth() + 1;
        if (month < 1 || month > 12) newErrors.cardExpiry = 'Geçerli ay girin (01-12)';
        else if (year < currentYear || (year === currentYear && month < currentMonth)) newErrors.cardExpiry = 'Kart süresi dolmuş';
      }
      if (!formData.cardCvv.match(/^\d{3,4}$/)) newErrors.cardCvv = '3-4 haneli CVV girin';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep(3)) return;

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const newOrderNumber = 'BYSN-' + Date.now().toString().slice(-8);
    setOrderNumber(newOrderNumber);
    setOrderSuccess(true);
    setIsSubmitting(false);
    clearCart();
  };

  const steps = [
    { num: 1, label: 'Adres Bilgileri', desc: 'Fatura ve teslimat adresi' },
    { num: 2, label: 'Teslimat', desc: 'Kargo adresi ve notlar' },
    { num: 3, label: 'Ödeme', desc: 'Güvenli ödeme yöntemi' },
    { num: 4, label: 'Onay', desc: 'Sipariş özeti ve onay' }
  ];

  if (orderSuccess) {
    return (
      <div className="checkout-page success-page">
        <div className="container">
          <div className="success-card">
            <div className="success-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <h1>Siparişiniz Alındı!</h1>
            <p className="order-number">Sipariş No: <strong>{orderNumber}</strong></p>
            <p>Sipariş detayları e-posta adresinize gönderilmiştir. En kısa sürede kargo ile teslim edilecektir.</p>
            <div className="success-actions">
              <Link to="/" className="btn btn-primary btn-lg">Ana Sayfaya Dön</Link>
              <Link to="/urunler" className="btn btn-outline btn-lg">Alışverişe Devam Et</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="checkout-page empty-cart">
        <div className="container">
          <div className="empty-card">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1 0 8"/>
            </svg>
            <h1>Sepetiniz Boş</h1>
            <p>Ödeme yapmak için sepete ürün ekleyin.</p>
            <Link to="/urunler" className="btn btn-primary btn-lg">Ürünleri Gör</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      {/* Progress Steps */}
      <div className="checkout-progress">
        <div className="container">
          <div className="progress-steps">
            {steps.map((step, index) => (
              <div key={step.num} className={`progress-step ${currentStep > step.num ? 'completed' : currentStep === step.num ? 'active' : ''}`}>
                <div className="step-circle">
                  {currentStep > step.num ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                  ) : step.num}
                </div>
                <div className="step-label">
                  <span className="step-title">{step.label}</span>
                  <span className="step-desc">{step.desc}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="step-line" style={{ '--progress': currentStep > step.num ? '100%' : '0%' }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="checkout-form" noValidate>
        <div className="container">
          <div className="checkout-layout">
            {/* Form Content */}
            <div className="checkout-main">
              {/* Step 1: Billing Address */}
              {currentStep === 1 && (
                <fieldset className="checkout-section">
                  <legend>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    Fatura Adresi
                  </legend>
                  <p className="section-hint">Fatura için gerekli bilgileri giriniz.</p>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName">Ad *</label>
                      <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Ahmet" aria-invalid={!!errors.firstName} />
                      {errors.firstName && <span className="error">{errors.firstName}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">Soyad *</label>
                      <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Yılmaz" aria-invalid={!!errors.lastName} />
                      {errors.lastName && <span className="error">{errors.lastName}</span>}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">E-posta *</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="ahmet@email.com" aria-invalid={!!errors.email} />
                      {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Telefon *</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+90 (5XX) XXX XX XX" aria-invalid={!!errors.phone} />
                      {errors.phone && <span className="error">{errors.phone}</span>}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="company">Firma Adı</label>
                      <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Şirket adı (isteğe bağlı)" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="taxNumber">Vergi No / TC Kimlik</label>
                      <input type="text" id="taxNumber" name="taxNumber" value={formData.taxNumber} onChange={handleChange} placeholder="1234567890" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="address">Açık Adres *</label>
                    <textarea id="address" name="address" value={formData.address} onChange={handleChange} rows="2" placeholder="Mahalle, Cadde, Sokak, No, Daire..." aria-invalid={!!errors.address} />
                    {errors.address && <span className="error">{errors.address}</span>}
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="district">İlçe *</label>
                      <input type="text" id="district" name="district" value={formData.district} onChange={handleChange} placeholder="İlçe" aria-invalid={!!errors.district} />
                      {errors.district && <span className="error">{errors.district}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="city">İl *</label>
                      <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} placeholder="İl" aria-invalid={!!errors.city} />
                      {errors.city && <span className="error">{errors.city}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="postalCode">Posta Kodu *</label>
                      <input type="text" id="postalCode" name="postalCode" value={formData.postalCode} onChange={handleChange} placeholder="10000" maxLength="5" aria-invalid={!!errors.postalCode} />
                      {errors.postalCode && <span className="error">{errors.postalCode}</span>}
                    </div>
                  </div>

                  <div className="form-group checkbox-group">
                    <label className="checkbox-label">
                      <input type="checkbox" name="sameAsBilling" checked={formData.sameAsBilling} onChange={handleChange} />
                      <span className="checkbox-custom"></span>
                      <span>Teslimat adresi fatura adresi ile aynı</span>
                    </label>
                  </div>
                </fieldset>
              )}

              {/* Step 2: Shipping */}
              {currentStep === 2 && (
                <fieldset className="checkout-section">
                  <legend>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                    Teslimat Adresi
                  </legend>
                  <p className="section-hint">Farklı adrese gönderim için adres bilgilerini giriniz.</p>
                  
                  {!formData.sameAsBilling && (
                    <>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="sFirstName">Ad *</label>
                          <input type="text" id="sFirstName" name="sFirstName" value={formData.sFirstName} onChange={handleChange} placeholder="Ahmet" aria-invalid={!!errors.sFirstName} />
                          {errors.sFirstName && <span className="error">{errors.sFirstName}</span>}
                        </div>
                        <div className="form-group">
                          <label htmlFor="sLastName">Soyad *</label>
                          <input type="text" id="sLastName" name="sLastName" value={formData.sLastName} onChange={handleChange} placeholder="Yılmaz" aria-invalid={!!errors.sLastName} />
                          {errors.sLastName && <span className="error">{errors.sLastName}</span>}
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="sPhone">Telefon *</label>
                        <input type="tel" id="sPhone" name="sPhone" value={formData.sPhone} onChange={handleChange} placeholder="+90 (5XX) XXX XX XX" aria-invalid={!!errors.sPhone} />
                        {errors.sPhone && <span className="error">{errors.sPhone}</span>}
                      </div>

                      <div className="form-group">
                        <label htmlFor="sAddress">Açık Adres *</label>
                        <textarea id="sAddress" name="sAddress" value={formData.sAddress} onChange={handleChange} rows="2" placeholder="Mahalle, Cadde, Sokak, No, Daire..." aria-invalid={!!errors.sAddress} />
                        {errors.sAddress && <span className="error">{errors.sAddress}</span>}
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="sDistrict">İlçe *</label>
                          <input type="text" id="sDistrict" name="sDistrict" value={formData.sDistrict} onChange={handleChange} placeholder="İlçe" aria-invalid={!!errors.sDistrict} />
                          {errors.sDistrict && <span className="error">{errors.sDistrict}</span>}
                        </div>
                        <div className="form-group">
                          <label htmlFor="sCity">İl *</label>
                          <input type="text" id="sCity" name="sCity" value={formData.sCity} onChange={handleChange} placeholder="İl" aria-invalid={!!errors.sCity} />
                          {errors.sCity && <span className="error">{errors.sCity}</span>}
                        </div>
                        <div className="form-group">
                          <label htmlFor="sPostalCode">Posta Kodu *</label>
                          <input type="text" id="sPostalCode" name="sPostalCode" value={formData.sPostalCode} onChange={handleChange} placeholder="10000" maxLength="5" aria-invalid={!!errors.sPostalCode} />
                          {errors.sPostalCode && <span className="error">{errors.sPostalCode}</span>}
                        </div>
                      </div>
                    </>
                  )}

                  <div className="form-group checkbox-group">
                    <label className="checkbox-label">
                      <input type="checkbox" name="sameAsBilling" checked={formData.sameAsBilling} onChange={handleChange} />
                      <span className="checkbox-custom"></span>
                      <span>Teslimat adresi fatura adresi ile aynı</span>
                    </label>
                  </div>

                  <div className="form-group">
                    <label htmlFor="orderNotes">Sipariş Notu</label>
                    <textarea id="orderNotes" name="orderNotes" value={formData.orderNotes} onChange={handleChange} rows="3" placeholder="Teslimat saatleri, kapı kodu, özel talimatlar..." />
                  </div>
                </fieldset>
              )}

              {/* Step 3: Payment */}
              {currentStep === 3 && (
                <fieldset className="checkout-section">
                  <legend>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
                    Ödeme Yöntemi
                  </legend>
                  <p className="section-hint">Güvenli ödeme altyapısı (SSL/3D Secure) ile işlem yapılır.</p>

                  <div className="payment-methods">
                    <label className={`payment-method ${formData.paymentMethod === 'credit-card' ? 'selected' : ''}`}>
                      <input type="radio" name="paymentMethod" value="credit-card" checked={formData.paymentMethod === 'credit-card'} onChange={handleChange} />
                      <div className="method-content">
                        <div className="method-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
                        </div>
                        <div className="method-info">
                          <span className="method-name">Kredi / Banka Kartı</span>
                          <span className="method-desc">Visa, Mastercard, Troy, BKM Express</span>
                        </div>
                      </div>
                      <span className="method-check"></span>
                    </label>

                    <label className={`payment-method ${formData.paymentMethod === 'eft' ? 'selected' : ''}`}>
                      <input type="radio" name="paymentMethod" value="eft" checked={formData.paymentMethod === 'eft'} onChange={handleChange} />
                      <div className="method-content">
                        <div className="method-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M12 6v6l4 2"/></svg>
                        </div>
                        <div className="method-info">
                          <span className="method-name">Havale / EFT</span>
                          <span className="method-desc">Sipariş onaylandıktan sonra IBAN bilgileri gönderilir</span>
                        </div>
                      </div>
                      <span className="method-check"></span>
                    </label>

                    <label className={`payment-method ${formData.paymentMethod === 'cod' ? 'selected' : ''}`}>
                      <input type="radio" name="paymentMethod" value="cod" checked={formData.paymentMethod === 'cod'} onChange={handleChange} />
                      <div className="method-content">
                        <div className="method-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                        </div>
                        <div className="method-info">
                          <span className="method-name">Kapıda Ödeme</span>
                          <span className="method-desc">Kargo teslimında nakit veya kart ile ödeme (15 TL işlem ücreti)</span>
                        </div>
                      </div>
                      <span className="method-check"></span>
                    </label>
                  </div>

                  {formData.paymentMethod === 'credit-card' && (
                    <div className="card-form">
                      <div className="card-preview">
                        <div className="card-front">
                          <div className="card-chip"></div>
                          <div className="card-brand">VISA</div>
                          <div className="card-number-display">{formData.cardNumber.replace(/(\d{4})/g, '$1 ').trim() || '•••• •••• •••• ••••'}</div>
                          <div className="card-bottom">
                            <div><span>KART SAHİBİ</span> {formData.cardName || 'AHMET YILMAZ'}</div>
                            <div><span>SON KULLANMA</span> {formData.cardExpiry || 'AA/YY'}</div>
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="cardName">Kart Üzerindeki İsim *</label>
                        <input type="text" id="cardName" name="cardName" value={formData.cardName} onChange={handleChange} placeholder="AHMET YILMAZ" aria-invalid={!!errors.cardName} />
                        {errors.cardName && <span className="error">{errors.cardName}</span>}
                      </div>

                      <div className="form-group">
                        <label htmlFor="cardNumber">Kart Numarası *</label>
                        <input type="text" id="cardNumber" name="cardNumber" value={formData.cardNumber} onChange={handleChange} placeholder="1234 5678 9012 3456" maxLength="19" aria-invalid={!!errors.cardNumber} />
                        {errors.cardNumber && <span className="error">{errors.cardNumber}</span>}
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="cardExpiry">Son Kullanma (AA/YY) *</label>
                          <input type="text" id="cardExpiry" name="cardExpiry" value={formData.cardExpiry} onChange={handleChange} placeholder="12/26" maxLength="5" aria-invalid={!!errors.cardExpiry} />
                          {errors.cardExpiry && <span className="error">{errors.cardExpiry}</span>}
                        </div>
                        <div className="form-group">
                          <label htmlFor="cardCvv">CVV *</label>
                          <input type="text" id="cardCvv" name="cardCvv" value={formData.cardCvv} onChange={handleChange} placeholder="123" maxLength="4" aria-invalid={!!errors.cardCvv} />
                          {errors.cardCvv && <span className="error">{errors.cardCvv}</span>}
                        </div>
                      </div>

                      <div className="security-note">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
                        <span>Kart bilgileriniz güvenli bir şekilde işlenir, sunucularımızda saklanmaz. 3D Secure ile korunan işlem.</span>
                      </div>
                    </div>
                  )}

                  {formData.paymentMethod === 'eft' && (
                    <div className="eft-info">
                      <h4>Havale / EFT Bilgileri</h4>
                      <p>Sipariş onaylandıktan sonra e-posta ve SMS ile IBAN bilgilerimiz size gönderilecektir. Ödeme yapılınca siparişiniz hazırlanmaya başlanır.</p>
                    </div>
                  )}

                  {formData.paymentMethod === 'cod' && (
                    <div className="cod-info">
                      <h4>Kapıda Ödeme</h4>
                      <p>Kargo teslim edilirken nakit veya kredi kartı ile ödeme yapabilirsiniz. Kapıda ödeme işlem ücreti: <strong>15 TL</strong> (toplam tutara eklenir).</p>
                    </div>
                  )}
                </fieldset>
              )}

              {/* Step 4: Review */}
              {currentStep === 4 && (
                <fieldset className="checkout-section">
                  <legend>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                    Sipariş Özeti
                  </legend>

                  <div className="review-grid">
                    <div className="review-card">
                      <h4>Fatura Adresi</h4>
                      <address>
                        <strong>{formData.firstName} {formData.lastName}</strong><br/>
                        {formData.company && `${formData.company}<br/>`}
                        {formData.address}<br/>
                        {formData.district} / {formData.city} {formData.postalCode}<br/>
                        {formData.country}<br/>
                        Tel: {formData.phone}<br/>
                        E-posta: {formData.email}
                        {formData.taxNumber && `<br/>Vergi/TC: ${formData.taxNumber}`}
                      </address>
                    </div>

                    <div className="review-card">
                      <h4>Teslimat Adresi</h4>
                      <address>
                        {formData.sameAsBilling ? (
                          <>Fatura adresi ile aynı</>
                        ) : (
                          <>
                            <strong>{formData.sFirstName} {formData.sLastName}</strong><br/>
                            {formData.sAddress}<br/>
                            {formData.sDistrict} / {formData.sCity} {formData.sPostalCode}<br/>
                            Tel: {formData.sPhone}
                          </>
                        )}
                      </address>
                    </div>

                    <div className="review-card">
                      <h4>Ödeme Yöntemi</h4>
                      <p>
                        {formData.paymentMethod === 'credit-card' && 'Kredi / Banka Kartı (Son 4 hane: ' + formData.cardNumber.slice(-4).replace(/\s/g, '') + ')'}
                        {formData.paymentMethod === 'eft' && 'Havale / EFT'}
                        {formData.paymentMethod === 'cod' && 'Kapıda Ödeme (+15 TL)'}
                      </p>
                    </div>

                    {formData.orderNotes && (
                      <div className="review-card">
                        <h4>Sipariş Notu</h4>
                        <p>{formData.orderNotes}</p>
                      </div>
                    )}
                  </div>

                  <div className="review-items">
                    <h4>Sipariş Edilen Ürünler</h4>
                    <ul>
                      {cartItems.map(item => (
                        <li key={item.id} className="review-item">
                          <img src={item.image} alt={item.name} />
                          <div className="review-item-info">
                            <span className="review-item-name">{item.name}</span>
                            <span className="review-item-meta">{item.volume} x {item.quantity}</span>
                          </div>
                          <span className="review-item-price">{formatPrice(item.price * item.quantity)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="terms-checkbox">
                    <label className="checkbox-label">
                      <input type="checkbox" required />
                      <span className="checkbox-custom"></span>
                      <span>
                        <a href="/kullanim-kosullari" target="_blank">Kullanım Koşulları</a>, 
                        <a href="/gizlilik" target="_blank">Gizlilik Politikası</a> ve 
                        <a href="/teslimat-iade" target="_blank">Teslimat/İade Koşulları</a>'nı okudum, kabul ediyorum.
                      </span>
                    </label>
                  </div>

                  <div className="review-total">
                    <div className="total-row"><span>Ara Toplam</span><span>{formatPrice(getCartTotal())}</span></div>
                    <div className="total-row"><span>Kargo</span><span>{shippingCost === 0 ? 'Ücretsiz' : formatPrice(shippingCost)}</span></div>
                    {formData.paymentMethod === 'cod' && <div className="total-row"><span>Kapıda Ödeme İşlem Ücreti</span><span>15,00 TL</span></div>}
                    <div className="total-row grand"><span>Genel Toplam</span><span>{formatPrice(grandTotal + (formData.paymentMethod === 'cod' ? 15 : 0))}</span></div>
                  </div>
                </fieldset>
              )}

              {/* Navigation Buttons */}
              <div className="checkout-nav">
                {currentStep > 1 && (
                  <button type="button" className="btn btn-outline btn-lg" onClick={handleBack}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
                    Geri
                  </button>
                )}
                {currentStep < 4 && (
                  <button type="button" className="btn btn-primary btn-lg" onClick={handleNext}>
                    Devam Et
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
                  </button>
                )}
                {currentStep === 4 && (
                  <button type="submit" className="btn btn-primary btn-lg" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <svg className="spinner" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" strokeOpacity="0.25"/><path d="M12 2a10 10 0 0 1 10 10" strokeOpacity="1"><animateTransform attributeName="transform" type="rotate" dur="1s" from="0 12 12" to="360 12 12" repeatCount="indefinite"/></path></svg>
                        İşleniyor...
                      </>
                    ) : (
                      <>
                        Siparişi Tamamla
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>

            {/* Order Summary Sidebar */}
            <aside className="checkout-sidebar">
              <div className="sidebar-card summary-card">
                <h3>Sipariş Özeti</h3>
                <ul className="summary-items">
                  {cartItems.map(item => (
                    <li key={item.id} className="summary-item">
                      <img src={item.image} alt={item.name} />
                      <div className="summary-item-info">
                        <span className="summary-item-name">{item.name}</span>
                        <span className="summary-item-meta">{item.volume} x {item.quantity}</span>
                      </div>
                      <span className="summary-item-price">{formatPrice(item.price * item.quantity)}</span>
                    </li>
                  ))}
                </ul>
                <div className="summary-totals">
                  <div className="total-row"><span>Ürünler Toplamı</span><span>{formatPrice(getCartTotal())}</span></div>
                  <div className="total-row"><span>Kargo</span><span>{shippingCost === 0 ? <span className="free">Ücretsiz</span> : formatPrice(shippingCost)}</span></div>
                  {formData.paymentMethod === 'cod' && <div className="total-row"><span>Kapıda Ödeme</span><span>15,00 TL</span></div>}
                  <div className="total-row grand"><span>Genel Toplam</span><span>{formatPrice(grandTotal + (formData.paymentMethod === 'cod' ? 15 : 0))}</span></div>
                </div>
                <p className="secure-note">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
                  Güvenli ödeme - SSL korumalı
                </p>
              </div>
            </aside>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;