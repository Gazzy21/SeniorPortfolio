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

// Initial content index
let currentContentIndex = 0;

// Get content and button elements
const contentElement = document.getElementById("content");
const nextButton = document.getElementById("nextButton");

// Create a link element for dynamic section CSS
const sectionStyleElement = document.createElement("link");
sectionStyleElement.rel = "stylesheet";
sectionStyleElement.type = "text/css";
document.head.appendChild(sectionStyleElement);

// Function to load and update content and section-specific styles
function updateContent() {
  const section = contentArray[currentContentIndex];

  // Load HTML content dynamically
  fetch(section.url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to load content.");
      }
      return response.text();
    })
    .then((data) => {
      contentElement.innerHTML = data;

      // Load section-specific CSS
      sectionStyleElement.href = section.style;

      // Cycle through content or reset to the first section
      if (currentContentIndex >= contentArray.length - 1) {
        currentContentIndex = 0;
      } else {
        currentContentIndex++;
      }
    })
    .catch((error) => {
      contentElement.innerHTML = `<p class="text-danger">Error loading content!</p>`;
      console.error("Error loading content:", error);
    });
}

// Event listener for the "Next" button
nextButton.addEventListener("click", updateContent);

// Initial content setup on page load
updateContent();

