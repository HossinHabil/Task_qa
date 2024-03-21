var countries = [
    {
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1eb.svg",
		"country": "Afghanistan",
		"code": "af",
        "number": "93"
	},
    {
        "flag": "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1ea.svg",
		"country": "United Arab Emirates",
		"code": "ae",
        "number": "971"
    },
    {
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1ee.svg",
		"country": "Anguilla",
		"code": "ai",
        "number": ""
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1f1.svg",
		"country": "Albania",
		"code": "al",
        "number": "355"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1f2.svg",
		"country": "Armenia",
		"code": "am",
        "number": "374"
	},
    {
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1f7.svg",
		"country": "Argentina",
		"code": "ar",
        "number": "54"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1f7.svg",
		"country": "Brazil",
		"code": "br",
        "number": "55"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1f8.svg",
		"country": "Bahamas",
		"code": "bs",
        "number": "1"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1f9.svg",
		"country": "Bhutan",
		"code": "bt",
        "number": "975"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1fc.svg",
		"country": "Botswana",
		"code": "bw",
        "number": "267"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1fe.svg",
		"country": "Belarus",
		"code": "by",
        "number": "375"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1ff.svg",
		"country": "Belize",
		"code": "bz",
        "number": "501"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1e6.svg",
		"country": "Canada",
		"code": "ca",
        "number": "1"
	},
]

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

// Function to populate the dropdown with options and flags
function populateDropdown() {
    var list = document.getElementById("countryList");
  
    // Loop through the countries array and add options to the dropdown
    countries.forEach(function(country) {
      var option = document.createElement("option");
      option.value = country.country;
      option.dataset.flag = country.flag;
      list.appendChild(option);
    });
}

// Function to display the flag of the selected country
function displayFlag() {
    var input = document.getElementById("countryDropdown");
    var flagImage = document.getElementById("flagImage");
    var selectedOption = document.querySelector(`option[value='${input.value}']`);

    if (selectedOption) {
        flagImage.src = selectedOption.dataset.flag;
        flagImage.alt = selectedOption.value + " flag";
    } else {
        flagImage.src = "";
        flagImage.alt = "Country flag";
    }
}

// Call the function to populate the dropdown when the page loads
window.onload = populateDropdown;