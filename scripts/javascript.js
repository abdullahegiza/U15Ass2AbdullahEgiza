// Three.js animation for mission section
const canvas = document.getElementById('mission-canvas');

if (canvas) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    canvas.appendChild(renderer.domElement);

    const geometry = new THREE.TorusGeometry(1, 0.4, 64, 64);
    const material = new THREE.MeshPhongMaterial({
        color: 0x06b6d4,
        wireframe: true
    });

    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(2, 2, 5);
    scene.add(directionalLight);

    camera.position.z = 3;

    function animate() {
        requestAnimationFrame(animate);
        torus.rotation.x += 0.01;
        torus.rotation.y += 0.01;
        renderer.render(scene, camera);
    }

    animate();

    window.addEventListener('resize', () => {
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    });
}


// Mobile menu functionality
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

// Toggle mobile menu
mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('nav')) {
        navLinks.classList.remove('active');
    }
});

// Add active class to current page link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navLinksElements = document.querySelectorAll('.nav-links a');

navLinksElements.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});

// Three.js animation for hero section
const canvas = document.getElementById('hero-canvas');

if (canvas) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    // Setup renderer
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    canvas.appendChild(renderer.domElement);

    // Create sphere geometry
    const geometry = new THREE.SphereGeometry(1, 64, 64);
    const material = new THREE.MeshPhongMaterial({
        color: 0x4c1d95,
        wireframe: true,
        shininess: 100
    });

    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(2, 2, 5);
    scene.add(directionalLight);

    // Position camera
    camera.position.z = 3;

    // Animation variables
    let time = 0;
    const distortionSpeed = 0.002;
    const rotationSpeed = 0.001;

    // Handle window resize
    window.addEventListener('resize', () => {
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);
    });

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);

        time += distortionSpeed;

        // Apply distortion effect
        geometry.vertices?.forEach(vertex => {
            const originalPosition = vertex.clone();
            const distortion = Math.sin(time + originalPosition.x * 2) * 0.1;
            vertex.add(originalPosition.normalize().multiplyScalar(distortion));
        });

        if (geometry.vertices) {
            geometry.verticesNeedUpdate = true;
        }

        // Rotate sphere
        sphere.rotation.x += rotationSpeed;
        sphere.rotation.y += rotationSpeed;

        renderer.render(scene, camera);
    }

    animate();
}
