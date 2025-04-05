import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactContainer = styled.section`
  background-color: var(--color-background);
  color: var(--color-white);
  padding: 5rem 2rem;
  position: relative;
  overflow: hidden;
  min-height: calc(100vh - 200px);
  margin-bottom: 2rem;
`;

const ContactContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-accent);
  margin-bottom: 1rem;
  
  @media (max-width: 576px) {
    font-size: 2rem;
  }
`;

const ContactText = styled.p`
  color: var(--color-white);
  opacity: 0.8;
  line-height: 1.8;
  font-size: 1.1rem;
  margin-bottom: 2rem;
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const ContactIcon = styled.div`
  color: var(--color-accent);
  font-size: 1.5rem;
  min-width: 2rem;
`;

const ContactLabel = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const ContactValue = styled.p`
  color: var(--color-white);
  opacity: 0.8;
  line-height: 1.6;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  color: var(--color-white);
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--color-accent);
    background-color: rgba(255, 255, 255, 0.15);
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  color: var(--color-white);
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--color-accent);
    background-color: rgba(255, 255, 255, 0.15);
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  background-color: var(--color-accent);
  color: var(--color-white);
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  align-self: flex-start;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--color-accent-hover);
    box-shadow: 0 6px 18px rgba(230, 177, 126, 0.3);
  }
`;

const ContactUs = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };
  
  return (
    <ContactContainer>
      <ContactContent>
        <ContactInfo>
          <ContactTitle>Contact Us</ContactTitle>
          <ContactText>
            Have questions about T20 Tower? We're here to help. Reach out to our team for inquiries about availability, pricing, or to schedule a viewing of our premium apartments.
          </ContactText>
          
          <ContactDetails>
            <ContactItem>
              <ContactIcon>
                <i className="fas fa-map-marker-alt"></i>
              </ContactIcon>
              <div>
                <ContactLabel>Address</ContactLabel>
                <ContactValue>
                  Plot No. 1, Block 7,<br />
                  F-8/1, Islamabad,<br />
                  Pakistan
                </ContactValue>
              </div>
            </ContactItem>
            
            <ContactItem>
              <ContactIcon>
                <i className="fas fa-phone-alt"></i>
              </ContactIcon>
              <div>
                <ContactLabel>Phone</ContactLabel>
                <ContactValue>+92 51 1234567</ContactValue>
              </div>
            </ContactItem>
            
            <ContactItem>
              <ContactIcon>
                <i className="fas fa-envelope"></i>
              </ContactIcon>
              <div>
                <ContactLabel>Email</ContactLabel>
                <ContactValue>info@t20tower.com</ContactValue>
              </div>
            </ContactItem>
            
            <ContactItem>
              <ContactIcon>
                <i className="fas fa-clock"></i>
              </ContactIcon>
              <div>
                <ContactLabel>Sales Office Hours</ContactLabel>
                <ContactValue>
                  Monday - Saturday: 9:00 AM - 7:00 PM<br />
                  Sunday: By Appointment
                </ContactValue>
              </div>
            </ContactItem>
          </ContactDetails>
        </ContactInfo>
        
        <ContactForm onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Full Name</Label>
            <Input type="text" id="name" name="name" required />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="email">Email Address</Label>
            <Input type="email" id="email" name="email" required />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="phone">Phone Number</Label>
            <Input type="tel" id="phone" name="phone" />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="subject">Subject</Label>
            <Input type="text" id="subject" name="subject" required />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <TextArea id="message" name="message" required></TextArea>
          </FormGroup>
          
          <SubmitButton 
            type="submit"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </SubmitButton>
        </ContactForm>
      </ContactContent>
    </ContactContainer>
  );
};

export default ContactUs; 