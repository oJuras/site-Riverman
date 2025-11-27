// Three.js Background Animation
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
    antialias: true,
    alpha: true
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

// Colors
const primaryColor = 0x6366f1;
const secondaryColor = 0x22d3ee;
const accentColor = 0xf472b6;

// Create main torus - represents the browser
const torusGeometry = new THREE.TorusGeometry(10, 3, 16, 100);
const torusMaterial = new THREE.MeshStandardMaterial({ 
    color: primaryColor,
    wireframe: true,
    emissive: primaryColor,
    emissiveIntensity: 0.2
});
const torus = new THREE.Mesh(torusGeometry, torusMaterial);
scene.add(torus);

// Create stars
function addStar() {
    const geometry = new THREE.SphereGeometry(0.15, 24, 24);
    const material = new THREE.MeshStandardMaterial({ 
        color: 0xffffff,
        emissive: 0xffffff,
        emissiveIntensity: 0.5
    });
    const star = new THREE.Mesh(geometry, material);

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(200));
    star.position.set(x, y, z);
    scene.add(star);
    return star;
}

const stars = Array(300).fill().map(addStar);

// Create floating particles
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 1000;
const posArray = new Float32Array(particlesCount * 3);

for(let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 100;
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

const particlesMaterial = new THREE.PointsMaterial({
    size: 0.1,
    color: secondaryColor,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending
});

const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particlesMesh);

// Create geometric shapes
const shapes = [];

// Icosahedron
const icoGeometry = new THREE.IcosahedronGeometry(2, 0);
const icoMaterial = new THREE.MeshStandardMaterial({
    color: secondaryColor,
    wireframe: true,
    emissive: secondaryColor,
    emissiveIntensity: 0.3
});
const icosahedron = new THREE.Mesh(icoGeometry, icoMaterial);
icosahedron.position.set(-15, 5, -10);
scene.add(icosahedron);
shapes.push(icosahedron);

// Octahedron
const octGeometry = new THREE.OctahedronGeometry(2);
const octMaterial = new THREE.MeshStandardMaterial({
    color: accentColor,
    wireframe: true,
    emissive: accentColor,
    emissiveIntensity: 0.3
});
const octahedron = new THREE.Mesh(octGeometry, octMaterial);
octahedron.position.set(15, -5, -15);
scene.add(octahedron);
shapes.push(octahedron);

// Dodecahedron
const dodGeometry = new THREE.DodecahedronGeometry(1.5);
const dodMaterial = new THREE.MeshStandardMaterial({
    color: primaryColor,
    wireframe: true,
    emissive: primaryColor,
    emissiveIntensity: 0.3
});
const dodecahedron = new THREE.Mesh(dodGeometry, dodMaterial);
dodecahedron.position.set(20, 10, -20);
scene.add(dodecahedron);
shapes.push(dodecahedron);

// Additional floating rings
const ringGeometry = new THREE.TorusGeometry(3, 0.3, 16, 50);
const ringMaterial = new THREE.MeshStandardMaterial({
    color: secondaryColor,
    wireframe: true,
    emissive: secondaryColor,
    emissiveIntensity: 0.2
});
const ring1 = new THREE.Mesh(ringGeometry, ringMaterial);
ring1.position.set(-20, -10, -25);
ring1.rotation.x = Math.PI / 4;
scene.add(ring1);
shapes.push(ring1);

const ring2Material = new THREE.MeshStandardMaterial({
    color: accentColor,
    wireframe: true,
    emissive: accentColor,
    emissiveIntensity: 0.2
});
const ring2 = new THREE.Mesh(ringGeometry, ring2Material);
ring2.position.set(25, 15, -30);
ring2.rotation.y = Math.PI / 3;
scene.add(ring2);
shapes.push(ring2);

// Lights
const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);

const pointLight2 = new THREE.PointLight(primaryColor, 1);
pointLight2.position.set(-10, -10, -10);

const pointLight3 = new THREE.PointLight(secondaryColor, 0.8);
pointLight3.position.set(10, 10, 10);

scene.add(pointLight, ambientLight, pointLight2, pointLight3);

// Mouse interaction
let mouseX = 0;
let mouseY = 0;
let targetX = 0;
let targetY = 0;

document.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX - window.innerWidth / 2) / 100;
    mouseY = (event.clientY - window.innerHeight / 2) / 100;
});

// Scroll animation
function moveCamera() {
    const t = document.body.getBoundingClientRect().top;
    
    // Animate torus based on scroll
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.01;

    camera.position.z = 30 - t * -0.01;
    camera.position.x = t * -0.0002;
    camera.rotation.y = t * -0.0002;
}

document.body.onscroll = moveCamera;
moveCamera();

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Smooth mouse follow
    targetX += (mouseX - targetX) * 0.05;
    targetY += (mouseY - targetY) * 0.05;

    // Animate main torus
    torus.rotation.x += 0.003;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.002;
    torus.position.x = targetX * 0.5;
    torus.position.y = -targetY * 0.5;

    // Animate particles
    particlesMesh.rotation.x += 0.0003;
    particlesMesh.rotation.y += 0.0005;

    // Animate shapes
    shapes.forEach((shape, index) => {
        shape.rotation.x += 0.005 * (index + 1) * 0.3;
        shape.rotation.y += 0.003 * (index + 1) * 0.3;
        
        // Floating effect
        shape.position.y += Math.sin(Date.now() * 0.001 + index) * 0.01;
    });

    // Animate stars twinkling
    stars.forEach((star, index) => {
        star.scale.setScalar(0.8 + Math.sin(Date.now() * 0.003 + index) * 0.3);
    });

    renderer.render(scene, camera);
}

// Handle resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Start animation
animate();

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Add entrance animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.feature-card, .download-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

console.log('🌊 Riverman - O browser mais based da internet!');
console.log('✨ Three.js animation loaded successfully');
