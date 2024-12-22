// login.js
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from submitting the default way
  
    // Get the input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Check if the username and password are correct (for simplicity, hardcoding values)
    if (username === "admin" && password === "password") {
      // If login is successful, redirect to home.html
      window.location.href = "home.html";
    } else {
      alert("Invalid credentials. Please try again.");
    }
  });
  