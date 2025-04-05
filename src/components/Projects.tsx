import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectsContainer = styled.div`
  padding: 120px 0;
  background-color: var(--color-background);
`;

const ProjectsGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background-color: var(--color-white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const ProjectInfo = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--color-primary);
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: var(--color-text);
  margin-bottom: 1rem;
`;

const ProjectLink = styled(Link)`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: var(--color-primary);
  color: var(--color-white);
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-primary-dark);
  }
`;

const projects = [
  {
    id: 1,
    title: 'Luxury Living Spaces',
    description: 'Experience the epitome of luxury living in our meticulously designed residential complex.',
    image: '/assets/project-1.webp'
  },
  {
    id: 2,
    title: 'Modern Interior Design',
    description: 'Contemporary living spaces with premium finishes and smart home technology.',
    image: '/assets/project-2.webp'
  },
  {
    id: 3,
    title: 'Urban Oasis',
    description: 'A perfect blend of urban convenience and natural tranquility.',
    image: '/assets/project-3.webp'
  },
  {
    id: 4,
    title: 'Premium Apartments',
    description: 'Spacious apartments with stunning views and luxurious amenities.',
    image: '/assets/project-4.webp'
  },
  {
    id: 5,
    title: 'Executive Suites',
    description: 'Sophisticated living spaces designed for the modern executive.',
    image: '/assets/project-5.webp'
  }
];

const Projects: React.FC = () => {
  return (
    <ProjectsContainer>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectInfo>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectLink to={`/project/${project.id}`}>View Details</ProjectLink>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects; 