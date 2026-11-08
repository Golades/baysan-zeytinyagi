import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Ad soyad zorunludur';
    if (!formData.email.trim()) newErrors.email = 'E-posta zorunludur';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Geçerli bir e-posta girin';
    if (!formData.subject.trim()) newErrors.subject = 'Konu zorunludur';
    if (!formData.message.trim()) newErrors.message = 'Mesaj zorunludur';
    else if (formData.message.trim().length < 20) newErrors.message = 'Mesaj en az 20 karakter olmalıdır';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const contactInfo = [
    {
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
      title: 'Telefon',
      items: [
        { label: 'Müşteri Hizmetleri', value: '+90 (266) 314 XX XX' },
        { label: 'Satış ve Sipariş', value: '+90 (266) 314 XX XX' },
        { label: 'WhatsApp', value: '+90 5XX XXX XX XX' }
      ]
    },
    {
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
      title: 'E-posta',
      items: [
        { label: 'Genel Bilgi', value: 'info@baysanzeytinyagi.com' },
        { label: 'Satış ve Siparişler', value: 'satis@baysanzeytinyagi.com' },
        { label: 'İnsan Kaynakları', value: 'ik@baysanzeytinyagi.com' },
        { label: 'Basın ve Medya', value: 'press@baysanzeytinyagi.com' }
      ]
    },
    {
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
      title: 'Adres',
      items: [
        { label: 'Fabrika & Ofis', value: 'Zeytinli Mah., Fabrika Sk. No:12, Ayvalık / Balıkesir' },
        { label: 'Zeytin Bahçeleri', value: 'Altınova Köyü, Ayvalık / Balıkesir (1200+ ağaç)' },
        { label: 'Şehir Ofisi', value: 'Levent Mah., Büyükdere Cd. No:185, Şişli / İstanbul' }
      ]
    }
  ];

  const workingHours = [
    { days: 'Pazartesi - Cuma', hours: '08:30 - 18:00' },
    { days: 'Cumartesi', hours: '09:00 - 14:00' },
    { days: 'Pazar', hours: 'Kapalı' }
  ];

  const subjects = [
    { value: 'general', label: 'Genel Bilgi ve Sorular' },
    { value: 'order', label: 'Sipariş Durumu / Değişiklik' },
    { value: 'wholesale', label: 'Toptan Satış / Bayilik' },
    { value: 'export', label: 'İhracat / Dış Ticaret' },
    { value: 'visit', label: 'Fabrika Ziyareti / Tadım' },
    { value: 'press', label: 'Basın / Medya / İş Birliği' },
    { value: 'complaint', label: 'Şikayet / Öneri' },
    { value: 'other', label: 'Diğer' }
  ];

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="hero-badge">BİZİMLE İLETİŞİME GEÇİN</span>
          <h1>İletişim</h1>
          <p>
            Sorularınız, siparişleriniz veya iş birliği teklifleriniz için 
            aşağıdaki kanallardan bize ulaşabilirsiniz.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-grid">
            {contactInfo.map((info, index) => (
              <article key={index} className="contact-card">
                <div className="contact-icon" dangerouslySetInnerHTML={{ __html: info.icon }} />
                <h3>{info.title}</h3>
                <ul>
                  {info.items.map((item, i) => (
                    <li key={i}>
                      <span className="contact-label">{item.label}</span>
                      <a href={item.value.startsWith('+') || item.value.includes('@') ? `${item.value.startsWith('+') ? 'tel:' : 'mailto:'}${item.value}` : '#'} className="contact-value">
                        {item.value}
                      </a>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-layout">
            {/* Form */}
            <div className="contact-form-wrapper">
              <h2 className="form-title">Bize Yazın</h2>
              
              {submitted && (
                <div className="success-message" role="alert">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  <div>
                    <h3>Mesajınız Gönderildi!</h3>
                    <p>En kısa sürede size dönüş yapacağız. Teşekkürler.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Ad Soyad *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Adınız ve soyadınız"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && <span id="name-error" className="form-error">{errors.name}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">E-posta *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ornek@email.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && <span id="email-error" className="form-error">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Telefon</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+90 (XXX) XXX XX XX"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Konu *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? 'subject-error' : undefined}
                    >
                      <option value="">Konu seçin</option>
                      {subjects.map(s => (
                        <option key={s.value} value={s.value}>{s.label}</option>
                      ))}
                    </select>
                    {errors.subject && <span id="subject-error" className="form-error">{errors.subject}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Mesaj *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    placeholder="Mesajınızı buraya yazın (en az 20 karakter)..."
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : 'message-hint'}
                  />
                  {errors.message && <span id="message-error" className="form-error">{errors.message}</span>}
                  <span id="message-hint" className="form-hint">Minimum 20 karakter</span>
                </div>

                <button type="submit" className="btn btn-primary btn-lg btn-block">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                  Gönder
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <aside className="contact-sidebar">
              <div className="sidebar-card">
                <h3>Çalışma Saatlerimiz</h3>
                <ul className="hours-list">
                  {workingHours.map((h, i) => (
                    <li key={i}>
                      <span>{h.days}</span>
                      <span>{h.hours}</span>
                    </li>
                  ))}
                </ul>
                <p className="hours-note">Resmi tatillerde farklı çalışma saatleri uygulanabilir.</p>
              </div>

              <div className="sidebar-card">
                <h3>Hızlı Erişim</h3>
                <ul className="quick-links">
                  <li><a href="/sss">Sık Sorulan Sorular</a></li>
                  <li><a href="/teslimat-iade">Teslimat ve İade</a></li>
                  <li><a href="/urunler">Ürün Kataloğu</a></li>
                  <li><a href="/kariyer">Kariyer Fırsatları</a></li>
                </ul>
              </div>

              <div className="sidebar-card">
                <h3>Sosyal Medya</h3>
                <p>Güncel haberler ve kampanyalar için takip edin.</p>
                <div className="social-links">
                  <a href="https://instagram.com/baysanzeytinyagi" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                    Instagram
                  </a>
                  <a href="https://facebook.com/baysanzeytinyagi" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    Facebook
                  </a>
                  <a href="https://youtube.com/@baysanzeytinyagi" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="YouTube">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h20a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><polygon points="23 7 16 12 23 17 23 7"/></svg>
                    YouTube
                  </a>
                  <a href="https://linkedin.com/company/baysan-zeytinyagi" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                    LinkedIn
                  </a>
                </div>
              </div>

              <div className="sidebar-card map-card">
                <h3>Konumumuz</h3>
                <div className="map-placeholder" aria-label="Harita görüntülemesi">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>Harita yükleniyor...</span>
                </div>
                <p className="map-address">Zeytinli Mah., Fabrika Sk. No:12<br/>Ayvalık / Balıkesir</p>
                <a href="https://maps.google.com/?q=Baysan+Zeytinya%C4%9F%C4%B1+Ayval%C4%B1k" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-block">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  Yolda Git
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="faq-preview">
        <div className="container">
          <header className="section-header">
            <h2>Sık Sorulan Sorular</h2>
            <p>En çok merak edilen konuların cevapları</p>
          </header>
          <div className="faq-grid">
            {[
              { q: 'Ücretsiz kargo limiti nedir?', a: '1.500 TL ve üzeri alışverişlerde kargo ücretsizdir. Altında 49 TL kargo ücreti uygulanır.' },
              { q: 'Zeytinyağı nasıl saklanmalı?', a: '15-20°C arası, karanlık ve kuru ortamda, güneş ışığından uzak tutun. Şişeyi her kullanımda kapatın.' },
              { q: 'Asidite oranı ne anlama gelir?', a: 'Zeytinyağının kalite göstergesidir. Extra virgin için <0.8% olmalıdır. Baysan ürünlerimiz 0.18-0.35% arasındadır.' },
              { q: 'Toptan satış yapıyor musunuz?', a: 'Evet, restoran, market, bayi ve ihracat firmaları için özel fiyatlandırma ve lojistik çözümlerimiz vardır.' }
            ].map((faq, index) => (
              <article key={index} className="faq-item">
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </article>
            ))}
          </div>
          <div className="faq-cta">
            <a href="/sss" className="btn btn-outline btn-lg">Tüm Soruları Gör</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;