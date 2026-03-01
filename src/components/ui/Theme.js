import { createGlobalStyle } from 'styled-components';

// Modern, elegant color palette for data visualization and UI design
export const COLORS = {
  // Primary data-inspired colors
  primary: '#4361EE',       // Primary blue
  secondary: '#4CC9F0',     // Secondary cyan
  accent: '#F72585',        // Accent pink
  
  // Retro-themed accent colors
  retroPrimary: '#FDEE21',   // Bright yellow
  retroSecondary: '#F8BB00', // Amber
  retroTertiary: '#FF5722',  // Orange-red
  retroDarkBg: '#0F0F0F',    // Dark background
  retroDarkAccent: '#1E1E1E', // Slightly lighter dark accent
  retroPurple: '#9B5DE5',    // Terminal purple
  retroTeal: '#00F5D0',      // Terminal teal/cyan
  retroGreen: '#28C840',     // Terminal green dot

  // Hive (main page) colors
  hiveDarkBg: '#0B0F19',     // Deep dark blue-black
  hiveDarkAccent: '#131925',  // Slightly lighter dark accent
  hivePrimary: '#FDEE21',    // Primary accent (same as retroPrimary)
  
  // digital palette
  synthPink: '#FF41A6',    // Digital pink
  synthPurple: '#9B5DE5',  // Digital purple
  synthBlue: '#2CA8FF',    // Digital blue
  synthTeal: '#00F5D0',    // Digital teal
  synthGrid: '#FF41A620',  // Grid color with transparency

  // Data visualization palette
  dataBlue: '#4361EE',      // Primary data blue
  dataCyan: '#4CC9F0',      // Secondary data cyan
  dataPink: '#F72585',      // Accent data pink
  dataIndigo: '#3A0CA3',    // Deep indigo for emphasis
  dataViolet: '#7209B7',    // Violet for visual hierarchy
  dataBackground: '#F8F9FA', // Light background
  dataDark: '#111827',      // Dark background
  dataGray: '#4B5563',      // Text gray
  
  // Dark interface colors
  appleDark: '#1D1D1F',     // Dark interface
  appleLight: '#F5F5F7',    // Light interface
  appleGray: '#86868B',     // Interface gray
  appleBlue: '#0066CC',     // Interface blue
  
  // Social interface colors
  metaBlue: '#1877F2',      
  metaLightBlue: '#0668E1',
  
  // Modern design palette
  hipsterTeal: '#2A9D8F',
  hipsterCream: '#F8F9FB',
  hipsterBlue: '#457B9D',
  hipsterMint: '#DEF2F1',
  hipsterSlate: '#526D82',
  hipsterOrange: '#F7884F',
  hipsterGreen: '#4CAF50',
  hipsterRust: '#D95204',
  
  // Data visualization colors
  vizGreen: '#4CAF50',
  vizOrange: '#FF9800',
  vizPurple: '#9C27B0',
  vizRed: '#F44336',
  vizYellow: '#FFEB3B',
  vizBlue: '#2196F3',
  
  // Grayscale
  white: '#FFFFFF',
  offWhite: '#F8F9FA',
  lightGray: '#E9ECEF',
  gray: '#6B7280',
  darkGray: '#374151',
  charcoal: '#1F2937',
  black: '#000000',
  
  // Backgrounds and gradients
  darkBg: '#111827',        // Modern dark background
  mediumBg: '#1F2937',      // Medium background
  lightBg: '#F9FAFB',       // Light background
  subtleGradient: 'linear-gradient(90deg, #4361EE, #4CC9F0)',
  modernGradient: 'linear-gradient(135deg, #4361EE, #7209B7)',
  dataGradient: 'linear-gradient(135deg, #4361EE, #3A0CA3)',
  accentGradient: 'linear-gradient(135deg, #F72585, #7209B7)',
  glassGradient: 'linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
};

export const FONTS = {
  primary: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",       // Modern clean UI font
  secondary: "'Plus Jakarta Sans', 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif", // Contemporary sans
  modern: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",                 // Modern system font
  mono: "'JetBrains Mono', 'SF Mono', monospace",                                           // Modern code font
  display: "'Fraunces', 'Playfair Display', serif",                                         // Contemporary serif
  accent: "'Space Grotesk', sans-serif",                                                     // Modern tech font
  data: "'Söhne', 'Helvetica Neue', sans-serif",                                            // Data visualization style
  title: "'Cabinet Grotesk', 'SF Pro Display', sans-serif",                                 // Contemporary title font
  special: "'Mona Sans', 'SF Pro Display', sans-serif",                                     // Special modern font
};

export const GlobalStyle = createGlobalStyle`
  /* Fonts loaded via <link> in public/index.html for non-blocking load */
  
  :root {
    --primary: ${COLORS.primary};
    --secondary: ${COLORS.secondary};
    --accent: ${COLORS.accent};
    --metaBlue: ${COLORS.metaBlue};
    --metaLightBlue: ${COLORS.metaLightBlue};
    --appleDark: ${COLORS.appleDark};
    --appleLight: ${COLORS.appleLight};
    --appleGray: ${COLORS.appleGray};
    --appleBlue: ${COLORS.appleBlue};
    --hipsterOrange: ${COLORS.hipsterOrange};
    --hipsterGreen: ${COLORS.hipsterGreen};
    --hipsterRust: ${COLORS.hipsterRust};
    --hipsterTeal: ${COLORS.hipsterTeal};
    --hipsterCream: ${COLORS.hipsterCream};
    --darkBg: ${COLORS.darkBg};
    --mediumBg: ${COLORS.mediumBg};
    --lightBg: ${COLORS.lightBg};
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ::selection {
    background: ${COLORS.retroPrimary};
    color: ${COLORS.retroDarkBg};
  }

  html {
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.15) transparent;
  }

  ::-webkit-scrollbar { width: 8px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.15);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.25);
  }

  /* Respect user motion preferences */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  body {
    font-family: ${FONTS.primary};
    background-color: ${COLORS.retroDarkBg};
    color: ${COLORS.white};
    overflow-x: hidden;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  /* Focus-visible for keyboard navigation accessibility */
  :focus-visible {
    outline: 2px solid ${COLORS.retroPrimary};
    outline-offset: 2px;
  }

  :focus:not(:focus-visible) {
    outline: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${FONTS.title};
    font-weight: 500;
    letter-spacing: -0.5px;
    line-height: 1.3;
    color: ${COLORS.dataDark};
  }

  /* Modern section titles with data engineering inspired accent */
  .section-title {
    font-family: ${FONTS.title};
    font-size: 3rem;
    color: ${COLORS.dataDark};
    margin-bottom: 2.5rem;
    text-align: center;
    position: relative;
    font-weight: 600;
    letter-spacing: -1px;
    
    /* Line accents and data points removed */
    
    /* Hover animation removed */
  }

  /* Retro-inspired button style */
  .retro-button {
    display: inline-block;
    font-family: ${FONTS.secondary};
    font-size: 0.85rem;
    padding: 0.6rem 1rem;
    margin: 0.5rem;
    color: ${COLORS.retroPrimary};
    background-color: transparent;
    border: 2px solid ${COLORS.retroPrimary};
    border-radius: 0;
    position: relative;
    text-transform: uppercase;
    text-shadow: 0 0 5px ${COLORS.retroPrimary};
    overflow: hidden;
    cursor: pointer;
    transition: color 0.3s ease, text-shadow 0.3s ease, transform 0.3s ease;
    letter-spacing: 1px;

    &:before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: linear-gradient(90deg,
        ${COLORS.retroPrimary},
        ${COLORS.retroSecondary},
        ${COLORS.retroPrimary}
      );
      z-index: -1;
    }

    &:after {
      content: '';
      position: absolute;
      top: 2px;
      left: 2px;
      right: 2px;
      bottom: 2px;
      background: ${COLORS.retroDarkBg};
      z-index: -1;
    }

    &:hover {
      color: ${COLORS.white};
      text-shadow: 0 0 8px ${COLORS.retroPrimary};
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
    }
  }

  /* Terminal — only final pseudo-element definitions matter */
  .terminal {
    background-color: ${COLORS.dataDark};
    border: none;
    border-radius: 12px;
    padding: 1.75rem 1.5rem 1.5rem;
    font-family: ${FONTS.mono};
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 32px;
      background: rgba(31, 41, 55, 0.8);
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 12px 12px 0 0;
      z-index: 1;
    }

    &:after {
      content: '';
      position: absolute;
      top: 10px;
      left: 12px;
      width: 12px;
      height: 12px;
      background: #ff5f57;
      border-radius: 50%;
      box-shadow: 20px 0 0 #febc2e, 40px 0 0 #28c840;
      z-index: 2;
    }
  }

  /* Card style */
  .retro-card {
    background-color: ${COLORS.white};
    border: none;
    border-radius: 12px;
    padding: 1.75rem;
    margin: 1.25rem 0;
    position: relative;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    overflow: hidden;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background: linear-gradient(to right, ${COLORS.dataBlue}, ${COLORS.dataCyan}, ${COLORS.dataPink});
      opacity: 0.9;
      z-index: 1;
    }

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 768px) {
      padding: 1.5rem;
    }
  }

  /* Subtle modern highlight text effect */
  .glow-text {
    color: ${COLORS.white};
    position: relative;
    display: inline-block;
    font-weight: 500;
    
    &:after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      background: ${COLORS.accent};
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.3s ease;
    }
    
    &:hover:after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
  
  /* Machine Learning text highlight for "Machine Loehrning" */
  .ml-text {
    position: relative;
    display: inline-block;
    color: ${COLORS.hipsterOrange};
    font-weight: 600;
    background: ${COLORS.modernGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    
    /* No blurred pseudo-element for performance */
  }

  /* Modern grid background */
  .retro-grid {
    position: relative;
    
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: 
        radial-gradient(${COLORS.accent}10 1px, transparent 1px);
      background-size: 40px 40px;
      z-index: 0;
      pointer-events: none;
      opacity: 0.1;
    }
  }

  /* Subtle gradient overlay effect */
  .gradient-overlay {
    position: relative;
    overflow: hidden;
    
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.03) 0%,
        rgba(255, 255, 255, 0) 100%
      );
      pointer-events: none;
      z-index: 1;
    }
  }
  
  /* Modern timeline styles for work experience */
  .timeline-item {
    position: relative;
    padding-left: 30px;
    margin-bottom: 40px;
    transition: transform 0.3s ease;
    
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 2px;
      background: ${COLORS.accent};
      opacity: 0.5;
    }
    
    &:after {
      content: '';
      position: absolute;
      left: -6px;
      top: 0;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: ${COLORS.accent};
      border: 2px solid ${COLORS.darkBg};
      box-shadow: 0 0 0 4px rgba(46, 196, 182, 0.1);
    }
    
    &:hover {
      transform: translateX(5px);
      
      &:after {
        background: ${COLORS.hipsterOrange};
        box-shadow: 0 0 0 6px rgba(247, 136, 47, 0.1);
      }
    }
  }

  /* Container */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 1;
  }

  /* Section styles */
  section {
    padding: 6rem 0;
    position: relative;
  }

  /* No global animation keyframes — all animations are component-scoped */

  /* Media queries */
  @media (max-width: 768px) {
    .section-title {
      font-size: 2rem;
    }
    
    section {
      padding: 4rem 0;
    }
  }

  @media (max-width: 480px) {
    .section-title {
      font-size: 1.5rem;
    }
    
    .retro-button {
      font-size: 0.7rem;
      padding: 0.5rem 0.8rem;
    }
  }
`;

export default GlobalStyle;