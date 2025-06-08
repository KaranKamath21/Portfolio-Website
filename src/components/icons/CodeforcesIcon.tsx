import React from 'react';

const CodeforcesIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path
      d="M0 0 C1.98 0 3.96 0 6 0 C6 5.94 6 11.88 6 18 C4.02 18 2.04 18 0 18 C0 12.06 0 6.12 0 0 Z"
      transform="translate(9,3)"
    />
    <path
      d="M0 0 C1.98 0 3.96 0 6 0 C6 4.62 6 9.24 6 14 C4.02 14 2.04 14 0 14 C0 9.38 0 4.76 0 0 Z"
      transform="translate(0,7)"
    />
    <path
      d="M0 0 C1.98 0 3.96 0 6 0 C6 3.63 6 7.26 6 11 C4.02 11 2.04 11 0 11 C0 7.37 0 3.74 0 0 Z"
      transform="translate(18,10)"
    />
  </svg>
);

export default CodeforcesIcon;
