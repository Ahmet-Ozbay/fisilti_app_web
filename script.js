:root {
    /* Dark mode (default) */
    --primary: #7C3AED;
    --primary-hover: #6D28D9;
    --secondary: #10B981;
    --secondary-hover: #059669;
    --dark: #111827;
    --darker: #0F172A;
    --light: #F9FAFB;
    --gray: #9CA3AF;
    --card-bg: rgba(30, 41, 59, 0.8);
    --text-color: #F9FAFB;
    --body-bg: #0F172A;
    --body-bg-gradient: linear-gradient(to bottom, #0F172A, #111827);
    --card-border: rgba(255, 255, 255, 0.05);
    --nav-bg: rgba(15, 23, 42, 0.95);
    --form-bg: rgba(15, 23, 42, 0.8);
    --transition: all 0.3s ease;
    --shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --border-radius: 12px;
  }
  
  /* Light mode */
  [data-theme="light"] {
    --primary: #7C3AED;
    --primary-hover: #6D28D9;
    --secondary: #0EA5E9;
    --secondary-hover: #0284C7;
    --dark: #334155;
    --darker: #1E293B;
    --light: #1E293B;
    --gray: #64748B;
    --card-bg: rgba(255, 255, 255, 0.95);
    --text-color: #1E293B;
    --body-bg: #eef2f8;
    --body-bg-gradient: linear-gradient(to bottom, #f8fafc, #eef2f8);
    --card-border: rgba(0, 0, 0, 0.05);
    --nav-bg: linear-gradient(90deg, rgba(248, 250, 252, 0.95) 0%, rgba(240, 244, 248, 0.95) 100%);
    --form-bg: rgba(255, 255, 255, 0.8);
    --shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03);
  }
  
  .theme-transition {
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }
  
  body {
    font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
    background-color: var(--body-bg);
    background: var(--body-bg-gradient);
    color: var(--text-color);
    line-height: 1.6;
    overflow-x: hidden;
  }
  
  .container {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
  }
  
  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1rem;
    font-weight: 700;
    line-height: 1.2;
    color: var(--text-color);
  }
  
  h1 {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
  }
  
  h2 {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 2.5rem;
    position: relative;
  }
  
  h2::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, var(--primary), var(--secondary));
    margin: 20px auto 0;
    border-radius: 2px;
  }
  
  p {
    margin-bottom: 1rem;
    color: var(--text-color);
  }
  
  a {
    color: var(--text-color);
    text-decoration: none;
    transition: var(--transition);
  }
  
  /* Theme toggle button */
  .theme-toggle {
    background: transparent;
    border: none;
    color: var(--text-color);
    font-size: 1.3rem;
    cursor: pointer;
    padding: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    transition: var(--transition);
  }
  
  .theme-toggle:hover {
    background: rgba(124, 58, 237, 0.1);
  }
  
  .moon-icon, .sun-icon {
    width: 24px;
    height: 24px;
  }
  
  /* Navbar */
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background: var(--nav-bg);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: var(--transition);
    padding: 1.2rem 0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  }
  
  .navbar.scrolled {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    padding: 0.8rem 0;
  }
  
  [data-theme="light"] .navbar {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
  }
  
  [data-theme="light"] .navbar.scrolled {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  }
  
  .navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo a {
    display: flex;
    align-items: center;
    font-size: 2rem;
    font-weight: 700;
  }
  
  .logo-image {
    height: 42px;
    margin-right: 16px;
    filter: drop-shadow(0 0 8px rgba(124, 58, 237, 0.5));
  }
  
  .logo-text {
    color: var(--text-color);
    font-weight: 700;
  }
  
  .nav-links {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
  
  .nav-links a {
    font-weight: 500;
    padding: 0.5rem 0;
    position: relative;
  }
  
  .nav-links a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--primary), var(--secondary));
    transition: var(--transition);
  }
  
  .nav-links a:hover::after {
    width: 100%;
  }
  
  .download-btn {
    border: 2px solid var(--primary);
    border-radius: 9999px;
    padding: 0.6rem 1.8rem !important;
    background: transparent;
    color: var(--text-color);
    font-weight: 600;
    transition: var(--transition);
  }
  
  .download-btn:hover {
    background-color: var(--primary);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);
  }
  
  .nav-links a.download-btn::after {
    content: none !important;
  }
  
  .mobile-menu-button {
    display: none;
    background: none;
    border: none;
    color: var(--text-color);
    font-size: 1.5rem;
    cursor: pointer;
  }
  
  /* Hero Section */
  .hero {
    height: 100vh;
    padding-top: 80px;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
  }
  
  [data-theme="dark"] .hero {
    background: radial-gradient(circle at 70% 30%, rgba(124, 58, 237, 0.15), transparent 70%), 
                radial-gradient(circle at 30% 70%, rgba(16, 185, 129, 0.1), transparent 70%);
  }
  
  [data-theme="light"] .hero {
    background: radial-gradient(circle at 70% 30%, rgba(124, 58, 237, 0.08), transparent 70%), 
                radial-gradient(circle at 30% 70%, rgba(14, 165, 233, 0.08), transparent 70%);
  }
  
  .hero .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4rem 24px;
  }
  
  .hero-content {
    flex: 1;
    max-width: 600px;
    animation: fadeInLeft 1s ease;
  }
  
  .hero-content p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    color: var(--gray);
    animation: fadeInLeft 1.2s ease;
  }
  
  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  .cta-buttons {
    display: flex;
    gap: 1rem;
    margin-top: 2.5rem;
    animation: fadeInLeft 1.4s ease;
  }
  
  .btn {
    display: inline-block;
    padding: 0.9rem 2.2rem;
    border-radius: 9999px;
    font-weight: 600;
    font-size: 1rem;
    text-align: center;
    transition: var(--transition);
    cursor: pointer;
    letter-spacing: 0.5px;
  }
  
  .btn.primary {
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    color: white;
    box-shadow: 0 4px 14px rgba(124, 58, 237, 0.4);
  }
  
  .btn.primary:hover {
    background: linear-gradient(135deg, var(--primary-hover), var(--primary));
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(124, 58, 237, 0.6);
  }
  
  .btn.secondary {
    background-color: rgba(255, 255, 255, 0.1);
    color: var(--text-color);
    border: 1.5px solid rgba(156, 163, 175, 0.3);
    backdrop-filter: blur(5px);
  }
  
  [data-theme="light"] .btn.secondary {
    background-color: rgba(0, 0, 0, 0.05);
    border: 1.5px solid rgba(0, 0, 0, 0.1);
  }
  
  .btn.secondary:hover {
    background-color: rgba(255, 255, 255, 0.2);
    border-color: var(--text-color);
    transform: translateY(-3px);
  }
  
  [data-theme="light"] .btn.secondary:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  
  .phone-mockup {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: float 6s ease-in-out infinite, fadeInRight 1s ease;
    width: 30vw;
    max-width: 300px;
    min-width: 200px;
    margin-left: auto;
    position: relative;
  }
  
  .phone-mockup::after {
    content: '';
    position: absolute;
    bottom: -10%;
    left: 0;
    width: 100%;
    height: 20px;
    background: radial-gradient(ellipse at center, rgba(124, 58, 237, 0.3), transparent 70%);
    filter: blur(10px);
    border-radius: 50%;
    z-index: -1;
  }
  
  [data-theme="light"] .phone-mockup::after {
    background: radial-gradient(ellipse at center, rgba(124, 58, 237, 0.2), transparent 70%);
  }
  
  .phone-mockup img {
    max-width: 100%;
    height: auto;
    filter: drop-shadow(0 10px 25px rgba(0, 0, 0, 0.2));
  }
  
  [data-theme="light"] .phone-mockup img {
    filter: drop-shadow(0 10px 25px rgba(0, 0, 0, 0.1));
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-15px);
    }
  }
  
  .app-download-section {
    margin-top: 3rem;
    animation: fadeInLeft 1.6s ease;
  }
  
  .app-buttons {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  }
  
  .app-store-button {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.8rem 1.5rem;
    border-radius: var(--border-radius);
    background: rgba(31, 41, 55, 0.7);
    border: 1px solid rgba(156, 163, 175, 0.2);
    transition: var(--transition);
  }
  
  [data-theme="light"] .app-store-button {
    background: rgba(255, 255, 255, 0.7);
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  }
  
  .app-store-button i {
    font-size: 1.8rem;
  }
  
  .app-store-button:hover {
    background: rgba(124, 58, 237, 0.15);
    border-color: var(--primary);
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(124, 58, 237, 0.2);
  }
  
  /* Features Section */
  .features {
    background: var(--body-bg-gradient);
    height: 100vh; /* Ekran yüksekliğine eşit */
    display: flex;
    flex-direction: column;
    justify-content: center; /* İçerikleri dikeyde ortalar */
    align-items: center; /* İçerikleri yatayda ortalar */
    box-sizing: border-box;
    padding: 0 20px; /* Gerekirse yatay padding ekleyin */
  }
  
  .features-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Her satırda 3 kart */
    gap: 20px;                           /* Kartlar arası boşluk */
    margin-top: 50px;
  }
  
  .feature-card {
    background: var(--card-bg);
    padding: 20px;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
    text-align: center;
    transition: var(--transition);
    border: 1px solid var(--card-border);
    backdrop-filter: blur(10px);
    position: relative;
    overflow: hidden;
    z-index: 1;
  }
  
  .feature-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(124, 58, 237, 0.1), rgba(16, 185, 129, 0.05));
    opacity: 0;
    z-index: -1;
    transition: var(--transition);
  }
  
  [data-theme="light"] .feature-card::before {
    background: linear-gradient(135deg, rgba(124, 58, 237, 0.05), rgba(14, 165, 233, 0.05));
  }
  
  .feature-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 30px -10px rgba(0, 0, 0, 0.2);
    border-color: rgba(124, 58, 237, 0.3);
  }
  
  [data-theme="light"] .feature-card:hover {
    box-shadow: 0 20px 30px -10px rgba(0, 0, 0, 0.1);
  }
  
  .feature-card:hover::before {
    opacity: 1;
  }
  
  .feature-icon {
    font-size: 2.5rem;
    margin-bottom: 25px;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    display: inline-block;
  }
  
  .feature-card h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }
  
  /* Download Section */
  .download {
    text-align: center;
    padding: 120px 0;
    position: relative;
  }
  
  [data-theme="dark"] .download {
    background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95)), url('/api/placeholder/1920/1080') center/cover no-repeat fixed;
  }
  
  [data-theme="light"] .download {
    background: linear-gradient(135deg, rgba(248, 250, 252, 0.9), rgba(241, 245, 249, 0.9)), url('/api/placeholder/1920/1080') center/cover no-repeat fixed;
  }
  
  .download::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(124, 58, 237, 0.2), transparent 70%);
    opacity: 0.8;
  }
  
  [data-theme="light"] .download::before {
    background: radial-gradient(circle at center, rgba(124, 58, 237, 0.1), transparent 70%);
    opacity: 0.6;
  }
  
  .download-text {
    max-width: 700px;
    margin: 0 auto 40px;
    font-size: 1.2rem;
    color: var(--gray);
    position: relative;
  }
  
  .download-options {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    margin-bottom: 30px;
    position: relative;
  }
  
  .store-button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(31, 41, 55, 0.7);
    color: var(--light);
    padding: 15px 30px;
    border-radius: var(--border-radius);
    font-weight: 600;
    transition: var(--transition);
    gap: 12px;
    min-width: 180px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.05);
  }
  
  [data-theme="light"] .store-button {
    background: rgba(255, 255, 255, 0.7);
    color: var(--darker);
    border: 1px solid rgba(0, 0, 0, 0.05);
  }
  
  .store-button i {
    font-size: 1.8rem;
  }
  
  .store-button:hover {
    background: rgba(124, 58, 237, 0.2);
    border-color: var(--primary);
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
  
  [data-theme="light"] .store-button:hover {
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
  
  .coming-soon-message {
    margin-top: 30px;
    color: var(--gray);
    font-size: 1.1rem;
    position: relative;
    display: none;
  }
  
/* Team Section */
.team {
    min-height: auto; /* İçeriğe göre yükseklik ayarlanır */
    padding: 100px 0; /* Üst-alt boşluklar hafif azaltıldı */
    background: 
      radial-gradient(circle at 50% 30%, rgba(14, 165, 233, 0.15), transparent 70%),
      radial-gradient(circle at 80% 70%, rgba(0, 112, 244, 0.15), transparent 70%),
      var(--body-bg);
  }
  
  
  .team-members {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px; /* Kartlar arası boşluk 40px'den 30px'e çekildi */
    margin: 20px auto 0; /* Üst margin hafif azaltıldı */
    max-width: calc(220px * 3 + 2 * 30px); /* Kart genişliği 250px'den 220px'e indirildi */
  }
  
  .team-member {
    flex: 0 0 220px; /* Kart genişliği 250px yerine 220px */
    max-width: 220px;
    text-align: center;
    transition: var(--transition);
    background: var(--card-bg);
    padding: 20px 15px; /* İç padding hafif azaltıldı */
    border-radius: var(--border-radius);
    border: 1px solid var(--card-border);
    position: relative;
    overflow: hidden;
    opacity: 0.9;
  }
  

  .team-member::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, var(--primary), var(--secondary));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s ease;
  }
  
  .team-member:hover::before {
    transform: scaleX(1);
  }

  
  .team-member:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
    opacity: 1;
  }
  
  [data-theme="light"] .team-member:hover {
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.08);
  }
  
  .team-member img {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    margin: 0 auto 20px;
    object-fit: cover;
    border: 4px solid rgba(124, 58, 237, 0.3);
    padding: 4px;
    background: var(--darker);
    transition: var(--transition);
  }
  
  [data-theme="light"] .team-member img {
    background: #fff;
  }
  
  .team-member:hover img {
    border-color: var(--primary);
    transform: scale(1.05);
  }
  
  .team-member p {
    font-size: 1.2rem;
    margin-bottom: 5px;
    font-weight: 600;
  }
  
  .team-member i {
    display: block;
    color: var(--gray);
    margin-bottom: 15px;
    font-style: normal;
    font-size: 0.9rem;
  }
  
  .team-member .role {
    font-style: italic;
    display: block;
    font-size: 0.9rem;
    color: var(--gray);
    margin-bottom: 15px;
  }
  
  .linkedin-link {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    color: var(--gray);
    font-size: 1.2rem;
    background: rgba(30, 41, 59, 0.8);
    border-radius: 50%;
    transition: all 0.3s ease;
    text-decoration: none;
  }
  
  .linkedin-link i {
    display: block;
    line-height: 1;
    margin: 0;
    padding: 0;
  }
  
  [data-theme="light"] .linkedin-link {
    background: rgba(0, 0, 0, 0.05);
  }
  
  .linkedin-link:hover {
    color: #fff;
    background: var(--primary);
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(124, 58, 237, 0.3);
  }
  
  /* Contact Section */
  .contact {
    background: var(--body-bg-gradient);
    padding: 120px 0;
  }
  
  .contact-text {
    max-width: 700px;
    margin: 0 auto 40px;
    text-align: center;
    font-size: 1.2rem;
    color: var(--gray);
  }
  
  .contact-form {
    max-width: 700px;
    margin: 0 auto;
    background: var(--card-bg);
    padding: 40px;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
    border: 1px solid var(--card-border);
  }
  
  .form-group {
    margin-bottom: 25px;
  }
  
  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 15px;
    background: var(--form-bg);
    border: 1px solid rgba(156, 163, 175, 0.2);
    border-radius: var(--border-radius);
    color: var(--text-color);
    font-family: inherit;
    font-size: 1rem;
    transition: var(--transition);
  }
  
  [data-theme="light"] .form-group input,
  [data-theme="light"] .form-group textarea {
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  
  .form-group textarea {
    min-height: 180px;
    resize: vertical;
  }
  
  .form-group input:focus,
  .form-group textarea:focus {
    border-color: var(--primary);
    outline: none;
    box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.2);
  }
  
  .form-actions {
    text-align: right;
  }
  
  .form-success {
    margin-top: 20px;
    color: var(--secondary);
    text-align: center;
    display: none;
    padding: 15px;
    border-radius: var(--border-radius);
    background: rgba(16, 185, 129, 0.1);
    border: 1px solid var(--secondary);
  }

  .send-btn {
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    border: none;
    border-radius: var(--border-radius);
    padding: 0.75rem 1.5rem;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 4px 14px rgba(124, 58, 237, 0.3);
  }
  
  .send-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(124, 58, 237, 0.4);
  }
  
  
  /* Footer */
  .footer {
    background-color: var(--body-bg);
    padding: 50px 0 30px;
    position: relative;
    overflow: hidden;
  }
  
  .footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--primary), var(--secondary), transparent);
  }
  
  .footer-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  
  .footer-section {
    flex: 1;
    min-width: 250px;
    margin-bottom: 30px;
    padding: 0 15px;
  }
  
  .footer-section h4 {
    font-size: 1.3rem;
    margin-bottom: 20px;
    color: var(--text-color);
    position: relative;
    padding-bottom: 10px;
  }
  
  .footer-section h4::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 3px;
    background: linear-gradient(90deg, var(--primary), var(--secondary));
    border-radius: 1.5px;
  }
  
  .footer-section p {
    font-size: 0.95rem;
    margin-bottom: 15px;
    color: var(--gray);
  }
  
  .footer-links {
    list-style: none;
  }
  
  .footer-links li {
    margin-bottom: 12px;
  }
  
  .footer-links a {
    color: var(--gray);
    transition: var(--transition);
    display: block;
    font-size: 0.95rem;
  }
  
  .footer-links a:hover {
    color: var(--primary);
    transform: translateX(5px);
  }
  
  /* Sosyal medya ikonları arasındaki boşluk artırıldı */
  .footer-social {
    display: flex;
    gap: 25px;
    margin-top: 20px;
  }
  
  /* Sosyal ikon stilleri */
  .social-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(124, 58, 237, 0.1);
    color: var(--primary);
    font-size: 1.2rem;
    transition: var(--transition);
  }
  
  .social-icon:hover {
    background: var(--primary);
    color: white;
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(124, 58, 237, 0.3);
  }
  
  /* Footer bottom: Gizlilik politikası ve kullanım şartları aynı satırda, en sağda */
  .footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 30px;
    border-top: 1px solid rgba(156, 163, 175, 0.1);
    font-size: 0.9rem;
    color: var(--gray);
  }
  
  .footer-bottom p {
    margin: 0;
  }
  
  .footer-legal-links {
    display: flex;
    gap: 20px;
    align-items: center;
  }
  
  .footer-bottom a {
    color: var(--primary);
    font-weight: 500;
  }
  
  /* Media Queries */
  @media (max-width: 1024px) {
    .container {
      max-width: 100%;
    }
    
    h1 {
      font-size: 3rem;
    }
    
    .team-member {
      flex: 0 0 calc(33.333% - 40px);
    }
  }
  
  @media (max-width: 768px) {
    .hero .container {
      flex-direction: column;
      text-align: center;
      padding: 2rem 24px;
    }
    
    .hero-content {
      max-width: 100%;
      margin-bottom: 3rem;
    }
    
    .cta-buttons {
      justify-content: center;
    }
    
    .app-buttons {
      justify-content: center;
    }
    
    .phone-mockup {
      max-width: 70%;
      margin: 0 auto;
    }
    
    .features-grid {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
    
    .team-member {
      flex: 0 0 calc(50% - 40px);
    }
    
    .nav-links {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      flex-direction: column;
      background: var(--nav-bg);
      padding: 20px;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
      border-bottom-left-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    
    [data-theme="light"] .nav-links {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
    }
    
    .nav-links a {
      padding: 12px 0;
    }
    
    .mobile-menu-button {
      display: block;
    }
  }
  
  @media (max-width: 576px) {
    h1 {
      font-size: 2.5rem;
    }
    
    h2 {
      font-size: 2rem;
    }
    
    .hero-content p {
      font-size: 1rem;
    }
    
    .cta-buttons {
      flex-direction: column;
    }
    
    .btn {
      width: 100%;
    }
    
    .app-buttons {
      flex-direction: column;
    }
    
    .app-store-button {
      width: 100%;
    }
    
    .phone-mockup {
      max-width: 90%;
    }
    
    .team-member {
      flex: 0 0 100%;
    }
    
    .contact-form {
      padding: 30px 20px;
    }
    
    .footer-section {
      flex: 0 0 100%;
      text-align: center;
    }
    
    .footer-section h4::after {
      left: 50%;
      transform: translateX(-50%);
    }
    
    .footer-links a:hover {
      transform: none;
    }
    
    .footer-social {
      justify-content: center;
    }
  }
    
  /* Animations */
  @keyframes pulse {
    0% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.8;
      transform: scale(1.05);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  /* Additional utility classes */
  .text-gradient {
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
  }
  
  .glass-effect {
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }
  
  /* Testimonials Section */
  .testimonials {
    padding: 120px 0;
    background: var(--body-bg);
    position: relative;
    overflow: hidden;
  }
  
  .testimonial-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 50px;
  }
  
  .testimonial-card {
    background: var(--card-bg);
    padding: 30px;
    border-radius: var(--border-radius);
    border: 1px solid var(--card-border);
    position: relative;
    transition: var(--transition);
  }
  
  .testimonial-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border-color: rgba(124, 58, 237, 0.2);
  }
  
  [data-theme="light"] .testimonial-card:hover {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  }
  
  .testimonial-card::before {
    content: '"';
    position: absolute;
    top: 10px;
    left: 20px;
    font-size: 5rem;
    font-family: serif;
    line-height: 1;
    opacity: 0.1;
    color: var(--primary);
  }
  
  .testimonial-content {
    margin-bottom: 20px;
    font-style: italic;
    color: var(--gray);
    line-height: 1.8;
  }
  
  .testimonial-author {
    display: flex;
    align-items: center;
  }
  
  .testimonial-author img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 15px;
    object-fit: cover;
    border: 2px solid var(--primary);
  }
  
  .author-info h5 {
    font-size: 1.1rem;
    margin-bottom: 0;
  }
  
  .author-info span {
    font-size: 0.85rem;
    color: var(--gray);
  }
  
  /* FAQ Section */
  .faq {
    padding: 120px 0;
    background: var(--body-bg-gradient);
  }
  
  .faq-container {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .faq-item {
    background: var(--card-bg);
    border-radius: var(--border-radius);
    margin-bottom: 15px;
    border: 1px solid var(--card-border);
    overflow: hidden;
  }
  
  .faq-question {
    padding: 20px;
    cursor: pointer;
    position: relative;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: var(--transition);
  }
  
  .faq-question::after {
    content: '+';
    font-size: 1.5rem;
    font-weight: 300;
  }
  
  .faq-item.active .faq-question {
    background: rgba(124, 58, 237, 0.1);
    color: var(--primary);
  }
  
  .faq-item.active .faq-question::after {
    content: '−';
  }
  
  .faq-answer {
    padding: 0 20px;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    color: var(--gray);
  }
  
  .faq-item.active .faq-answer {
    padding: 0 20px 20px;
    max-height: 500px;
  }
  