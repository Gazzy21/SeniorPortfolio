document.addEventListener("mousemove", (e) => {
    const nextPageArea = document.querySelector('.next-page-area');

    // If the cursor is within the "next page" region
    if (e.clientX > window.innerWidth - 50) {
        nextPageArea.style.backgroundColor = "rgba(0, 0, 0, 0.2)";  // Optional, highlight the area when active
    } else {
        nextPageArea.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    }
});

document.querySelector('.next-page-area').addEventListener('click', () => {
    // Redirect to next page (adjust the URL as needed)
    window.location.href = "nextpage.html";  // Replace with the actual next page URL
});