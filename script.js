/* ===========================
   MOBILE MENU
=========================== */

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navbar.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }
});

document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");

        const icon = menuBtn.querySelector("i");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    });
});


/* ===========================
   ACTIVE NAVIGATION
=========================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


/* ===========================
   HEADER SHADOW
=========================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.08)";
    } else {
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,.05)";
    }

});


/* ===========================
   TYPING EFFECT
=========================== */

const typingElement = document.querySelector(".typing");

const words = [
    "Healthcare Data Analyst",
    "Business Intelligence Developer",
    "Machine Learning Enthusiast",
    "Power BI Specialist",
    "Python Developer",
    "NHS Professional"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1800);
            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();


/* ===========================
   SCROLL REVEAL
=========================== */

const revealElements = document.querySelectorAll(
    ".section-title, .skill-card, .timeline-item, .project-card, .edu-card, .contact-card, .about-container"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition = "all .7s ease";

    observer.observe(element);

});


/* ===========================
   SMOOTH SCROLL OFFSET
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        const offset = 80;

        window.scrollTo({
            top: target.offsetTop - offset,
            behavior: "smooth"
        });

    });

});


/* ===========================
   CURRENT YEAR
=========================== */

const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML = `© ${new Date().getFullYear()} Ramakrishna Ramalingam. All Rights Reserved.`;
}
