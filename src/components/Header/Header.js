import React, { useState, useEffect, useMemo, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import { BiCodeAlt, BiData, BiChip, BiAtom, BiBrain, BiTerminal, BiCloud } from 'react-icons/bi';
import { SiGooglescholar } from 'react-icons/si';
import { COLORS, FONTS } from '../ui/Theme';
import TerminalButton from '../ui/TerminalButton';

// ── CSS-only animations (one-shot only, no infinite loops) ───────────

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Responsive design constants
const DIMENSIONS = {
  BANNER_PADDING_DESKTOP: 12,
  BANNER_PADDING_MOBILE: 11,
  MOBILE_BREAKPOINT: 768,
  TABLET_BREAKPOINT: 1024
};

/**
 * Main header container
 * Full-viewport height with centered content layout
 */
const HeaderContainer = styled.header`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;

  @media (min-width: ${DIMENSIONS.MOBILE_BREAKPOINT + 1}px) and (max-width: ${DIMENSIONS.TABLET_BREAKPOINT}px) {
    height: 100vh;
    justify-content: center;
    contain: layout style;
  }

  @media (max-width: ${DIMENSIONS.MOBILE_BREAKPOINT}px) {
    height: 100vh;
    height: calc(100vh - env(safe-area-inset-bottom, 0));
    justify-content: flex-start;
    padding-top: 8vh;
    contain: layout style;
  }

  /* Static glowing background — no blur filter */
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 400px;
    background: radial-gradient(ellipse at center,
      ${COLORS.retroPrimary}25,
      ${COLORS.retroSecondary}10,
      transparent 70%
    );
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    opacity: 0.8;
    z-index: 0;
  }
`;

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

const FirstName = styled.div`
  font-family: 'Impact', 'Anton', ${FONTS.title};
  font-size: clamp(13rem, 13vw, 13rem);
  font-weight: 800;
  color: #FFFFFF;
  writing-mode: vertical-lr;
  text-orientation: upright;
  letter-spacing: -0.5rem;
  line-height: 0.85;
  position: absolute;
  left: 10%;
  top: 10%;
  transform-origin: left center;
  animation: ${fadeInUp} 0.8s ease-out both;
  user-select: none;

  &:before, &:after {
    content: "TIM";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  &:before {
    color: #E53E3E;
    transform: translate(-5px, 5px);
    z-index: -3;
  }

  &:after {
    color: #3182CE;
    transform: translate(5px, -5px);
    z-index: -2;
  }

  @media (max-height: 900px) and (min-width: 1025px) {
    font-size: clamp(10rem, 12vh, 12rem);
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: clamp(8rem, 10vh, 10rem);
    transform: none;
    writing-mode: horizontal-tb;
    margin-right: 0;
    letter-spacing: -0.2rem;
    left: 18%;
    top: 8%;
    transform-origin: center;
    z-index: 5;
  }

  @media (max-width: 768px) {
    font-size: clamp(5rem, 6vh, 6rem);
    transform: rotate(-90deg);
    writing-mode: horizontal-tb;
    margin-right: 0;
    letter-spacing: -0.2rem;
    left: 10%;
    top: 20%;
    transform-origin: center;
    z-index: 5;
  }
`;

const LastName = styled.div`
  font-family: 'Impact', 'Anton', ${FONTS.title};
  font-size: clamp(8rem, 16vw, 8.5rem);
  font-weight: 800;
  color: #FFFFFF;
  writing-mode: vertical-rl;
  text-orientation: upright;
  letter-spacing: -0.5rem;
  line-height: 0.85;
  position: absolute;
  right: 10%;
  top: 5%;
  z-index: 15;
  transform-origin: right center;
  animation: ${fadeInUp} 1s ease-out both;
  user-select: none;

  &:before, &:after {
    content: "LOEHR";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  &:before {
    color: #E53E3E;
    transform: translate(5px, 5px);
    z-index: -3;
  }

  &:after {
    color: #3182CE;
    transform: translate(-5px, -5px);
    z-index: -2;
  }

  @media (max-height: 900px) and (min-width: 1025px) {
    font-size: clamp(7rem, 9vh, 8rem);
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: clamp(8rem, 10vh, 10rem);
    transform: none;
    writing-mode: horizontal-tb;
    margin-left: 0;
    letter-spacing: -0.2rem;
    left: auto;
    right: 18%;
    top: 8%;
    z-index: 5;
    transform-origin: center;
  }

  @media (max-width: 768px) {
    font-size: clamp(5rem, 6vw, 6rem);
    transform: rotate(90deg);
    writing-mode: horizontal-tb;
    margin-left: 0;
    letter-spacing: -0.2rem;
    right: 10%;
    top: 20%;
    z-index: 5;
    transform-origin: center;
  }
`;

const MachineLoehrning = styled.div`
  font-family: ${FONTS.mono};
  font-size: clamp(3.8rem, 4.5vw, 2.8rem);
  color: ${COLORS.retroPrimary};
  margin-bottom: 2.5rem;
  letter-spacing: 2px;
  font-weight: 700;
  position: relative;
  text-transform: uppercase;
  padding: 0.5rem 0.8rem;
  user-select: none;
  display: inline-block;
  z-index: 20;
  animation: ${fadeInUp} 0.8s ease-out 0.2s both;

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: clamp(2.5rem, 3vw, 2.2rem);
    margin-bottom: 1.5rem;
  }

  text-shadow: 0 0 8px ${COLORS.retroPrimary}40;

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
  }

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

`;

const RunningBanner = styled.div`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  background-color: rgba(255, 255, 255, 0.92);
  padding: ${DIMENSIONS.BANNER_PADDING_DESKTOP}px 0;
  z-index: 30;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.5s ease-out both;

  @media (min-width: ${DIMENSIONS.TABLET_BREAKPOINT + 1}px) {
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.03);
  }

  @media (min-width: ${DIMENSIONS.MOBILE_BREAKPOINT + 1}px) and (max-width: ${DIMENSIONS.TABLET_BREAKPOINT}px) {
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.03);
    padding: ${DIMENSIONS.BANNER_PADDING_DESKTOP - 2}px 0;
  }

  @media (max-width: ${DIMENSIONS.MOBILE_BREAKPOINT}px) {
    padding: ${DIMENSIONS.BANNER_PADDING_MOBILE}px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
    height: auto;
  }

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
  animation: marquee 45s linear infinite;
  padding-left: 100%;
  font-family: ${FONTS.mono};
  color: ${COLORS.dataDark};
  font-weight: 500;
  letter-spacing: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  will-change: transform;

  @keyframes marquee {
    0% { transform: translate3d(0, 0, 0); }
    100% { transform: translate3d(-100%, 0, 0); }
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
      svg { color: ${COLORS.dataPink}; }
    }
  }

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
      opacity: 0.7;
    }
  }
`;

const JobTitle = styled.div`
  color: ${COLORS.white};
  font-size: 1.4rem;
  margin: 1.5rem 0;
  font-family: ${FONTS.mono};
  font-weight: 400;
  letter-spacing: 1px;
  position: relative;
  display: inline-flex;
  align-items: center;
  user-select: none;
  background: ${COLORS.retroDarkAccent};
  padding: 8px 16px;
  border: 1px solid ${COLORS.retroPrimary}40;
  border-radius: 0;
  box-shadow: 3px 3px 0 ${COLORS.retroPrimary}30;
  animation: ${fadeInUp} 0.8s ease-out 0.4s both;

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

  span.command {
    color: ${COLORS.retroPrimary};
    font-weight: 500;
    margin-right: 8px;
    opacity: 0.9;
  }

  transition: transform 0.2s ease, box-shadow 0.2s ease;
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

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  margin: 2.5rem 0;
  flex-wrap: wrap;
  max-width: 900px;
  animation: ${fadeInUp} 0.8s ease-out 0.6s both;

  @media (min-width: 769px) and (max-width: 1024px) {
    gap: 0.9rem;
    margin: 1.8rem 0;
  }

  @media (max-width: 768px) {
    gap: 0.7rem;
  }
`;

const ButtonsContainer = styled.div`
  margin-top: 2rem;
  animation: ${fadeInUp} 0.8s ease-out 0.8s both;
`;

const astronautFloat = keyframes`
  0%, 100% { transform: translateY(-50%) translate3d(0, 0, 0); }
  50% { transform: translateY(-50%) translate3d(0, -12px, 0); }
`;

const AstronautImage = styled.img`
  position: absolute;
  right: -80px;
  top: calc(100% + 3rem);
  height: 250px;
  z-index: 100;
  transform: translateY(-50%);
  animation: ${astronautFloat} 4s ease-in-out infinite;
  will-change: transform;

  @media (min-width: 769px) and (max-width: 1024px) {
    right: -60px;
    height: 180px;
  }
`;

const gentleBob = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
`;

const ScrollArrow = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${gentleBob} 2.5s ease-in-out infinite;
  will-change: transform;

  &:hover { animation-play-state: paused; transform: translateY(5px); }
  &:active { transform: scale(0.95); }
`;

// ── Static style constants (never re-created) ───────────────────────

const VISUALLY_HIDDEN_STYLE = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: 0,
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  borderWidth: 0
};

const ML_WRAPPER_STYLE = { position: 'relative', display: 'inline-block' };

const JOB_TITLE_STYLE = { marginTop: '2.5rem', fontSize: '1.4rem' };

const SCROLL_LABEL_STYLE = {
  color: COLORS.retroPrimary,
  textShadow: `0 0 5px ${COLORS.retroPrimary}`,
  marginBottom: '12px',
  fontFamily: FONTS.mono,
  fontSize: '0.9rem',
  letterSpacing: '2px',
  textTransform: 'uppercase',
  fontWeight: 'bold'
};

const ARROW_SVG_STYLE = { opacity: 0.9 };

const PIKACHU_STYLE = {
  position: 'absolute',
  bottom: '100%',
  marginBottom: '3px',
  right: '20px',
  width: '150px',
  height: 'auto',
  zIndex: 10
};

const TABLET_ASTRONAUT_STYLE = { right: '-60px', height: '180px' };

// ── Component ────────────────────────────────────────────────────────

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [shouldShowPikachu, setShouldShowPikachu] = useState(false);
  const [pikachuImage, setPikachuImage] = useState(null);

  useEffect(() => {
    let frameId = null;

    const handleResize = () => {
      if (frameId) cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        const width = window.innerWidth;
        const newIsMobile = width <= DIMENSIONS.MOBILE_BREAKPOINT;
        const newIsTablet = width > DIMENSIONS.MOBILE_BREAKPOINT && width <= DIMENSIONS.TABLET_BREAKPOINT;
        setIsMobile(newIsMobile);
        setIsTablet(newIsTablet);
        setShouldShowPikachu(!newIsMobile && !newIsTablet);
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  useEffect(() => {
    if (shouldShowPikachu && !pikachuImage) {
      const img = new Image();
      img.onload = () => {
        setPikachuImage(`${process.env.PUBLIC_URL}/images/pikachu.webp`);
      };
      img.src = `${process.env.PUBLIC_URL}/images/pikachu.webp`;
    }
  }, [shouldShowPikachu, pikachuImage]);

  // Terminal typewriter effect
  const [typedText, setTypedText] = useState('');
  const fullText = 'Data Engineer';

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeoutId = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 150);
      return () => clearTimeout(timeoutId);
    }
  }, [typedText, fullText]);

  const bannerItems = useMemo(() => [
    { text: "ETL Pipeline Design", icon: <BiData />, blink: true },
    { text: "Dimensional Modeling", icon: <BiBrain />, blink: true },
    { text: "SQL & NoSQL Databases", icon: <BiChip /> },
    { text: "Data Warehousing", icon: <BiCodeAlt />, blink: true },
    { text: "Presto & Spark", icon: <BiTerminal /> },
    { text: "Data Pipelines & Orchestration", icon: <BiAtom />, blink: true },
    { text: "Cloud Infrastructure", icon: <BiCloud /> }
  ], []);

  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  // Memoized responsive styles — only recalculated when breakpoint changes
  const headerContentStyle = useMemo(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: isMobile ? 'flex-start' : 'center',
    height: isMobile ? '90%' : '100%',
    paddingTop: isMobile ? '6vh' : '0',
    paddingBottom: isTablet ? '6vh' : '0',
    position: 'relative',
    zIndex: 5
  }), [isMobile, isTablet]);

  const innerColumnStyle = useMemo(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: isMobile ? 'auto' : '100%',
    justifyContent: isMobile ? 'flex-start' : 'center',
    marginTop: isMobile ? '15vh' : (isTablet ? '25vh' : '0')
  }), [isMobile, isTablet]);

  const mlFontStyle = useMemo(() => ({
    margin: '1rem 0 2rem',
    fontSize: isTablet ? 'clamp(2.6rem, 3.5vw, 2.4rem)' : 'clamp(3.8rem, 4.5vw, 2.8rem)'
  }), [isTablet]);

  const socialLinksStyle = useMemo(() => ({
    display: 'flex',
    justifyContent: 'center',
    marginTop: isMobile ? '1.5rem' : (isTablet ? '3rem' : '7rem'),
    marginBottom: isMobile ? '0.5rem' : (isTablet ? '1rem' : '0'),
    gap: isTablet ? '10px' : '12px',
    maxWidth: isMobile ? '380px' : (isTablet ? '600px' : '900px'),
    flexFlow: (isMobile || isTablet) ? 'row wrap' : 'row'
  }), [isMobile, isTablet]);

  const buttonsStyle = useMemo(() => ({
    marginTop: isMobile ? '8vh' : (isTablet ? '2rem' : '5rem'),
    marginBottom: isMobile ? '12vh' : (isTablet ? '12vh' : '0'),
    position: (isMobile || isTablet) ? 'relative' : 'static'
  }), [isMobile, isTablet]);

  const bannerWrapperStyle = useMemo(() => ({
    position: 'absolute',
    ...(isMobile ? { top: 0 } : { bottom: 0 }),
    left: 0,
    width: '100%',
    zIndex: 50
  }), [isMobile]);

  return (
    <HeaderContainer id="home" aria-label="Tim Loehr, Data Engineer">
      <NameContainer>
        <h1
          style={VISUALLY_HIDDEN_STYLE}
          aria-label="Tim Loehr - Data Engineer and Data Scientist"
        >
          Tim Loehr - Data Engineer and Data Scientist
        </h1>
        <FirstName aria-hidden="true">TIM</FirstName>
        <LastName aria-hidden="true">LOEHR</LastName>
      </NameContainer>

      <HeaderContent style={headerContentStyle}>
        <div style={innerColumnStyle}>
          {/* Machine Loehrning */}
          <div style={ML_WRAPPER_STYLE}>
            {!isMobile && (
              <MachineLoehrning style={mlFontStyle}>
                Machine Loehrning
              </MachineLoehrning>
            )}
            {!isMobile && (
              <AstronautImage
                src={`${process.env.PUBLIC_URL}/images/astronaut.webp`}
                alt="Astronaut logo"
                loading="lazy"
                decoding="async"
                width={isTablet ? 180 : 250}
                height={isTablet ? 180 : 250}
                fetchPriority="low"
                style={isTablet ? TABLET_ASTRONAUT_STYLE : undefined}
              />
            )}
          </div>

          {/* Job title with terminal style typewriter */}
          <JobTitle style={JOB_TITLE_STYLE}>
            <span className="command">$</span>
            {typedText}
            <span className="cursor"></span>
          </JobTitle>

          {/* Social media links */}
          <nav aria-label="Social media links">
            <SocialLinks style={socialLinksStyle}>
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
            </SocialLinks>
          </nav>

          {/* Scroll Down Arrow */}
          <ButtonsContainer style={buttonsStyle}>
            <ScrollArrow
              onClick={() => scrollToSection('experience')}
              role="button"
              tabIndex={0}
              aria-label="Scroll to work experience"
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); scrollToSection('experience'); } }}
            >
              <span style={SCROLL_LABEL_STYLE}>
                {((isMobile || isTablet) ? '' : 'Scroll Down')}
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
                style={ARROW_SVG_STYLE}
              >
                <path d="M12 5v14M5 12l7 7 7-7"/>
              </svg>
            </ScrollArrow>
          </ButtonsContainer>
        </div>
      </HeaderContent>

      {/* Banner at bottom (desktop) / top (mobile) */}
      <div style={bannerWrapperStyle}>
        {shouldShowPikachu && pikachuImage && (
          <img
            src={pikachuImage}
            alt="Pikachu mascot"
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            width={150}
            height={150}
            className="desktop-only-image"
            style={PIKACHU_STYLE}
          />
        )}

        <RunningBanner>
          <BannerContent>
            {bannerItems.map((item) => (
              <span key={item.text} className={item.blink ? 'blink' : ''}>
                {item.icon} {item.text}
              </span>
            ))}
            {bannerItems.map((item) => (
              <span key={`dup-${item.text}`} className={item.blink ? 'blink' : ''}>
                {item.icon} {item.text}
              </span>
            ))}
          </BannerContent>
        </RunningBanner>
      </div>
    </HeaderContainer>
  );
};

export default React.memo(Header);
