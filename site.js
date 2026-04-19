// Site-wide JavaScript: copyright year, jump-nav scroll highlighting, and
// (when restored) light/dark theme switching. Theme toggle is commented out for
// the initial launch. To restore theme switching: remove the small IIFE below,
// uncomment the large block, uncomment [data-theme="dark"] in style.css, and
// add the theme-toggle button back to each page (plus preload for icon-sun/moon
// if desired).

(function () {
    function initJumpNavHighlight() {
        const layout = document.querySelector('.jump-nav-layout');
        if (!layout) return;

        const main = layout.querySelector('.jump-nav-main');
        const nav = layout.querySelector('.jump-nav');
        if (!main || !nav) return;

        const sections = Array.from(main.querySelectorAll('section[id]'));
        const links = Array.from(nav.querySelectorAll('a[href^="#"]'));
        if (!sections.length || !links.length) return;

        const marginTop = 40;

        function setActiveById(id) {
            links.forEach((a) => {
                const hash = decodeURIComponent(a.getAttribute('href').slice(1));
                if (hash === id) {
                    a.setAttribute('aria-current', 'location');
                } else {
                    a.removeAttribute('aria-current');
                }
            });
        }

        function pickActiveSection() {
            let activeId = sections[0].id;

            for (const section of sections) {
                if (section.getBoundingClientRect().top <= marginTop) {
                    activeId = section.id;
                }
            }

            const doc = document.documentElement;
            const atBottom =
                window.innerHeight + window.scrollY >= doc.scrollHeight - 3;
            if (atBottom) {
                activeId = sections[sections.length - 1].id;
            }

            setActiveById(activeId);
        }

        function syncFromHash() {
            const raw = location.hash.slice(1);
            if (!raw) return;
            const id = decodeURIComponent(raw);
            if (sections.some((s) => s.id === id)) {
                setActiveById(id);
            }
        }

        pickActiveSection();
        syncFromHash();

        let ticking = false;
        function onScrollOrResize() {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                ticking = false;
                pickActiveSection();
            });
        }

        window.addEventListener('scroll', onScrollOrResize, { passive: true });
        window.addEventListener('resize', onScrollOrResize);
        window.addEventListener('hashchange', () => {
            syncFromHash();
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        const yearSpan = document.getElementById('current-year');
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }

        initJumpNavHighlight();
    });
})();

/*
(function () {
    const COOKIE_NAME = 'theme';
    const THEME_DARK = 'dark';
    const THEME_LIGHT = 'light';
    const DAYS_TO_EXPIRY = 365;

    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "; expires=" + date.toUTCString();
        document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax";
    }

    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    function getPreferredTheme() {
        const storedTheme = getCookie(COOKIE_NAME);

        if (storedTheme === THEME_DARK || storedTheme === THEME_LIGHT) {
            return storedTheme;
        }

        const isSystemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

        return isSystemDark ? THEME_DARK : THEME_LIGHT;
    }

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);

        const metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (metaThemeColor) {
            metaThemeColor.setAttribute('content', theme === THEME_DARK ? '#121212' : '#FDFAF5');
        }
    }

    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme') || THEME_LIGHT;
        const newTheme = currentTheme === THEME_DARK ? THEME_LIGHT : THEME_DARK;

        applyTheme(newTheme);
        setCookie(COOKIE_NAME, newTheme, DAYS_TO_EXPIRY);
    }

    const initialTheme = getPreferredTheme();
    applyTheme(initialTheme);

    document.addEventListener('DOMContentLoaded', () => {
        const btn = document.getElementById('theme-toggle');
        if (btn) {
            btn.addEventListener('click', toggleTheme);
        }

        const yearSpan = document.getElementById('current-year');
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }
    });

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!getCookie(COOKIE_NAME)) {
            applyTheme(e.matches ? THEME_DARK : THEME_LIGHT);
        }
    });
})();
*/
