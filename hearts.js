// ============================================================
// hearts.js — shared ambient floating-hearts background
// Used by both index1.html and index2.html (previously this
// exact function was duplicated in script1.js and script2.js).
// ============================================================

(function spawnHearts() {
    const container = document.querySelector(".hearts-bg");
    if (!container) return;

    const symbols = ["💕", "💗", "💖", "🩷"];
    const count = window.innerWidth < 600 ? 10 : 18;

    for (let i = 0; i < count; i++) {
        const heart = document.createElement("span");
        heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        heart.style.left = Math.random() * 100 + "%";
        heart.style.setProperty("--drift", (Math.random() * 60 - 30) + "px");
        heart.style.fontSize = 14 + Math.random() * 16 + "px";
        heart.style.animationDuration = 8 + Math.random() * 10 + "s";
        heart.style.animationDelay = -(Math.random() * 12) + "s";
        container.appendChild(heart);
    }
})();
