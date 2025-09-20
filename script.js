// Mobile Navigation Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenu && navMenu) {
    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Apple-style Liquid Glass Navigation Animation
function initLiquidNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!navMenu || navLinks.length === 0) return;
    
    // Create liquid glass indicator
    const liquidIndicator = navMenu.querySelector('::before') || navMenu;
    
    navLinks.forEach((link, index) => {
        link.addEventListener('mouseenter', (e) => {
            const linkRect = link.getBoundingClientRect();
            const menuRect = navMenu.getBoundingClientRect();
            
            const leftPosition = linkRect.left - menuRect.left - 8;
            const width = linkRect.width;
            
            // Animate the liquid glass effect
            navMenu.style.setProperty('--liquid-left', `${leftPosition}px`);
            navMenu.style.setProperty('--liquid-width', `${width}px`);
            
            // Add CSS custom properties for animation
            const style = document.createElement('style');
            style.textContent = `
                .nav-menu::before {
                    left: var(--liquid-left, 8px);
                    width: var(--liquid-width, 0);
                    opacity: 1;
                }
            `;
            
            // Remove existing style and add new one
            const existingStyle = document.querySelector('#liquid-nav-style');
            if (existingStyle) existingStyle.remove();
            style.id = 'liquid-nav-style';
            document.head.appendChild(style);
        });
        
        link.addEventListener('mouseleave', () => {
            // Fade out the liquid effect when not hovering
            setTimeout(() => {
                const style = document.querySelector('#liquid-nav-style');
                if (style) {
                    style.textContent += `
                        .nav-menu::before {
                            opacity: 0;
                            width: 0;
                        }
                    `;
                }
            }, 100);
        });
    });
    
    // Handle active state
    const activeLink = document.querySelector('.nav-link.active');
    if (activeLink) {
        const linkRect = activeLink.getBoundingClientRect();
        const menuRect = navMenu.getBoundingClientRect();
        const leftPosition = linkRect.left - menuRect.left - 8;
        const width = linkRect.width;
        
        navMenu.style.setProperty('--liquid-left', `${leftPosition}px`);
        navMenu.style.setProperty('--liquid-width', `${width}px`);
        
        const style = document.createElement('style');
        style.id = 'liquid-nav-active';
        style.textContent = `
            .nav-menu::before {
                left: var(--liquid-left, 8px);
                width: var(--liquid-width, 0);
                opacity: 0.8;
            }
        `;
        document.head.appendChild(style);
    }
}

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.backgroundColor = '#ffffff';
        navbar.style.backdropFilter = 'none';
    }
    
    lastScrollTop = scrollTop;
});

// Smooth scrolling for anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href === '#') return;
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll('.service-card, .testimonial-card, .about-text, .about-image');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Form validation (for contact forms)
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        const errorElement = input.parentNode.querySelector('.error-message');
        
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
            if (!errorElement) {
                const error = document.createElement('span');
                error.className = 'error-message';
                error.textContent = 'This field is required';
                error.style.color = '#ef4444';
                error.style.fontSize = '0.875rem';
                error.style.marginTop = '0.25rem';
                error.style.display = 'block';
                input.parentNode.appendChild(error);
            }
        } else {
            input.classList.remove('error');
            if (errorElement) {
                errorElement.remove();
            }
            
            // Email validation
            if (input.type === 'email') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(input.value)) {
                    isValid = false;
                    input.classList.add('error');
                    if (!errorElement) {
                        const error = document.createElement('span');
                        error.className = 'error-message';
                        error.textContent = 'Please enter a valid email address';
                        error.style.color = '#ef4444';
                        error.style.fontSize = '0.875rem';
                        error.style.marginTop = '0.25rem';
                        error.style.display = 'block';
                        input.parentNode.appendChild(error);
                    }
                }
            }
        }
    });
    
    return isValid;
}

// Add form validation to contact forms
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        if (!validateForm(form)) {
            e.preventDefault();
        }
    });
    
    // Real-time validation
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            validateForm(form);
        });
        
        input.addEventListener('input', () => {
            const errorElement = input.parentNode.querySelector('.error-message');
            if (errorElement && input.value.trim()) {
                input.classList.remove('error');
                errorElement.remove();
            }
        });
    });
});

// Loading animation
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 300);
    }
});

// Performance optimization: Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// Scroll to top functionality
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    background-color: #3b82f6;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
`;

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.opacity = '1';
        scrollToTopBtn.style.visibility = 'visible';
    } else {
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.visibility = 'hidden';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add hover effects for better UX
scrollToTopBtn.addEventListener('mouseenter', () => {
    scrollToTopBtn.style.transform = 'scale(1.1)';
    scrollToTopBtn.style.backgroundColor = '#2563eb';
});

scrollToTopBtn.addEventListener('mouseleave', () => {
    scrollToTopBtn.style.transform = 'scale(1)';
    scrollToTopBtn.style.backgroundColor = '#3b82f6';
});

// Preload critical resources
function preloadResource(href, as) {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    document.head.appendChild(link);
}

// Preload fonts
preloadResource('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap', 'style');

// Analytics and performance tracking (placeholder)
function trackPageView() {
    // Add your analytics code here
    console.log('Page view tracked:', window.location.pathname);
}

function trackEvent(action, category, label) {
    // Add your event tracking code here
    console.log('Event tracked:', { action, category, label });
}

// Track button clicks
const trackableButtons = document.querySelectorAll('.btn');
trackableButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        trackEvent('click', 'button', btn.textContent.trim());
    });
});

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    trackPageView();
    
    // Initialize liquid navigation
    initLiquidNavigation();
    
    // Initialize advanced animations
    initAdvancedAnimations();
    
    // Remove loading screen with enhanced animation
    const loading = document.querySelector('.loading');
    if (loading) {
        setTimeout(() => {
            loading.style.opacity = '0';
            loading.style.transform = 'scale(1.1)';
            setTimeout(() => {
                loading.style.display = 'none';
            }, 500);
        }, 1000);
    }
    
    // Initialize particle effects
    initParticleEffects();
    
    // Initialize smooth hover effects
    initHoverEffects();
    
    // Add any initialization code here
    console.log('ProBusiness Solutions website loaded successfully!');
});

// Advanced Animation System
function initAdvancedAnimations() {
    // Stagger animation for service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        
        // Add hover sound effect (visual feedback)
        card.addEventListener('mouseenter', () => {
            card.style.transform = `translateY(-15px) scale(1.02) rotateY(5deg)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1) rotateY(0deg)';
        });
    });
    
    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
}

// Particle Effects System
function initParticleEffects() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    // Create floating particles
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: floatParticle ${Math.random() * 10 + 10}s infinite linear;
            pointer-events: none;
        `;
        hero.appendChild(particle);
    }
}

// Enhanced Hover Effects
function initHoverEffects() {
    // Button ripple effect
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
    // You can add error reporting here
});

// Service Worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}