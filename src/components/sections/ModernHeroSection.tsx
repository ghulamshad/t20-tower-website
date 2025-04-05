import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
// Define image paths from public directory - using apartment images
const heroImageXXL = '/assets/images/media/landing/apartments/buildings@md.webp';
const heroImageMD = '/assets/images/media/landing/apartments/buildings@md.webp';
const heroImageXS = '/assets/images/media/landing/apartments/buildings@xs.webp';


// Define luxury color palette
const colors = {
  gold: '#D4AF37',
  goldLight: '#F4E4BC',
  goldDark: '#B8860B',
  black: '#111111',
  white: '#FFFFFF',
  accent: '#E6B17E',
  accentDark: '#C6956C',
  accentLight: '#F4D0B5',
  overlay: 'rgba(0, 0, 0, 0.5)',
  gradient: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(230, 177, 126, 0.3))'
};

const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BackgroundWrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7));
    z-index: 2;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${colors.gradient};
    opacity: 0.4;
    z-index: 3;
    mix-blend-mode: overlay;
  }
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const BackgroundOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.6) 100%);
  z-index: 2;
  pointer-events: none;
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  pointer-events: none;
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.2), rgba(212, 175, 55, 0.15));
  border-radius: 50%;
  backdrop-filter: blur(5px);
  box-shadow: 
    0 0 20px rgba(212, 175, 55, 0.2),
    inset 0 0 15px rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 10%;
    left: 10%;
    width: 30%;
    height: 30%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0));
    border-radius: 50%;
    opacity: 0.5;
  }
`;

const ContentWrapper = styled(motion.div)`
  position: relative;
  z-index: 3;
  max-width: 1200px;
  padding: 0 2rem;
  text-align: center;
  color: ${colors.white};
`;

const Title = styled(motion.h1)`
  font-size: 5rem;
  font-weight: 300;
  margin-bottom: 1rem;
  font-family: var(--font-secondary);
  line-height: 1.2;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  color: ${colors.white};
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.9;
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
  color: ${colors.goldLight};
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CTAButton = styled(motion(Link))`
  display: inline-block;
  padding: 1rem 2.5rem;
  background-color: ${colors.gold};
  color: ${colors.black};
  text-decoration: none;
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
  position: relative;
  overflow: hidden;
  letter-spacing: 1px;
  text-transform: uppercase;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: all 0.6s ease;
  }

  &:hover {
    background-color: ${colors.goldDark};
    color: ${colors.white};
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(212, 175, 55, 0.4);
  }

  &:hover::before {
    left: 100%;
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.goldLight};
  z-index: 3;
  cursor: pointer;
`;

const ScrollText = styled.span`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const ScrollIcon = styled(motion.div)`
  width: 30px;
  height: 50px;
  border: 2px solid ${colors.gold};
  border-radius: 15px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 6px;
    height: 6px;
    background-color: ${colors.gold};
    border-radius: 50%;
  }
`;

const MouseTracker = styled(motion.div)`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, rgba(212, 175, 55, 0) 70%);
  pointer-events: none;
  z-index: 2;
  mix-blend-mode: screen;
`;

const DecorativeLine = styled(motion.div)`
  position: absolute;
  background-color: rgba(212, 175, 55, 0.3);
  z-index: 2;
  box-shadow: 0 0 10px rgba(212, 175, 55, 0.2);
`;

const HorizontalLine = styled(DecorativeLine)`
  height: 1px;
  width: 100px;
`;

const VerticalLine = styled(DecorativeLine)`
  width: 1px;
  height: 100px;
`;

const ModernHeroSection: React.FC = () => {
  const { scrollY } = useScroll();
  const [floatingElements, setFloatingElements] = useState<Array<{ id: number, x: number, y: number, size: number, opacity: number, delay: number, duration: number, yRange: number, xRange: number }>>([]);
  const [, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  
  // Parallax effect for background
  const backgroundY = useTransform(scrollY, [0, 500], [0, 100]);
  const springBackgroundY = useSpring(backgroundY, { stiffness: 100, damping: 30 });
  
  // Mouse movement effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Add image loading state
  const [imageLoaded, setImageLoaded] = useState(false);
  const [currentImage, setCurrentImage] = useState(heroImageXXL);
  
  // Handle responsive image selection
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 576) {
        setCurrentImage(heroImageXS);
      } else if (window.innerWidth <= 992) {
        setCurrentImage(heroImageMD);
      } else {
        setCurrentImage(heroImageXXL);
      }
    };
    
    // Set initial image
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Preload the image
  useEffect(() => {
    const img = new Image();
    img.src = currentImage;
    img.onload = () => setImageLoaded(true);
    
    // Fallback image in case the main one fails
    img.onerror = () => {
      console.warn('Failed to load hero image, using fallback');
      setImageLoaded(true); // Still set to true to show the fallback
    };
  }, [currentImage]);
  
  // Generate floating elements with more variety and faster animations
  useEffect(() => {
    const elements = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 120 + 30,
      opacity: Math.random() * 0.3 + 0.2,
      delay: Math.random() * 1, // Reduced delay for faster start
      duration: Math.random() * 3 + 2, // Reduced duration for faster movement
      yRange: Math.random() * 40 + 15, // Increased range for more dramatic movement
      xRange: Math.random() * 30 + 10 // Increased range for more dramatic movement
    }));
    setFloatingElements(elements);
  }, []);
  
  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      setMousePosition({ x, y });
      mouseX.set(x);
      mouseY.set(y);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);
  
  // Animate decorative lines with faster animation
  useEffect(() => {
    const animateLines = async () => {
      await controls.start({
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.6, 0.3],
        transition: {
          duration: 2, // Reduced from 3 to 2 seconds
          repeat: Infinity,
          ease: "easeInOut"
        }
      });
    };
    
    animateLines();
  }, [controls]);
  
  // Scroll to next section
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };
  
  return (
    <HeroContainer ref={containerRef}>
      <BackgroundWrapper style={{ y: springBackgroundY }}>
        <BackgroundImage 
          src={currentImage}
          alt="T20 Tower Islamabad"
          onLoad={() => setImageLoaded(true)}
          style={{ 
            opacity: imageLoaded ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out'
          }}
        />
      </BackgroundWrapper>
      <BackgroundOverlay />
      
      <MouseTracker 
        style={{ 
          x: mouseX, 
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%"
        }}
      />
      
      <FloatingElements>
        {floatingElements.map((element) => (
          <FloatingElement
            key={element.id}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: `${element.size}px`,
              height: `${element.size}px`,
              opacity: element.opacity
            }}
            animate={{
              y: [0, -element.yRange, 0],
              x: [0, element.xRange, 0],
              scale: [1, 1.1, 1],
              opacity: [element.opacity, element.opacity + 0.1, element.opacity],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: element.delay,
            }}
          />
        ))}
      </FloatingElements>
      
      {/* Decorative lines */}
      <HorizontalLine 
        style={{ top: '20%', left: '10%' }}
        animate={controls}
      />
      <VerticalLine 
        style={{ top: '30%', right: '15%' }}
        animate={controls}
      />
      <HorizontalLine 
        style={{ bottom: '25%', right: '10%' }}
        animate={controls}
      />
      
      <ContentWrapper
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          T20 Tower Islamabad
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Experience luxury living with world-class amenities at Islamabad's premier residential address
        </Subtitle>
        <CTAButton
          to="/t20"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Discover T20
        </CTAButton>
      </ContentWrapper>
      
      <ScrollIndicator
        onClick={scrollToNextSection}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <ScrollText>Scroll Down</ScrollText>
        <ScrollIcon
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default ModernHeroSection; 