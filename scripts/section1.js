// Delay the entire animation by 1 second
setTimeout(() => {
    // Wait for the DOM to load
    document.addEventListener("DOMContentLoaded", function () {
        // Get the h1 elements
        const topText = document.getElementById("topText");
        const bottomText = document.getElementById("bottomText");

        // Slide in the first h1 from the left
        setTimeout(() => {
            topText.classList.add("show-left");
        }, 300); // 300ms delay for a smoother start

        // Slide in the second h1 from the right
        setTimeout(() => {
            bottomText.style.transform = "translateX(100%)"; // Start off-screen right
            bottomText.classList.add("show-right");
        }, 700); // Delay to create a staggered effect
    });
}, 1000); // 1000ms delay before everything starts
