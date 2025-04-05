import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FeaturesSectionContainer = styled.section`
  padding: 120px 0;
  background-color: var(--color-white);
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--color-primary);
`;

const FeaturesGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
`;

const FeatureCard = styled(motion.div)`
  text-align: center;
  padding: 2rem;
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: var(--color-primary);
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--color-primary);
`;

const FeatureDescription = styled.p`
  color: var(--color-text-light);
  line-height: 1.6;
`;

const FeaturesSection: React.FC = () => {
  return (
    <FeaturesSectionContainer>
      <SectionTitle>Why Choose Us</SectionTitle>
      <FeaturesGrid>
        <FeatureCard
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <FeatureIcon>🏗️</FeatureIcon>
          <FeatureTitle>Expert Construction</FeatureTitle>
          <FeatureDescription>
            Our team of experienced professionals ensures the highest quality in every aspect of construction.
          </FeatureDescription>
        </FeatureCard>

        <FeatureCard
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <FeatureIcon>🎨</FeatureIcon>
          <FeatureTitle>Premium Design</FeatureTitle>
          <FeatureDescription>
            We combine aesthetics with functionality to create spaces that inspire and delight.
          </FeatureDescription>
        </FeatureCard>

        <FeatureCard
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <FeatureIcon>🌿</FeatureIcon>
          <FeatureTitle>Sustainable Living</FeatureTitle>
          <FeatureDescription>
            Our projects incorporate eco-friendly features and sustainable practices.
          </FeatureDescription>
        </FeatureCard>
      </FeaturesGrid>
    </FeaturesSectionContainer>
  );
};

export default FeaturesSection; 