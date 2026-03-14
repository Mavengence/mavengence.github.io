import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';
import { InView } from 'react-intersection-observer';
import { COLORS, FONTS } from '../ui/Theme';
import { SOCIAL_LINKS } from '../../constants/socialLinks';

const ContactSection = styled.section`
  padding: 6rem 2rem;
  position: relative;
  text-align: center;
  z-index: 20;
`;

const ContactInner = styled.div`
  max-width: 700px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ContactTitle = styled.h2`
  font-family: ${FONTS.title};
  font-size: 2.5rem;
  font-weight: 700;
  color: ${COLORS.white};
  margin-bottom: 1rem;
  letter-spacing: -0.5px;
`;

const ContactSubtitle = styled.p`
  font-family: ${FONTS.primary};
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 2.5rem;
  line-height: 1.6;
`;

const ContactLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const ContactLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.85);
  font-family: ${FONTS.mono};
  font-size: 0.85rem;
  text-decoration: none;
  transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
    color: ${COLORS.white};
  }

  svg {
    font-size: 1.1rem;
    color: ${COLORS.retroPrimary};
  }
`;

const LINKS = [
  { href: SOCIAL_LINKS.email.url, label: 'Email Tim Loehr', icon: <HiOutlineMail />, text: 'Email' },
  { href: SOCIAL_LINKS.linkedin.url, label: 'Connect on LinkedIn', icon: <FaLinkedin />, text: 'LinkedIn' },
  { href: SOCIAL_LINKS.github.url, label: 'GitHub profile', icon: <FaGithub />, text: 'GitHub' },
  { href: SOCIAL_LINKS.medium.url, label: 'Medium articles', icon: <FaMedium />, text: 'Medium' },
  { href: SOCIAL_LINKS.scholar.url, label: 'Google Scholar', icon: <SiGooglescholar />, text: 'Scholar' },
];

const Contact = () => (
  <ContactSection id="contact" aria-label="Contact Tim Loehr">
    <InView threshold={0.1} triggerOnce rootMargin="150px 0px">
      {({ ref, inView }) => (
        <ContactInner ref={ref} className={inView ? 'visible' : ''}>
          <ContactTitle>Get in Touch</ContactTitle>
          <ContactSubtitle>
            Interested in data engineering, ML research, or collaboration? Let's connect.
          </ContactSubtitle>
          <ContactLinks role="list" aria-label="Contact links">
            {LINKS.map((link) => (
              <ContactLink
                key={link.text}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                aria-label={link.label}
                role="listitem"
              >
                {link.icon}
                {link.text}
              </ContactLink>
            ))}
          </ContactLinks>
        </ContactInner>
      )}
    </InView>
  </ContactSection>
);

export default Contact;
