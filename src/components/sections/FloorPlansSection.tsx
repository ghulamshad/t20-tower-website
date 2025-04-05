import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Define luxury color palette
const colors = {
  gold: '#D4AF37',
  goldLight: '#E5C76B',
  goldDark: '#B38F28',
  black: '#1A1A1A',
  white: '#FFFFFF',
  gray: '#F5F5F5',
  darkGray: '#333333',
  accent: '#8B7355',
};

const SectionContainer = styled.section`
  padding: 6rem 2rem;
  background-color: ${colors.white};
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 300;
  text-align: center;
  margin-bottom: 3rem;
  color: ${colors.black};
  font-family: var(--font-secondary);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const FloorPlansGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const FloorPlanCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 480px) {
    &:hover {
      transform: translateY(-5px);
    }
  }
`;

const FloorPlanImage = styled.div<{ imageUrl: string }>`
  height: 200px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  position: relative;
  
  @media (max-width: 480px) {
    height: 180px;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%);
  }
`;

const FloorPlanContent = styled.div`
  padding: 1.5rem;
`;

const FloorPlanTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${colors.black};
  font-weight: 500;
`;

const FloorPlanDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const DetailItem = styled.div`
  text-align: center;
`;

const DetailLabel = styled.div`
  font-size: 0.8rem;
  color: ${colors.darkGray};
  margin-bottom: 0.25rem;
`;

const DetailValue = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${colors.black};
`;

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 2rem;
  
  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const ModalContent = styled(motion.div)`
  background-color: ${colors.white};
  border-radius: 8px;
  max-width: 90%;
  max-height: 90vh;
  overflow: auto;
  position: relative;
  
  @media (max-width: 480px) {
    max-width: 95%;
    max-height: 95vh;
  }
`;

const ModalImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: ${colors.black};
  color: ${colors.white};
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.5rem;
  z-index: 10;
  
  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
    font-size: 1.2rem;
    top: 0.5rem;
    right: 0.5rem;
  }
  
  &:hover {
    background: ${colors.darkGray};
  }
`;

const FloorPlansSection: React.FC = () => {
  const [selectedFloorPlan, setSelectedFloorPlan] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const floorPlans = [
    {
      id: 1,
      title: 'Studio Apartment',
      imageUrl: '/assets/images/media/landing/apartments/studio-floorplan@md.webp',
      area: '500 sq ft',
      bedrooms: 'Studio',
      bathrooms: '1',
      price: 'Starting at $1,200/month',
    },
    {
      id: 2,
      title: 'One Bedroom',
      imageUrl: '/assets/images/media/landing/apartments/1bed-floorplan@md.webp',
      area: '750 sq ft',
      bedrooms: '1',
      bathrooms: '1',
      price: 'Starting at $1,800/month',
    },
    {
      id: 3,
      title: 'Two Bedroom',
      imageUrl: '/assets/images/media/landing/apartments/2bed-floorplan@md.webp',
      area: '1,000 sq ft',
      bedrooms: '2',
      bathrooms: '2',
      price: 'Starting at $2,500/month',
    },
    {
      id: 4,
      title: 'Three Bedroom',
      imageUrl: '/assets/images/media/landing/apartments/3bed-floorplan@md.webp',
      area: '1,500 sq ft',
      bedrooms: '3',
      bathrooms: '2',
      price: 'Starting at $3,200/month',
    },
    {
      id: 5,
      title: 'Penthouse',
      imageUrl: '/assets/images/media/landing/apartments/penthouse-floorplan@md.webp',
      area: '2,500 sq ft',
      bedrooms: '4',
      bathrooms: '3.5',
      price: 'Starting at $5,500/month',
    },
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
      },
    },
  };
  
  return (
    <SectionContainer ref={ref}>
      <SectionTitle>Floor Plans</SectionTitle>
      
      <FloorPlansGrid
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {floorPlans.map((plan) => (
          <FloorPlanCard
            key={plan.id}
            variants={itemVariants}
            onClick={() => setSelectedFloorPlan(plan.id)}
          >
            <FloorPlanImage imageUrl={plan.imageUrl} />
            <FloorPlanContent>
              <FloorPlanTitle>{plan.title}</FloorPlanTitle>
              <FloorPlanDetails>
                <DetailItem>
                  <DetailLabel>Area</DetailLabel>
                  <DetailValue>{plan.area}</DetailValue>
                </DetailItem>
                <DetailItem>
                  <DetailLabel>Bedrooms</DetailLabel>
                  <DetailValue>{plan.bedrooms}</DetailValue>
                </DetailItem>
                <DetailItem>
                  <DetailLabel>Bathrooms</DetailLabel>
                  <DetailValue>{plan.bathrooms}</DetailValue>
                </DetailItem>
              </FloorPlanDetails>
              <DetailValue style={{ marginTop: '1rem', color: colors.gold }}>
                {plan.price}
              </DetailValue>
            </FloorPlanContent>
          </FloorPlanCard>
        ))}
      </FloorPlansGrid>
      
      {selectedFloorPlan && (
        <Modal
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={modalVariants}
          onClick={() => setSelectedFloorPlan(null)}
        >
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setSelectedFloorPlan(null)}>×</CloseButton>
            <ModalImage 
              src={floorPlans.find(plan => plan.id === selectedFloorPlan)?.imageUrl} 
              alt={floorPlans.find(plan => plan.id === selectedFloorPlan)?.title}
            />
          </ModalContent>
        </Modal>
      )}
    </SectionContainer>
  );
};

export default FloorPlansSection; 