import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectDetailsContainer = styled.div`
  padding: 120px 0;
  background-color: var(--color-background);
`;

const ProjectHeader = styled.div`
  position: relative;
  height: 60vh;
  min-height: 500px;
  overflow: hidden;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7));
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--color-white);
`;

const ProjectTitle = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 300;
  margin-bottom: 1rem;
  font-family: var(--font-primary);
`;

const ProjectContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const ProjectInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 4rem 0;
`;

const InfoCard = styled(motion.div)`
  background-color: var(--color-white);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;

const InfoTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--color-primary);
`;

const InfoText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--color-text);
`;

const ProjectGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 4rem 0;
`;

const GalleryImage = styled(motion.img)`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectDetails: React.FC = () => {
  return (
    <ProjectDetailsContainer>
      <ProjectHeader>
        <ProjectImage src="/assets/project-1.webp" alt="Project Details" />
        <ProjectOverlay>
          <ProjectTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Luxury Living Spaces
          </ProjectTitle>
        </ProjectOverlay>
      </ProjectHeader>

      <ProjectContent>
        <ProjectInfo>
          <InfoCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <InfoTitle>Project Overview</InfoTitle>
            <InfoText>
              Experience the epitome of luxury living in our meticulously designed
              residential complex. Each space is crafted with attention to detail
              and premium materials.
            </InfoText>
          </InfoCard>

          <InfoCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <InfoTitle>Features</InfoTitle>
            <InfoText>
              • Premium finishes and materials
              • Smart home technology
              • Private balconies
              • High-end appliances
              • Custom storage solutions
            </InfoText>
          </InfoCard>

          <InfoCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <InfoTitle>Amenities</InfoTitle>
            <InfoText>
              • 24/7 concierge service
              • Fitness center
              • Rooftop terrace
              • Underground parking
              • Electric vehicle charging
            </InfoText>
          </InfoCard>
        </ProjectInfo>

        <ProjectGallery>
          <GalleryImage
            src="/assets/project-2.webp"
            alt="Interior Design"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <GalleryImage
            src="/assets/project-3.webp"
            alt="Living Space"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <GalleryImage
            src="/assets/project-4.webp"
            alt="Kitchen"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
          <GalleryImage
            src="/assets/project-5.webp"
            alt="Bedroom"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          />
        </ProjectGallery>
      </ProjectContent>
    </ProjectDetailsContainer>
  );
};

export default ProjectDetails; 