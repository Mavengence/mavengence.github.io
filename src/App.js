import React, { Suspense, lazy } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BiCodeAlt, BiData } from 'react-icons/bi';
import { GlobalStyle } from './components/ui/Theme';
import Header from './components/Header/Header';
import { COLORS } from './components/ui/Theme';

// Lazy load non-critical components
const WorkExperience = lazy(() => import('./components/WorkExperience/WorkExperience'));
const Projects = lazy(() => import('./components/Projects/Projects'));
const RunningBanner = lazy(() => import('./components/ui/RunningBanner'));
const Console = lazy(() => import('./components/Console/Console'));
const QuantumBackground = lazy(() => import('./components/ui/QuantumBackground'));

/**
 * Animation keyframes for UI element glow effects
 * Creates pulsating shadow that alternates between lighter and darker states
 */
const glow = keyframes`
  0%, 100% { filter: drop-shadow(0 0 8px ${COLORS.hivePrimary}40); }
  50% { filter: drop-shadow(0 0 12px ${COLORS.hivePrimary}70); }
`;

/**
 * Subtle blinking animation for pixel elements
 * Creates a gentle "breathing" effect without being distracting
 */
const pixelBlink = keyframes`
  0%, 45%, 55%, 100% { opacity: 0.3; }
  50% { opacity: 0.5; }
`;

/**
 * Main application container 
 * Handles overall layout structure and applies background effects
 */
const AppContainer = styled.div`
  position: relative;
  background-color: ${COLORS.hiveDarkBg};
  min-height: 100vh;
  
  /* Vignette background effect with radial gradient */
  &:after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(
        circle at center,
        ${COLORS.hiveDarkAccent} 0%,
        ${COLORS.hiveDarkBg} 80%
      );
    z-index: 0;
    pointer-events: none;
    transition: all 1.5s ease-in-out;
  }
  
  /* Footer styling with grid overlay */
  footer {
    background: ${COLORS.appleDark};
    color: ${COLORS.white};
    padding: 1.5rem;
    text-align: center;
    position: relative;
    font-size: 0.9rem;
    overflow: hidden;
    z-index: 30;
    
    /* Grid pattern overlay */
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: 
        linear-gradient(${COLORS.white}08 1px, transparent 1px),
        linear-gradient(90deg, ${COLORS.white}08 1px, transparent 1px);
      background-size: 20px 20px;
      z-index: 0;
    }
    
    p {
      position: relative;
      z-index: 1;
    }
    
    a {
      color: ${COLORS.hivePrimary};
      text-decoration: none;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;


/**
 * Main App component
 * Handles scroll-based animations and overall page structure
 * Uses memoization to prevent unnecessary re-renders
 */
const App = React.memo(function App() {
  // State for tracking screen size
  const [isMobile, setIsMobile] = React.useState(false);
  
  // Check for mobile devices on component mount
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Get scroll progress for scroll-based animations
  const { scrollYProgress } = useScroll();
  
  /**
   * Scroll-based color transition effect
   * Applies subtle hue rotation and brightness adjustment based on scroll position
   */
  const backgroundGradientRotate = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      'hue-rotate(0deg) brightness(1)',
      'hue-rotate(5deg) brightness(1.05)',
      'hue-rotate(10deg) brightness(1.1)',
      'hue-rotate(15deg) brightness(1.05)',
      'hue-rotate(0deg) brightness(1)'
    ]
  );
  
  /**
   * Subtle scaling effect on scroll
   * Creates a gentle "zoom" effect as user scrolls down the page
   */
  const backgroundScale = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [1, 1.05, 1.1, 1.05, 1]
  );
  
  
  /**
   * Vignette intensity adjustment based on scroll position
   * Creates dynamic lighting effect that responds to user scrolling
   */
  const vignetteIntensity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    [0.5, 0.6, 0.7, 0.5]
  );
  
  /**
   * Invisible placeholder component for Suspense fallbacks
   * Maintains layout during lazy-loaded component rendering
   */
  const LoadingPlaceholder = () => (
    <div style={{ 
      width: '100%',
      height: '100%',
      backgroundColor: COLORS.hiveDarkBg,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      opacity: 0 // Invisible placeholder
    }} />
  );

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        
        {/* Quantum-inspired animated background layer */}
        <Suspense fallback={<LoadingPlaceholder />}>
          <QuantumBackground />
        </Suspense>
        
        {/* Dynamic color layer - responds to scroll position */}
        <motion.div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `
              linear-gradient(217deg, rgba(49, 130, 206, 0.15), rgba(49, 130, 206, 0) 70.71%),
              linear-gradient(127deg, rgba(229, 62, 62, 0.15), rgba(229, 62, 62, 0) 70.71%),
              linear-gradient(336deg, rgba(253, 238, 33, 0.18), rgba(253, 238, 33, 0) 70.71%)
            `,
            backgroundSize: '200% 200%',
            filter: backgroundGradientRotate,
            scale: backgroundScale,
            transformOrigin: 'center',
            zIndex: 0,
            pointerEvents: 'none',
            willChange: 'filter, transform' // Hint for browser optimization
          }}
        />
        
        {/* Vignette overlay - adds depth and focus with dynamic intensity */}
        <motion.div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            boxShadow: 'inset 0 0 150px 60px rgba(0, 0, 0, 0.8)',
            opacity: vignetteIntensity,
            zIndex: 2,
            pointerEvents: 'none',
            mixBlendMode: 'multiply',
            willChange: 'opacity' // Hint for browser optimization
          }}
        />
        
        {/* Main content container with proper semantic structure */}
        <main style={{ position: 'relative', zIndex: 20 }}>
          <Header />
          
          <article id="experience">
            <Suspense fallback={<LoadingPlaceholder />}>
              <WorkExperience />
            </Suspense>
          </article>
          
          <article id="projects">
            <Suspense fallback={<LoadingPlaceholder />}>
              <Projects />
            </Suspense>
          </article>
          
          {/* Personal interests banner */}
          <section style={{ padding: 0, marginTop: '-1rem', marginBottom: '-2rem' }}>
            <Suspense fallback={<LoadingPlaceholder />}>
              <RunningBanner items={[
                { text: "Cooking", blink: true, icon: <BiCodeAlt /> },
                { text: "Programming", blink: false, icon: <BiCodeAlt /> },
                { text: "Piano", blink: true, icon: <BiCodeAlt /> },
                { text: "Guitar", blink: false, icon: <BiCodeAlt /> },
                { text: "Reading", blink: true, icon: <BiCodeAlt /> },
                { text: "Timchi", blink: false, icon: <BiCodeAlt /> },
                { text: "Bouldering", blink: true, icon: <BiCodeAlt /> },
                { text: "Golf", blink: false, icon: <BiCodeAlt /> },
                { text: "Padel", blink: true, icon: <BiCodeAlt /> },
              ]} />
            </Suspense>
          </section>

          {/* Only render console on non-mobile devices */}
          {!isMobile && (
            <section id="console">
              <Suspense fallback={<LoadingPlaceholder />}>
                <Console />
              </Suspense>
            </section>
          )}
        </main>
        
        <footer>
          <p>
            &copy; {new Date().getFullYear()} Tim Loehr · Made with 
            <span style={{ color: COLORS.retroPrimary }}> Machine Loehrning and Rimchen</span>
          </p>
        </footer>
      </AppContainer>
    </>
  );
});

export default App;