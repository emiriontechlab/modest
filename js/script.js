

document.addEventListener('DOMContentLoaded', () => {

    // ── Lead forms (contact page + homepage call-back) — sent through EmailJS ──
    const leadForms = document.querySelectorAll('#contact-form, #callback-form');

    if (leadForms.length && window.emailjs) {
        emailjs.init({
            publicKey: "xTj_OksGf_83PfvIS",
        });
    }

    leadForms.forEach(form => {
        const formSuccess = form.parentElement.querySelector('.form-success-state') || document.getElementById('form-success');
        const submitBtn = form.querySelector('[type="submit"]');

        form.addEventListener('submit', function (e) {
            e.preventDefault();

            if (!window.emailjs) {
                alert("Failed to send message. Please call or WhatsApp us instead.");
                return;
            }

            if (submitBtn) submitBtn.disabled = true;

            emailjs.sendForm("service_f9km9dd", "template_cjwm9ph", form)
                .then(function () {
                    window.dataLayer = window.dataLayer || [];
                    window.dataLayer.push({
                        event: 'generate_lead',
                        service: (new FormData(form).get('service') || ''),
                        placement: form.getAttribute('data-placement') || form.id
                    });

                    form.style.opacity = '0';
                    setTimeout(() => {
                        form.style.display = 'none';
                        if (formSuccess) {
                            formSuccess.style.display = 'block';
                            formSuccess.style.opacity = '0';
                            setTimeout(() => {
                                formSuccess.style.transition = 'opacity 0.5s ease';
                                formSuccess.style.opacity = '1';
                            }, 50);
                        }
                        form.reset();
                    }, 300);
                })
                .catch(function (error) {
                    console.error(error);
                    if (submitBtn) submitBtn.disabled = false;
                    alert("Failed to send message.");
                });
        });
    });

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
        // Each stat counts up from 0 to the number in its data-target attribute
        document.querySelectorAll('.about-stats-bar .about-stat-item[data-target]').forEach((item, i) => {
            const num = item.querySelector('.stat-num');
            const target = parseFloat(item.getAttribute('data-target'));
            if (!num || isNaN(target)) return;
            num.textContent = '0';
            animateCounter(num, target, 1200 + i * 300, false);
        });
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
