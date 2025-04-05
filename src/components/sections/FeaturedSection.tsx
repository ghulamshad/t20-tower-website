import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FeaturedSectionContainer = styled.section`
  padding: 120px 0;
  background-color: var(--color-background);
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--color-primary);
`;

const FeaturedGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const FeaturedCard = styled(motion.div)`
  background-color: var(--color-white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;

const FeaturedImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const FeaturedContent = styled.div`
  padding: 1.5rem;
`;

const FeaturedTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--color-primary);
`;

const FeaturedDescription = styled.p`
  color: var(--color-text-light);
  margin-bottom: 1rem;
`;

const CTAButton = styled(motion(Link))`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: var(--color-primary);
  color: var(--color-white);
  text-decoration: none;
  border-radius: 4px;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-primary-dark);
  }
`;

const FeaturedSection: React.FC = () => {
  return (
    <FeaturedSectionContainer>
      <SectionTitle>Featured Projects</SectionTitle>
      <FeaturedGrid>
        <FeaturedCard
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <FeaturedImage src="/assets/project-1.webp" alt="Luxury Living Spaces" />
          <FeaturedContent>
            <FeaturedTitle>Luxury Living Spaces</FeaturedTitle>
            <FeaturedDescription>
              Experience the epitome of luxury living in our meticulously designed residential complex.
            </FeaturedDescription>
            <CTAButton to="/project/1">View Details</CTAButton>
          </FeaturedContent>
        </FeaturedCard>

        <FeaturedCard
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <FeaturedImage src="/assets/project-2.webp" alt="Modern Interior Design" />
          <FeaturedContent>
            <FeaturedTitle>Modern Interior Design</FeaturedTitle>
            <FeaturedDescription>
              Contemporary living spaces with premium finishes and smart home technology.
            </FeaturedDescription>
            <CTAButton to="/project/2">View Details</CTAButton>
          </FeaturedContent>
        </FeaturedCard>

        <FeaturedCard
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <FeaturedImage src="/assets/project-3.webp" alt="Urban Oasis" />
          <FeaturedContent>
            <FeaturedTitle>Urban Oasis</FeaturedTitle>
            <FeaturedDescription>
              A perfect blend of urban convenience and natural tranquility.
            </FeaturedDescription>
            <CTAButton to="/project/3">View Details</CTAButton>
          </FeaturedContent>
        </FeaturedCard>
      </FeaturedGrid>
    </FeaturedSectionContainer>
  );
};

export default FeaturedSection; 