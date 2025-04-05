import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StatsSectionContainer = styled.section`
  padding: 80px 0;
  background-color: var(--color-primary);
  color: var(--color-white);
`;

const StatsGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;
`;

const StatItem = styled(motion.div)`
  padding: 2rem;
`;

const StatNumber = styled.h3`
  font-size: 3rem;
  font-weight: 300;
  margin-bottom: 0.5rem;
  font-family: var(--font-secondary);
`;

const StatLabel = styled.p`
  font-size: 1.1rem;
  opacity: 0.9;
`;

const StatsSection: React.FC = () => {
  return (
    <StatsSectionContainer>
      <StatsGrid>
        <StatItem
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <StatNumber>15+</StatNumber>
          <StatLabel>Years of Excellence</StatLabel>
        </StatItem>
        <StatItem
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <StatNumber>50+</StatNumber>
          <StatLabel>Completed Projects</StatLabel>
        </StatItem>
        <StatItem
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <StatNumber>1000+</StatNumber>
          <StatLabel>Happy Residents</StatLabel>
        </StatItem>
        <StatItem
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <StatNumber>25+</StatNumber>
          <StatLabel>Awards Won</StatLabel>
        </StatItem>
      </StatsGrid>
    </StatsSectionContainer>
  );
};

export default StatsSection; 