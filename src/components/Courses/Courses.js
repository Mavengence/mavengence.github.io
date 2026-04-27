import React from 'react';
import styled from 'styled-components';
import { InView } from 'react-intersection-observer';
import RetroSection from '../ui/RetroSection';
import { FONTS, COLORS } from '../ui/Theme';

/* ─── Data ──────────────────────────────────────────────────────────── */

const COURSES = [
  {
    title: 'Data Engineering Fundamentals',
    subtitle: 'Think like a data engineer by lunch.',
    description:
      'An interactive crash course on building production data pipelines. ' +
      'Every concept is a live simulator — drag the watermark, overflow a worker, ' +
      'break a capstone gate. By the end you know where a pipeline fails before it does.',
    gradient: 'linear-gradient(135deg, #0891B2 0%, #06B6D4 50%, #22D3EE 100%)',
    stats: [
      { label: 'Chapters',   value: '10' },
      { label: 'Simulators', value: '15' },
      { label: 'Duration',   value: '~90 min' },
      { label: 'Level',      value: 'Intermediate' },
    ],
    tags: ['Kafka', 'Spark', 'Airflow', 'Presto', 'dbt', 'Iceberg', 'Parquet', 'ClickHouse'],
    badge: { text: 'Interactive', color: '#0891B2' },
    actions: [
      { label: '▶ Start the course', url: 'https://www.timloehr.me/de-fundamentals/', primary: true },
      { label: 'GitHub',             url: 'https://github.com/Mavengence/de-fundamentals',  primary: false },
    ],
  },
];

/* ─── Styled components ──────────────────────────────────────────────── */

const CoursesContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const CourseCard = styled.div`
  position: relative;
  background: rgba(22, 22, 26, 0.85);
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;

  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.35s ease-out, transform 0.35s ease-out, box-shadow 0.4s ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover {
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35);
    transform: translateY(-4px);
  }

  @media (min-width: 768px) {
    flex-direction: row;
    min-height: 340px;
  }
`;

const CourseHero = styled.div`
  flex-shrink: 0;
  width: 100%;
  min-height: 180px;
  background: ${props => props.gradient};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.32);
  }

  @media (min-width: 768px) {
    width: 280px;
    min-height: unset;
  }
`;

const CourseBadge = styled.div`
  position: absolute;
  top: 20px;
  right: -32px;
  background: ${props => props.color || '#0891B2'};
  color: white;
  font-size: 0.65rem;
  font-weight: 700;
  font-family: ${FONTS.accent};
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 5px 44px;
  transform: rotate(45deg);
  z-index: 10;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.35);
`;

const CourseHeroTitle = styled.h3`
  font-family: ${FONTS.title};
  font-size: 1.35rem;
  font-weight: 800;
  color: white;
  text-align: center;
  margin: 0;
  z-index: 2;
  position: relative;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.6);
  line-height: 1.3;
`;

const CourseHeroSub = styled.p`
  font-family: ${FONTS.body};
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  margin: 0.5rem 0 0;
  z-index: 2;
  position: relative;
  font-style: italic;
`;

const CourseBody = styled.div`
  flex: 1;
  padding: 1.75rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`;

const CourseDescription = styled.p`
  font-family: ${FONTS.body};
  font-size: 0.88rem;
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.65;
  margin: 0;
`;

const CourseStats = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.5rem;
`;

const CourseStat = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const CourseStatValue = styled.span`
  font-family: ${FONTS.accent};
  font-size: 1.1rem;
  font-weight: 700;
  color: ${COLORS.retroPrimary};
  letter-spacing: -0.02em;
`;

const CourseStatLabel = styled.span`
  font-family: ${FONTS.mono || FONTS.body};
  font-size: 0.7rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.4);
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

const Tag = styled.span`
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 4px;
  color: rgba(255, 255, 255, 0.6);
  font-family: ${FONTS.accent};
  font-size: 0.68rem;
  font-weight: 600;
  padding: 3px 8px;
  letter-spacing: 0.04em;
`;

const ActionRow = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: auto;
  padding-top: 0.25rem;
`;

const ActionBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 9px 18px;
  border-radius: 8px;
  font-family: ${FONTS.accent};
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;

  ${props => props.primary ? `
    background: linear-gradient(135deg, #0891B2, #06B6D4);
    color: white;
    border: none;
    box-shadow: 0 4px 14px rgba(8, 145, 178, 0.45);
    &:hover {
      box-shadow: 0 6px 20px rgba(8, 145, 178, 0.65);
      transform: translateY(-2px);
    }
  ` : `
    background: transparent;
    color: rgba(255,255,255,0.65);
    border: 1px solid rgba(255,255,255,0.18);
    &:hover {
      background: rgba(255,255,255,0.06);
      color: rgba(255,255,255,0.9);
      border-color: rgba(255,255,255,0.3);
    }
  `}
`;

/* ─── Component ─────────────────────────────────────────────────────── */

const Courses = () => {
  return (
    <RetroSection title="Courses" id="courses">
      <CoursesContainer>
        {COURSES.map((course, idx) => (
          <InView key={idx} threshold={0.1} triggerOnce>
            {({ ref, inView }) => (
              <CourseCard ref={ref} className={inView ? 'visible' : ''}>
                <CourseHero gradient={course.gradient}>
                  <CourseBadge color={course.badge.color}>
                    {course.badge.text}
                  </CourseBadge>
                  <CourseHeroTitle>{course.title}</CourseHeroTitle>
                  <CourseHeroSub>{course.subtitle}</CourseHeroSub>
                </CourseHero>

                <CourseBody>
                  <CourseDescription>{course.description}</CourseDescription>

                  <CourseStats>
                    {course.stats.map(s => (
                      <CourseStat key={s.label}>
                        <CourseStatValue>{s.value}</CourseStatValue>
                        <CourseStatLabel>{s.label}</CourseStatLabel>
                      </CourseStat>
                    ))}
                  </CourseStats>

                  <TagRow>
                    {course.tags.map(t => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </TagRow>

                  <ActionRow>
                    {course.actions.map(a => (
                      <ActionBtn
                        key={a.label}
                        href={a.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        primary={a.primary}
                      >
                        {a.label}
                      </ActionBtn>
                    ))}
                  </ActionRow>
                </CourseBody>
              </CourseCard>
            )}
          </InView>
        ))}
      </CoursesContainer>
    </RetroSection>
  );
};

export default Courses;
