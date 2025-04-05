import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';

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

interface NavContainerProps {
  scrolled: boolean;
}

const NavContainer = styled.nav<NavContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 1rem 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  background-color: ${props => props.scrolled ? 'rgba(0, 0, 0, 0.85)' : 'transparent'};
  box-shadow: ${props => props.scrolled ? '0 8px 30px rgba(0, 0, 0, 0.2)' : 'none'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  -webkit-backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: ${props => props.scrolled ? colors.gradient : 'transparent'};
    opacity: 0.5;
    transition: all 0.3s ease;
  }
`;

const Logo = styled(Link)`
  font-size: 2.2rem;
  font-weight: 700;
  color: ${colors.white};
  text-decoration: none;
  font-family: var(--font-primary);
  letter-spacing: 1.5px;
  transition: all 0.3s ease;
  position: relative;
  
  span {
    color: ${colors.gold};
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: ${colors.gold};
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.3s ease;
    }
  }
  
  &:hover {
    transform: translateY(-4px);
    
    span::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;
  
  @media (max-width: 992px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${colors.white};
  text-decoration: none;
  position: relative;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
  font-weight: 500;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${colors.gold};
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: ${colors.goldLight};
  }
  
  &:hover::after,
  &.active::after {
    width: 100%;
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: ${colors.gold};
  color: ${colors.black};
  text-decoration: none;
  font-weight: 600;
  border-radius: 50px;
  transition: all 0.3s ease;
  margin-left: 2rem;
  box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
  position: relative;
  overflow: hidden;
  
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
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(212, 175, 55, 0.4);
  }
  
  &:hover::before {
    left: 100%;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${colors.white};
  font-size: 1.8rem;
  cursor: pointer;
  transition: color 0.3s ease;
  position: relative;
  z-index: 1002;
  
  &:hover {
    color: ${colors.gold};
  }
  
  @media (max-width: 992px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.95);
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  z-index: 1001;
  box-shadow: -5px 0 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(15px);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${colors.gradient};
    opacity: 0.1;
    z-index: -1;
  }
`;

const MobileNavLink = styled(Link)`
  color: ${colors.white};
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: 500;
  padding: 1rem 0;
  transition: all 0.3s ease;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${colors.gold};
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: ${colors.goldLight};
    transform: translateX(10px);
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const MobileCTAButton = styled(Link)`
  display: inline-block;
  padding: 0.75rem 2rem;
  background-color: ${colors.gold};
  color: ${colors.black};
  text-decoration: none;
  font-weight: 600;
  border-radius: 50px;
  transition: all 0.3s ease;
  text-align: center;
  margin-top: 1rem;
  box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
  
  &:hover {
    background-color: ${colors.goldDark};
    color: ${colors.white};
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(212, 175, 55, 0.4);
  }
`;

const CloseButton = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  color: ${colors.white};
  font-size: 2rem;
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${colors.gold};
  }
`;

const NavbarSection: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navbarRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax effect for navbar
  const navbarY = useTransform(scrollY, [0, 100], [0, -10]);
  const springNavbarY = useSpring(navbarY, { stiffness: 100, damping: 30 });
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);
  
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/amenities', label: 'Amenities' },
    { path: '/floorplans', label: 'Floor Plans' },
    { path: '/gallery', label: 'Gallery' }
  ];
  
  return (
    <>
      <NavContainer 
        ref={navbarRef} 
        scrolled={scrolled}
        as={motion.nav}
        style={{ y: springNavbarY }}
      >
        <Logo to="/">
          T<span>20</span> Tower
        </Logo>
        
        <NavLinks>
          {navLinks.map(link => (
            <NavLink 
              key={link.path} 
              to={link.path} 
              className={location.pathname === link.path ? 'active' : ''}
            >
              {link.label}
            </NavLink>
          ))}
          <CTAButton to="/contact">Contact Us</CTAButton>
        </NavLinks>
        
        <MobileMenuButton onClick={() => setMobileMenuOpen(true)}>
          ☰
        </MobileMenuButton>
      </NavContainer>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <CloseButton onClick={() => setMobileMenuOpen(false)}>×</CloseButton>
            {navLinks.map(link => (
              <MobileNavLink 
                key={link.path} 
                to={link.path} 
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </MobileNavLink>
            ))}
            <MobileCTAButton to="/contact" onClick={() => setMobileMenuOpen(false)}>
              Contact Us
            </MobileCTAButton>
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavbarSection; 