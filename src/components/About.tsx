import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled.div`
  min-height: 100vh;
`;

const HeroSection = styled.section`
  position: relative;
  height: 60vh;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--color-white);
  overflow: hidden;
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7));
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 300;
  margin-bottom: 1rem;
  font-family: var(--font-secondary);
`;

const ContentSection = styled.section`
  padding: 120px 0;
  background-color: var(--color-background);
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--color-primary);
`;

const SectionText = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--color-text);
  margin-bottom: 2rem;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const ValueCard = styled(motion.div)`
  background-color: var(--color-white);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;

const ValueTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--color-primary);
`;

const ValueDescription = styled.p`
  color: var(--color-text-light);
  line-height: 1.6;
`;

const TeamSection = styled.section`
  padding: 120px 0;
  background-color: var(--color-white);
`;

const TeamGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
`;

const TeamMember = styled(motion.div)`
  text-align: center;
`;

const MemberImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;

const MemberName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--color-primary);
`;

const MemberTitle = styled.p`
  font-size: 1rem;
  color: var(--color-text-light);
  margin-bottom: 1rem;
`;

const MemberBio = styled.p`
  color: var(--color-text);
  line-height: 1.6;
`;

const TimelineSection = styled.section`
  padding: 120px 0;
  background-color: var(--color-background);
`;

const Timeline = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background-color: var(--color-primary);
  }
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  justify-content: ${props => props.align === 'right' ? 'flex-end' : 'flex-start'};
  margin-bottom: 3rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: var(--color-primary);
  }
`;

const TimelineContent = styled.div`
  width: 45%;
  padding: 2rem;
  background-color: var(--color-white);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;

const TimelineYear = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--color-primary);
`;

const TimelineText = styled.p`
  color: var(--color-text);
  line-height: 1.6;
`;

const PartnersSection = styled.section`
  padding: 120px 0;
  background-color: var(--color-white);
`;

const PartnersGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 3rem;
  align-items: center;
`;

const PartnerLogo = styled(motion.img)`
  max-width: 100%;
  height: auto;
  filter: grayscale(100%);
  opacity: 0.7;
  transition: all 0.3s ease;

  &:hover {
    filter: grayscale(0%);
    opacity: 1;
  }
`;

const About: React.FC = () => {
  return (
    <AboutContainer>
      <HeroSection>
        <HeroBackground>
          <HeroImage src="/assets/about-hero.webp" alt="About Us" />
        </HeroBackground>
        <HeroTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Us
        </HeroTitle>
      </HeroSection>

      <ContentSection>
        <ContentContainer>
          <SectionTitle>Our Story</SectionTitle>
          <SectionText
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Founded with a vision to redefine luxury living, we have been at the forefront
            of creating exceptional residential spaces that combine architectural excellence
            with modern comfort. Our commitment to quality and attention to detail has
            earned us a reputation as a trusted name in premium real estate development.
          </SectionText>
          <SectionText
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            With over two decades of experience, we have successfully delivered numerous
            landmark projects that have transformed the urban landscape. Our team of
            experts brings together diverse expertise in architecture, design, and
            construction to create spaces that inspire and elevate the way people live.
          </SectionText>

          <ValuesGrid>
            <ValueCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <ValueTitle>Excellence</ValueTitle>
              <ValueDescription>
                We strive for excellence in every aspect of our projects, from design
                to construction and customer service.
              </ValueDescription>
            </ValueCard>

            <ValueCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <ValueTitle>Innovation</ValueTitle>
              <ValueDescription>
                We embrace innovative solutions and technologies to create sustainable
                and efficient living spaces.
              </ValueDescription>
            </ValueCard>

            <ValueCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <ValueTitle>Integrity</ValueTitle>
              <ValueDescription>
                We conduct our business with the highest standards of integrity and
                transparency.
              </ValueDescription>
            </ValueCard>
          </ValuesGrid>
        </ContentContainer>
      </ContentSection>

      <TeamSection>
        <ContentContainer>
          <SectionTitle>Our Team</SectionTitle>
          <TeamGrid>
            <TeamMember
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <MemberImage src="/assets/project-1.webp" alt="John Smith" />
              <MemberName>John Smith</MemberName>
              <MemberTitle>CEO & Founder</MemberTitle>
              <MemberBio>
                With over 20 years of experience in real estate development, John leads
                our team with vision and expertise.
              </MemberBio>
            </TeamMember>

            <TeamMember
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <MemberImage src="/assets/project-2.webp" alt="Sarah Johnson" />
              <MemberName>Sarah Johnson</MemberName>
              <MemberTitle>Head of Design</MemberTitle>
              <MemberBio>
                Sarah brings creativity and innovation to every project, ensuring our
                designs are both beautiful and functional.
              </MemberBio>
            </TeamMember>

            <TeamMember
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <MemberImage src="/assets/project-3.webp" alt="Michael Brown" />
              <MemberName>Michael Brown</MemberName>
              <MemberTitle>Construction Manager</MemberTitle>
              <MemberBio>
                Michael oversees all construction activities, ensuring the highest
                quality standards are maintained.
              </MemberBio>
            </TeamMember>
          </TeamGrid>
        </ContentContainer>
      </TeamSection>

      <TimelineSection>
        <ContentContainer>
          <SectionTitle>Our Journey</SectionTitle>
          <Timeline>
            <TimelineItem
              align="left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <TimelineContent>
                <TimelineYear>2000</TimelineYear>
                <TimelineText>
                  Founded with a vision to redefine luxury living in urban spaces.
                </TimelineText>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem
              align="right"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <TimelineContent>
                <TimelineYear>2005</TimelineYear>
                <TimelineText>
                  Completed our first major residential complex, setting new standards
                  for luxury living.
                </TimelineText>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem
              align="left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <TimelineContent>
                <TimelineYear>2010</TimelineYear>
                <TimelineText>
                  Expanded our portfolio to include commercial and mixed-use developments.
                </TimelineText>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem
              align="right"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <TimelineContent>
                <TimelineYear>2015</TimelineYear>
                <TimelineText>
                  Launched our sustainable living initiative, incorporating eco-friendly
                  features in all new projects.
                </TimelineText>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem
              align="left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <TimelineContent>
                <TimelineYear>2020</TimelineYear>
                <TimelineText>
                  Celebrated 20 years of excellence with over 50 completed projects
                  and thousands of satisfied residents.
                </TimelineText>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </ContentContainer>
      </TimelineSection>

      <PartnersSection>
        <ContentContainer>
          <SectionTitle>Our Partners</SectionTitle>
          <PartnersGrid>
            <PartnerLogo
              src="/assets/project-1.webp"
              alt="Partner 1"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            />
            <PartnerLogo
              src="/assets/project-2.webp"
              alt="Partner 2"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            />
            <PartnerLogo
              src="/assets/project-3.webp"
              alt="Partner 3"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            />
            <PartnerLogo
              src="/assets/project-1.webp"
              alt="Partner 4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            />
            <PartnerLogo
              src="/assets/project-2.webp"
              alt="Partner 5"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            />
          </PartnersGrid>
        </ContentContainer>
      </PartnersSection>
    </AboutContainer>
  );
};

export default About; 