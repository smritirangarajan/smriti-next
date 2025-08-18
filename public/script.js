document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navbar links
    document.querySelectorAll(".navbar a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            if (this.getAttribute("href").startsWith("#")) {
                event.preventDefault();
                const targetId = this.getAttribute("href").substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 60,
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    // Highlight active navbar link based on scroll position
    const sections = document.querySelectorAll(".experience-block");
    const navLinks = document.querySelectorAll(".navbar a");

    function highlightNav() {
        let scrollY = window.pageYOffset;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.style.color = "black");
                navLinks[index].style.color = "white";
            }
        });
    }

    window.addEventListener("scroll", highlightNav);

    // Toggle visibility of experience details
    document.querySelectorAll(".experience-block h1").forEach(header => {
        header.addEventListener("click", function () {
            const details = this.nextElementSibling;
            if (details.style.display === "none" || !details.style.display) {
                details.style.display = "block";
            } else {
                details.style.display = "none";
            }
        });
    });

    // Hover effect for company logos
    document.querySelectorAll(".company-logo-circle img").forEach(logo => {
        logo.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.1)";
            this.style.transition = "transform 0.3s ease-in-out";
        });

        logo.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });

    // Toggle experience sections on click
    document.querySelectorAll(".mini-polaroid-right, .mini-polaroid-left").forEach(section => {
        section.addEventListener("click", function () {
            const experienceBlock = this.previousElementSibling;
            if (experienceBlock) {
                experienceBlock.classList.toggle("expanded");
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const hoverElements = document.querySelectorAll(".company-logo-circle, .experience-block");

    hoverElements.forEach((element) => {
        element.addEventListener("mouseenter", () => {
            element.style.transform = "scale(1.05)";
        });

        element.addEventListener("mouseleave", () => {
            element.style.transform = "scale(1)";
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // GitHub circle hover effect
    const githubCircle = document.querySelector(".github-circle");

    githubCircle.addEventListener("mouseenter", function () {
        githubCircle.style.transform = "scale(1.2)";
    });

    githubCircle.addEventListener("mouseleave", function () {
        githubCircle.style.transform = "scale(1)";
    });

    // "Click Here to Learn More" hover effect
    const learnMore = document.querySelector(".learn-more");

    learnMore.addEventListener("mouseenter", function () {
        learnMore.style.transform = "scale(1.1)";
    });

    learnMore.addEventListener("mouseleave", function () {
        learnMore.style.transform = "scale(1)";
    });
});
// Wait for the DOM to load before attaching event listeners
document.addEventListener("DOMContentLoaded", function() {
    // Handle form submission
    document.getElementById('welcome-form').addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent the form from reloading the page
        
        // Get the value entered in the form input (use the correct id 'username')
        const name = document.getElementById('username').value;

        // Display a greeting message
        const greeting = `Hi ${name}, Thanks for visiting my website`;
        document.getElementById('greeting').innerText = greeting;
    });
});




