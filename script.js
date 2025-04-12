document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('header nav a');
    const currentPage = window.location.pathname.split('/').pop();

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === 'index.html' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });

    // --- Optional: Add page-specific animations here ---
    // Example for the skills page to stagger skill list items
    if (document.getElementById('skills')) {
        const skillListItems = document.querySelectorAll('#skills .skill-list li');
        skillListItems.forEach((item, index) => {
            item.style.setProperty('--animation-delay', ${0.5 + index * 0.1}s);
        });
    }

    // Example for the projects page to add initial animation
    if (document.getElementById('projects')) {
        const projectCards = document.querySelectorAll('#projects .project-card');
        projectCards.forEach((card, index) => {
            card.style.opacity = 0;
            card.style.transform = 'translateY(20px)';
            card.style.animation = fadeUp 0.7s ease-out forwards ${0.3 + index * 0.15}s;
        });
    }

    // Example for the contact page
    if (document.getElementById('contact')) {
        const contactElements = document.querySelectorAll('#contact > *');
        contactElements.forEach((element, index) => {
            element.style.opacity = 0;
            element.style.transform = 'translateY(15px)';
            element.style.animation = fadeUp 0.6s ease-out forwards ${0.2 + index * 0.1}s;
        });
    }

    // Basic fade-up animation for sections (applied in CSS, triggered on load)
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.animation = fadeUp 0.8s ease-out forwards 0.2s; // Default delay
    });
});

