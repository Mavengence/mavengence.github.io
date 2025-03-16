import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import RetroSection from '../ui/RetroSection';
import RunningBanner from '../ui/RunningBanner';
import { COLORS, FONTS } from '../ui/Theme';

// Helper function to convert hex to RGB
const hexToRgb = (hex) => {
  // Remove the # if present
  hex = hex.replace('#', '');
  
  // Parse the hex values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  return `${r}, ${g}, ${b}`;
};

// Subtle pulse animation
const pulse = keyframes`
  0%, 100% { opacity: 0.9; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.05); }
`;

// container for timeline
const ExperienceContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  padding: 60px 0;
  overflow: visible;
  z-index: 10;
`;

const TimelineAxis = styled.div`
  position: absolute;
  left: -27px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 1px;
  z-index: 1;
  
  /* Top marker dot */
  &:before {
    content: '';
    position: absolute;
    top: -6px;
    left: -4px;
    width: 10px;
    height: 10px;
    background: #3182CE;
    border-radius: 50%;
  }
  
  /* Bottom marker dot */
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: -3px;
    width: 8px;
    height: 8px;
    background: #3182CE;
    border-radius: 50%;
    animation: ${pulse} 3s infinite ease-in-out;
  }
  
  @media (max-width: 768px) {
    left: -47px; /* Aligned with left blue connector line */
  }
  
  /* Hide on very small screens */
  @media (max-width: 430px) {
    display: none;
  }
`;

// year marker for timeline
const YearMarker = styled(motion.div)`
  position: absolute;
  left: -15px;
  background: rgba(49, 130, 206, 0.9);
  color: white;
  padding: 6px 14px;
  border-radius: 16px;
  font-family: ${FONTS.mono};
  font-weight: 500;
  font-size: 14px;
  top: ${props => props.top || '0'};
  z-index: 2;
  transform: translateY(-50%);
  letter-spacing: 0.5px;
  backdrop-filter: blur(8px);
  
  /* Modern connector to timeline (left side) */
  &:after {
    content: '';
    position: absolute;
    right: auto;
    left: -12px;
    top: 50%;
    width: 12px;
    height: 1px;
    background-color: rgba(49, 130, 206, 0.7);
    transform: translateY(-50%);
  }
  
  /* No right connector */
  
  /* Subtle hover effect */
  transition: all 0.2s ease;
  &:hover {
    transform: translateY(-50%) translateX(3px);
    background: rgba(49, 130, 206, 1);
  }
  
  /* Show/hide year versions based on screen size */
  .mobile-year {
    display: none;
  }
  
  @media (max-width: 768px) {
    left: -35px;
    font-size: 12px;
    padding: 4px 10px;
    z-index: 10;
    background: rgba(49, 130, 206, 1); /* Increased opacity for better visibility */
    box-shadow: 0 0 10px rgba(49, 130, 206, 0.5);
    
    .desktop-year {
      display: none;
    }
    
    .mobile-year {
      display: inline;
    }
    
    &:after {
      width: 10px;
      right: auto;
      left: -15px;
    }
    
    /* No right connector for mobile */
  }
  
  /* Hide on very small screens */
  @media (max-width: 430px) {
    display: none;
  }
`;

// glass-morphism job card with consistent spacing
const ExperienceCard = styled(motion.div)`
  position: relative;
  background: ${props => `linear-gradient(120deg, rgba(22, 22, 26, 0.9) 0%, rgba(${props.bgColorRGB || '22, 22, 26'}, 0.06) 100%)`};
  border-radius: 16px;
  padding: 28px;
  margin: 0 0 70px 70px; /* Moved further right to avoid interference with year buttons */
  width: calc(100% - 100px);
  min-height: 160px; /* Slightly reduced to fit all cards comfortably */
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15), 0 0 30px rgba(${props => props.bgColorRGB || '0, 0, 0'}, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid ${props => `rgba(${props.bgColorRGB || '255, 255, 255'}, 0.1)`};
  z-index: 2;
  display: grid;
  grid-template-columns: 220px 1fr;
  grid-gap: 28px;
  overflow: hidden;
  transition: all 0.3s ease, box-shadow 0.4s ease;
  
  /* Company-themed pattern */
  .company-pattern {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => props.bgPattern || 'none'};
    pointer-events: none;
    opacity: 0.5;
    transition: opacity 0.3s ease;
    z-index: 0;
  }
  
  /* Subtle gradient overlay for depth */
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.05) 0%,
      rgba(255, 255, 255, 0) 50%
    );
    pointer-events: none;
    z-index: 1;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15), 
                0 0 40px rgba(${props => props.bgColorRGB || '0, 0, 0'}, 0.1),
                0 0 20px rgba(${props => props.bgColorRGB || '0, 0, 0'}, 0.07);
    
    .company-pattern {
      opacity: 0.8;
    }
  }
  
  /* Clean connector to timeline */
  &:before {
    content: '';
    position: absolute;
    left: -65px;
    top: 50%;
    width: 65px;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-50%);
  }
  
  /* Add proper spacing for the first card */
  &:first-of-type {
    margin-top: 50px;
  }
  
  /* Timeline marker dot */
  .timeline-dot {
    position: absolute;
    left: -70px;
    top: 50%;
    width: 10px;
    height: 10px;
    background: ${props => props.accentColor || '#3182CE'};
    border-radius: 50%;
    transform: translateY(-50%);
    z-index: 3;
    transition: all 0.3s ease;
  }
  
  /* Modern hover state */
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
    border-color: rgba(255, 255, 255, 0.2);
    
    .timeline-dot {
      transform: translateY(-50%) scale(1.2);
      box-shadow: 0 0 12px ${props => props.accentColor || '#3182CE'};
    }
  }
  
  /* Responsive styles */
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }
  
  @media (max-width: 768px) {
    margin-left: 65px;
    width: calc(100% - 80px);
    
    &:before {
      left: -55px;
      width: 55px;
    }
    
    .timeline-dot {
      left: -60px;
    }
  }
  
  /* Adjust margins for very small screens */
  @media (max-width: 430px) {
    margin-left: 15px;
    width: calc(100% - 30px);
    
    &:before, .timeline-dot {
      display: none;
    }
  }
`;

const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
  
  /* Modern company logo */
  .company-logo {
    width: 70px;
    height: 70px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    border-radius: 14px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
    
    img {
      width: 85%;
      height: 85%;
      object-fit: contain;
    }
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    }
    
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
      pointer-events: none;
    }
  }
  
  /* Clean company name */
  .company-name {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 10px;
    color: white;
    font-family: ${FONTS.title};
    letter-spacing: -0.5px;
    position: relative;
    display: inline-block;
    
    /* Subtle underline effect */
    &:after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 30px;
      height: 2px;
      background-color: ${props => props.logoBackground || '#3182CE'};
    }
  }
  
  /* Modern job title */
  .job-title {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 18px;
    font-weight: 500;
    font-family: ${FONTS.accent};
    position: relative;
    display: inline-block;
    padding: 5px 14px;
    background: ${props => `rgba(${hexToRgb(props.logoBackground)}, 0.12)` || 'rgba(49, 130, 206, 0.1)'};
    border-radius: 6px;
    letter-spacing: 0.3px;
    border: 1px solid ${props => `rgba(${hexToRgb(props.logoBackground)}, 0.2)` || 'rgba(49, 130, 206, 0.2)'};
    
    /* Subtle glow effect */
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: ${props => props.logoBackground || '#3182CE'};
      opacity: 0.08;
      filter: blur(10px);
      border-radius: 6px;
      z-index: -1;
    }
    
    /* Subtle hover */
    transition: all 0.3s ease;
    &:hover {
      background: ${props => `rgba(${hexToRgb(props.logoBackground)}, 0.18)` || 'rgba(49, 130, 206, 0.15)'};
      transform: translateY(-2px);
    }
  }
  
  /* Clean date range */
  .date-range {
    font-family: ${FONTS.mono};
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 12px;
  }
`;

// job details
const JobDetails = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
  
  /* Clean, readable job description */
  .job-description {
    font-family: ${FONTS.primary};
    font-size: 15px;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 24px;
    position: relative;
    padding: 0;
    margin: 0 0 24px 0;
    
    ul {
      list-style-type: none;
      padding: 0;
      margin: 0 0 10px 0;
    }
    
    ul li {
      padding-left: 15px;
      position: relative;
      margin-bottom: 6px;
    }
    
    ul li:before {
      content: "•";
      position: absolute;
      left: 0;
      top: 0;
    }
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
`;

const TechButton = styled.button`
  font-size: 0.7rem;
  padding: 0.35rem 0.75rem;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-family: ${FONTS.accent};
  font-weight: 500;
  letter-spacing: 0.5px;
  border-radius: 14px;
  transition: all 0.2s ease;
  border: none;
  cursor: pointer;
  
  /* Exact same hover effect as in Projects component */
  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;

// Experience data with company information
const experienceData = [
  {
    id: 1,
    year: 2025,
    company: 'Meta',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png',
    logoBackground: '#1877F2', // Blue
    bgColorRGB: hexToRgb('#1877F2'),
    bgPattern: 'radial-gradient(circle at 90% 10%, rgba(24, 119, 242, 0.08), transparent 30%)',
    title: 'Data Engineer',
    dateRange: 'February 2025 - Present',
    // Simple array of strings - each item will be a bullet point
    descriptionPoints: [
      'Still learning...'
    ],
    technologies: ['Python', 'PyTorch', 'SQL', 'Hadoop', 'Spark', 'A/B Testing']
  },
  {
    id: 2,
    year: 2024,
    company: 'Red Bull',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Logo_of_Red_bull.svg',
    logoBackground: '#D52B1E', // Red
    bgColorRGB: hexToRgb('#D52B1E'),
    bgPattern: 'linear-gradient(135deg, rgba(213, 43, 30, 0.07) 0%, transparent 70%)',
    title: 'Data Scientist',
    dateRange: 'July 2024 - January 2025',
    // Simple array of strings - each item will be a bullet point
    descriptionPoints: [
      'Applying data science to build full stack MLOps data products to support all parts of Red Bulls supply chain processes.',
      'Leading the Databricks integration by designing robust workflows, managing asset bundles, and setting up CI/CD pipelines.',
      'Developing an R-based tool to automate data sourcing, using YAML configurations and dependency injection, enabling.'
    ],
    technologies: ['Python', 'R', 'Databricks', 'Snowflake', 'R Studio', 'SQL', 'SAP S4/HANA']
  },
  {
    id: 3,
    year: 2022,
    company: 'Apple',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
    logoBackground: '#000000', // Black
    bgColorRGB: hexToRgb('#555555'), // Using dark gray for better visibility
    bgPattern: 'repeating-linear-gradient(to right, rgba(85, 85, 85, 0.02), rgba(85, 85, 85, 0.02) 1px, transparent 1px, transparent 30px)',
    title: 'Data Scientist',
    dateRange: 'October 2022 - May 2024',
    // Simple array of strings - each item will be a bullet point
    descriptionPoints: [
      'Collaborated with engineers and business stakeholders to build full stack, MLOps data products for Apples supply chain business.',
      'Developed and deployed anomaly detection, time series forecasting, and NLP tools that automated repetitive tasks, saving over 100 hours per week across departments and reducing manual workload by 60%.',
      'Contributed to a Python package project that integrated core AI tools, reducing project onboarding time by 80%, from 3-4 weeks to just 2-3 days, accelerating anomaly detection deployment across teams.'
    ],
    technologies: ['Python', 'SQL', 'Snowflake', 'DataRobot', 'K8S', 'Docker', 'Git']
  },
  {
    id: 4,
    year: 2021,
    company: 'Amazon',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    logoBackground: '#FF9900', // Orange
    bgColorRGB: hexToRgb('#FF9900'),
    bgPattern: 'radial-gradient(circle at 90% 90%, rgba(255, 153, 0, 0.08), transparent 40%)',
    title: 'Business Intelligence Engineer - Intern',
    dateRange: 'February 2021 - July 2021',
    // Simple array of strings - each item will be a bullet point
    descriptionPoints: [
      'Optimized SQL scripts by reducing length over 50% and built a multiple regression model to predict upcoming number of sales.',
      'Optimized the data retrieval SQL scripts from the Redshift cluster.',
      'Translated long SQL prediction scripts into data pipelines with Python.'
    ],
    technologies: ['Python', 'SQL', 'Pandas', 'Redshift', 'AWS']
  }
];

const WorkExperience = () => {
  // State for tracking active cards
  const [activeCard, setActiveCard] = useState(null);
  
  const { scrollYProgress } = useScroll();

  return (
    <>
      <RetroSection 
        id="experience"
        title="WORK"
        titleColor="#3182CE" // Modern blue color scheme
        gridColor="#3182CE"
        gridOpacity="0.05" // Subtle grid
        className="experience-section"
      >
        <InView threshold={0.1} triggerOnce>
          {({ ref, inView }) => (
            <ExperienceContainer ref={ref}>
              {/* Timeline axis */}
              <TimelineAxis />
              
              {/* Year markers with subtle blue styling - positioned to match card centers */}
              <YearMarker 
                top="17%" 
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="year-marker"
              >
                <span className="desktop-year">2025</span>
                <span className="mobile-year">25</span>
              </YearMarker>
              
              <YearMarker 
                top="36%" /* Red Bull position - percentage for responsiveness */
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
                className="year-marker"
              >
                <span className="desktop-year">2024</span>
                <span className="mobile-year">24</span>
              </YearMarker>
              
              <YearMarker 
                top="60%" 
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
                className="year-marker"
              >
                <span className="desktop-year">2022</span>
                <span className="mobile-year">22</span>
              </YearMarker>
              
              <YearMarker 
                top="85%" /* Amazon position - percentage for responsiveness */
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.45, ease: "easeOut" }}
                className="year-marker"
              >
                <span className="desktop-year">2021</span>
                <span className="mobile-year">21</span>
              </YearMarker>
              
              {/* Experience cards with glass-morphism styling */}
              {experienceData.map((job, index) => (
                <ExperienceCard
                  key={job.id}
                  accentColor={job.logoBackground}
                  bgColorRGB={job.bgColorRGB}
                  bgPattern={job.bgPattern}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { 
                    opacity: 1, 
                    x: 0,
                    transition: { 
                      duration: 0.5, 
                      delay: 0.2 * index,
                      ease: "easeOut"
                    }
                  } : {}}
                  onMouseEnter={() => setActiveCard(job.id)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  {/* Company-themed background pattern */}
                  <div className="company-pattern" />
                  
                  {/* Timeline marker dot */}
                  <div className="timeline-dot" />
                  
                  {/* Company info side with modern styling */}
                  <CompanyInfo logoBackground={job.logoBackground}>
                    <div className="company-logo">
                      <img 
                        src={job.logo} 
                        alt={`${job.company} logo`} 
                        style={job.company === 'Apple' ? { width: '50%', height: '50%' } : {}}
                      />
                    </div>
                    <h3 className="company-name">{job.company}</h3>
                    <h4 className="job-title">{job.title}</h4>
                    <div className="date-range">{job.dateRange}</div>
                  </CompanyInfo>
                  
                  {/* Job details side with clean styling */}
                  <JobDetails>
                    <div className="job-description">
                      {job.descriptionPoints && job.descriptionPoints.length > 0 ? (
                        <ul>
                          {job.descriptionPoints.map((point, idx) => (
                            <li key={idx}>{point}</li>
                          ))}
                        </ul>
                      ) : (
                        <p>{job.description || 'No description available'}</p>
                      )}
                    </div>
                    
                    <TechStack>
                      {job.technologies.map((tech, idx) => (
                        <TechButton 
                          key={idx}
                          companyColor={job.bgColorRGB}
                          onClick={(e) => e.preventDefault()} // Prevent default to make button non-functional
                        >
                          {tech}
                        </TechButton>
                      ))}
                    </TechStack>
                  </JobDetails>
                </ExperienceCard>
              ))}
            </ExperienceContainer>
          )}
        </InView>
      </RetroSection>
      
      {/* Running Banner between Work and Projects sections */}
      <RunningBanner />
    </>
  );
};

export default WorkExperience;