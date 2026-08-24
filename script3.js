function spawnConfetti() {
    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const symbols = ["🎉", "🎈", "✨", "🎊", "💗"];
    const count = window.innerWidth < 600 ? 16 : 26;

    for (let i = 0; i < count; i++) {
        const piece = document.createElement("span");
        piece.className = "confetti-piece";
        piece.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        piece.style.left = Math.random() * 100 + "vw";
        piece.style.setProperty("--spin", (Math.random() * 540 - 270) + "deg");
        piece.style.animationDuration = 2.2 + Math.random() * 1.8 + "s";
        piece.style.animationDelay = Math.random() * 0.4 + "s";
        piece.style.fontSize = 14 + Math.random() * 14 + "px";

        document.body.appendChild(piece);

        // clean up after it finishes falling so nodes don't pile up
        piece.addEventListener("animationend", () => piece.remove());
    }
}

function blowCandle() {

    const flames = document.querySelectorAll(".flame");
    const message = document.querySelector(".birthday-message");
    const button = document.querySelector("button");

    /* Blow out the flames one by one */

    flames.forEach(function (flame, index) {

        setTimeout(function () {

            flame.classList.add("off");

        }, index * 150);

    });

    /* Show the new birthday message + confetti */

    setTimeout(function () {

        message.classList.add("show-after-blow");
        spawnConfetti();

    }, flames.length * 150 + 500);

    /* Prevent clicking the button again */

    button.disabled = true;
    button.setAttribute("aria-disabled", "true");
    button.style.opacity = "0.6";
    button.textContent = "🎂 Candle blown out";
}
