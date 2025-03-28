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
