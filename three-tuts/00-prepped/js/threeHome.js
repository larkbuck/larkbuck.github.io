// Basic Three.JS scene from documentation, importing Three.JS through a CDN 
// https://threejs.org/docs/#manual/en/introduction/Creating-a-scene

console.log("hello")

//~~~~~~~Import Three.js (also linked to as an import map in the HTML)~~~~~~
import * as THREE from 'three';


// Import add-ons
import { OrbitControls } from 'https://unpkg.com/three@0.162.0/examples/jsm/controls/OrbitControls.js';
// import { GLTFLoader } from 'https://unpkg.com/three@0.162.0/examples/jsm/loaders/GLTFLoader.js'; // to load 3d models



// ~~~~~~~~~~~~~~~~ Declare Global Variables~~~~~~~~~~~~~~~~
let scene, camera, renderer, octahedron, torus;
let sceneContainer = document.querySelector("#three-container"); // variable for scene-container div


// ~~~~~~~~~~~~~~~~ Initialize Scene in init() ~~~~~~~~~~~~~~~~
function init() {

    // ~~~~~~Set up scene, camera, + renderer ~~~~~~

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, sceneContainer.clientWidth / sceneContainer.clientHeight, 0.1, 1000);

    renderer = new THREE.WebGLRenderer({ antialias: true }, { alpha: true }); // enable alpha to make background transparent
    renderer.setSize(sceneContainer.clientWidth, sceneContainer.clientHeight);
    renderer.setClearColor(0x000000, 0); // make background clear
    sceneContainer.appendChild(renderer.domElement);


    // ~~~~~~ Add lights ~~~~~~

    // ~~ add directional light to the right
    const lightRight = new THREE.DirectionalLight(0xffffff, 4);
    lightRight.position.set(3, 4, 5);
    scene.add(lightRight);

    // Add helper to debug the light's position - COMMENT OUT WHEN DONE placing the light! https://threejs.org/docs/#api/en/helpers/DirectionalLightHelper
    // const helperRight = new THREE.DirectionalLightHelper(lightRight, 5);
    // scene.add(helperRight);


    // ~~ add directional light to the left
    const lightLeft = new THREE.DirectionalLight(0xffff00, 4);
    lightLeft.position.set(-3, 2, 3);
    scene.add(lightLeft);

    // const helperLeft = new THREE.DirectionalLightHelper(lightLeft, 5);
    // scene.add(helperLeft);

    // ~~ add directional light to the bottom
    const lightBottom = new THREE.DirectionalLight(0xffffff, 2);
    lightBottom.position.set(0, -4, -2);
    scene.add(lightBottom);

    const helperBottom = new THREE.DirectionalLightHelper(lightBottom, 5);
    scene.add(helperBottom);



    // ~~~~~~ Initiate add-ons ~~~~~~

    const controls = new OrbitControls(camera, renderer.domElement);
    // const loader = new GLTFLoader(); // to load 3d models



    // ~~~~~~ Create Geometry ~~~~~~


    // Octahedron
    const radius = .5;
    const geometryOcta = new THREE.OctahedronGeometry(radius, 0);

    let materialOcta = new THREE.MeshPhongMaterial({
        color: 0x1c81d4,
        wireframe: false,
        shininess: 150,
        specular: 0xffffff
    });

    octahedron = new THREE.Mesh(geometryOcta, materialOcta);
    scene.add(octahedron);



    // Torus knot
    const geometryTorus = new THREE.TorusKnotGeometry(5, 1, 100, 16);

    const materialTorus = new THREE.MeshPhongMaterial({
        color: 0x00ff00,
        wireframe: false,
        shininess: 150,
        specular: 0xffffff
    });

    // // Alternatively, you can add texture to material
    // const textureTorus = new THREE.TextureLoader().load('assets/textures/pattern_03_800.png');
    // const materialTorus = new THREE.MeshBasicMaterial({ map: textureTorus });

    torus = new THREE.Mesh(geometryTorus, materialTorus);
    scene.add(torus);

    torus.scale.set(.5, .5, .5); // to change scale
    // // torus.position.x = 2; // to change position


    // ~~~~~~Position Camera~~~~~~
    camera.position.z = 4;


}



// ~~~~~~~~~~~~~~~~ Animation Loop ~~~~~~~~~~~~~~~~
// (similar to draw loop in p5.js, updates every frame)

function animate() {
    requestAnimationFrame(animate); // start loop by with frame update

    // →→→→→→ add your animation here ↓↓↓↓

    octahedron.rotation.x += 0.01;
    octahedron.rotation.y += 0.01;

    torus.rotation.x += 0.001;
    torus.rotation.y += 0.001;

    // always end animation loop with renderer
    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = sceneContainer.clientWidth / sceneContainer.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(sceneContainer.clientWidth, sceneContainer.clientHeight);

}

window.addEventListener('resize', onWindowResize, false);

init(); // execute initialize function
animate(); // execute animation function
