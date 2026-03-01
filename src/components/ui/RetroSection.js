import React from 'react';
import styled from 'styled-components';
import { InView } from 'react-intersection-observer';
import { COLORS, FONTS } from './Theme';

// No infinite animation keyframes

const SectionContainer = styled.section`
  padding: 8rem 0;
  position: relative;
  overflow: visible;
  contain: layout style paint;
`;

const SectionInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 20;
`;

const SectionTitle = styled.h2`
  font-family: ${FONTS.title};
  font-size: 5.5rem;
  font-weight: 900;
  color: ${COLORS.retroPrimary};
  margin-bottom: 5rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  -webkit-text-stroke: 0;
  text-shadow: none;
  background: none;
  user-select: none;

  /* Transition for InView reveal */
  opacity: 0;
  transform: translateY(-20px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  &:before, &:after {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  &:before {
    color: #3182CE;
    transform: translate(-8px, 8px);
    z-index: -2;
  }

  &:after {
    color: #E53E3E;
    transform: translate(-15px, 15px);
    z-index: -3;
  }

  span {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
    color: #000;
    transform: translate(-4px, 4px);
    z-index: -1;
  }

  @media (max-width: 768px) {
    font-size: 4rem;
  }

  @media (max-width: 480px) {
    font-size: 3.2rem;
  }
`;

const SectionContent = styled.div`
  position: relative;
  z-index: 2;

  /* Transition for InView reveal */
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.5s ease-out 0.15s, transform 0.5s ease-out 0.15s;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

/* Subtle top separator line */
const SectionDivider = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.12), transparent);
`;

const RetroSection = ({
  title,
  children,
  background,
  titleColor,
  gridColor,
  gridOpacity,
  id,
  className,
  ...props
}) => {
  return (
    <SectionContainer
      id={id}
      className={className || ''}
      {...props}
    >
      <SectionDivider />

      <SectionInner>
        <InView threshold={0.2} triggerOnce>
          {({ ref, inView }) => (
            <div ref={ref}>
              {title && (
                <SectionTitle
                  color={titleColor}
                  data-text={title}
                  className={`section-title${inView ? ' visible' : ''}`}
                >
                  <span data-text={title}>{title}</span>
                  {title}
                </SectionTitle>
              )}
              <SectionContent className={inView ? 'visible' : ''}>
                {children}
              </SectionContent>
            </div>
          )}
        </InView>
      </SectionInner>
    </SectionContainer>
  );
};

export default RetroSection;
