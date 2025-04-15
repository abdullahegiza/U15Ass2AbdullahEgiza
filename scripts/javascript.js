// === Hamburger Menu Toggle ===
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    // Close menu when a link is clicked (optional, good for single-page apps or smooth scrolling)
    // hamburger.classList.remove("active");
    // navMenu.classList.remove("active");
}));

// === Basic tsParticles Configuration (Example) ===
document.addEventListener('DOMContentLoaded', (event) => {
    // Check if tsparticles is loaded
    if (typeof tsParticles !== 'undefined') {
        // Add a div with id="tsparticles" in your HTML body where you want the particles
        const particlesContainer = document.createElement('div');
        particlesContainer.id = 'tsparticles';
        document.body.prepend(particlesContainer); // Add it at the beginning of body

        tsParticles.load("tsparticles", {
            fpsLimit: 60,
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "grab", // Can be "grab", "bubble", "repulse"
                    },
                    onClick: {
                        enable: true,
                        mode: "push", // Can be "push", "remove", "bubble"
                    },
                    resize: true,
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1,
                        },
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                    push: {
                        particles_nb: 4,
                    },
                    remove: {
                        particles_nb: 2,
                    },
                },
            },
            particles: {
                color: {
                    value: "#9f8fff", // Particle color
                },
                links: {
                    color: "#ffffff", // Link color
                    distance: 150,
                    enable: true,
                    opacity: 0.2, // Make links subtle
                    width: 1,
                },
                collisions: {
                    enable: false, // Avoid particles bouncing off each other
                },
                move: {
                    direction: "none",
                    enable: true,
                    outMode: "out", // Particles disappear when they go out
                    random: true,
                    speed: 1, // Slower speed for a calmer effect
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        value_area: 800, // Adjust density
                    },
                    value: 50, // Number of particles
                },
                opacity: {
                    value: 0.5,
                    random: true,
                },
                shape: {
                    type: "circle", // Can be "circle", "edge", "triangle", "polygon", "star"
                },
                size: {
                    value: 3,
                    random: true,
                },
            },
            detectRetina: true,
            background: { // Ensure background is transparent so CSS background shows
                color: 'transparent',
            }
        });
    } else {
        console.log("tsParticles library not loaded.");
    }

    // === Placeholder for other animations (e.g., using GSAP or ScrollReveal) ===
    // console.log("Website loaded. Initialize animations here.");
    // Example: Animate hero text on load
    // if (typeof gsap !== 'undefined') {
    //     gsap.from("#hero h1", { duration: 1, y: 50, opacity: 0, delay: 0.5 });
    //     gsap.from("#hero p", { duration: 1, y: 50, opacity: 0, delay: 0.8 });
    // }
}); 
