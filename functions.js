document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav_menu_list a");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            // Remove active-link class from all links
            navLinks.forEach(link => link.classList.remove("active-link"));

            // Add active-link class to the clicked link
            this.classList.add("active-link");
        });
    });
});
function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");

    if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}

// Close the menu on clicking a menu item
document.querySelectorAll(".nav_menu_list a").forEach(link => {
    link.addEventListener("click", function () {
        var menuBtn = document.getElementById("myNavMenu");
        if (menuBtn.className.includes("responsive")) {
            menuBtn.className = "nav-menu"; // Close the menu
        }
    });
});
