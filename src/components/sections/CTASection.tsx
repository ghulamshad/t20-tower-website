import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CTASectionContainer = styled.section`
  padding: 120px 0;
  background-color: var(--color-primary);
  color: var(--color-white);
  text-align: center;
`;

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const CTATitle = styled(motion.h2)`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  font-family: var(--font-secondary);
`;

const CTAText = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

const CTAButton = styled(motion(Link))`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: var(--color-white);
  color: var(--color-primary);
  text-decoration: none;
  border-radius: 4px;
  font-size: 1.1rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--color-accent);
    color: var(--color-white);
  }
`;

const CTASection: React.FC = () => {
  return (
    <CTASectionContainer>
      <CTAContent>
        <CTATitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Ready to Find Your Dream Home?
        </CTATitle>
        <CTAText
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Join our community of satisfied residents and experience luxury living at its finest.
        </CTAText>
        <CTAButton
          to="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Contact Us Today
        </CTAButton>
      </CTAContent>
    </CTASectionContainer>
  );
};

export default CTASection; 