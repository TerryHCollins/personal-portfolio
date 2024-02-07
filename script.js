const mobileMenuButton = document.getElementById("mobilemenu");

const myLinks = document.getElementById("menuLinks");

function toggleMobileMenu() {
  // When menu icon clicked, toggle 'hidden' class on myLinks
  myLinks.classList.toggle("hidden");
}
