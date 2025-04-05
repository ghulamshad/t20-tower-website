import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ThreeJSContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const ContentOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  color: var(--color-white);
  text-align: center;
  padding: 0 2rem;
  background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6));
`;

const Title = styled(motion.h1)`
  font-size: 4.5rem;
  font-weight: 300;
  margin-bottom: 1rem;
  font-family: var(--font-secondary);
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  max-width: 600px;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CTAButton = styled(motion(Link))`
  display: inline-block;
  padding: 1rem 2.5rem;
  background-color: var(--color-primary);
  color: var(--color-white);
  text-decoration: none;
  border-radius: 4px;
  font-size: 1.1rem;
  transition: background-color 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: var(--color-primary-dark);
  }
`;

const ThreeJSHeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 3;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current,
      antialias: true,
      alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    
    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);
    
    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 1, 1);
    scene.add(directionalLight);
    
    // Load texture
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('https://era.estate/assets/images/media/landing/art-deco/image-1@xxxl.webp');
    
    // Create geometry
    const geometry = new THREE.PlaneGeometry(6, 3.4);
    
    // Create material with the texture
    const material = new THREE.MeshStandardMaterial({
      map: texture,
      side: THREE.DoubleSide,
      emissive: 0xffffff,
      emissiveIntensity: 0.2
    });
    
    // Create mesh
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    
    // Animation variables
    let time = 0;
    const clock = new THREE.Clock();
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation loop
    const animate = () => {
      time = clock.getElapsedTime();
      
      // Animate the mesh
      mesh.rotation.y = Math.sin(time * 0.3) * 0.2;
      mesh.rotation.x = Math.sin(time * 0.2) * 0.1;
      
      // Render the scene
      renderer.render(scene, camera);
      
      // Request next frame
      requestAnimationFrame(animate);
    };
    
    // Start animation
    animate();
    
    // Set loaded state
    setIsLoaded(true);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      scene.remove(mesh);
      geometry.dispose();
      material.dispose();
      texture.dispose();
      renderer.dispose();
    };
  }, []);
  
  return (
    <ThreeJSContainer>
      <Canvas ref={canvasRef} />
      <ContentOverlay>
        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Art Deco Elegance
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Discover timeless luxury with our Art Deco inspired residences
        </Subtitle>
        <CTAButton
          to="/projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Explore Residences
        </CTAButton>
      </ContentOverlay>
    </ThreeJSContainer>
  );
};

export default ThreeJSHeroSection; 