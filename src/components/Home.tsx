import React from 'react';
import styled from 'styled-components';
import IntroSection from './sections/IntroSection';
import StatsSection from './sections/StatsSection';
import FeaturedSection from './sections/FeaturedSection';
import FeaturesSection from './sections/FeaturesSection';
import TestimonialsSection from './sections/TestimonialsSection';
import CTASection from './sections/CTASection';
// import HeroSection from './sections/HeroSection';
// import ThreeJSHeroSection from './sections/ThreeJSHeroSection';
import ModernHeroSection from './sections/ModernHeroSection';

const HomeContainer = styled.div`
  min-height: 100vh;
`;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <ModernHeroSection />
      {/* <ThreeJSHeroSection /> */}
      {/* <HeroSection /> */}
      <IntroSection />
      <StatsSection />
      <FeaturedSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
    </HomeContainer>
  );
};

export default Home; 