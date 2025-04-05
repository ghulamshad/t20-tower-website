import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Define luxury color palette
const colors = {
  gold: '#D4AF37',
  goldLight: '#E5C76B',
  goldDark: '#B38F28',
  black: '#1A1A1A',
  white: '#FFFFFF',
  gray: '#F5F5F5',
  darkGray: '#333333',
  accent: '#8B7355',
};

const ContactContainer = styled.div`
  min-height: 100vh;
  background-color: var(--color-background);
  padding-top: 80px; /* Space for fixed navbar */
`;

const PageHeader = styled(motion.div)`
  height: 40vh;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
              url('/assets/images/media/landing/contact-header@md.webp');
  background-size: cover;
  background-position: center;
  color: ${colors.white};
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.6) 100%);
    z-index: 1;
  }
`;

const HeaderContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 0 2rem;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 300;
  margin-bottom: 1.5rem;
  font-family: var(--font-secondary);
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  max-width: 600px;
  margin: 0 auto;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ContactSection = styled.section`
  padding: 6rem 2rem;
  background-color: ${colors.white};
  position: relative;
  
  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  @media (max-width: 480px) {
    gap: 2rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`;

const InfoTitle = styled.h2`
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 1.5rem;
  color: ${colors.black};
  font-family: var(--font-secondary);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 2px;
    background-color: ${colors.gold};
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 480px) {
    gap: 1rem;
    margin-bottom: 1rem;
  }
`;

const InfoIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${colors.gold};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  font-size: 1.5rem;
  flex-shrink: 0;
  
  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
`;

const InfoContent = styled.div`
  flex: 1;
`;

const InfoLabel = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: ${colors.black};
`;

const InfoText = styled.p`
  font-size: 1rem;
  color: ${colors.darkGray};
  line-height: 1.6;
`;

const ContactForm = styled(motion.form)`
  background-color: ${colors.gray};
  padding: 2.5rem;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

const FormTitle = styled.h2`
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 2rem;
  color: ${colors.black};
  font-family: var(--font-secondary);
  text-align: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 2px;
    background-color: ${colors.gold};
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${colors.darkGray};
  font-size: 1rem;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background-color: ${colors.white};

  &:focus {
    outline: none;
    border-color: ${colors.gold};
    box-shadow: 0 0 0 2px rgba(212, 175, 55, 0.2);
  }
  
  @media (max-width: 480px) {
    padding: 0.8rem;
    font-size: 0.9rem;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;
  background-color: ${colors.white};

  &:focus {
    outline: none;
    border-color: ${colors.gold};
    box-shadow: 0 0 0 2px rgba(212, 175, 55, 0.2);
  }
  
  @media (max-width: 480px) {
    padding: 0.8rem;
    font-size: 0.9rem;
    min-height: 120px;
  }
`;

const SubmitButton = styled(motion.button)`
  display: block;
  width: 100%;
  padding: 1rem;
  background-color: ${colors.gold};
  color: ${colors.white};
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover {
    background-color: ${colors.goldDark};
  }
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <ContactContainer>
      <PageHeader
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <HeaderContent>
          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Contact Us
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Get in touch with our team for inquiries about T20 Tower
          </Subtitle>
        </HeaderContent>
      </PageHeader>
      
      <ContactSection>
        <ContactGrid>
          <ContactInfo>
            <InfoTitle>Contact Information</InfoTitle>
            <InfoItem>
              <InfoIcon>📍</InfoIcon>
              <InfoContent>
                <InfoLabel>Address</InfoLabel>
                <InfoText>123 Luxury Avenue, Islamabad, Pakistan</InfoText>
              </InfoContent>
            </InfoItem>
            <InfoItem>
              <InfoIcon>📞</InfoIcon>
              <InfoContent>
                <InfoLabel>Phone</InfoLabel>
                <InfoText>+92 300 1234567</InfoText>
              </InfoContent>
            </InfoItem>
            <InfoItem>
              <InfoIcon>✉️</InfoIcon>
              <InfoContent>
                <InfoLabel>Email</InfoLabel>
                <InfoText>info@t20tower.com</InfoText>
              </InfoContent>
            </InfoItem>
            <InfoItem>
              <InfoIcon>⏰</InfoIcon>
              <InfoContent>
                <InfoLabel>Office Hours</InfoLabel>
                <InfoText>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM</InfoText>
              </InfoContent>
            </InfoItem>
          </ContactInfo>
          
          <ContactForm
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
          >
            <FormTitle>Send Us a Message</FormTitle>
            <FormGroup>
              <Label htmlFor="name">Full Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email Address</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email address"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="subject">Subject</Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Enter the subject of your message"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Enter your message here"
              />
            </FormGroup>
            <SubmitButton
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </SubmitButton>
          </ContactForm>
        </ContactGrid>
      </ContactSection>
    </ContactContainer>
  );
};

export default Contact; 