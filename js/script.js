

document.addEventListener('DOMContentLoaded', () => {


    
emailjs.init({
    publicKey: "xTj_OksGf_83PfvIS",
});

const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

if (contactForm) {

    contactForm.addEventListener('submit', function (e) {

        e.preventDefault();

        emailjs.sendForm(
            "service_f9km9dd",
            "template_cjwm9ph",
            contactForm
        )
        .then(function () {

            contactForm.style.opacity = '0';

            setTimeout(() => {

                contactForm.style.display = 'none';

                if (formSuccess) {

                    formSuccess.style.display = 'block';

                    formSuccess.style.opacity = '0';

                    setTimeout(() => {

                        formSuccess.style.transition = 'opacity 0.5s ease';

                        formSuccess.style.opacity = '1';

                    }, 50);

                }

                contactForm.reset();

            }, 300);

        })
        .catch(function (error) {

            console.error(error);

            alert("Failed to send message.");

        });

    });

}

    // ── Service Page Hero — stat counter animation ──────────────────────────
    const heroCounters = document.querySelectorAll('.cf-hero__stat-num[data-target]');
    if (heroCounters.length) {
        const heroCountObserver = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-target'), 10);
                let current = 0;
                const increment = Math.ceil(target / 60);
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) { current = target; clearInterval(timer); }
                    el.textContent = current;
                }, 25);
                obs.unobserve(el);
            });
        }, { threshold: 0.5 });
        heroCounters.forEach(c => heroCountObserver.observe(c));
    }

    // ── FAQ Accordion ───────────────────────────────────────────────────────
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const btn = item.querySelector('.faq-question');
        if (!btn) return;
        btn.addEventListener('click', () => {
            faqItems.forEach(other => {
                if (other !== item) other.classList.remove('active');
            });
            item.classList.toggle('active');
        });
    });



    // ── Scroll Reveal Animations ────────────────────────────────────────────
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('reveal-active');
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    revealElements.forEach(el => revealObserver.observe(el));

    // ── About section — animated counters + star rating ────────────────────
    function animateCounter(el, target, duration, isDecimal) {
        if (!el) return;
        const startTime = performance.now();
        function tick(now) {
            const progress = Math.min((now - startTime) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            const current = target * ease;
            el.textContent = isDecimal ? current.toFixed(1) : Math.floor(current);
            if (progress < 1) requestAnimationFrame(tick);
            else el.textContent = isDecimal ? target.toFixed(1) : target;
        }
        requestAnimationFrame(tick);
    }

    function animateStars() {
        document.querySelectorAll('#star-row .star').forEach(s => s.classList.add('lit'));
    }

    let statsFired = false;

    function fireStatsAnimation() {
        if (statsFired) return;
        statsFired = true;
        // Reset to 0 before animating so the count-up plays
        const clients = document.getElementById('stat-clients');
        const emirates = document.getElementById('stat-emirates');
        const zones = document.getElementById('stat-zones');
        const rating = document.getElementById('stat-rating');
        if (clients)  clients.textContent  = '0';
        if (emirates) emirates.textContent = '0';
        if (zones)    zones.textContent    = '0';
        if (rating)   rating.textContent   = '0.0';
        animateCounter(clients,  500, 2000, false);
        animateCounter(emirates,   7, 1200, false);
        animateCounter(zones,     40, 1600, false);
        animateCounter(rating,   4.9, 1800, true);
        setTimeout(animateStars, 600);
    }

    function initStatsObserver() {
        if (statsFired) return;
        const statsBar = document.querySelector('.about-stats-bar');
        if (!statsBar) return;

        // Check if already in viewport
        const rect = statsBar.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            fireStatsAnimation();
            return;
        }

        // Otherwise watch for scroll
        const onScroll = () => {
            const r = statsBar.getBoundingClientRect();
            if (r.top < window.innerHeight && r.bottom > 0) {
                window.removeEventListener('scroll', onScroll);
                fireStatsAnimation();
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
    }

    // Try after components load, then again on full page load as fallback
    window.addEventListener('componentsLoaded', () => setTimeout(initStatsObserver, 100));
    window.addEventListener('load', () => setTimeout(initStatsObserver, 200));
});
