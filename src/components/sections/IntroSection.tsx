import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const IntroSectionContainer = styled.section`
  position: relative;
  height: 100vh;
  min-height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: var(--color-background);
`;

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const Content = styled(motion.div)`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
  color: var(--color-white);
`;

const BackgroundImage = styled.picture`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  will-change: transform;
`;

const Title = styled(motion.h1)`
  font-size: 5rem;
  font-weight: 300;
  margin-bottom: 1rem;
  font-family: var(--font-secondary);
  line-height: 1.2;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const TextUpper = styled.span`
  display: block;
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: var(--color-accent);
`;

const TextBottom = styled.span`
  display: block;
  font-size: 3rem;
  margin-bottom: 0.5rem;
`;

const TextTower = styled.span`
  display: block;
  font-size: 6rem;
  font-weight: 200;
  color: var(--color-accent);
`;

const Description = styled(motion.p)`
  font-size: 1.5rem;
  margin-top: 2rem;
  line-height: 1.4;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
`;

const ScrollButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--color-accent);
  color: var(--color-white);
  margin-top: 3rem;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(230, 177, 126, 0.3);

  &:hover {
    background-color: var(--color-primary);
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(230, 177, 126, 0.4);
  }
`;

const MapButton = styled(motion.a)`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  align-items: center;
  background-color: var(--color-white);
  color: var(--color-background);
  padding: 1rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  z-index: 2;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: var(--color-accent);
    color: var(--color-white);
    box-shadow: 0 8px 20px rgba(230, 177, 126, 0.3);
  }
`;

const MapIcon = styled.span`
  margin-right: 0.5rem;
  font-size: 1.2rem;
`;

const ParallaxOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.1) 50%,
    rgba(0, 0, 0, 0.3) 100%
  );
  z-index: 1;
`;

const IntroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !sectionRef.current) return;

    // Setup Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Create particles with more complex geometry
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 8000; // Increased particle count
    const posArray = new Float32Array(particlesCount * 3);
    const colorsArray = new Float32Array(particlesCount * 3);
    
    // Create a more interesting particle distribution
    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Position
      const radius = Math.random() * 5 + 2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      posArray[i] = radius * Math.sin(phi) * Math.cos(theta);
      posArray[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      posArray[i + 2] = radius * Math.cos(phi);
      
      // Colors - gradient from accent to white
      const color = new THREE.Color();
      color.setHSL(Math.random() * 0.1 + 0.05, 0.7, 0.5 + Math.random() * 0.5);
      
      colorsArray[i] = color.r;
      colorsArray[i + 1] = color.g;
      colorsArray[i + 2] = color.b;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3));

    // Custom shader material for more interesting particles
    const particlesMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        size: { value: 0.01 },
      },
      vertexShader: `
        attribute vec3 color;
        varying vec3 vColor;
        uniform float time;
        uniform float size;
        
        void main() {
          vColor = color;
          vec3 pos = position;
          pos.x += sin(time * 0.5 + position.y * 0.5) * 0.1;
          pos.y += cos(time * 0.3 + position.x * 0.3) * 0.1;
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          float alpha = 1.0 - (dist * 2.0);
          gl_FragColor = vec4(vColor, alpha);
        }
      `,
      transparent: true,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Scroll-based effect on rotation and position
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1.5,
      onUpdate: (self) => {
        const progress = self.progress;
        const rotationSpeed = progress * 0.002;
        
        // Rotate particles based on scroll
        particlesMesh.rotation.x += rotationSpeed;
        particlesMesh.rotation.y += rotationSpeed;
        
        // Move particles based on scroll
        particlesMesh.position.y = progress * -2;
        
        // Scale particles based on scroll
        const scale = 1 + progress * 0.2;
        particlesMesh.scale.set(scale, scale, scale);
      },
    });

    // Image parallax and scale effect
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        {
          scaleX: .4,
          scaleY: 0.6,
          y: 200,
          opacity: 0,
          transformOrigin: 'center bottom',
        },
        {
          scaleX: 1,
          scaleY: 1,
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'top top',
            scrub: 1.5,
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }

    // Parallax overlay effect
    if (parallaxRef.current) {
      gsap.to(parallaxRef.current, {
        opacity: 0.7,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }

    // Content parallax effect
    if (contentRef.current) {
      gsap.to(contentRef.current, {
        y: -100,
        opacity: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
      });
    }

    // Canvas fade and scale based on scroll
    gsap.fromTo(
      canvasRef.current,
      {
        opacity: 0,
        scale: 1.05,
      },
      {
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'top top',
          scrub: 1.5,
        },
      }
    );

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Handle mouse move rotation with velocity
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let velocityX = 0;
    let velocityY = 0;
    
    const handleMouseMove = (event: MouseEvent) => {
      targetX = (event.clientX / window.innerWidth) * 2 - 1;
      targetY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Smooth mouse tracking with velocity
      velocityX += (targetX - mouseX) * 0.05;
      velocityY += (targetY - mouseY) * 0.05;
      
      velocityX *= 0.95;
      velocityY *= 0.95;
      
      mouseX += velocityX;
      mouseY += velocityY;
      
      // Apply rotation based on mouse position
      particlesMesh.rotation.x += mouseY * 0.01;
      particlesMesh.rotation.y += mouseX * 0.01;
      
      // Update shader time uniform
      particlesMaterial.uniforms.time.value += 0.01;
      
      renderer.render(scene, camera);
    };
    
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <IntroSectionContainer ref={sectionRef}>
      <BackgroundImage>
        <Image
          ref={imageRef}
          src="https://era.estate/assets/images/media/landing/intro/image-1@xxxl.jpg"
          alt="Intro background"
        />
      </BackgroundImage>
      
      <ParallaxOverlay ref={parallaxRef} />
      <Canvas ref={canvasRef} />
      
      <Content ref={contentRef}>
        <Title
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <TextUpper>welcome to</TextUpper>
          <TextBottom>the</TextBottom>
          <TextTower>T20</TextTower>
        </Title>
        
        <Description
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          Where luxury meets innovation in the heart of the city
        </Description>
        
        <ScrollButton
          href="#featured"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          ↓
        </ScrollButton>
      </Content>
      
      <MapButton
        href="/3d-map"
        target="_blank"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.8 }}
        whileHover={{ x: -5 }}
      >
        <MapIcon>🗺️</MapIcon>
        Explore T20
      </MapButton>
    </IntroSectionContainer>
  );
};

export default IntroSection;
