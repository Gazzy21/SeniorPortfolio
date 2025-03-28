$(document).ready(function () {
  function showLoadingScreen() {
    $(".splash-wrapper").fadeIn(1500); // Fade in the loading screen
  }

  function hideLoadingScreen() {
    $(".splash-wrapper").fadeOut(1500); // Fade out the loading screen
  }

  function showMenuScreen() {
    $(".splash-wrapper").fadeIn(1500);
    $(".loader").hide();
    $(".menudiv").show();
  }

  setTimeout(function () {
    hideLoadingScreen(); // Initially hide the loading screen
  }, 3000);
});

// Sample content data to dynamically change in the section
const contentArray = [
  "Welcome to the First Section!",
  "This is the Second Section.",
  "You are now in the Third Section.",
  "This is the Fourth Section. Enjoy!",
];

// Initial content index
let currentContentIndex = 0;

// Get the content and button elements
const contentElement = document.getElementById('content');
const nextButton = document.getElementById('nextButton');

// Function to update content
function updateContent() {
  // Set new content based on the current index
  contentElement.innerHTML = contentArray[currentContentIndex];

  // If we reach the last item, we can loop back to the first
  if (currentContentIndex >= contentArray.length - 1) {
      currentContentIndex = 0; // Reset to the first content
  } else {
      currentContentIndex++; // Move to the next content
  }
}

// Event listener for the "Next" button
nextButton.addEventListener('click', updateContent);

// Initial content setup
updateContent();
