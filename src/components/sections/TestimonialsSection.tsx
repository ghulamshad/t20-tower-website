import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TestimonialsSectionContainer = styled.section`
  padding: 120px 0;
  background-color: var(--color-background);
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--color-primary);
`;

const TestimonialsGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const TestimonialCard = styled(motion.div)`
  background-color: var(--color-white);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;

const TestimonialText = styled.p`
  font-size: 1.1rem;
  color: var(--color-text);
  margin-bottom: 1.5rem;
  font-style: italic;
  line-height: 1.6;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AuthorImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

const AuthorInfo = styled.div``;

const AuthorName = styled.h4`
  font-size: 1.1rem;
  color: var(--color-primary);
  margin-bottom: 0.25rem;
`;

const AuthorTitle = styled.p`
  font-size: 0.9rem;
  color: var(--color-text-light);
`;

const TestimonialsSection: React.FC = () => {
  return (
    <TestimonialsSectionContainer>
      <SectionTitle>What Our Clients Say</SectionTitle>
      <TestimonialsGrid>
        <TestimonialCard
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <TestimonialText>
            "The attention to detail and quality of construction is exceptional. Living here has exceeded all our expectations."
          </TestimonialText>
          <TestimonialAuthor>
            <AuthorImage src="/assets/project-1.webp" alt="John Doe" />
            <AuthorInfo>
              <AuthorName>John Doe</AuthorName>
              <AuthorTitle>Resident</AuthorTitle>
            </AuthorInfo>
          </TestimonialAuthor>
        </TestimonialCard>

        <TestimonialCard
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <TestimonialText>
            "The modern amenities and thoughtful design make this place truly special. It's more than just a home, it's a lifestyle."
          </TestimonialText>
          <TestimonialAuthor>
            <AuthorImage src="/assets/project-2.webp" alt="Jane Smith" />
            <AuthorInfo>
              <AuthorName>Jane Smith</AuthorName>
              <AuthorTitle>Homeowner</AuthorTitle>
            </AuthorInfo>
          </TestimonialAuthor>
        </TestimonialCard>

        <TestimonialCard
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <TestimonialText>
            "The team's professionalism and commitment to excellence is evident in every aspect of the project."
          </TestimonialText>
          <TestimonialAuthor>
            <AuthorImage src="/assets/project-3.webp" alt="Mike Johnson" />
            <AuthorInfo>
              <AuthorName>Mike Johnson</AuthorName>
              <AuthorTitle>Investor</AuthorTitle>
            </AuthorInfo>
          </TestimonialAuthor>
        </TestimonialCard>
      </TestimonialsGrid>
    </TestimonialsSectionContainer>
  );
};

export default TestimonialsSection; 