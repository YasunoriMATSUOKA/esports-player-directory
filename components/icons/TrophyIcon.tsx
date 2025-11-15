import React from 'react';

export const TrophyIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M11.25 2.25c.53 0 1.01.2 1.38.55l5.25 3.75a.75.75 0 010 1.1l-5.25 3.75a1.875 1.875 0 01-2.75 0L4.62 7.6a.75.75 0 010-1.1l5.25-3.75a1.875 1.875 0 011.38-.55zM21 9.75a.75.75 0 01-.75.75h-3a.75.75 0 010-1.5h3a.75.75 0 01.75.75zM3.75 9a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
      clipRule="evenodd"
    ></path>
    <path
      d="M12 21a.75.75 0 00.75-.75v-6.32l5.78-4.13A.75.75 0 0018 9V7.5a.75.75 0 00-1.5 0V8.6l-4.5 3.22V4.42l3.9-2.78a.75.75 0 00-.9-1.2l-4.5 3.21-4.5-3.21a.75.75 0 00-.9 1.2l3.9 2.78v7.62l-4.5-3.22V7.5a.75.75 0 00-1.5 0V9a.75.75 0 00.47.69l5.78 4.13v6.32A.75.75 0 0012 21z"
    ></path>
  </svg>
);
