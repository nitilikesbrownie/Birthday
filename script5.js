// ============================================================
// script5.js — memory board page
// ============================================================

// ---- EDIT ME ----
// Everything page-specific lives here instead of being buried
// in the markup, so future-you doesn't have to hunt for it.
const PAGE5_CONFIG = {
    age: 22,          // was hardcoded inside the HTML — change the birthday age here
    headline: "HAPPY B-DAY"
};

// Wrap each letter of the headline in its own span so every
// character jiggles independently, on its own timing offset.
function makeJiggly(elementId, text) {
    const el = document.getElementById(elementId);
    if (!el) return;
    el.innerHTML = '';
    [...text].forEach((char, i) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        // stagger + slightly randomize each letter's animation
        span.style.animationDelay = (i * 0.07) + 's';
        span.style.animationDuration = (1.3 + Math.random() * 0.6) + 's';
        el.appendChild(span);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    makeJiggly('happy-bday', PAGE5_CONFIG.headline);

    const ageEl = document.getElementById('age-number');
    if (ageEl) ageEl.textContent = PAGE5_CONFIG.age;
});
