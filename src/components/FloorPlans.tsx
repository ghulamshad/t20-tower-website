import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import FloorPlansSection from './sections/FloorPlansSection';

const FloorPlansContainer = styled.div`
  min-height: 100vh;
  background-color: var(--color-background);
  padding-top: 80px; /* Space for fixed navbar */
`;

const PageHeader = styled(motion.div)`
  height: 50vh;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
              url('/assets/images/media/landing/apartments/floorplans-header@md.webp');
  background-size: cover;
  background-position: center;
  color: var(--color-white);
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.6) 100%);
    z-index: 1;
  }
`;

const HeaderContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 0 2rem;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 300;
  margin-bottom: 1.5rem;
  font-family: var(--font-secondary);
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  max-width: 600px;
  margin: 0 auto;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const FloorPlans: React.FC = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <FloorPlansContainer>
      <PageHeader
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <HeaderContent>
          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Floor Plans
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Discover the perfect living space with our thoughtfully designed floor plans
          </Subtitle>
        </HeaderContent>
      </PageHeader>
      
      <FloorPlansSection />
    </FloorPlansContainer>
  );
};

export default FloorPlans; 