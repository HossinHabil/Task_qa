// Close Top Bar
document.addEventListener("DOMContentLoaded", function() {
    const closeTopBarBtn = document.getElementById("top_bar_icon");
    const topBar = document.getElementById("top_bar");

    closeTopBarBtn.addEventListener("click", function() {
        topBar.style.display = "none";
    });
});

// Navbar Toggler

document.addEventListener("DOMContentLoaded", function() {
    const navbarTogglerBtn = document.getElementById("navbar-toggler-btn");
    const navbarMobileContainer = document.getElementById("navbar_mobile_container");

    navbarTogglerBtn.addEventListener("click", function() {
        navbarMobileContainer.classList.toggle("show");
    });

    // Close navbar when clicking outside of it
    document.addEventListener("click", function(event) {
        const isClickInsideNavbar = navbarMobileContainer.contains(event.target);
        const isClickInsideNavbarBtn = navbarTogglerBtn.contains(event.target);

        if (!isClickInsideNavbar && !isClickInsideNavbarBtn) {
            navbarMobileContainer.classList.remove("show");
        }
    });
});

// Show Done alert when clicking on the create_account_button button

document.addEventListener("DOMContentLoaded", function() {
    const createAccountBtn = document.getElementById("create_account_button");

    createAccountBtn.addEventListener("click", function() {
        alert("Done!");
    });
});

// Open the sub-menu when clicking on the Resources link

document.addEventListener("DOMContentLoaded", function() {
    const resourcesLink = document.getElementById("resources_container");
    const resourcesSubMenu = document.getElementById("resources_sub_container");
    const resourcesIcon = document.querySelector(".resources_icon");

    resourcesLink.addEventListener("click", function() {
        resourcesSubMenu.classList.toggle("show_resources_sub_container");
        resourcesIcon.classList.toggle("rotate_icon");
    });
});