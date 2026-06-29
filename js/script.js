document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Sticky Header Scroll Effect
    const header = document.getElementById('site-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 12px rgba(9, 14, 45, 0.08)';
            header.style.padding = '10px 0';
        } else {
            header.style.boxShadow = 'none';
            header.style.padding = '15px 0';
        }
    });

    // 2. FAQ Accordion Logic
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const questionButton = item.querySelector('.faq-question');
        questionButton.addEventListener('click', () => {
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            item.classList.toggle('active');
        });
    });

    // 3. Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    mobileToggle.addEventListener('click', () => {
        if(navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.backgroundColor = '#FFF';
            navLinks.style.padding = '20px';
            navLinks.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
        }
    });

    // 4. Handle Dropdowns on Mobile
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 992) {
                e.preventDefault(); 
                const dropdownMenu = this.nextElementSibling;
                if (dropdownMenu.style.display === 'block') {
                    dropdownMenu.style.display = 'none';
                    this.querySelector('.caret').style.transform = 'rotate(0deg)';
                } else {
                    dropdownMenu.style.display = 'block';
                    this.querySelector('.caret').style.transform = 'rotate(180deg)';
                }
            }
        });
    });

    // 5. Contact Form Submission (Simulated)
    const contactForm = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); 
            contactForm.style.opacity = '0';
            setTimeout(() => {
                contactForm.style.display = 'none';
                formSuccess.style.display = 'block';
                formSuccess.style.opacity = '0';
                setTimeout(() => { formSuccess.style.transition = 'opacity 0.5s ease'; formSuccess.style.opacity = '1'; }, 50);
            }, 300); 
        });
    }

    // 6. Advanced Scroll Reveal Animations (The new effect)
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('reveal-active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // 7. About section — animated counters + star rating
    function animateCounter(el, target, duration, isDecimal) {
        const start = 0;
        const startTime = performance.now();
        function tick(now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // ease out cubic
            const ease = 1 - Math.pow(1 - progress, 3);
            const current = start + (target - start) * ease;
            el.textContent = isDecimal ? current.toFixed(1) : Math.floor(current);
            if (progress < 1) requestAnimationFrame(tick);
            else el.textContent = isDecimal ? target.toFixed(1) : target;
        }
        requestAnimationFrame(tick);
    }

    function animateStars() {
        const stars = document.querySelectorAll('#star-row .star');
        stars.forEach(s => s.classList.add('lit'));
    }

    const statsBar = document.querySelector('.about-stats-bar');
    let statsFired = false;

    if (statsBar) {
        const statsObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting && !statsFired) {
                    statsFired = true;
                    animateCounter(document.getElementById('stat-clients'),  500, 2000, false);
                    animateCounter(document.getElementById('stat-emirates'),   7, 1200, false);
                    animateCounter(document.getElementById('stat-zones'),     40, 1600, false);
                    animateCounter(document.getElementById('stat-rating'),   4.9, 1800, true);
                    setTimeout(animateStars, 600);
                    statsObserver.disconnect();
                }
            });
        }, { threshold: 0.3 });
        statsObserver.observe(statsBar);
    }
});