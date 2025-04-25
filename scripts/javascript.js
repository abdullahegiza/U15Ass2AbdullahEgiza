document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navbarNav = document.querySelector('.navbar-nav');
    const mainHeader = document.querySelector('.main-header');

    // Mobile Menu Toggle
    if (mobileMenuToggle && navbarNav) {
        mobileMenuToggle.addEventListener('click', () => {
            navbarNav.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });

        // Close menu when a link is clicked (optional)
        navbarNav.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                 if (navbarNav.classList.contains('active')) {
                    navbarNav.classList.remove('active');
                    mobileMenuToggle.classList.remove('active');
                 }
            });
        });
    }

    // Header scroll effect
    if (mainHeader) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) { // Add class after scrolling 50px
                mainHeader.classList.add('scrolled');
            } else {
                mainHeader.classList.remove('scrolled');
            }
        });
    }

    // --- Add More Advanced/Futuristic Effects Below ---

    // Example: Simple console log to confirm script load
    console.log("Main site script loaded.");

    // Placeholder for 3D/Animation initialization if using libraries
    // initThreeJSBackground();
    // initParticleEffects();
    // initScrollAnimations();

});

// --- Define functions for advanced effects here ---

// function initThreeJSBackground() {
//     // Placeholder: Setup Three.js scene, camera, renderer, and add objects/effects
//     console.log("Initializing 3D background (placeholder)...");
// }

// function initParticleEffects() {
//     // Placeholder: Use libraries like particles.js or tsParticles
//      console.log("Initializing particle effects (placeholder)...");
// }

// function initScrollAnimations() {
//      // Placeholder: Use libraries like GSAP ScrollTrigger or Intersection Observer API
//      console.log("Initializing scroll animations (placeholder)...");
// } 
