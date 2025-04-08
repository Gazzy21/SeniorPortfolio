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







// Array of section file paths and their corresponding CSS
const contentArray = [
  { url: "sections/section1.html", style: "styles/section1.css" },
  { url: "sections/section2.html", style: "styles/section2.css" },
  { url: "sections/section3.html", style: "styles/section3.css" },
  { url: "sections/section4.html", style: "styles/section4.css" },
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

// Function to load and update content and section-specific styles
function updateContent(direction = 1) {
  // Ensure the index is correct before loading content
  const section = contentArray[currentContentIndex];

  // Start fade-out
  contentElement.classList.add("fade-out");

  setTimeout(() => {
    // Update index based on direction (+1 for next, -1 for previous)
    currentContentIndex += direction;

    // Handle wrapping of index
    if (currentContentIndex >= contentArray.length) {
      currentContentIndex = 0;  // Go to first section if at the end
    } else if (currentContentIndex < 0) {
      currentContentIndex = contentArray.length - 1;  // Go to last section if at the beginning
    }

    const newSection = contentArray[currentContentIndex];

    // Load HTML content dynamically
    fetch(newSection.url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load content.");
        }
        return response.text();
      })
      .then((data) => {
        contentElement.innerHTML = data;

        // Load section-specific CSS
        sectionStyleElement.href = newSection.style;

        // Fade-in after replacing content
        contentElement.classList.remove("fade-out");
      })
      .catch((error) => {
        contentElement.innerHTML = `<p class="text-danger">Error loading content!</p>`;
        contentElement.classList.remove("fade-out");
        console.error("Error loading content:", error);
      });
  }, 500); // Delay matches CSS transition duration
}

// Initial content setup on page load
document.addEventListener("DOMContentLoaded", () => {
  // Start by loading the first section's content and styles
  updateContent(0);  // Just to ensure the content loads from section 1
});