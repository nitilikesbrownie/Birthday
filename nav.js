// ============================================================
// nav.js — shared page-nav component
// Reads config from <body data-page="N" data-total="6"
//   data-accent="#hex" data-prev="indexN-1.html">
// and injects: a bottom-left "back" arrow (skipped on page 1)
// and a small centered progress-dot strip.
// One file, used by every page, instead of hand-copied markup.
// ============================================================

(function renderPageNav() {
    const body = document.body;
    const page = parseInt(body.dataset.page, 10);
    const total = parseInt(body.dataset.total, 10) || 6;
    const accent = body.dataset.accent || "#d96b83";
    const prevHref = body.dataset.prev;

    if (!page) return;

    document.documentElement.style.setProperty("--nav-accent", accent);

    // ---- back arrow (not shown on the very first page) ----
    if (prevHref) {
        const back = document.createElement("a");
        back.href = prevHref;
        back.className = "back-arrow";
        back.setAttribute("aria-label", "Go back to the previous page");
        back.innerHTML = `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 12H6M11 6l-6 6 6 6" fill="none" stroke="currentColor"
                    stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>`;
        document.body.appendChild(back);
    }

    // ---- progress dots ----
    const nav = document.createElement("div");
    nav.className = "page-nav";
    nav.setAttribute("aria-hidden", "true"); // decorative; navigation itself stays keyboard-accessible via the back arrow and each page's own links

    for (let i = 1; i <= total; i++) {
        const dot = document.createElement("span");
        dot.className = "dot" + (i === page ? " current" : "");
        nav.appendChild(dot);
    }

    document.body.appendChild(nav);
})();
