document.documentElement.setAttribute('data-theme', 'dark');

// Form elementlerini global olarak tanımla
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');
const comingSoonMessage = document.getElementById('coming-soon-message');

// DOMContentLoaded event listener ile sayfa yüklendikten sonra işlemler
document.addEventListener('DOMContentLoaded', () => {
    initSmoothScrolling();
    initNavbarScroll();
    initContactForm();
    initAnimations();
    initMobileMenu();
    initPhoneMockupEffects();
});

// Pürüzsüz kaydırma işlevselliği
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Navbar scroll olayını izleme
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add/remove shadow based on scroll position
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
}

// İletişim formu işleyicisi
function initContactForm() {
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Add loading state
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Gönderiliyor...';
            submitButton.disabled = true;
            
            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                // Show success message with animation
                formSuccess.classList.add('show');
                
                // Reset form and button
                this.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                
                // Remove success message after 5 seconds
                setTimeout(() => {
                    formSuccess.classList.remove('show');
                }, 5000);
            }, 1500);
        });
    }
}

// App Store ve Google Play butonları için "Çok Yakında" mesajını gösterme
function showComingSoon(e) {
    e.preventDefault();
    comingSoonMessage.classList.add('show');
    
    setTimeout(() => {
        comingSoonMessage.classList.remove('show');
    }, 3000);
}

// Bölümler için animasyonları başlatma
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.classList.remove('hidden');
                
                // Add staggered animation to children
                const animatedElements = entry.target.querySelectorAll('.feature-card, .team-member, .store-button, .form-group');
                animatedElements.forEach((element, index) => {
                    setTimeout(() => {
                        element.classList.add('animated');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('hidden');
        observer.observe(section);
    });

    // Trigger hero animation immediately
    const hero = document.querySelector('.hero');
    if (hero) {
        setTimeout(() => {
            hero.classList.add('visible');
        }, 100);
    }
}

// Telefon mockup için hover efektleri
function initPhoneMockupEffects() {
    const phoneMockup = document.querySelector('.phone-mockup');
    if (phoneMockup) {
        phoneMockup.addEventListener('mousemove', (e) => {
            const rect = phoneMockup.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            phoneMockup.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        phoneMockup.addEventListener('mouseleave', () => {
            phoneMockup.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    }
}

// Mobil menü işlevselliği
function initMobileMenu() {
    const menuButton = document.querySelector('.mobile-menu-button');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuButton && navLinks) {
        menuButton.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuButton.classList.toggle('active');
        });
        
        // Menü linklerine tıklandığında mobil menüyü kapat
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuButton.classList.remove('active');
            });
        });
    }
}

// Pencere boyutu değişikliklerini izle ve gerekirse UI'yi güncelle
window.addEventListener('resize', () => {
    // Burada pencere boyutuna bağlı olarak gerekli UI düzenlemeleri yapılabilir
    // Örneğin, masaüstü görünümünde açık kalan mobil menüyü kapatma:
    if (window.innerWidth > 768) {
        const navLinks = document.querySelector('.nav-links');
        const menuButton = document.querySelector('.mobile-menu-button');
        if (navLinks && menuButton) {
            navLinks.classList.remove('active');
            menuButton.classList.remove('active');
        }
    }
});


