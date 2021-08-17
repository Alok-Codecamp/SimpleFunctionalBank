// login button

document.getElementById("login-submit").addEventListener("click", function () {
  const email = document.getElementById("user-email").value;
  const password = document.getElementById("user-password").value;
  if (email == "I love Nodi" && password == "Nodi6634") {
    window.location.href = "banking.html";
  }
});
