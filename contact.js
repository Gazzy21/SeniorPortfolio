// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add OrbitControls for navigation
const controls = new THREE.OrbitControls(camera, renderer.domElement);

// Create a floor (just for context)
const floorGeometry = new THREE.PlaneGeometry(100, 100);
const floorMaterial = new THREE.ShadowMaterial({ opacity: 0.5 });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2; // Rotate it to be flat
floor.position.y = -1;
scene.add(floor);

// Create 3D frames to represent projects
const frameGeometry = new THREE.BoxGeometry(5, 5, 0.1); // Thin boxes
const frameMaterial = new THREE.MeshBasicMaterial({ color: 0x0077cc });
const frame1 = new THREE.Mesh(frameGeometry, frameMaterial);
frame1.position.set(-10, 2, 0);  // Position of the frame
scene.add(frame1);

const frame2 = new THREE.Mesh(frameGeometry, frameMaterial);
frame2.position.set(0, 2, 0);
scene.add(frame2);

const frame3 = new THREE.Mesh(frameGeometry, frameMaterial);
frame3.position.set(10, 2, 0);
scene.add(frame3);

// Set up the camera position
camera.position.z = 30;

// Raycaster to detect clicks
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// Mouse click event listener
window.addEventListener('click', onClick, false);

function onClick(event) {
    // Normalize mouse position to [-1, 1]
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Update the raycaster
    raycaster.update();

    // Find intersections with objects in the scene
    const intersects = raycaster.intersectObjects(scene.children);

    if (intersects.length > 0) {
        const object = intersects[0].object;
        alert('You clicked on ' + object.position.x + ', ' + object.position.y);
    }
}

// Render function
function animate() {
    requestAnimationFrame(animate);
    controls.update(); // For OrbitControls

    renderer.render(scene, camera);
}

animate();
