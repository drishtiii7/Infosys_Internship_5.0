// Login Simulation
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (username === "admin" && password === "admin123") {
        error.textContent = "";
        document.querySelector(".login-section").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
    } else {
        error.textContent = "Invalid username or password. Please try again.";
    }
});
