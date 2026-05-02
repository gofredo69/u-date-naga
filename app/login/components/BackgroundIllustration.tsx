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
            
            {/* Large Heart */}
            <path
              d="M150 230 C 150 230, 100 190, 100 150 C 100 120, 125 100, 150 130 C 175 100, 200 120, 200 150 C 200 190, 150 230, 150 230 Z"
              fill="none"
              stroke="#D53F8C"
              strokeWidth="2" />

            {/* Small Heart 1 */}
            <path
              d="M60 80 C 60 80, 35 55, 35 35 C 35 15, 50 5, 60 20 C 70 5, 85 15, 85 35 C 85 55, 60 80, 60 80 Z"
              fill="#D53F8C" />

            {/* Small Heart 2 */}
            <path
              d="M240 200 C 240 200, 220 180, 220 165 C 220 150, 232 142, 240 155 C 248 142, 260 150, 260 165 C 260 180, 240 200, 240 200 Z"
              fill="#D53F8C" />

            {/* Small Heart 3 */}
            <path
              d="M180 50 C 180 50, 165 35, 165 25 C 165 15, 172 10, 180 18 C 188 10, 195 15, 195 25 C 195 35, 180 50, 180 50 Z"
              fill="#D53F8C" />

            {/* Small Heart 4 */}
            <path
              d="M30 180 C 30 180, 20 170, 20 160 C 20 152, 25 148, 30 155 C 35 148, 40 152, 40 160 C 40 170, 30 180, 30 180 Z"
              fill="#D53F8C" />

            {/* Small Heart 5 */}
            <path
              d="M270 100 C 270 100, 258 88, 258 76 C 258 66, 266 60, 270 70 C 274 60, 282 66, 282 76 C 282 88, 270 100, 270 100 Z"
              fill="#D53F8C" />

            {/* Floating Hearts */}
            <circle cx="120" cy="60" r="8" fill="none" stroke="#D53F8C" strokeWidth="1.5" />
            <circle cx="220" cy="280" r="6" fill="none" stroke="#D53F8C" strokeWidth="1.5" />
            <circle cx="50" cy="260" r="5" fill="none" stroke="#D53F8C" strokeWidth="1.5" />
            <circle cx="260" cy="50" r="7" fill="none" stroke="#D53F8C" strokeWidth="1.5" />

            {/* Decorative dots */}
            <circle cx="100" cy="120" r="2" fill="#D53F8C" />
            <circle cx="200" cy="80" r="2" fill="#D53F8C" />
            <circle cx="140" cy="280" r="2" fill="#D53F8C" />
            <circle cx="80" cy="40" r="2" fill="#D53F8C" />
            <circle cx="230" cy="140" r="2" fill="#D53F8C" />
            <circle cx="20" cy="120" r="2" fill="#D53F8C" />

            {/* Small decorative hearts */}
            <path
              d="M230 240 C 230 240, 222 232, 222 225 C 222 219, 226 216, 230 221 C 234 216, 238 219, 238 225 C 238 232, 230 240, 230 240 Z"
              fill="none"
              stroke="#D53F8C"
              strokeWidth="1" />

            <path
              d="M70 140 C 70 140, 64 134, 64 128 C 64 122, 67 120, 70 124 C 73 120, 76 122, 76 128 C 76 134, 70 140, 70 140 Z"
              fill="none"
              stroke="#D53F8C"
              strokeWidth="1" />

            <path
              d="M140 180 C 140 180, 135 175, 135 170 C 135 166, 137 164, 140 167 C 143 164, 145 166, 145 170 C 145 175, 140 180, 140 180 Z"
              fill="none"
              stroke="#D53F8C"
              strokeWidth="1" />

            {/* Connection lines */}
            <path
              d="M35 35 Q 70 30, 100 50"
              fill="none"
              stroke="#D53F8C"
              strokeWidth="1"
              strokeDasharray="3,3" />
            <path
              d="M200 50 Q 180 40, 165 25"
              fill="none"
              stroke="#D53F8C"
              strokeWidth="1"
              strokeDasharray="3,3" />
            <path
              d="M240 165 Q 230 140, 220 130"
              fill="none"
              stroke="#D53F8C"
              strokeWidth="1"
              strokeDasharray="3,3" />
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