/**
 * Shared header/footer loader
 * Fetches components/header.html and components/footer.html into every page,
 * then initialises all header-dependent JS (mobile menu, dropdowns, sticky nav).
 */

async function loadComponent(id, url) {
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Failed to load ${url}: ${res.status}`);
        const html = await res.text();
        const el = document.getElementById(id);
        if (el) el.outerHTML = html;
    } catch (err) {
        console.error(err);
    }
}

function highlightActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('#site-header .nav-links > a, #site-header .nav-links .dropdown-toggle').forEach(link => {
        const href = link.getAttribute('href');
        if (href && href !== '#' && currentPage === href.split('/').pop()) {
            link.style.color = 'var(--brand-red)';
        }
    });
}

function initHeaderScripts() {
    // Sticky header scroll effect
    const header = document.getElementById('site-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 4px 12px rgba(9, 14, 45, 0.08)';
                header.style.padding = '10px 0';
            } else {
                header.style.boxShadow = 'none';
                header.style.padding = '15px 0';
            }
        });
    }

    // Mobile menu toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            if (navLinks.style.display === 'flex') {
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
    }

    // Dropdown toggles on mobile
    document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
        toggle.addEventListener('click', function (e) {
            if (window.innerWidth <= 992) {
                e.preventDefault();
                const menu = this.nextElementSibling;
                if (!menu) return;
                const open = menu.style.display === 'block';
                menu.style.display = open ? 'none' : 'block';
                const caret = this.querySelector('.caret');
                if (caret) caret.style.transform = open ? 'rotate(0deg)' : 'rotate(180deg)';
            }
        });
    });

    // "Other Services" sub-panel toggle (desktop: CSS hover; mobile: JS tap)
    const otherTrigger = document.getElementById('other-services-trigger');
    if (otherTrigger) {
        otherTrigger.addEventListener('click', function (e) {
            // Don't intercept clicks on actual sub-links
            if (e.target.closest('.mega-sub-panel')) return;
            e.preventDefault();
            e.stopPropagation();

            const isOpen = this.classList.toggle('sub-open');

            // On mobile, also set display directly to guarantee visibility
            if (window.innerWidth <= 992) {
                const subPanel = document.getElementById('other-services-sub');
                if (subPanel) {
                    subPanel.style.display = isOpen ? 'grid' : 'none';
                }
            }
        });
    }

    highlightActiveNav();
}

(async () => {
    await Promise.all([
        loadComponent('header-placeholder', 'components/header.html'),
        loadComponent('footer-placeholder', 'components/footer.html'),
    ]);
    initHeaderScripts();
    window.dispatchEvent(new Event('componentsLoaded'));
})();
