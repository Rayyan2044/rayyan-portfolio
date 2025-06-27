
// Load users
const users = JSON.parse(localStorage.getItem("users")) || {};

// Password strength check
function checkPasswordStrength(password) {
  const strengthMessage = document.getElementById("strengthMessage");
  if (!strengthMessage) return;

  if (password.length < 6) {
    strengthMessage.style.color = "red";
    strengthMessage.innerText = "Weak: at least 6 characters.";
  } else if (!/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
    strengthMessage.style.color = "orange";
    strengthMessage.innerText = "Medium: add numbers and uppercase letters.";
  } else {
    strengthMessage.style.color = "green";
    strengthMessage.innerText = "Strong password!";
  }
}

// Register
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  const passwordInput = document.getElementById("registerPassword");
  if (passwordInput) {
    passwordInput.addEventListener("input", () => {
      checkPasswordStrength(passwordInput.value);
    });
  }

  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("registerUsername").value.trim();
    const password = passwordInput.value;

    if (users[username]) {
      document.getElementById("registerMessage").innerText = "Username already exists.";
    } else {
      users[username] = password;
      localStorage.setItem("users", JSON.stringify(users));
      document.getElementById("registerMessage").style.color = "green";
      document.getElementById("registerMessage").innerText = "Registered! You can now login.";
    }
  });
}

// Login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value;

    if (users[username] && users[username] === password) {
      localStorage.setItem("loggedInUser", username);
      window.location.href = "index.html";
    } else {
      document.getElementById("loginMessage").style.color = "red";
      document.getElementById("loginMessage").innerText = "Invalid username or password.";
    }
  });
}
