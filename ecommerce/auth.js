function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
}
