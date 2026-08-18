/**
 * faq.js — FAQ page interactivity
 * - Accordion open/close with ARIA
 * - Category filter pills (show/hide sections)
 * - Sticky side-nav active link on scroll
 * - Smooth scroll to sections
 */

(function () {
    'use strict';

    /* ----------------------------------------------------------------
       ACCORDION
    ---------------------------------------------------------------- */
    function initAccordion() {
        document.querySelectorAll('.faq-question').forEach(function (btn) {
            btn.addEventListener('click', function () {
                const isOpen = this.getAttribute('aria-expanded') === 'true';
                const answer = this.nextElementSibling;

                // Close all others in the same list
                const parentList = this.closest('.faq-list');
                if (parentList) {
                    parentList.querySelectorAll('.faq-question[aria-expanded="true"]').forEach(function (openBtn) {
                        if (openBtn !== btn) {
                            openBtn.setAttribute('aria-expanded', 'false');
                            const openAnswer = openBtn.nextElementSibling;
                            if (openAnswer) openAnswer.classList.remove('is-open');
                        }
                    });
                }

                // Toggle this one
                this.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
                if (answer) {
                    answer.classList.toggle('is-open', !isOpen);
                }
            });

            // Keyboard: Enter and Space
            btn.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    btn.click();
                }
            });
        });
    }

    /* ----------------------------------------------------------------
       CATEGORY FILTER PILLS
    ---------------------------------------------------------------- */
    function initFilter() {
        const pills    = document.querySelectorAll('.faq-pill');
        const sections = document.querySelectorAll('.faq-section');

        pills.forEach(function (pill) {
            pill.addEventListener('click', function () {
                const filter = this.dataset.filter;

                // Update pill state
                pills.forEach(function (p) {
                    p.classList.remove('faq-pill--active');
                    p.setAttribute('aria-selected', 'false');
                });
                this.classList.add('faq-pill--active');
                this.setAttribute('aria-selected', 'true');

                // Show / hide sections
                sections.forEach(function (section) {
                    if (filter === 'all' || section.dataset.category === filter) {
                        section.classList.remove('faq-section--hidden');
                    } else {
                        section.classList.add('faq-section--hidden');
                    }
                });

                // Scroll main area to top when filtering
                const main = document.getElementById('faq-main');
                if (main) {
                    const offset = 80;
                    const top = main.getBoundingClientRect().top + window.scrollY - offset;
                    window.scrollTo({ top: top, behavior: 'smooth' });
                }
            });
        });
    }

    /* ----------------------------------------------------------------
       STICKY SIDENAV — active highlight on scroll
    ---------------------------------------------------------------- */
    function initSideNav() {
        const links    = document.querySelectorAll('.faq-sidenav__link');
        const sections = document.querySelectorAll('.faq-section');

        if (!links.length || !sections.length) return;

        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    links.forEach(function (link) {
                        link.classList.toggle('active', link.getAttribute('href') === '#' + id);
                    });
                }
            });
        }, { rootMargin: '-20% 0px -70% 0px' });

        sections.forEach(function (s) { observer.observe(s); });

        // Smooth scroll on link click
        links.forEach(function (link) {
            link.addEventListener('click', function (e) {
                const href = link.getAttribute('href');
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        const offset = 80;
                        const top = target.getBoundingClientRect().top + window.scrollY - offset;
                        window.scrollTo({ top: top, behavior: 'smooth' });
                    }
                }
            });
        });
    }

    /* ----------------------------------------------------------------
       INIT — wait for components to load (header/footer injected async)
    ---------------------------------------------------------------- */
    function init() {
        initAccordion();
        initFilter();
        initSideNav();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
