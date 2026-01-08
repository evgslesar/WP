(function() {
    'use strict';

    const storageKey = 'gstore-theme';
    const darkThemeClass = 'dark';
    const htmlElement = document.documentElement;

    function getPreferredTheme() {
        const storedTheme = localStorage.getItem(storageKey);
        if (storedTheme) {
            return storedTheme;
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function setTheme(theme) {
        if (theme === 'dark') {
            htmlElement.setAttribute('data-theme', 'dark');
        } else {
            htmlElement.removeAttribute('data-theme');
        }
        localStorage.setItem(storageKey, theme);
    }

    // Initialize theme
    setTheme(getPreferredTheme());

    document.addEventListener('DOMContentLoaded', function() {
        const toggleButton = document.querySelector('.js-theme-toggle');
        
        if (toggleButton) {
            toggleButton.addEventListener('click', function(e) {
                e.preventDefault();
                const currentTheme = htmlElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                setTheme(newTheme);
            });
        }
    });
})();
