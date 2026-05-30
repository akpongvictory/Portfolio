const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".links");
const navItems = document.querySelectorAll(".links a");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

navItems.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});