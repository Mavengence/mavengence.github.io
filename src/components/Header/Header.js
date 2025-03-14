import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaFileAlt, FaLinkedin, FaMedium } from 'react-icons/fa';
import { BiCodeAlt, BiData } from 'react-icons/bi';
import { SiGooglescholar } from 'react-icons/si';
import { COLORS, FONTS } from '../ui/Theme';
import TerminalButton from '../ui/TerminalButton';

// Flicker animation for text effects
const flicker = keyframes`
  0%, 91%, 93.5%, 95%, 100% { opacity: 1; }
  92% { opacity: 0.8; }
  94% { opacity: 0.9; }
  96% { opacity: 0.4; }
  97% { opacity: 0.9; }
  98% { opacity: 0.7; }
  99% { opacity: 0.8; }
`;

// Banner styling constants
const BANNER_PADDING_DESKTOP = 12; // Desktop padding in pixels
const BANNER_PADDING_MOBILE = 11; // Mobile padding value
const BANNER_MARGIN_MOBILE = 11; // 7vh margin from bottom on mobile

/**
 * Main header container
 * Full-viewport height with centered content layout
 * Contains name display, job title, and navigation elements
 */
const HeaderContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden; /* Prevents content overflow */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10; /* Appropriate stacking context */
  
  /* Mobile styling */
  @media (max-width: 768px) {
    height: 100vh; /* Full viewport height */
    height: calc(100vh - env(safe-area-inset-bottom, 0));
    justify-content: flex-start;
    padding-top: 15vh; /* Increased padding to move content down */
  }
  
  /* Define the softWave animation for reuse */
  @keyframes softWave {
    0%, 100% { transform: translateY(-50%) scale(1.0); opacity: 0.7; }
    50% { transform: translateY(-50%) scale(1.1); opacity: 0.9; }
  }
  
  /* Add the glowing background effect directly to the header */
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 300px;
    background: radial-gradient(circle at center, 
      ${COLORS.retroPrimary}40,
      ${COLORS.retroSecondary}20,
      ${COLORS.retroPrimary}05,
      transparent 70%
    );
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    border-radius: 100%;
    opacity: 0.8;
    filter: blur(60px);
    z-index: 0;
    animation: softWave 20s infinite ease-in-out;
  }
`;


// Main content wrapper
const HeaderContent = styled.div`
  text-align: center;
  position: relative;
  z-index: 20;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Creative vertical name layout with TIM on left and LOEHR on right - as a background to everything
const NameContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  z-index: 1;
`;

// Slow up/down animation for 3D title effect
const titleBounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

// Subtle displacement animation for old film effect
const filmDisplacement = keyframes`
  0%, 100% { transform: translate(0, 0); }
  10% { transform: translate(0.7px, 0); }
  20% { transform: translate(-0.5px, 0.5px); }
  30% { transform: translate(0, 0); }
  40% { transform: translate(0.3px, -0.3px); }
  50% { transform: translate(0, 0); }
  60% { transform: translate(-0.7px, 0.3px); }
  70% { transform: translate(0.5px, 0.5px); }
  80% { transform: translate(0, 0); }
  90% { transform: translate(-0.3px, -0.6px); }
`;

// Vertical text styling for first name with cinematic 3D effect
const FirstName = styled(motion.div)`
  font-family: 'Impact', 'Anton', ${FONTS.title};
  font-size: clamp(7rem, 16vw, 13rem);
  font-weight: 800;
  color: #FFFFFF; /* Main color is white */
  writing-mode: vertical-lr;
  text-orientation: upright;
  letter-spacing: -0.5rem;
  line-height: 0.85;
  position: absolute;
  left: 10%;
  top: 10%;
  transform-origin: left center;
  opacity: 1;
  animation: ${titleBounce} 8s ease-in-out infinite, ${filmDisplacement} 10s linear infinite;
  
  /* 3D effect with multiple shadows */
  &:before, &:after {
    content: "TIM";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  
  /* Red shadow layer */
  &:before {
    color: #E53E3E; /* Red */
    transform: translate(-5px, 5px);
    z-index: -3;
    animation: ${flicker} 8s infinite;
  }
  
  /* Blue shadow layer */
  &:after {
    color: #3182CE; /* Blue */
    transform: translate(5px, -5px);
    z-index: -2;
    animation: ${flicker} 12s infinite;
  }
  
  @media (max-width: 768px) {
    font-size: clamp(5rem, 13vw, 10rem);
    transform: rotate(-90deg);
    writing-mode: horizontal-tb;
    margin-right: 0;
    letter-spacing: -0.2rem;
    left: 10%;
    top: 12%; /* Positioned lower */
    transform-origin: center;
    z-index: 5;
  }
`;

// "LOE" part of last name - positioned in the header only
const LastNamePrefix = styled(motion.div)`
  font-family: 'Impact', 'Anton', ${FONTS.title};
  font-size: clamp(8rem, 16vw, 8.5rem);
  font-weight: 800;
  color: #FFFFFF; /* Main color is white */
  writing-mode: vertical-rl;
  text-orientation: upright;
  letter-spacing: -0.5rem;
  line-height: 0.85;
  position: absolute; /* Absolute so it moves with the header */
  right: 10%;
  top: 5%;
  z-index: 15;
  opacity: 1;
  transform-origin: right center;
  animation: ${titleBounce} 8s ease-in-out infinite, ${filmDisplacement} 12s linear infinite;
  
  /* 3D effect with multiple shadows */
  &:before, &:after {
    content: "LOEHR";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  
  /* Red shadow layer */
  &:before {
    color: #E53E3E; /* Red */
    transform: translate(5px, 5px);
    z-index: -3;
    animation: ${flicker} 10s infinite;
  }
  
  /* Blue shadow layer */
  &:after {
    color: #3182CE; /* Blue */
    transform: translate(-5px, -5px);
    z-index: -2;
    animation: ${flicker} 15s infinite;
  }
  
  @media (max-width: 768px) {
    font-size: clamp(5rem, 13vw, 10rem);
    transform: rotate(90deg);
    writing-mode: horizontal-tb;
    margin-left: 0;
    letter-spacing: -0.2rem;
    right: 10%;
    top: 12%; /* Positioned lower */
    z-index: 5;
    transform-origin: center;
  }
`;

// "HR" part of last name - positioned in the work section only
const LastNameSuffix = styled(motion.div)`
  font-family: 'Impact', 'Anton', ${FONTS.title};
  font-size: clamp(7rem, 16vw, 15rem);
  font-weight: 800;
  color: #FFFFFF;
  writing-mode: vertical-rl;
  text-orientation: upright;
  letter-spacing: -0.5rem;
  line-height: 0.85;
  position: absolute;
  right: 20%;
  top: -55%; /* Position to align with LOE from header */
  z-index: 15;
  opacity: 0.6;
  transform-origin: right center;
  pointer-events: none; /* Allow clicking through the text */
  
  /* Double shadow effect with transparent overlay */
  text-shadow: 
    -1px -1px 0 rgba(0, 0, 0, 0.8),
    1px 1px 0 rgba(255, 255, 255, 0.1);
  
  &:after {
    content: "HR";
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    opacity: 0.3;
    color: ${COLORS.retroPrimary};
    filter: blur(4px) brightness(1.5);
    z-index: -1;
  }
  
  /* Echo effect on hover with multiple layers */
  &:hover:after {
    animation: echoEffect 2s infinite alternate;
    opacity: 0.5;
  }
  
  @media (max-width: 768px) {
    font-size: clamp(5rem, 13vw, 10rem);
    transform: rotate(90deg);
    writing-mode: horizontal-tb;
    margin-left: 0;
    letter-spacing: -0.2rem;
  }
`;

// Hover animation for logo
const hoverRightLeft = keyframes`
  0% { transform: translateX(0); }
  50% { transform: translateX(15px); }
  100% { transform: translateX(0); }
`;

// Artsy retro electrified text with creative shadow placement
const MachineLoehrning = styled(motion.div)`
  font-family: ${FONTS.mono};
  font-size: clamp(3.8rem, 4.5vw, 2.8rem);
  color: ${COLORS.retroPrimary};
  margin-bottom: 2.5rem;
  letter-spacing: 2px;
  font-weight: 700;
  position: relative;
  text-transform: uppercase;
  padding: 0.5rem 0.8rem;
  display: inline-block;
  z-index: 20;
  
  /* Base text glow */
  text-shadow: 0 0 8px ${COLORS.retroPrimary}40;
  
  /* Single shifted shadow effect */
  &:before {
    content: 'Machine Loehrning';
    position: absolute;
    left: 3px;
    top: 3px;
    width: 100%;
    height: 100%;
    z-index: -1;
    color: ${COLORS.retroTertiary};
    opacity: 0.6;
    filter: blur(1px);
  }
  
  /* Unique ASCII-art inspired bracket design - digital hipster aesthetic */
  &:after {
    content: '{ ~ }';
    position: absolute;
    bottom: -18px;
    left: 42%; 
    font-family: ${FONTS.mono};
    font-size: 24px;
    font-weight: 300;
    letter-spacing: 2px;
    color: ${COLORS.retroPrimary};
    opacity: 0.85;
    text-shadow: 0 0 8px ${COLORS.retroPrimary}40;
  }
  
  /* No media query needed - using conditional rendering */
  
  /* Sporadic electrical flicker - step animation for authentic feel */
  animation: textFlicker 5s infinite steps(1);
  
  @keyframes textFlicker {
    0%, 100% { 
      color: ${COLORS.retroPrimary};
      text-shadow: 0 0 8px ${COLORS.retroPrimary}40; 
    }
    88%, 92% { 
      color: ${COLORS.retroPrimary}; 
      text-shadow: 0 0 0 transparent;
    }
    90% { 
      color: ${COLORS.retroPrimary}50; 
      text-shadow: 0 0 0 transparent;
    }
    93%, 95% { 
      color: ${COLORS.retroPrimary}; 
      text-shadow: 0 0 10px ${COLORS.retroPrimary};
    }
    94% { 
      color: ${COLORS.retroPrimary}60; 
      text-shadow: 0 0 0 transparent;
    }
    25%, 27% { 
      color: ${COLORS.retroPrimary}; 
      text-shadow: 0 0 5px ${COLORS.retroPrimary}80;
    }
    26% { 
      color: ${COLORS.retroPrimary}70; 
      text-shadow: 0 0 0 transparent;
    }
  }
  
  /* Hover effect with more artistic shadow behavior */
  &:hover {
    animation: hoverFlicker 1s infinite steps(1);
    
    @keyframes hoverFlicker {
      0%, 100% { 
        color: ${COLORS.retroPrimary};
        text-shadow: 0 0 10px ${COLORS.retroPrimary}; 
      }
      49% { 
        color: ${COLORS.retroPrimary};
        text-shadow: 0 0 10px ${COLORS.retroPrimary}; 
      }
      50% { 
        color: ${COLORS.retroPrimary}30;
        text-shadow: none; 
      }
      51% { 
        color: ${COLORS.retroPrimary};
        text-shadow: 0 0 10px ${COLORS.retroPrimary}; 
      }
      75%, 77% { 
        color: ${COLORS.retroPrimary};
        text-shadow: 0 0 10px ${COLORS.retroPrimary}; 
      }
      76% { 
        color: ${COLORS.retroPrimary}50;
        text-shadow: none; 
      }
    }
    
    /* More dynamic shadow positions on hover */
    &:before {
      animation: lineGlitch 1s infinite, shadowJumpHover 0.5s infinite steps(1);
      
      @keyframes shadowJumpHover {
        0%, 100% { text-shadow: 5px 5px 0 ${COLORS.retroTertiary}; }
        20% { text-shadow: 3px 4px 0 ${COLORS.retroTertiary}; }
        40% { text-shadow: 6px 3px 0 ${COLORS.retroTertiary}; }
        60% { text-shadow: 4px 6px 0 ${COLORS.retroTertiary}; }
        80% { text-shadow: 3px 3px 0 ${COLORS.retroTertiary}; }
      }
    }
    
    &:after {
      animation: lineGlitchAlt 2s infinite, shadowJumpAltHover 0.7s infinite steps(1);
      
      @keyframes shadowJumpAltHover {
        0%, 100% { text-shadow: -5px -5px 0 ${COLORS.synthPurple}; }
        20% { text-shadow: -4px -3px 0 ${COLORS.synthPurple}; }
        40% { text-shadow: -6px -4px 0 ${COLORS.synthPurple}; }
        60% { text-shadow: -3px -6px 0 ${COLORS.synthPurple}; }
        80% { text-shadow: -4px -4px 0 ${COLORS.synthPurple}; }
      }
    }
  }
  
  /* Floating logo to the right of text */
  .floating-logo {
    margin-left: 20px;
    height: 60px;
    animation: ${hoverRightLeft} 8s ease-in-out infinite;
  }
`;

const RunningBanner = styled(motion.div)`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  background-color: rgba(255, 255, 255, 0.80);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  padding: ${BANNER_PADDING_DESKTOP}px 0;
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.03);
  
  /* Mobile styling */
  @media (max-width: 768px) {
    padding: ${BANNER_PADDING_MOBILE}px 0; /* Padding for visibility */
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
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
      ${COLORS.dataBlue},
      ${COLORS.dataCyan},
      ${COLORS.dataPink}
    );
    opacity: 0.8;
  }
`;

const BannerContent = styled.div`
  display: inline-block;
  animation: marquee 30s linear infinite;
  padding-left: 100%;
  font-family: ${FONTS.mono};
  color: ${COLORS.dataDark};
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
      color: ${COLORS.dataBlue};
    }
    
    &:hover {
      color: ${COLORS.dataPink};
      
      svg {
        color: ${COLORS.dataPink};
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
      background: ${COLORS.dataPink};
      border-radius: 50%;
      animation: dataPulse 2s infinite alternate;
    }
    
    @keyframes dataPulse {
      0% { transform: translateY(-50%) scale(1); opacity: 0.7; }
      100% { transform: translateY(-50%) scale(1.5); opacity: 0.3; }
    }
  }
`;

// Terminal job title
const JobTitle = styled(motion.div)`
  color: ${COLORS.white};
  font-size: 1.4rem;
  margin: 1.5rem 0;
  font-family: ${FONTS.mono};
  font-weight: 400;
  letter-spacing: 1px;
  position: relative;
  display: inline-flex;
  align-items: center;
  background: ${COLORS.retroDarkAccent};
  padding: 8px 16px;
  border: 1px solid ${COLORS.retroPrimary}40;
  border-radius: 0;
  box-shadow: 3px 3px 0 ${COLORS.retroPrimary}30;
  
  /* Typewriter cursor - retro terminal look */
  span.cursor {
    display: inline-block;
    width: 12px;
    height: 20px;
    background: ${COLORS.retroPrimary};
    margin-left: 4px;
    animation: blink 1s step-end infinite;
    vertical-align: middle;
    
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
  }
  
  /* Terminal prompt style */
  span.command {
    color: ${COLORS.retroPrimary};
    font-weight: 500;
    margin-right: 8px;
    opacity: 0.9;
  }
  
  /* Retro hover effect */
  transition: all 0.2s ease;
  transform-origin: center;
  
  &:hover {
    transform: scale(1.02) translateY(-2px);
    box-shadow: 5px 5px 0 ${COLORS.retroPrimary}50;
  }
  
  &:active {
    transform: scale(0.98) translateY(0);
    box-shadow: 2px 2px 0 ${COLORS.retroPrimary}30;
  }
`;

// Social links container - designed for rectangular buttons
const SocialLinks = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  margin: 2.5rem 0;
  flex-wrap: wrap;
  max-width: 900px;
  
  @media (max-width: 768px) {
    gap: 0.7rem;
  }
`;

// Explore button container
const ButtonsContainer = styled(motion.div)`
  margin-top: 2rem;
`;


const Header = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const centerContentOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]); 
  
  // Fade animations for header elements
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  
  // State for tracking screen size
  const [isMobile, setIsMobile] = useState(false);
  const [isVerySmallScreen, setIsVerySmallScreen] = useState(false);
  
  // Update screen size states based on window width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsVerySmallScreen(window.innerWidth <= 430);
    };
    
    // Initial check
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // tech terminal cursor blinking text effect
  const [cursorVisible, setCursorVisible] = useState(true);
  const [typedText, setTypedText] = useState('');
  const fullText = 'Data Engineer';
  
  // Typewriter effect for job title
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 150);
      
      return () => clearTimeout(timeout);
    }
  }, [typedText]);
  
  // Cursor blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    
    return () => clearInterval(interval);
  }, []);
  
  // Banner content items
  const bannerItems = [
    { text: "ETL Pipeline Design", icon: <BiCodeAlt />, blink: true },
    { text: "SQL & NoSQL Databases", icon: <BiCodeAlt /> },
    { text: "Data Warehousing", icon: <BiCodeAlt />, blink: true },
    { text: "Kafka & Spark", icon: <BiCodeAlt /> },
    { text: "Airflow & Orchestration", icon: <BiCodeAlt />, blink: true },
    { text: "Cloud Infrastructure", icon: <BiCodeAlt /> }
  ];
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeaderContainer id="home" role="banner" aria-label="Tim Loehr, Data Engineer">
      {/* Name display with visually hidden H1 for SEO and accessibility */}
      <NameContainer>
        {/* Screen reader accessible h1 that's visually hidden */}
        <h1 style={{ 
          position: 'absolute', 
          left: '-9999px', 
          top: '-9999px',
          width: '1px',
          height: '1px',
          overflow: 'hidden'
        }}>
          Tim Loehr - Data Engineer and Data Scientist
        </h1>
        <FirstName
          aria-hidden="true"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 70 }}
          style={{ opacity: headerOpacity }}
        >
          TIM
        </FirstName>
        
        <LastNamePrefix
          aria-hidden="true"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, type: "spring", stiffness: 50 }}
          style={{ opacity: headerOpacity }}
        >
          LOEHR
        </LastNamePrefix>
      </NameContainer>
  
      {/* Header Content with centered elements */}
      <HeaderContent style={{ 
        opacity, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: isMobile ? 'flex-start' : 'center', 
        height: isMobile ? '90%' : '100%',  /* Even taller on mobile */
        paddingTop: isMobile ? '4vh' : '0',
        position: 'relative', 
        zIndex: 5 
      }}>
        {/* Center content with job title and buzzword */}
        <motion.div style={{ 
          opacity: centerContentOpacity, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          height: isMobile ? 'auto' : '100%', /* Don't use full height on mobile */
          justifyContent: isMobile ? 'flex-start' : 'center' /* Align to top on mobile */
        }}>
          {/* Machine Loehrning buzzword - tech hipster spin */}
          <div style={{ position: 'relative', display: 'inline-block' }}>
            {!isVerySmallScreen && (
              <MachineLoehrning
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ 
                  margin: isMobile ? '0.5rem 0 1rem' : '1rem 0 2rem',
                  fontSize: isMobile ? 'clamp(3.2rem, 4vw, 2.5rem)' : 'clamp(3.8rem, 4.5vw, 2.8rem)'
                }}
              >
                Machine Loehrning
              </MachineLoehrning>
            )}
            {!isVerySmallScreen && (
              <motion.img 
                src={`${process.env.PUBLIC_URL}/images/astronaut.png`}
                alt="Astronaut logo" 
                style={{ 
                  position: 'absolute',
                  right: isMobile ? '-40px' : '-80px',
                  top: '60%',
                  transform: 'translateY(-50%)',
                  height: isMobile ? '80px' : '250px',
                  zIndex: 100
                }}
                animate={{
                  x: [0, 15, 0]
                }}
                transition={{
                  duration: 8,
                  ease: "easeInOut",
                  repeat: Infinity
                }}
              />
            )}
          </div>
          
          {/* Job title - with terminal style typewriter effect */}
          <JobTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ 
              marginTop: isVerySmallScreen ? '4rem' : (isMobile ? '1.5rem' : '1rem')
            }}
          >
            <span className="command">$</span>
            {typedText}
            {cursorVisible && <span className="cursor"></span>}
          </JobTitle>
          
          {/* Social media links with semantic nav element for SEO */}
        <nav aria-label="Social media links and resume">
          <SocialLinks
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              marginTop: isVerySmallScreen ? '2rem' : (isMobile ? '3rem' : '7rem'),
              marginBottom: isMobile ? '0.5rem' : '0',
              gap: '12px',
              maxWidth: isMobile ? '380px' : '900px', /* Increased width for mobile */
              flexFlow: isMobile ? 'row wrap' : 'row'
            }}
          >
            <TerminalButton 
              href="https://github.com/mavengence" 
              aria-label="Visit Tim Loehr's GitHub profile"
              rel="noopener noreferrer"
              icon={<FaGithub />}
            >
              GitHub
            </TerminalButton>
            <TerminalButton 
              href="https://www.linkedin.com/in/tim-loehr-821ba8188/" 
              aria-label="Connect with Tim Loehr on LinkedIn"
              rel="noopener noreferrer"
              icon={<FaLinkedin />}
            >
              LinkedIn
            </TerminalButton>
            <TerminalButton 
              href="https://medium.com/@mavengence" 
              aria-label="Read Tim Loehr's articles on Medium"
              rel="noopener noreferrer"
              icon={<FaMedium />}
            >
              Medium
            </TerminalButton>
            <TerminalButton 
              href="https://scholar.google.com/citations?user=DLV7IqAAAAAJ&hl=en" 
              aria-label="View Tim Loehr's research on Google Scholar"
              rel="noopener noreferrer"
              icon={<SiGooglescholar />}
            >
              Scholar
            </TerminalButton>
            <TerminalButton 
              href="https://drive.google.com/file/d/1nWiQxrj_DhjOj0uAixp6OM3sH7xKLDsl/view?usp=sharing" 
              aria-label="Download Tim Loehr's resume"
              icon={<FaFileAlt />}
            >
              Resume
            </TerminalButton>
          </SocialLinks>
        </nav>
        
          {/* Scroll Down Arrow */}
          <ButtonsContainer 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{ 
              marginTop: isVerySmallScreen ? '2rem' : (isMobile ? 'auto' : '1rem'),
              marginBottom: isMobile ? '12vh' : '0', /* Closer to the banner */
              position: isMobile ? 'relative' : 'static'
            }}
        >
          <motion.div 
            onClick={() => scrollToSection('experience')}
            whileHover={{ y: 5 }}
            whileTap={{ scale: 0.95 }}
            style={{ 
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <span style={{ 
              color: COLORS.retroPrimary, 
              textShadow: `0 0 5px ${COLORS.retroPrimary}`,
              marginBottom: '12px',
              fontFamily: FONTS.mono,
              fontSize: '0.9rem',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontWeight: 'bold'
            }}>
              {(isMobile ? '' : 'Scroll Down')}
            </span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="40" 
              height="40" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke={COLORS.retroPrimary} 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              style={{
                filter: `drop-shadow(0 0 8px ${COLORS.retroPrimary})`,
                animation: 'bounce 2s infinite',
                opacity: 0.9
              }}
            >
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </motion.div>
        </ButtonsContainer>
        </motion.div>
      </HeaderContent>

      {/* Bottom banner */}
      <div style={{ 
        position: 'absolute',
        bottom: isMobile ? `${BANNER_MARGIN_MOBILE}vh` : 0,
        left: 0,
        width: '100%',
        zIndex: 30
      }}>
        {/* Pikachu mascot */}
        <img 
          src={`${process.env.PUBLIC_URL}/images/pikachu.png`}
          alt="Pikachu"
          aria-hidden="true"
          loading="lazy" 
          decoding="async"
          style={{
            position: 'absolute',
            bottom: '100%',
            right: '20px',
            width: isMobile ? '65px' : '150px',
            height: 'auto',
            marginBottom: isMobile ? '5px' : '3px',
            zIndex: 10
          }}
        />
        
        <RunningBanner
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <BannerContent>
            {bannerItems.map((item, index) => (
              <span key={index} className={item.blink ? 'blink' : ''}>
                {item.icon} {item.text}
              </span>
            ))}
            {bannerItems.map((item, index) => (
              <span key={`repeat-${index}`} className={item.blink ? 'blink' : ''}>
                {item.icon} {item.text}
              </span>
            ))}
          </BannerContent>
        </RunningBanner>
      </div>
    </HeaderContainer>
  );
};

export { LastNameSuffix };
// Use React.memo to prevent unnecessary re-renders
export default React.memo(Header);