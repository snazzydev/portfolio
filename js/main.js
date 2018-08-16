// ------------------
// MENU
// ------------------

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add("close");
        menu.classList.add("show");
        menuNav.classList.add("show");
        navItems.forEach(item => item.classList.add("show"));

        showMenu = true;
    } else {
        menuBtn.classList.remove("close");
        menu.classList.remove("show");
        menuNav.classList.remove("show");
        navItems.forEach(item => item.classList.remove("show"));

        showMenu = false;
    }
}

// ------------------
// TYPED JS
// ------------------

var typed = new Typed(".type", {
    strings: ["the snazzy_dev", "Ninoslav", "glad you\'re here"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});