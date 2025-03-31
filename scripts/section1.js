window.addEventListener("load", function () {
    // After 1 second, trigger the animation for "topText"
    setTimeout(function () {
        const topText = document.getElementById("topText");
        topText.classList.remove("hidden"); // Remove the 'hidden' class to trigger the animation
    }, 3000);  // 1000ms = 1 second

    // After 2 seconds, trigger the animation for "bottomText"
    setTimeout(function () {
        const bottomText = document.getElementById("bottomText");
        bottomText.classList.remove("hidden"); // Remove the 'hidden' class to trigger the animation
    }, 5000);  // 2000ms = 2 seconds
});