
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Define luxury color palette
const colors = {
  gold: '#D4AF37',
  goldLight: '#F4E4BC',
  goldDark: '#B8860B',
  black: '#111111',
  white: '#FFFFFF',
  accent: '#E6B17E',
  accentDark: '#C6956C',
  accentLight: '#F4D0B5',
  overlay: 'rgba(0, 0, 0, 0.5)',
  gradient: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(230, 177, 126, 0.3))'
};

const AmenitiesContainer = styled.section`
  padding: 6rem 2rem;
  background-color: var(--color-background);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${colors.gradient};
    opacity: 0.05;
    z-index: 0;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 300;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--color-white);
  font-family: var(--font-secondary);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 2px;
    background-color: ${colors.gold};
  }
`;

const AmenitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const AmenityCard = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
    border-color: ${colors.gold};
  }
`;

const AmenityImage = styled.div.attrs<{ imageUrl: string }>(props => ({
  style: {
    backgroundImage: `url(${props.imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    height: '200px'
  }
}))<{ imageUrl: string }>`
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.7) 100%);
  }
`;

const AmenityContent = styled.div`
  padding: 1.5rem;
`;

const AmenityTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: ${colors.gold};
`;

const AmenityDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-white);
  opacity: 0.9;
`;

const AmenityIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${colors.gold};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AmenitiesSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  const amenities = [
    {
      id: 1,
      title: 'Infinity Pool',
      description: 'Swim in our stunning infinity pool with panoramic views of Islamabad. Perfect for relaxation and exercise.',
      image: '/assets/images/media/landing/apartments/pool@md.webp',
      icon: '🏊‍♂️'
    },
    {
      id: 2,
      title: 'Fitness Center',
      description: 'State-of-the-art fitness center with premium equipment, personal training, and yoga classes.',
      image: '/assets/images/media/landing/apartments/gym@md.webp',
      icon: '💪'
    },
    {
      id: 3,
      title: 'Spa & Wellness',
      description: 'Luxurious spa offering massage, sauna, steam room, and wellness treatments for complete relaxation.',
      image: '/assets/images/media/landing/apartments/spa@md.webp',
      icon: '🧘‍♀️'
    },
    {
      id: 4,
      title: 'Rooftop Garden',
      description: 'Beautifully landscaped rooftop garden with seating areas, perfect for outdoor relaxation and socializing.',
      image: '/assets/images/media/landing/apartments/garden@md.webp',
      icon: '🌿'
    },
    {
      id: 5,
      title: 'Concierge Service',
      description: '24/7 concierge service to assist with reservations, transportation, and personalized requests.',
      image: '/assets/images/media/landing/apartments/concierge@md.webp',
      icon: '🔑'
    },
    {
      id: 6,
      title: 'Underground Parking',
      description: 'Secure underground parking with valet service and electric vehicle charging stations.',
      image: '/assets/images/media/landing/apartments/parking@md.webp',
      icon: '🚗'
    },
    {
      id: 7,
      title: 'Business Center',
      description: 'Fully equipped business center with meeting rooms, high-speed internet, and office services.',
      image: '/assets/images/media/landing/apartments/business@md.webp',
      icon: '💼'
    },
    {
      id: 8,
      title: 'Children\'s Play Area',
      description: 'Safe and fun play area for children with supervision services available upon request.',
      image: '/assets/images/media/landing/apartments/playground@md.webp',
      icon: '🎮'
    },
    {
      id: 9,
      title: 'Security System',
      description: 'Advanced security system with 24/7 surveillance, access control, and emergency response.',
      image: '/assets/images/media/landing/apartments/security@md.webp',
      icon: '🔒'
    }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  
  return (
    <AmenitiesContainer>
      <SectionTitle
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        World-Class Amenities
      </SectionTitle>
      
      <AmenitiesGrid
        ref={ref}
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {amenities.map(amenity => (
          <AmenityCard
            key={amenity.id}
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
          >
            <AmenityImage imageUrl={amenity.image} />
            <AmenityContent>
              <AmenityIcon>{amenity.icon}</AmenityIcon>
              <AmenityTitle>{amenity.title}</AmenityTitle>
              <AmenityDescription>{amenity.description}</AmenityDescription>
            </AmenityContent>
          </AmenityCard>
        ))}
      </AmenitiesGrid>
    </AmenitiesContainer>
  );
};

export default AmenitiesSection; 