import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  background-color: #111;
  color: var(--color-white);
  padding: 5rem 2rem 2rem;
  position: relative;
  overflow: hidden;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FooterTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-accent);
  margin-bottom: 1rem;
`;

const FooterLink = styled(Link)`
  color: var(--color-white);
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 1rem;
  
  &:hover {
    color: var(--color-accent);
  }
`;

const FooterText = styled.p`
  color: var(--color-white);
  opacity: 0.8;
  line-height: 1.6;
  font-size: 1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
`;

const SocialLink = styled(motion.a)`
  color: var(--color-white);
  font-size: 1.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--color-accent);
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--color-white);
  opacity: 0.7;
  font-size: 0.9rem;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>T20 Tower</FooterTitle>
          <FooterText>
            Experience luxury living at its finest in the heart of Islamabad. T20 Tower offers premium apartments with world-class amenities and breathtaking views of the city.
          </FooterText>
          <SocialLinks>
            <SocialLink 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
            >
              <i className="fab fa-facebook"></i>
            </SocialLink>
            <SocialLink 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
            >
              <i className="fab fa-instagram"></i>
            </SocialLink>
            <SocialLink 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
            >
              <i className="fab fa-twitter"></i>
            </SocialLink>
          </SocialLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/about">About</FooterLink>
          <FooterLink to="/amenities">Amenities</FooterLink>
          <FooterLink to="/floorplans">Floor Plans</FooterLink>
          <FooterLink to="/gallery">Gallery</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Amenities</FooterTitle>
          <FooterLink to="/amenities#pool">Swimming Pool</FooterLink>
          <FooterLink to="/amenities#gym">Fitness Center</FooterLink>
          <FooterLink to="/amenities#spa">Spa & Wellness</FooterLink>
          <FooterLink to="/amenities#parking">Underground Parking</FooterLink>
          <FooterLink to="/amenities#security">24/7 Security</FooterLink>
          <FooterLink to="/amenities#concierge">Concierge Service</FooterLink>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        © {currentYear} T20 Tower Islamabad. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
