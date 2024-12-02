document.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = "/";
    const nav = document.querySelector('nav');

    if (isLoggedIn) {
        nav.innerHTML = `<a href="../pages/home.html">Home</a><a href="profile.html">Profile</a>`;
    } else {
        nav.innerHTML = `<a href="index.html">Login</a><a href="register.html">Register</a>`;
    }
});
