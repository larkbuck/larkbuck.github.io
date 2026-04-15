// Basic Three.JS scene from documentation, importing Three.JS through a CDN 
// https://threejs.org/docs/#manual/en/introduction/Creating-a-scene


//~~~~~~~Import Three.js (also linked to as an import map in the HTML)~~~~~~
import * as THREE from 'three';


// Import add-ons
import { OrbitControls } from 'https://unpkg.com/three@0.162.0/examples/jsm/controls/OrbitControls.js';
// import { GLTFLoader } from 'https://unpkg.com/three@0.162.0/examples/jsm/loaders/GLTFLoader.js'; // to load 3d models
import { GUI } from 'https://unpkg.com/dat.gui@0.7.9/build/dat.gui.module.js';
import Stats from 'three/addons/libs/stats.module.js'
// import Stats from 'https://unpkg.com/three@0.162.0/examples/jsm/libs/stats.module.js'




// ~~~~~~~~~~~~~~~~ Declare Global Variables~~~~~~~~~~~~~~~~
let scene, camera, renderer, stats, gui, octahedron, torus, tube;
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



    // ~~~~~~ Add Stats and dat.GUI ~~~~~~

    stats = Stats();
    // document.body.appendChild(stats.dom); // add stats panel

    gui = new GUI();
    gui.hide(); // to hide GUI - you could toggle it on and off with gui.show() 
    // folders defined where variables are declared below 




    // ~~~~~~ Add lights ~~~~~~

    // ~~ add directional light to the right
    const lightRight = new THREE.DirectionalLight(0xffffff, 4);
    lightRight.position.set(3, 4, 5);
    scene.add(lightRight);

    // Add helper to debug the light's position - COMMENT OUT WHEN DONE placing the light! 
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

    // const helperBottom = new THREE.DirectionalLightHelper(lightBottom, 5);
    // scene.add(helperBottom);



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


    octahedron.position.y = -6;

    // octahedron GUI
    const octahedronFolder = gui.addFolder('Octahedron');
    octahedronFolder.add(octahedron.position, 'x', -10, 0).name('x pos');
    octahedronFolder.add(octahedron.position, 'y', -10, 0).name('y pos');
    octahedronFolder.add(octahedron.position, 'z', -10, 0).name('z pos');
    octahedronFolder.open();



    // Torus knot
    const geometryTorus = new THREE.TorusKnotGeometry(5, .8, 100, 64);

    const materialTorus = new THREE.MeshPhongMaterial({
        color: 0xFF33A5,
        wireframe: false,
        shininess: 150,
        specular: 0xffffff
    });

    // // To instead add texture to material
    // const textureTorus = new THREE.TextureLoader().load('assets/textures/pattern_03_800.png');
    // const materialTorus = new THREE.MeshBasicMaterial({ map: textureTorus });

    torus = new THREE.Mesh(geometryTorus, materialTorus);
    scene.add(torus);

    torus.scale.set(2, 2, 2); // to change scale
    // // torus.position.x = 2; // to change position


    // torus GUI
    const torusFolder = gui.addFolder('Torus');
    torusFolder.add(torus.rotation, 'x', 0, Math.PI * 2).name('x rot');
    torusFolder.add(torus.rotation, 'y', 0, Math.PI * 2).name('y rot');
    torusFolder.add(torus.rotation, 'z', 0, Math.PI * 2).name('z rot');
    torusFolder.add(torus.position, 'z', -10, 10).name('z pos');
    // torusFolder.open();



    // Tube

    class CustomSinCurve extends THREE.Curve {

        constructor(scale = 1) {
            super();
            this.scale = scale;
        }

        getPoint(t, optionalTarget = new THREE.Vector3()) {

            const tx = t * 3 - 1.5;
            const ty = Math.sin(2 * Math.PI * t);
            const tz = 0;

            return optionalTarget.set(tx, ty, tz).multiplyScalar(this.scale);
        }
    }

    const path = new CustomSinCurve(10);
    const geometry = new THREE.TubeGeometry(path, 20, 2, 8, false);
    const material = new THREE.MeshPhongMaterial({
        color: 0x1c81d4,
        wireframe: false,
        shininess: 150,
        specular: 0xffffff
    });

    // // To instead add texture to material
    // const texture = new THREE.TextureLoader().load('../../assets/textures/pattern_03_800.png');

    // const material = new THREE.MeshBasicMaterial({ map: texture });



    tube = new THREE.Mesh(geometry, material);
    scene.add(tube);

    tube.scale.set(.2, .2, .2)



    // ~~~~~~Position Camera~~~~~~
    camera.position.z = 4;

    // camera GUI
    const cameraFolder = gui.addFolder('Camera')
    cameraFolder.add(camera.position, 'z', 0, 20);
    cameraFolder.open();

    // camera.updateWorldMatrix();

}



// ~~~~~~~~~~~~~~~~ Animation Loop ~~~~~~~~~~~~~~~~
// (similar to draw loop in p5.js, updates every frame)

function animate() {

    // Limit framerate to 30fps by moving animation frame to a timeout function 
    // But only if the user is NOT on mobile (this causes stuttering on phones)
    // if (!navigator.userAgent.match(/Mobi/i) &&
    //     !navigator.userAgent.match(/Android/i) &&
    //     !navigator.userAgent.match(/iPhone/i)
    // ) {
    //     // console.log("browser")
    //     // Device is a browser - limit framerate
    //     setTimeout(function () {

    //         requestAnimationFrame(animate);

    //     }, 1000 / 30);
    // }

    // scroll camera animation
    const scrollY = window.scrollY;
    camera.position.y = - scrollY * .001; // note this overrides changes in dat.gui


    // →→→→→→ add your animation here ↓↓↓↓

    octahedron.rotation.x += 0.01;
    octahedron.rotation.y += 0.01;

    torus.rotation.x += 0.0005;
    torus.rotation.y += 0.0005;

    tube.rotation.x -= 0.0005;
    tube.rotation.y -= 0.0005;





    // always end animation loop with renderer
    renderer.render(scene, camera);

    stats.update()
}

function onWindowResize() {
    camera.aspect = sceneContainer.clientWidth / sceneContainer.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(sceneContainer.clientWidth, sceneContainer.clientHeight);

}

window.addEventListener('resize', onWindowResize, false);

init(); // execute initialize function
animate(); // execute animation function



