import React from "react";
import styled from "styled-components";
import { FONTS } from "./Theme";

// Retro terminal-style button — no infinite animations
const RetroButtonContainer = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  min-width: 120px;
  width: auto;
  height: 42px;
  background-color: #000000;
  border: 1px solid #FFFFFF;
  border-radius: 0;
  color: #FFFFFF;
  font-family: ${FONTS.secondary};
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;
  margin: 5px;
  position: relative;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
  overflow: hidden;
  box-shadow: 3px 3px 0 #FFFFFF;

  /* Static CRT scanlines overlay */
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.05),
      rgba(255, 255, 255, 0.05) 1px,
      transparent 1px,
      transparent 2px
    );
    pointer-events: none;
    z-index: 1;
  }

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 5px 5px 0 #FFFFFF;
    background-color: rgba(255, 255, 255, 0.08);
  }

  &:active {
    transform: translate(1px, 1px);
    box-shadow: 2px 2px 0 #FFFFFF;
  }

  svg {
    margin-right: 8px;
    font-size: 16px;
    position: relative;
    z-index: 3;
  }
`;

const RetroButton = ({ children, href, onClick, icon, ...props }) => {
  return (
    <RetroButtonContainer
      href={href}
      onClick={onClick}
      target={href && href.startsWith("http") ? "_blank" : undefined}
      rel={href && href.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    >
      {icon && icon}
      <span style={{ position: 'relative', zIndex: 3 }}>{children}</span>
    </RetroButtonContainer>
  );
};

export default RetroButton;
