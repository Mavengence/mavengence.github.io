import React, { Suspense, lazy, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { BiCodeAlt } from 'react-icons/bi';
import Header from './components/Header/Header';
import { GlobalStyle, COLORS, FONTS } from './components/ui/Theme';

// Lazy load non-critical components
const WorkExperience = lazy(() => import('./components/WorkExperience/WorkExperience'));
const Projects = lazy(() => import('./components/Projects/Projects'));
const RunningBanner = lazy(() => import('./components/ui/RunningBanner'));
const Console = lazy(() => import('./components/Console/Console'));
const Contact = lazy(() => import('./components/Contact/Contact'));

// Prefetch all lazy chunks after initial paint so they're cached before scroll
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    requestIdleCallback(() => {
      import('./components/WorkExperience/WorkExperience');
      import('./components/Projects/Projects');
      import('./components/Contact/Contact');
      import('./components/Console/Console');
      import('./components/ui/RunningBanner');
    });
  }, { once: true });
}

// ── Gradient accent line at top of page (like Linear.app) ────────────
const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
`;

// ── Ambient orb drift animations (GPU-composited: transform only) ────
const drift1 = keyframes`
  0%, 100% { transform: translate3d(0, 0, 0); }
  25% { transform: translate3d(60px, -80px, 0); }
  50% { transform: translate3d(-40px, 40px, 0); }
  75% { transform: translate3d(80px, 60px, 0); }
`;

const drift2 = keyframes`
  0%, 100% { transform: translate3d(0, 0, 0); }
  25% { transform: translate3d(-70px, 50px, 0); }
  50% { transform: translate3d(50px, -60px, 0); }
  75% { transform: translate3d(-30px, -40px, 0); }
`;

const drift3 = keyframes`
  0%, 100% { transform: translate3d(0, 0, 0); }
  33% { transform: translate3d(40px, 70px, 0); }
  66% { transform: translate3d(-60px, -30px, 0); }
`;

/**
 * Main application container
 * All background effects are pure CSS — no canvas, no JS scroll listeners
 */
const AppContainer = styled.div`
  position: relative;
  background-color: ${COLORS.hiveDarkBg};
  min-height: 100vh;

  /* Single radial gradient */
  &:after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, ${COLORS.hiveDarkAccent} 0%, ${COLORS.hiveDarkBg} 80%);
    z-index: 0;
    pointer-events: none;
  }

  /* Vignette */
  &:before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, transparent 40%, rgba(0, 0, 0, 0.7) 100%);
    z-index: 1;
    pointer-events: none;
  }

  /* Footer */
  footer {
    background: linear-gradient(180deg, ${COLORS.appleDark} 0%, #111 100%);
    color: ${COLORS.white};
    padding: 2.5rem 1.5rem;
    text-align: center;
    position: relative;
    font-size: 0.85rem;
    z-index: 30;
    border-top: 1px solid rgba(255, 255, 255, 0.06);

    p {
      position: relative;
      z-index: 1;
      font-family: ${FONTS.mono};
      letter-spacing: 0.5px;
      opacity: 0.7;
    }
    a {
      color: ${COLORS.retroPrimary};
      text-decoration: none;
      transition: opacity 0.2s ease;
      &:hover { opacity: 0.8; }
    }
  }
`;

/**
 * Ambient floating gradient orbs — inspired by Linear.app / Vercel.
 * Only animate transform (GPU-composited). Zero layout/paint cost.
 */
const AmbientOrbs = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Orb = styled.div`
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  will-change: transform;
`;

const Orb1 = styled(Orb)`
  width: 500px;
  height: 500px;
  top: 10%;
  left: 15%;
  background: radial-gradient(circle, rgba(67, 97, 238, 0.06) 0%, transparent 70%);
  animation: ${drift1} 80s ease-in-out infinite;
`;

const Orb2 = styled(Orb)`
  width: 400px;
  height: 400px;
  top: 50%;
  right: 10%;
  background: radial-gradient(circle, rgba(247, 37, 133, 0.04) 0%, transparent 70%);
  animation: ${drift2} 70s ease-in-out infinite;
`;

const Orb3 = styled(Orb)`
  width: 350px;
  height: 350px;
  bottom: 20%;
  left: 40%;
  background: radial-gradient(circle, rgba(76, 201, 240, 0.04) 0%, transparent 70%);
  animation: ${drift3} 90s ease-in-out infinite;
`;

/**
 * Animated gradient accent line — fixed at top of viewport.
 * Tiny element (2px tall), uses background-position animation.
 */
const AccentLine = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  z-index: 9999;
  background: linear-gradient(
    90deg,
    ${COLORS.dataBlue},
    ${COLORS.dataCyan},
    ${COLORS.dataPink},
    ${COLORS.dataViolet},
    ${COLORS.dataBlue}
  );
  background-size: 200% 100%;
  animation: ${gradientShift} 8s linear infinite;
  pointer-events: none;
`;

// ── Static style constants (never re-created) ───────────────────────

const EMPTY_PLACEHOLDER_STYLE = { width: '100%', height: '100%', backgroundColor: COLORS.hiveDarkBg, opacity: 1 };
const EMPTY_PLACEHOLDER = <div style={EMPTY_PLACEHOLDER_STYLE} />;

const MAIN_STYLE = { position: 'relative', zIndex: 20 };
const BANNER_SECTION_STYLE = { padding: 0, marginTop: '-1rem', marginBottom: '-2rem' };
const FOOTER_COPYRIGHT_STYLE = { opacity: 0.5 };
const FOOTER_NAME_STYLE = { fontWeight: 600, opacity: 0.9 };
const FOOTER_DIVIDER_STYLE = { opacity: 0.4, margin: '0 0.5rem' };
const FOOTER_BRAND_STYLE = { color: COLORS.retroPrimary, opacity: 0.8 };
const CURRENT_YEAR = new Date().getFullYear();

const App = React.memo(function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    let frameRequest = null;
    const onResize = () => {
      if (frameRequest) cancelAnimationFrame(frameRequest);
      frameRequest = requestAnimationFrame(() => {
        setIsMobile(window.innerWidth <= 768);
      });
    };
    onResize();
    window.addEventListener('resize', onResize, { passive: true });
    return () => {
      window.removeEventListener('resize', onResize);
      if (frameRequest) cancelAnimationFrame(frameRequest);
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <AccentLine />
      <AppContainer>
        {/* Ambient gradient orbs — GPU-composited, zero lag */}
        <AmbientOrbs aria-hidden="true">
          <Orb1 />
          <Orb2 />
          <Orb3 />
        </AmbientOrbs>

        <main style={MAIN_STYLE}>
          <Header />

          <Suspense fallback={EMPTY_PLACEHOLDER}>
            <WorkExperience />
          </Suspense>

          <Suspense fallback={EMPTY_PLACEHOLDER}>
            <Projects />
          </Suspense>

          {!isMobile && (
            <section style={BANNER_SECTION_STYLE} aria-label="Personal interests">
              <Suspense fallback={EMPTY_PLACEHOLDER}>
                <RunningBanner
                  items={[
                    { text: "Cooking", blink: true, icon: <BiCodeAlt /> },
                    { text: "Programming", blink: false, icon: <BiCodeAlt /> },
                    { text: "Piano", blink: true, icon: <BiCodeAlt /> },
                    { text: "Guitar", blink: false, icon: <BiCodeAlt /> },
                    { text: "Reading", blink: true, icon: <BiCodeAlt /> },
                    { text: "Timchi", blink: false, icon: <BiCodeAlt /> },
                    { text: "Bouldering", blink: true, icon: <BiCodeAlt /> },
                    { text: "Golf", blink: false, icon: <BiCodeAlt /> },
                    { text: "Padel", blink: true, icon: <BiCodeAlt /> },
                  ]}
                />
              </Suspense>
            </section>
          )}

          {!isMobile && (
            <Suspense fallback={EMPTY_PLACEHOLDER}>
              <Console />
            </Suspense>
          )}

          <Suspense fallback={EMPTY_PLACEHOLDER}>
            <Contact />
          </Suspense>
        </main>

        <footer>
          <p itemScope itemType="http://schema.org/Person">
            <span style={FOOTER_COPYRIGHT_STYLE}>&copy; {CURRENT_YEAR}</span>
            {' '}
            <span itemProp="name" style={FOOTER_NAME_STYLE}>Tim Loehr</span>
            {' '}
            <span style={FOOTER_DIVIDER_STYLE}>|</span>
            {' '}
            <span style={FOOTER_BRAND_STYLE}>Machine Loehrning</span>
          </p>
        </footer>
      </AppContainer>
    </>
  );
});

export default App;
