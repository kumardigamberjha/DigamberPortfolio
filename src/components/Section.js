import React from 'react'
import { Canvas } from "@react-three/fiber"

import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
import { Side, SpotLight } from 'three';

const renderer = new THREE.WebGL1Renderer()

renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

renderer.setSize(window.innerWidth, window.innerHeight)

document.body.appendChild(renderer.domElement)


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000)

const orbit = new OrbitControls(camera, renderer.domElement)

const axesHelper = new THREE.AxesHelper(5)
scene.add(axesHelper)
// camera.position.z = 5;
// camera.position.y = 2;
// camera.position.x = 1;

// For Short Form
camera.position.set(-10,50,30)
orbit.update()

const boxGeometry = new THREE.BoxGeometry()
const boxMaterial = new THREE.MeshBasicMaterial({color: 0x00ff00})
const box = new THREE.Mesh(boxGeometry, boxMaterial)
scene.add(box)

const planeGeometry = new THREE.PlaneGeometry( 30, 30)
const planeMaterial = new THREE.MeshBasicMaterial(
  { color: 0xFFFFFF,
    side: THREE.DoubleSide  
  })
const plane = new THREE.Mesh(planeGeometry, planeMaterial)
scene.add(plane)
plane.rotation.x = 0.5 * Math.PI; 
plane.receiveShadow = true;

const SphereGeometery = new THREE.SphereGeometry(4, 50, 50)
const SphereMaterial = new THREE.MeshPhongMaterial({
  color: 0xFF00FF,
  wireframe: false
})
const sphere = new THREE.Mesh(SphereGeometery, SphereMaterial)
scene.add(sphere)
sphere.position.set(-10, 15, 0)
sphere.castShadow = true;

const ambientLight = new THREE.AmbientLight( 0x333333 )
scene.add(ambientLight)

// const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.8)
// scene.add(directionalLight)
// directionalLight.position.set(-30, 50, 0)
// directionalLight.castShadow = true;

const spotLight = new THREE.SpotLight(0xFFFFFF)
scene.add(SpotLight)
spotLight.position.set(-100, 100, 0)
spotLight.castShadow = true;
// spotLight.angle = 0.2

const gridHelper = new THREE.GridHelper(30)
scene.add(gridHelper)

let step = 0
let speed = 0.02;

function animate(time){
  box.rotation.x = time/1000;
  box.rotation.y = time/1000;
  step += speed;
  sphere.position.y = 10 * Math.abs(Math.sin(step))

  renderer.render(scene, camera)
}

renderer.setAnimationLoop(animate)

const Section = () => {
  return (
    <div></div>
  )
}

export default Section