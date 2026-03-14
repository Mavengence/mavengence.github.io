import React from 'react';
import styled from 'styled-components';
import { InView } from 'react-intersection-observer';
import RetroSection from '../ui/RetroSection';
import RunningBanner from '../ui/RunningBanner';
import { FONTS } from '../ui/Theme';

const hexToRgb = (hex) => {
  hex = hex.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `${r}, ${g}, ${b}`;
};

// No infinite animation keyframes

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

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: -3px;
    width: 8px;
    height: 8px;
    background: #3182CE;
    border-radius: 50%;
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    left: -47px;
  }

  @media (max-width: 430px) {
    display: none;
  }
`;

const YearMarker = styled.div`
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

  /* CSS transition for InView reveal */
  opacity: 0;
  transition: opacity 0.4s ease-out, transform 0.4s ease-out;
  transform: translateY(-50%) translateX(-20px);

  &.visible {
    opacity: 1;
    transform: translateY(-50%) translateX(0);
  }

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

  &:hover {
    background: rgba(49, 130, 206, 1);
  }

  .mobile-year { display: none; }

  @media (max-width: 768px) {
    left: -35px;
    font-size: 12px;
    padding: 4px 10px;
    z-index: 10;
    background: rgba(49, 130, 206, 1);
    box-shadow: 0 0 10px rgba(49, 130, 206, 0.5);

    .desktop-year { display: none; }
    .mobile-year { display: inline; }

    &:after {
      width: 10px;
      right: auto;
      left: -15px;
    }
  }

  @media (max-width: 430px) {
    display: none;
  }
`;

const ExperienceCard = styled.div`
  position: relative;
  background: ${props => `linear-gradient(120deg, rgba(22, 22, 26, 0.9) 0%, rgba(${props.bgColorRGB || '22, 22, 26'}, 0.06) 100%)`};
  border-radius: 16px;
  padding: 28px;
  margin: 0 0 70px 70px;
  width: calc(100% - 100px);
  min-height: 160px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  border: 1px solid ${props => `rgba(${props.bgColorRGB || '255, 255, 255'}, 0.1)`};
  border-left: 3px solid ${props => props.accentColor || '#3182CE'};
  z-index: 2;
  display: grid;
  grid-template-columns: 220px 1fr;
  grid-gap: 28px;
  overflow: hidden;

  /* CSS transition for InView reveal + hover */
  opacity: 0;
  transform: translateX(30px);
  transition: opacity 0.3s ease-out, transform 0.3s ease-out, box-shadow 0.4s ease, border-color 0.3s ease;

  &.visible {
    opacity: 1;
    transform: translateX(0);
  }

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

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 50%);
    pointer-events: none;
    z-index: 1;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    border-color: rgba(255, 255, 255, 0.15);

    .company-pattern { opacity: 0.9; }
    .timeline-dot {
      transform: translateY(-50%) scale(1.3);
      box-shadow: 0 0 12px ${props => props.accentColor || '#3182CE'};
    }
  }

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

  &:first-of-type { margin-top: 50px; }

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
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }

  @media (max-width: 768px) {
    margin-left: 65px;
    width: calc(100% - 80px);

    &:before { left: -55px; width: 55px; }
    .timeline-dot { left: -60px; }
  }

  @media (max-width: 430px) {
    margin-left: 15px;
    width: calc(100% - 30px);
    &:before, .timeline-dot { display: none; }
  }
`;

const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;

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
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);

    img { width: 85%; height: 85%; object-fit: contain; }
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.18);
    }
  }

  .company-name {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 10px;
    color: white;
    font-family: ${FONTS.title};
    letter-spacing: -0.5px;
    position: relative;
    display: inline-block;

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
    transition: background 0.3s ease, transform 0.3s ease;

    &:hover {
      background: ${props => `rgba(${hexToRgb(props.logoBackground)}, 0.18)` || 'rgba(49, 130, 206, 0.15)'};
      transform: translateY(-2px);
    }
  }

  .date-range {
    font-family: ${FONTS.mono};
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 12px;
  }
`;

const JobDetails = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;

  .job-description {
    font-family: ${FONTS.primary};
    font-size: 15px;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.8);
    margin: 0 0 24px 0;

    ul { list-style-type: none; padding: 0; margin: 0 0 10px 0; }
    ul li { padding-left: 15px; position: relative; margin-bottom: 6px; }
    ul li:before { content: "\u2022"; position: absolute; left: 0; top: 0; }
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
`;

const TechBadge = styled.span`
  font-size: 0.7rem;
  padding: 0.35rem 0.75rem;
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.85);
  font-family: ${FONTS.accent};
  font-weight: 500;
  letter-spacing: 0.5px;
  border-radius: 14px;
  transition: background 0.2s ease;
  border: 1px solid rgba(255, 255, 255, 0.06);
  user-select: none;
`;

const experienceData = [
  {
    id: 1,
    year: 2025,
    company: 'Meta',
    logo: `${process.env.PUBLIC_URL}/images/logos/meta.png`,
    logoBackground: '#1877F2',
    bgColorRGB: hexToRgb('#1877F2'),
    bgPattern: 'radial-gradient(circle at 90% 10%, rgba(24, 119, 242, 0.08), transparent 30%)',
    title: 'Data Engineer',
    dateRange: 'February 2025 - Present',
    descriptionPoints: ['Enterprise Infrastructure and Security Analytics'],
    technologies: ['Python', 'Presto', 'Hive', 'SQL']
  },
  {
    id: 2,
    year: 2024,
    company: 'Red Bull',
    logo: `${process.env.PUBLIC_URL}/images/logos/redbull.svg`,
    logoBackground: '#D52B1E',
    bgColorRGB: hexToRgb('#D52B1E'),
    bgPattern: 'linear-gradient(135deg, rgba(213, 43, 30, 0.07) 0%, transparent 70%)',
    title: 'Data Scientist',
    dateRange: 'July 2024 - January 2025',
    descriptionPoints: [
      "Applied data science to build full stack MLOps data products to support all parts of Red Bull's supply chain processes.",
      'Led the Databricks integration by designing robust workflows, managing asset bundles, and setting up CI/CD pipelines.',
      'Developed an R-based tool to automate data sourcing, using YAML configurations and dependency injection for scalable analytics.'
    ],
    technologies: ['Python', 'R', 'Databricks', 'Snowflake', 'R Studio', 'SQL', 'SAP S4/HANA']
  },
  {
    id: 3,
    year: 2022,
    company: 'Apple',
    logo: `${process.env.PUBLIC_URL}/images/logos/apple.svg`,
    logoBackground: '#000000',
    bgColorRGB: hexToRgb('#555555'),
    bgPattern: 'repeating-linear-gradient(to right, rgba(85, 85, 85, 0.02), rgba(85, 85, 85, 0.02) 1px, transparent 1px, transparent 30px)',
    title: 'Data Scientist',
    dateRange: 'October 2022 - May 2024',
    descriptionPoints: [
      "Collaborated with engineers and business stakeholders to build full stack, MLOps data products for Apple's supply chain business.",
      'Developed and deployed anomaly detection, time series forecasting, and NLP tools that automated repetitive tasks, saving over 100 hours per week across departments and reducing manual workload by 60%.',
      'Contributed to a Python package project that integrated core AI tools, reducing project onboarding time by 80%, from 3-4 weeks to just 2-3 days, accelerating anomaly detection deployment across teams.'
    ],
    technologies: ['Python', 'SQL', 'Snowflake', 'DataRobot', 'K8S', 'Docker', 'Git']
  },
  {
    id: 4,
    year: 2021,
    company: 'Amazon',
    logo: `${process.env.PUBLIC_URL}/images/logos/amazon.svg`,
    logoBackground: '#FF9900',
    bgColorRGB: hexToRgb('#FF9900'),
    bgPattern: 'radial-gradient(circle at 90% 90%, rgba(255, 153, 0, 0.08), transparent 40%)',
    title: 'BI Engineer',
    dateRange: 'February 2021 - July 2021',
    descriptionPoints: [
      'Optimized SQL scripts by reducing length over 50% and built a multiple regression model to predict upcoming number of sales.',
      'Optimized the data retrieval SQL scripts from the Redshift cluster.',
      'Translated long SQL prediction scripts into data pipelines with Python.'
    ],
    technologies: ['Python', 'SQL', 'Pandas', 'Redshift', 'AWS']
  }
];

const yearMarkers = [
  { top: '17%', year: '2025', short: '25', delay: 0 },
  { top: '36%', year: '2024', short: '24', delay: 0.06 },
  { top: '60%', year: '2022', short: '22', delay: 0.12 },
  { top: '85%', year: '2021', short: '21', delay: 0.18 },
];

const WorkExperience = () => {
  return (
    <>
      <RetroSection
        id="experience"
        title="WORK"
        titleColor="#3182CE"
        gridColor="#3182CE"
        gridOpacity="0.05"
        className="experience-section"
      >
        <InView threshold={0.1} triggerOnce rootMargin="150px 0px">
          {({ ref, inView }) => (
            <ExperienceContainer ref={ref}>
              <TimelineAxis />

              {yearMarkers.map((marker) => (
                <YearMarker
                  key={marker.year}
                  top={marker.top}
                  className={inView ? 'visible' : ''}
                  style={{ transitionDelay: `${marker.delay}s` }}
                >
                  <span className="desktop-year">{marker.year}</span>
                  <span className="mobile-year">{marker.short}</span>
                </YearMarker>
              ))}

              {experienceData.map((job, index) => (
                <ExperienceCard
                  key={job.id}
                  accentColor={job.logoBackground}
                  bgColorRGB={job.bgColorRGB}
                  bgPattern={job.bgPattern}
                  className={inView ? 'visible' : ''}
                  style={{ transitionDelay: `${0.08 * index}s` }}
                >
                  <div className="company-pattern" />
                  <div className="timeline-dot" />

                  <CompanyInfo logoBackground={job.logoBackground}>
                    <div className="company-logo">
                      <img
                        src={job.logo}
                        alt={`${job.company} logo`}
                        loading="lazy"
                        decoding="async"
                        style={job.company === 'Apple' ? { width: '50%', height: '50%' } : {}}
                      />
                    </div>
                    <h3 className="company-name">{job.company}</h3>
                    <p className="job-title">{job.title}</p>
                    <div className="date-range">{job.dateRange}</div>
                  </CompanyInfo>

                  <JobDetails>
                    <div className="job-description">
                      {job.descriptionPoints && job.descriptionPoints.length > 0 ? (
                        <ul>
                          {job.descriptionPoints.map((point) => (
                            <li key={point.slice(0, 40)}>{point}</li>
                          ))}
                        </ul>
                      ) : (
                        <p>{job.description || 'No description available'}</p>
                      )}
                    </div>

                    <TechStack>
                      {job.technologies.map((tech) => (
                        <TechBadge key={tech}>
                          {tech}
                        </TechBadge>
                      ))}
                    </TechStack>
                  </JobDetails>
                </ExperienceCard>
              ))}
            </ExperienceContainer>
          )}
        </InView>
      </RetroSection>

      <RunningBanner />
    </>
  );
};

export default WorkExperience;
