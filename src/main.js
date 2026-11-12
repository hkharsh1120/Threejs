import './style.css'
import * as THREE from 'three' //import threejs libraries in Three
const scene = new THREE.Scene(); //create scene
//add 3d obj / mesh -> 2 parts
//1.geometry
const geometry =new THREE.BoxGeometry(1,1,1); //create box with width,height,depth
//2. material
const material =new THREE.MeshBasicMaterial({color:'red'}); //create material
const cube =new THREE.Mesh(geometry,material); //create mesh
scene.add(cube); //add mesh into scene
const cam=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,100); //add PerspectiveCamera
//75 is FOV 
//window.innerWidth & innerHeight is aspect ratio, here whole screen will covered
//0.1 is near value means if distance is less than 0.1 than object will disapper
//100 is far value means if distance is greater than 100 than object will disapper
cam.position.z=3; //set camera position
cube.position.x=2; //set cube/obj position
//cube.position.set(1,-2,1); //set all 3 obj position at once
//cube.scale.x=2; //set cube/obj size
//cube.scale.set(1,-2,1); //set all 3 obj scale at once
const canvas =document.querySelector('#ex'); //create canvas
const renderer =new THREE.WebGLRenderer({canvas:canvas}); //create renderer
renderer.setSize(window.innerWidth,window.innerHeight); //set renderer size aspect ratio
renderer.render(scene,cam)  //start renderer