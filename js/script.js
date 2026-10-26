// ── Lead tracking ───────────────────────────────────────────────────────────
// Every WhatsApp message, email and form enquiry tells Modest it came from
// www.modest-uae.ae, which page and which service. Each page sets this on <body>:
//   data-page-name="Registration Amendments" data-service="trade license amendment"
//   data-service-label="Trade License Amendment"
// Links only need the plain fallback href (https://wa.me/971564045802 or
// mailto:info@modest-uae.ae) and a data-placement name for GA4.
const LEAD_SITE = 'www.modest-uae.ae';

function leadGet(key) {
    try { return sessionStorage.getItem(key) || ''; } catch (e) { return ''; }
}

function leadSet(key, value) {
    try { sessionStorage.setItem(key, value); } catch (e) { /* storage blocked */ }
}

function leadPageInfo() {
    const { pageName, service, serviceLabel } = document.body.dataset;
    return {
        pageName: pageName || document.title.split('|')[0].trim(),
        service: service || 'your services',
        label: serviceLabel || 'General Enquiry',
    };
}

// Remember the last service page and the first UTM values of the visit,
// so the contact form knows where the visitor came from.
function rememberLeadSource() {
    const { pageName, label } = leadPageInfo();
    if (document.body.dataset.service) {
        leadSet('src_page_name', pageName);
        leadSet('src_page_url', location.href);
        leadSet('src_service', label);
    }
    try {
        const q = new URLSearchParams(location.search);
        ['utm_source', 'utm_medium', 'utm_campaign'].forEach(k => {
            if (q.get(k) && !leadGet(k)) leadSet(k, q.get(k));
        });
    } catch (e) { /* old browser */ }
}

// Safe to run more than once — called again after the shared header/footer load
function applyLeadLinks() {
    const { pageName, service, label } = leadPageInfo();
    // Also escapes ' ( ) so the links stay readable in WhatsApp/mail apps
    const enc = s => encodeURIComponent(s).replace(/[!'()*]/g, c => '%' + c.charCodeAt(0).toString(16).toUpperCase());

    const waText = `Hi Modest Consulting Services, I found you on your website ${LEAD_SITE} (${pageName}). I'm interested in ${service}. Please share the details.`;
    document.querySelectorAll('a[href*="wa.me/971564045802"]').forEach(a => {
        a.href = 'https://wa.me/971564045802?text=' + enc(waText);
        a.target = '_blank';
        a.rel = 'noopener';
    });

    const subject = `Website Enquiry – ${label} – ${LEAD_SITE}`;
    const body = `Hi Modest Consulting Services, I'm contacting you from your website ${LEAD_SITE} (${pageName}) about ${service}. My requirement is: `;
    document.querySelectorAll('a[href^="mailto:info@modest-uae.ae"]').forEach(a => {
        a.href = 'mailto:info@modest-uae.ae?subject=' + enc(subject) + '&body=' + enc(body);
    });
}

// Hidden fields sent with every form (EmailJS passes them to the email templates)
function fillLeadFields(form) {
    function setField(name, value) {
        let input = form.querySelector(`input[type="hidden"][name="${name}"]`);
        if (!input) {
            input = document.createElement('input');
            input.type = 'hidden';
            input.name = name;
            form.appendChild(input);
        }
        input.value = value || '';
    }

    // The visitor's own service choice (radio/select named "service") is kept as is;
    // the service page they came from goes in source_service.
    const picked = form.querySelector('[name="service"]:not([type="hidden"])') ? new FormData(form).get('service') : '';
    const sourceService = leadGet('src_service');
    if (!picked) setField('service', sourceService || 'General Enquiry');
    setField('source_service', sourceService);
    setField('page_url', leadGet('src_page_url') || location.href);
    setField('page_title', leadGet('src_page_name') || document.title);
    setField('utm_source', leadGet('utm_source'));
    setField('utm_medium', leadGet('utm_medium'));
    setField('utm_campaign', leadGet('utm_campaign'));
    setField('submitted_at', new Date().toLocaleString('en-GB', { timeZone: 'Asia/Dubai' }));
}

// Capture phase: fills the fields before any form's own submit handler sends it
document.addEventListener('submit', e => {
    if (e.target instanceof HTMLFormElement) fillLeadFields(e.target);
}, true);

window.addEventListener('componentsLoaded', applyLeadLinks);

document.addEventListener('DOMContentLoaded', () => {
    rememberLeadSource();
    applyLeadLinks();
});

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
                    // GA4 form_submit (GTM Custom Event trigger)
                    const data = new FormData(form);
                    window.dataLayer = window.dataLayer || [];
                    window.dataLayer.push({
                        event: 'form_submit_success',
                        service: data.get('source_service') || data.get('service') || '',
                        page_title: data.get('page_title') || document.title,
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
                if (other !== item) {
                    other.classList.remove('active');
                    other.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false');
                }
            });
            const isOpen = item.classList.toggle('active');
            btn.setAttribute('aria-expanded', String(isOpen));
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
