// ---------- NO BUTTON ----------
// (heart background now comes from the shared hearts.js)

const noButton = document.querySelector(".no-btn");
const yesButton = document.querySelector(".yes-btn");
const promptText = document.getElementById("prompt-text");

const nudges = [
    "Nice try 🙈",
    "It's not going anywhere...",
    "Come on, you know you want to 💕",
    "The button says no, your heart says yes",
    "Okay now you're just testing it",
    "This button has trust issues",
    "Just click yes already 😌"
];

let moveCount = 0;


if (noButton) {

    function moveNoButton() {

        // Force fixed positioning
        noButton.style.position = "fixed";

        // Remove any previous transform
        noButton.style.transform = "none";

        // Get the ACTUAL size of the button
        const rect = noButton.getBoundingClientRect();

        const buttonWidth = rect.width;
        const buttonHeight = rect.height;

        // Safe distance from screen edges
        const padding = 20;

        // Calculate safe area
        const maxX =
            window.innerWidth - buttonWidth - padding;

        const maxY =
            window.innerHeight - buttonHeight - padding;

        // Generate a completely safe position
        let randomX =
            padding +
            Math.random() * Math.max(0, maxX - padding);

        let randomY =
            padding +
            Math.random() * Math.max(0, maxY - padding);

        // Make absolutely sure it cannot leave the screen
        randomX = Math.max(
            padding,
            Math.min(randomX, maxX)
        );

        randomY = Math.max(
            padding,
            Math.min(randomY, maxY)
        );

        // Move button
        noButton.style.left = randomX + "px";
        noButton.style.top = randomY + "px";

        // Count movements
        moveCount++;

        // NEVER shrink the No button
        noButton.style.scale = "1";

        // Keep the same text forever
        noButton.textContent = "No 🙈";


        // ---------- YES BUTTON ----------

        if (yesButton) {

            const grow =
                Math.min(
                    1.6,
                    1 + moveCount * 0.05
                );

            yesButton.style.fontSize =
                17 * grow + "px";

            yesButton.style.padding =
                `${9 * grow}px ${22 * grow}px`;

            yesButton.classList.remove("eager");

            void yesButton.offsetWidth;

            yesButton.classList.add("eager");
        }


        // ---------- QUESTION TEXT ----------

        if (promptText) {

            const message =
                nudges[
                    Math.min(
                        moveCount - 1,
                        nudges.length - 1
                    )
                ];

            promptText.style.opacity = "0";

            setTimeout(() => {

                promptText.textContent = message;
                promptText.style.opacity = "1";

            }, 150);
        }
    }


    // Desktop
    noButton.addEventListener(
        "mouseenter",
        moveNoButton
    );


    // Mobile
    noButton.addEventListener(
        "touchstart",
        function (event) {

            event.preventDefault();

            moveNoButton();

        },
        {
            passive: false
        }
    );


    // If somehow clicked
    noButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            moveNoButton();

        }
    );


    // ---------- KEEP BUTTON INSIDE SCREEN ----------

    window.addEventListener(
        "resize",
        function () {

            if (
                noButton.style.position !== "fixed"
            ) {
                return;
            }

            const rect =
                noButton.getBoundingClientRect();

            const padding = 20;

            let x = rect.left;
            let y = rect.top;

            const maxX =
                window.innerWidth -
                rect.width -
                padding;

            const maxY =
                window.innerHeight -
                rect.height -
                padding;

            x = Math.max(
                padding,
                Math.min(x, maxX)
            );

            y = Math.max(
                padding,
                Math.min(y, maxY)
            );

            noButton.style.left = x + "px";
            noButton.style.top = y + "px";
        }
    );
}
