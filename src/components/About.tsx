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

const TimelineItem = styled(motion.div)<{ align: string }>`
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
          <SectionText initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
            Founded with a vision to redefine luxury living, we have been at the forefront of creating exceptional residential spaces that combine architectural excellence with modern comfort.
          </SectionText>
          <SectionText initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
            With over two decades of experience, we have delivered landmark projects that have transformed urban living.
          </SectionText>

          <ValuesGrid>
            {[
              { title: 'Excellence', text: 'We strive for excellence in every aspect of our projects.' },
              { title: 'Innovation', text: 'We embrace innovative solutions and technologies.' },
              { title: 'Integrity', text: 'We conduct our business with integrity and transparency.' },
            ].map((value, index) => (
              <ValueCard key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }} viewport={{ once: true }}>
                <ValueTitle>{value.title}</ValueTitle>
                <ValueDescription>{value.text}</ValueDescription>
              </ValueCard>
            ))}
          </ValuesGrid>
        </ContentContainer>
      </ContentSection>

      <TeamSection>
        <ContentContainer>
          <SectionTitle>Our Team</SectionTitle>
          <TeamGrid>
            {[
              { name: 'John Smith', title: 'CEO & Founder', bio: '20 years of real estate expertise.', img: '/assets/project-1.webp' },
              { name: 'Sarah Johnson', title: 'Head of Design', bio: 'Creative and innovative designer.', img: '/assets/project-2.webp' },
              { name: 'Michael Brown', title: 'Construction Manager', bio: 'Ensures top quality in construction.', img: '/assets/project-3.webp' },
            ].map((member, index) => (
              <TeamMember key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.2 }} viewport={{ once: true }}>
                <MemberImage src={member.img} alt={member.name} />
                <MemberName>{member.name}</MemberName>
                <MemberTitle>{member.title}</MemberTitle>
                <MemberBio>{member.bio}</MemberBio>
              </TeamMember>
            ))}
          </TeamGrid>
        </ContentContainer>
      </TeamSection>

      <TimelineSection>
        <ContentContainer>
          <SectionTitle>Our Journey</SectionTitle>
          <Timeline>
            {[
              { year: '2000', text: 'Founded with a vision to redefine luxury living.', align: 'left' },
              { year: '2005', text: 'Completed our first residential complex.', align: 'right' },
              { year: '2010', text: 'Expanded into commercial developments.', align: 'left' },
              { year: '2015', text: 'Launched sustainable living initiative.', align: 'right' },
              { year: '2020', text: 'Celebrated 20 years with 50+ projects.', align: 'left' },
            ].map((item, index) => (
              <TimelineItem key={index} align={item.align} initial={{ opacity: 0, x: item.align === 'left' ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: index * 0.2 }} viewport={{ once: true }}>
                <TimelineContent>
                  <TimelineYear>{item.year}</TimelineYear>
                  <TimelineText>{item.text}</TimelineText>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </ContentContainer>
      </TimelineSection>

      <PartnersSection>
        <ContentContainer>
          <SectionTitle>Our Partners</SectionTitle>
          <PartnersGrid>
            {['/assets/partner1.webp', '/assets/partner2.webp', '/assets/partner3.webp', '/assets/partner4.webp'].map((logo, i) => (
              <PartnerLogo key={i} src={logo} alt={`Partner ${i + 1}`} whileHover={{ scale: 1.05 }} />
            ))}
          </PartnersGrid>
        </ContentContainer>
      </PartnersSection>
    </AboutContainer>
  );
};

export default About;
