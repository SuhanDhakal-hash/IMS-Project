// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Login button functionality (placeholder - can redirect or open modal)
    const loginBtn = document.getElementById('login-btn');
    loginBtn.addEventListener('click', function () {
        alert('Login functionality: Redirecting to login page...');
        // In a real app: window.location.href = 'login.html';
    });

    // Contact form submission (placeholder)
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Message sent! (Placeholder)');
        this.reset();
    });

    // CTA buttons (placeholder)
    const ctaBtns = document.querySelectorAll('.cta-btn');
    ctaBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            if (this.textContent === 'Get Started') {
                alert('Redirecting to signup...');
            } else if (this.textContent === 'View Sample Reports') {
                alert('Opening reports...');
            }
        });
    });
});