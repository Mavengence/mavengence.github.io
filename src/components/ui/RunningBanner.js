import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { BiCodeAlt, BiData, BiChip, BiAtom, BiMath, BiBrain, BiTerminal, BiCloud } from 'react-icons/bi';
import { FONTS } from './Theme';

// Running banner component styled like the one in Header
const BannerContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  background-color: rgba(255, 255, 255, 0.80);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  padding: 12px 0;
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
  margin: 2rem 0;
  
  /* Regular margin on mobile */
  @media (max-width: 768px) {
    margin: 1.5rem 0;
    padding: 10px 0; /* Slightly smaller padding on mobile */
  }
  
  /* Gradient fade edges for smooth scroll */
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      linear-gradient(to right, 
        rgba(255, 255, 255, 1) 0%, 
        rgba(255, 255, 255, 0) 5%, 
        rgba(255, 255, 255, 0) 95%, 
        rgba(255, 255, 255, 1) 100%);
    z-index: 2;
    pointer-events: none;
  }
  
  /* Data line accent */
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(
      to right,
      #3182CE,
      #4299E1,
      #EC4899
    );
    opacity: 0.8;
  }
`;

const BannerContent = styled.div`
  display: inline-block;
  animation: marquee 24s linear infinite;
  padding-left: 100%;
  font-family: ${FONTS.mono};
  color: #0F0F0F;
  font-weight: 500;
  letter-spacing: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  
  @keyframes marquee {
    0% { transform: translate(0, 0); }
    100% { transform: translate(-100%, 0); }
  }
  
  span {
    margin: 0 20px;
    display: flex;
    align-items: center;
    transition: color 0.3s ease;
    
    svg {
      margin-right: 8px;
      color: #3182CE;
    }
    
    &:hover {
      color: #EC4899;
      
      svg {
        color: #EC4899;
      }
    }
  }
  
  /* Data flow indicator - subtle animation */
  .blink {
    position: relative;
    
    &:before {
      content: '';
      position: absolute;
      left: -8px;
      top: 50%;
      transform: translateY(-50%);
      width: 4px;
      height: 4px;
      background: #EC4899;
      border-radius: 50%;
      animation: dataPulse 2s infinite alternate;
    }
    
    @keyframes dataPulse {
      0% { transform: translateY(-50%) scale(1); opacity: 0.7; }
      100% { transform: translateY(-50%) scale(1.5); opacity: 0.3; }
    }
  }
`;

// Default items for the banner
const defaultItems = [
  { text: "Machine Learning", blink: true, icon: <BiBrain /> },
  { text: "Data Engineering", blink: false, icon: <BiChip /> },
  { text: "Data Science", blink: false, icon: <BiCodeAlt /> },
  { text: "Python · TensorFlow · PyTorch", blink: false, icon: <BiTerminal /> },
  { text: "Natural Language Processing", blink: true, icon: <BiData /> },
  { text: "Computer Vision", blink: false, icon: <BiData /> },
  { text: "SQL · NoSQL · Graph Databases", blink: false, icon: <BiData/> },
  { text: "AWS · Azure · GCP", blink: true, icon: <BiAtom /> },
  { text: "ETL Pipeline Design", blink: false, icon: <BiData /> },
  { text: "Distributed Computing", blink: false, icon: <BiCloud /> },
  { text: "A/B Testing", blink: true, icon: <BiMath /> },
];

const RunningBanner = ({ items = defaultItems, className }) => {
  return (
    <BannerContainer 
      className={className} 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <BannerContent>
        {items.map((item, index) => (
          <span key={index} className={item.blink ? 'blink' : ''}>
            {item.icon} {item.text}
          </span>
        ))}
        {/* Repeat items for continuous scrolling */}
        {items.map((item, index) => (
          <span key={`repeat-${index}`} className={item.blink ? 'blink' : ''}>
            {item.icon} {item.text}
          </span>
        ))}
      </BannerContent>
    </BannerContainer>
  );
};

export default RunningBanner;