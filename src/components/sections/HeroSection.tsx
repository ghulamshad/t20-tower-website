import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, useScroll, useVelocity } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSectionContainer = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--color-white);
  overflow: hidden;
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7));
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 0 2rem;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 300;
  margin-bottom: 1rem;
  font-family: var(--font-secondary);
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

const CTAButton = styled(motion(Link))`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: var(--color-primary);
  color: var(--color-white);
  text-decoration: none;
  border-radius: 4px;
  font-size: 1.1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-primary-dark);
  }
`;

const HeroSection: React.FC = () => {
  const { scrollY } = useScroll();
  const [, setScrollVelocity] = useState(0);
  
  // Track scroll velocity for dynamic effects
  const velocity = useVelocity(scrollY);
  
  useEffect(() => {
    const unsubscribe = velocity.onChange(latest => {
      setScrollVelocity(latest);
    });
    
    return () => unsubscribe();
  }, [velocity]);

  return (
    <HeroSectionContainer>
      <HeroBackground>
        <HeroImage src="/assets/hero.webp" alt="Luxury Living" />
      </HeroBackground>
      <HeroContent>
        <HeroTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Luxury Living Redefined
        </HeroTitle>
        <HeroSubtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Experience the perfect blend of comfort, style, and sophistication
        </HeroSubtitle>
        <CTAButton
          to="/projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Explore Our Projects
        </CTAButton>
      </HeroContent>
    </HeroSectionContainer>
  );
};

export default HeroSection; 