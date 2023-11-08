
import * as THREE from './three.module.js';


const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer(
  { canvas: document.querySelector('#bg') }
);

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ = 30;
camera.position.setX(-3)

const geoPog = new THREE.TorusGeometry(10, 3, 16, 100);
// const texturePog = new THREE.TextureLoader().load('EmoBoy.png');
const matPog = new THREE.MeshStandardMaterial(
  {
    color: 0x5147bf,
    wireframe: false,
    // map: texturePog
  }
);

const pog = new THREE.Mesh(geoPog, matPog);
pog.rotation.x = 45

scene.add(pog);






//LIGHTS
const pointLight = new THREE.PointLight(0xFFFFFF, 1000, 1000)
pointLight.position.set(5, 5, 5)

const ambientLight = new THREE.AmbientLight(0xFFFFFF)

scene.add(pointLight)
scene.add(ambientLight)

//HELPERS
const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200, 50);
const axesHelper = new THREE.AxesHelper(20, 20, 20);

// scene.add(lightHelper);
// scene.add(gridHelper);
// scene.add(axesHelper);



function addStar() {
  const gemometry = new THREE.SphereGeometry(0.5, 24, 24);
  const starTexture = new THREE.TextureLoader().load('EmoBoy.jpg')
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff,
    map:  starTexture

 })
  const star = new THREE.Mesh(gemometry, material);

  const x = THREE.MathUtils.randFloatSpread(400)
  const y = THREE.MathUtils.randFloatSpread(300)
  const z = THREE.MathUtils.randFloatSpread(100)

  star.position.set(x, y - 25, z - 100);
  scene.add(star);
}

Array(200).fill().forEach(addStar)

const bgTexture = new THREE.TextureLoader().load('spaceBG.jpg');
scene.background = bgTexture;

//Avatar 
const avatarTexture = new THREE.TextureLoader().load('me.jpg')

const avatar = new THREE.Mesh(
  new THREE.BoxGeometry(3,3,3),
  new THREE.MeshBasicMaterial( {color: 0xFFFFFF, map: avatarTexture})
)

avatar.position.z = -5;
avatar.position.x = 2;

//Moon
const moonTexture = new THREE.TextureLoader().load('moon.jpg');

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture
  })
)
scene.add(moon)
scene.add(avatar)

moon.position.z = 30;
moon.position.setX(-10);

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;

  avatar.rotation.y += 0.01;
  avatar.rotation.z += 0.01;

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.rotation.y = t * -0.0002;
}


document.body.onscroll = moveCamera
moveCamera()

function animate(time) {
  requestAnimationFrame(animate);


  pog.rotation.x += 0.01
  pog.rotation.y += 0.005
  pog.rotation.z += 0.01

  moon.rotation.x += 0.005


  renderer.render(scene, camera);
}

animate();
