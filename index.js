// Check for user's preference on reduced motion
const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: motionQuery.matches ? 'auto' : 'smooth'
            });
            // Close mobile nav on link click
            document.body.classList.remove('nav-open');
        }
    });
});

// Navbar active class toggle on scroll (optional)
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Hamburger menu toggle
const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

// Handle "Read More" buttons in services
document.querySelectorAll('.kwa a').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        alert('More details available upon request. Contact me for more information!');
    });
});

// Animate skill bars on scroll
const skillsSection = document.querySelector('#skills');
const progressBars = document.querySelectorAll('.progress');

const animateSkills = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            progressBars.forEach(bar => {
                const targetWidth = bar.getAttribute('data-width');
                bar.style.width = targetWidth;
            });
            observer.unobserve(skillsSection); // Animate only once
        }
    });
};

const skillObserver = new IntersectionObserver(animateSkills, {
    root: null,
    threshold: 0.2 // Trigger when 20% of the section is visible
});

skillObserver.observe(skillsSection);

// Back to Top Button
const backToTopButton = document.getElementById('back-to-top-btn');

window.addEventListener('scroll', () => {
    // Show button if user scrolls down 300px
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: motionQuery.matches ? 'auto' : 'smooth'
    });
});

// Fade-in animation for sections on scroll
const sectionsToFade = document.querySelectorAll('.fade-in-section');

const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    root: null,
    threshold: 0.15 // Trigger when 15% of the section is visible
});

sectionsToFade.forEach(section => {
    sectionObserver.observe(section);
});
