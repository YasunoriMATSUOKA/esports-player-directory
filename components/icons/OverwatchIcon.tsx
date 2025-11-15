
import React from 'react';

export const OverwatchIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    className={className}
    fill="currentColor"
    color="#00aeff"
  >
    <circle cx="100" cy="100" r="85" stroke="currentColor" strokeWidth="15" fill="none"></circle>
    <path d="M 65,65 L 135,135 M 65,135 L 135,65"></path>
    <path d="M 100,25 A 75,75 0 0 1 100,175" fill="none" stroke="currentColor" strokeWidth="15"></path>
    <path d="M 100,25 A 75,75 0 0 0 100,175" fill="none" stroke="currentColor" strokeWidth="15" strokeDasharray="10 20"></path>
    <path d="M100 135c-27 0-49-16-49-35s22-35 49-35 49 16 49 35-22 35-49 35zm0-60c-20 0-36 11-36 25s16 25 36 25 36-11 36-25-16-25-36-25z"></path>
  </svg>
);
