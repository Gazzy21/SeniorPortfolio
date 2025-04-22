$(window).on("load", function () {
  // Hide the loading screen once everything is loaded
  function hideLoadingScreen() {
    $(".splash-wrapper").fadeOut(1500); // Fade out the loading screen
  }

  function showMenuScreen() {
    $(".splash-wrapper").fadeIn(1500);
    $(".loader").hide();
    $(".menudiv").show();
  }

  // Hide the loading screen after everything is loaded
  hideLoadingScreen();
});

// Show the loading screen immediately when the page starts loading
$(document).ready(function () {
  function showLoadingScreen() {
    $(".splash-wrapper").fadeIn(1500); // Fade in the loading screen
  }

  showLoadingScreen(); // Show the loading screen while content loads
});







// Array of section file paths and their corresponding CSS and JS
const contentArray = [
  { url: "sections/section1.html", style: "styles/section1.css", script: "scripts/section1.js" },
  { url: "sections/section2.html", style: "styles/section2.css", script: "scripts/section2.js" },
  { url: "sections/section3.html", style: "styles/section3.css", script: "scripts/section3.js" },
  { url: "sections/section4.html", style: "styles/section4.css", script: "scripts/section4.js" },
];

// Initial content index (start at section 1)
let currentContentIndex = 0;

// Get content element
const contentElement = document.getElementById("content");

// Create a link element for dynamic section CSS
const sectionStyleElement = document.createElement("link");
sectionStyleElement.rel = "stylesheet";
sectionStyleElement.type = "text/css";
document.head.appendChild(sectionStyleElement);

// Placeholder for current script element
let sectionScriptElement = null;

// Function to load and update content, styles, and scripts
function updateContent(direction = 1) {
  const section = contentArray[currentContentIndex];

  // Start fade-out animation
  contentElement.classList.add("fade-out");

  setTimeout(() => {
    // Update index
    currentContentIndex += direction;

    // Wrap around if needed
    if (currentContentIndex >= contentArray.length) {
      currentContentIndex = 0;
    } else if (currentContentIndex < 0) {
      currentContentIndex = contentArray.length - 1;
    }

    const newSection = contentArray[currentContentIndex];

    // Load HTML content
    fetch(newSection.url)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to load content.");
        return response.text();
      })
      .then((data) => {
        // Inject HTML
        contentElement.innerHTML = data;

        // Update CSS
        sectionStyleElement.href = newSection.style;

        // Remove previous script if exists
        if (sectionScriptElement) {
          sectionScriptElement.remove();
        }

        // Add new JS script
        sectionScriptElement = document.createElement("script");
        sectionScriptElement.src = newSection.script;
        sectionScriptElement.defer = true; // optional: ensures it doesn't block rendering
        document.body.appendChild(sectionScriptElement);

        // Fade in
        contentElement.classList.remove("fade-out");
      })
      .catch((error) => {
        contentElement.innerHTML = `<p class="text-danger">Error loading content!</p>`;
        contentElement.classList.remove("fade-out");
        console.error("Error loading content:", error);
      });
  }, 500); // Match transition delay
}

// Initial content setup
document.addEventListener("DOMContentLoaded", () => {
  updateContent(0);
});


// Function to load and update content, styles, and scripts (backwards version)
function updateContentBack(direction = -1) { // Changed function name and default direction to -1
  const section = contentArray[currentContentIndex];

  // Start fade-out animation
  contentElement.classList.add("fade-out");

  setTimeout(() => {
    // Update index
    currentContentIndex += direction;

    // Wrap around if needed
    if (currentContentIndex >= contentArray.length) {
      currentContentIndex = 0;
    } else if (currentContentIndex < 0) {
      currentContentIndex = contentArray.length - 1;
    }

    const newSection = contentArray[currentContentIndex];

    // Load HTML content
    fetch(newSection.url)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to load content.");
        return response.text();
      })
      .then((data) => {
        // Inject HTML
        contentElement.innerHTML = data;

        // Update CSS
        sectionStyleElement.href = newSection.style;

        // Remove previous script if exists
        if (sectionScriptElement) {
          sectionScriptElement.remove();
        }

        // Add new JS script
        sectionScriptElement = document.createElement("script");
        sectionScriptElement.src = newSection.script;
        sectionScriptElement.defer = true; // optional: ensures it doesn't block rendering
        document.body.appendChild(sectionScriptElement);

        // Fade in
        contentElement.classList.remove("fade-out");
      })
      .catch((error) => {
        contentElement.innerHTML = `<p class="text-danger">Error loading content!</p>`;
        contentElement.classList.remove("fade-out");
        console.error("Error loading content:", error);
      });
  }, 500); // Match transition delay
}

// Initial content setup
document.addEventListener("DOMContentLoaded", () => {
  updateContentBack(0); // This will still start the initial load
});



