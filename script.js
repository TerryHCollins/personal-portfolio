const mobileMenuButton = document.getElementById("mobilemenu");

const myLinks = document.getElementById("menuLinks");
// Says what to target for future toggle action
function toggleMobileMenu() {
  // When menu icon clicked, toggle 'hidden' class on myLinks
  myLinks.classList.toggle("hidden");
}
// tells the mobile button to toggle on click interaction
mobileMenuButton.addEventListener("click", toggleMobileMenu);
