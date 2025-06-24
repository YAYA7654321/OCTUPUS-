document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll(".nav-links a").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector(".navbar").offsetHeight,
                    behavior: "smooth"
                });
            }
        });
    });

    // Mobile menu toggle
    const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
    const navLinks = document.querySelector(".nav-links");

    mobileMenuIcon.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });

    // Close mobile menu when a link is clicked
    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function() {
            navLinks.classList.remove("active");
        });
    });

    // Form submission handling
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("Message sent! We will contact you soon.");
            contactForm.reset();
        });
    }

    // Update button text for language switcher on load
    const savedLang = localStorage.getItem("currentLang");
    if (savedLang) {
        const langButton = document.querySelector(".lang-button");
        if (langButton && typeof languages !== 'undefined') {
            langButton.textContent = languages[savedLang].name;
        }
    }
});


