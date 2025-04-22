// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Three.js background animation
    initThreeJsBackground();
    
    // Initialize mobile navigation
    initMobileNav();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize vanilla-tilt for 3D card effect
    initTiltAnimation();
});

// Mobile navigation toggle
function initMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
            });
        });
    }
}

// Three.js background animation
function initThreeJsBackground() {
    // Get the container element
    const container = document.getElementById('background-animation');
    
    if (!container) return;
    
    // Create a scene
    const scene = new THREE.Scene();
    
    // Create a camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 50;
    
    // Create a renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    
    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    
    const posArray = new Float32Array(particlesCount * 3);
    const colorArray = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i += 3) {
        // Position
        posArray[i] = (Math.random() - 0.5) * 200;
        posArray[i + 1] = (Math.random() - 0.5) * 200;
        posArray[i + 2] = (Math.random() - 0.5) * 200;
        
        // Color
        // Generate colors from primary and secondary colors
        if (Math.random() > 0.7) {
            // Purple (primary)
            colorArray[i] = 110/255;
            colorArray[i + 1] = 0;
            colorArray[i + 2] = 255/255;
        } else if (Math.random() > 0.4) {
            // Cyan (secondary)
            colorArray[i] = 0;
            colorArray[i + 1] = 212/255;
            colorArray[i + 2] = 255/255;
        } else {
            // Pink (accent)
            colorArray[i] = 255/255;
            colorArray[i + 1] = 0;
            colorArray[i + 2] = 160/255;
        }
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));
    
    // Material
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.1,
        transparent: true,
        opacity: 0.8,
        vertexColors: true,
        blending: THREE.AdditiveBlending
    });
    
    // Create the particles mesh
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        
        particlesMesh.rotation.x += 0.0003;
        particlesMesh.rotation.y += 0.0005;
        
        renderer.render(scene, camera);
    }
    
    animate();
    
    // Handle window resize
    window.addEventListener('resize', function() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

// Initialize scroll animations with GSAP
function initScrollAnimations() {
    if (typeof gsap !== 'undefined') {
        // Hero section animations
        gsap.from('.hero-content h1', {
            opacity: 0,
            y: 50,
            duration: 1.2,
            delay: 0.2
        });
        
        gsap.from('.hero-content .sub-title', {
            opacity: 0,
            y: 50,
            duration: 1.2,
            delay: 0.5
        });
        
        gsap.from('.hero-content .cta-buttons', {
            opacity: 0,
            y: 50,
            duration: 1.2,
            delay: 0.8
        });
        
        // Animate mission cards on scroll
        const missionCards = document.querySelectorAll('.mission-card');
        if (missionCards.length > 0) {
            gsap.from(missionCards, {
                opacity: 0,
                y: 100,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: '.mission-content',
                    start: 'top 80%'
                }
            });
        }
        
        // Animate event cards on scroll
        const eventCards = document.querySelectorAll('.event-card');
        if (eventCards.length > 0) {
            gsap.from(eventCards, {
                opacity: 0,
                y: 100,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: '.events-slider',
                    start: 'top 80%'
                }
            });
        }
    }
}

// Initialize vanilla-tilt for 3D card effect
function initTiltAnimation() {
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll('[data-tilt]'), {
            max: 10,
            speed: 400,
            glare: true,
            'max-glare': 0.3,
        });
    }
}

// Add a smooth scroll effect to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
}); 
