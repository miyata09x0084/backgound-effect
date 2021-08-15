import * as THREE from 'three';

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
        color: new THREE.Color('#FFFFFF')
    })

    const particle = new THREE.Points(geometry, material)
    scene.add(particle)

    const raf = () => {
        renderer.render(scene, camera)
        window.requestAnimationFrame(raf)
    }

    raf()
})();