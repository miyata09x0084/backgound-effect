import * as THREE from 'three';

window.addEventListener('load', init);

let scene

//Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#myCanvas')
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

function init(){
    scene = new THREE.Scene();
    console.log(scene);
}
