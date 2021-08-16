import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'

(() =>  {
    const canvas = document.getElementById('canvas')
    const scene = new THREE.Scene()

    const renderer =  new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))
    canvas.appendChild(renderer.domElement)

    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth/window.innerHeight,
        0.1,
        100
    )

    camera.position.z = 5
    scene.add(camera)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.ennableDamping = true

    const textureLoader = new THREE.TextureLoader()
    const texture = textureLoader.load('./image/t.png')

    const geometry = new THREE.BufferGeometry()
    const count = 1000
    const position = new Float32Array(count * 3)
    for(let i = 0; i < count * 3; i++) {
        position[i] = (Math.random() - 0.5) * 10
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(position, 3))

    const material = new THREE.PointsMaterial({
        size: 0.3,
        sizeAttenuation: true,
        color: new THREE.Color('#4DF1FF'),
        map: texture,
        alphaMap: texture,
        transparent: true,
        depthTest: false
    })

    const particle = new THREE.Points(geometry, material)
    scene.add(particle)

    const raf = () => {
        particle.rotation.x -= 0.001
        controls.update()
        renderer.render(scene, camera)
        window.requestAnimationFrame(raf)
    }

    raf()
})();