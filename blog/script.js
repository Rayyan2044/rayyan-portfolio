function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("show");
}

document.getElementById("toggle-theme").onclick = () => {
  document.body.classList.toggle("dark");
};

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("formMessage").innerText = "Thanks for your message!";
  this.reset();
});
