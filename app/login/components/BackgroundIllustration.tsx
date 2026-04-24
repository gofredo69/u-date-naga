import React from 'react';

export function BackgroundIllustration() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-[0.08] sm:opacity-[0.12]">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="campus-pattern"
            x="0"
            y="0"
            width="300"
            height="300"
            patternUnits="userSpaceOnUse">
            
            {/* Building 1 */}
            <path
              d="M50 250 L50 170 L90 130 L130 170 L130 250 Z"
              fill="none"
              stroke="#1A1A1A"
              strokeWidth="2" />
            
            <rect
              x="65"
              y="185"
              width="15"
              height="20"
              fill="none"
              stroke="#1A1A1A"
              strokeWidth="1.5" />
            
            <rect
              x="95"
              y="185"
              width="15"
              height="20"
              fill="none"
              stroke="#1A1A1A"
              strokeWidth="1.5" />

            {/* Building 2 */}
            <rect
              x="180"
              y="150"
              width="70"
              height="100"
              fill="none"
              stroke="#1A1A1A"
              strokeWidth="2" />
            
            <rect
              x="195"
              y="165"
              width="12"
              height="16"
              fill="none"
              stroke="#1A1A1A"
              strokeWidth="1.5" />
            
            <rect
              x="215"
              y="165"
              width="12"
              height="16"
              fill="none"
              stroke="#1A1A1A"
              strokeWidth="1.5" />
            
            <rect
              x="195"
              y="195"
              width="12"
              height="16"
              fill="none"
              stroke="#1A1A1A"
              strokeWidth="1.5" />

            {/* Dotted Lines */}
            <path
              d="M130 200 Q 155 170 180 200"
              fill="none"
              stroke="#D53F8C"
              strokeWidth="2"
              strokeDasharray="4,4" />

            <path
              d="M90 130 Q 135 50 215 150"
              fill="none"
              stroke="#D53F8C"
              strokeWidth="2"
              strokeDasharray="4,4" />

            {/* Speech Bubbles */}
            <path
              d="M140 100 C 140 85, 170 85, 170 100 C 170 115, 148 115, 140 122 C 143 115, 140 108, 140 100 Z"
              fill="#D53F8C" />

            <path
              d="M250 60 C 250 45, 280 45, 280 60 C 280 75, 258 75, 250 82 C 253 75, 250 68, 250 60 Z"
              fill="#D53F8C" />

            <path
              d="M30 80 C 30 65, 60 65, 60 80 C 60 95, 38 95, 30 102 C 33 95, 30 88, 30 80 Z"
              fill="#D53F8C" />

            {/* Decorative dots */}
            <circle cx="155" cy="60" r="2" fill="#D53F8C" />
            <circle cx="230" cy="100" r="3" fill="#D53F8C" />
            <circle cx="80" cy="230" r="2" fill="#D53F8C" />
          </pattern>
        </defs>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#campus-pattern)" />
      </svg>
    </div>
  );
}