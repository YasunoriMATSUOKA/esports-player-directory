import React from 'react';

export const VerifiedIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={`${className} text-cyan-400`}
  >
    {/* FIX: The 'title' attribute is not valid on SVG elements in React. Replaced with a <title> element for tooltip & accessibility. The `aria-hidden` attribute was also removed as the icon is informational. */}
    <title>実在の選手</title>
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);
