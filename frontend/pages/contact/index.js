import React, { useEffect, useRef,useState } from 'react';
import * as THREE from 'three';
import Image from "next/image";
import emailjs from 'emailjs-com';


// framermotion

import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../../variants';


const Contact = () => {
  const containerRef = useRef(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  useEffect(() => {
    // Three.js code
    let camera;
    let scene;
    let renderer;
    let material;
    let mouseX = 0;
    let mouseY = 0;
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;

    const init = () => {
      camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 5, 2000);
      camera.position.z = 1100;

      scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x0000ff, 0.001);

      const geometry = new THREE.BufferGeometry();
      const vertices = [];
      const size = 2000;

      for (let i = 0; i < 20000; i++) {
        const x = (Math.random() * size + Math.random() * size) / 2 - size / 2;
        const y = (Math.random() * size + Math.random() * size) / 2 - size / 2;
        const z = (Math.random() * size + Math.random() * size) / 2 - size / 2;

        vertices.push(x, y, z);
      }

      geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

      material = new THREE.PointsMaterial({
        size: 2,
        color: 0xffffff,
      });

      const particles = new THREE.Points(geometry, material);
      scene.add(particles);

      renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current.appendChild(renderer.domElement);

      document.body.style.touchAction = 'none';
      document.body.addEventListener('pointermove', onPointerMove);
      window.addEventListener('resize', onWindowResize);
    };

    const onWindowResize = () => {
      windowHalfX = window.innerWidth / 4;
      windowHalfY = window.innerHeight / 4;

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const onPointerMove = (event) => {
      mouseX = event.clientX - windowHalfX;
      mouseY = event.clientY - windowHalfY;
    };

    const animate = () => {
      requestAnimationFrame(animate);
      render();
    };

    const render = () => {
      camera.position.x += (mouseX * 2 - camera.position.x) * 0.002;
      camera.position.y += (-mouseY * 2 - camera.position.y) * 0.002;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
      scene.rotation.x += 0.0001;
      scene.rotation.y += 0.0001;
    };

    // Initialize Three.js
    init();
    animate();

    // Cleanup Three.js on component unmount
    return () => {
      if (renderer) {
        renderer.dispose();
      }
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wyvebdx', 'template_tjiwauq', e.target, 'BV-7QcPe5yG3wbFeT')
      .then((result) => {
        console.log(result.text);
        setIsFormSubmitted(true)
      }, (error) => {
        console.log(error.text);
      });
  };


  return (
    <div ref={containerRef} className="w-full h-50 bg-black">
        {isFormSubmitted ? ( // Conditional rendering based on form submission status
        <div className="container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-opacity-60 bg-black p-8 rounded-2xl text-center">
          <h1 className="h1 text-white font-semibold mb-4">
            Thanks for reaching out to me, I will <span className='text-accent'>connect with you shortly</span>
          </h1>
        </div>
      ) : (
      <div id="contact-form" className="container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-opacity-60 bg-black p-8 rounded-2xl ">
        <h1 className="h1 text-center font-semibold mb-4">Reach Me to <span className='text-accent'>Hire Me.</span></h1>
        <form className='text-black flex justify-center items-center xl:gap-x-10' onSubmit={sendEmail}>
          {/* <motion.div variants={fadeIn('right', 0.3)} initial="hidden" animate="show" exit="hidden" className='h-full '>
            <Image src='https://res.cloudinary.com/dldblks5t/image/upload/v1695221254/public/contact-avatar_jiw8wa.png' height={400} width={400}  alt="avatar" className='translate-z-0 hidden xl:block rounded-3xl' />
          </motion.div> */}
          <div className='xl:w-[800px] w-full'>
            <motion.div variants={fadeIn('left', 0.3)} initial="hidden" animate="show" exit="hidden" className="mb-4">
              <label htmlFor="name" className="block font-medium text-white">Name:</label>
              <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded" required />
            </motion.div>
            <motion.div variants={fadeIn('left', 0.5)} initial="hidden" animate="show" exit="hidden" className="mb-4">
              <label htmlFor="email" className="block font-medium text-white">Email:</label>
              <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded" required />
            </motion.div>
            <motion.div variants={fadeIn('left', 0.7)} initial="hidden" animate="show" exit="hidden" className="mb-4">
              <label htmlFor="message" className="block font-medium text-white">Message:</label>
              <textarea id="message" name="message" className="w-full px-4 py-2 border rounded" rows="4" required />
            </motion.div>
            <motion.input variants={fadeIn('up', 0.1)} initial="hidden" animate="show" exit="hidden" type="submit" value="Send" className="bg-orange-300 hover:bg-accent  text-black hover:text-white htransform hover:scale-105 transition-transform duration-300 ease-in-out font-semibold py-2 px-4 rounded" />
             
          </div>
        </form>
      </div>)}
    </div >
  );
};

export default Contact;
