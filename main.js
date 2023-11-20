import * as THREE from 'three';
// starting position of the images from the top
const STARTY = -10

// create a new scene
const scene = new THREE.Scene();

// create and position the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.y = STARTY
camera.position.z = 30;


// create list of images in the 'img' folder
let imgList = [
    'me.jpg',
    'compTIA.jpg',
    'dbCode.jpg'
]

// add every listen image as a plane mesh with a texture to scene
for (const image in imgList) {
    // every mesh has a geometry texture and material
    const geometry = new THREE.PlaneGeometry(20, 20);
    const texture = new THREE.TextureLoader().load('img/' + imgList[image]);
    const material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        side: THREE.DoubleSide,
        map: texture // add texture image here
    });

    const plane = new THREE.Mesh(geometry, material);
    // add new plane to scene
    scene.add(plane);
}

console.log(scene)

const bgTexture = new THREE.TextureLoader().load('greyBG.png');
scene.background = bgTexture;

// move the camera with the scroll bar
function moveCamera() {
    const top = document.body.getBoundingClientRect().top
    camera.position.y = STARTY + top * 0.05

}
// add scroll bar event to move camera
document.body.onscroll = moveCamera;
moveCamera()

// resize the threejs canvas with the window
// and ajust for phone sizes
function resizeWindow() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    // adjust for phone or desktop size
    if (window.innerWidth <= 600) {
        camera.position.x = 0
        for (const child in scene.children) {
            scene.children[child].rotation.y = 0 * (Math.PI / 180)
            scene.children[child].position.y = child * -50;
        }
    } else {
        camera.position.x = 28
        for (const child in scene.children) {
            scene.children[child].rotation.y = 15 * (Math.PI / 180)
            scene.children[child].position.y = child * -30;
        }
    }
}

// resize canvas on window resize
window.addEventListener('resize', resizeWindow, false);

// create the renderer and attach to the canvas
const renderer = new THREE.WebGLRenderer(
    { canvas: document.querySelector('#bg') }
);


resizeWindow()

// set renderer size and add it to the page
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// animation loop (calls itself recursively)
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

// start the animation
animate()