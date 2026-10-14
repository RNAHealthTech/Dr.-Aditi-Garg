'use client';

import React from 'react';

interface ShivashaLogoProps {
  variant?: 'full' | 'horizontal' | 'mark';
  theme?: 'light' | 'dark';
  className?: string;
  height?: number | string;
  width?: number | string;
}

export const ShivashaEmblem: React.FC<{ className?: string }> = ({ className = 'w-12 h-8' }) => {
  return (
    <svg
      viewBox="0 0 300 145"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Shivasha ENT Clinic Emblem"
    >
      <defs>
        <clipPath id="emblem-outer-clip">
          <rect x="0" y="0" width="300" height="145" rx="20" ry="20" />
        </clipPath>
      </defs>

      {/* 3-colored panels */}
      <g clipPath="url(#emblem-outer-clip)">
        {/* Red Panel (Ear) */}
        <path
          d="M 0 0 
             L 94 0 
             C 104 35, 88 75, 96 115 
             C 99 130, 97 140, 93 145 
             L 0 145 Z"
          fill="#DE4937"
        />

        {/* Blue Panel (Nose) */}
        <path
          d="M 100 0 
             C 92 35, 108 75, 100 115 
             C 98 130, 100 140, 98 145 
             L 190 145 
             C 194 130, 192 105, 194 75 
             C 195 45, 188 20, 193 0 Z"
          fill="#2787C8"
        />

        {/* Yellow Panel (Throat) */}
        <path
          d="M 198 0 
             C 193 20, 200 45, 199 75 
             C 197 105, 199 130, 195 145 
             L 300 145 
             L 300 0 Z"
          fill="#F1AA37"
        />
      </g>

      {/* 1. EAR (White contour on Red panel) */}
      <g stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path
          d="M 62 48
             C 62 27, 48 20, 35 24
             C 21 28, 15 44, 17 65
             C 19 84, 27 97, 32 107
             C 36 115, 46 116, 51 109
             C 56 102, 52 91, 45 85
             C 38 80, 35 73, 38 66"
          strokeWidth="4.2"
        />
        <path
          d="M 48 36
             C 39 36, 31 43, 30 54
             C 29 65, 35 76, 40 79"
          strokeWidth="3.4"
        />
      </g>

      {/* 2. NOSE (White contour on Blue panel) */}
      <g stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path
          d="M 142 21
             C 145 41, 142 63, 130 89
             C 121 107, 114 118, 118 124
             C 121 127, 130 127, 140 123
             C 154 117, 164 111, 171 105"
          strokeWidth="4.2"
        />
        <path
          d="M 135 99
             C 142 95, 158 97, 162 108
             C 164 115, 158 121, 146 122"
          strokeWidth="3.8"
        />
      </g>

      {/* 3. THROAT & AIRWAY (White contour on Yellow panel) */}
      <g stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path
          d="M 216 33
             C 218 45, 224 51, 221 57
             C 217 62, 219 69, 225 73
             C 232 78, 232 86, 227 93
             C 224 99, 229 106, 238 109
             C 243 110, 248 111, 252 111"
          strokeWidth="3.6"
        />
        <path
          d="M 216 59
             C 236 59, 254 67, 266 83
             C 278 99, 286 117, 290 131"
          strokeWidth="5.2"
        />
      </g>
    </svg>
  );
};

export const ShivashaLogo: React.FC<ShivashaLogoProps> = ({
  variant = 'horizontal',
  theme = 'light',
  className = '',
}) => {
  const textColor = theme === 'dark' ? 'text-white' : 'text-slate-900';
  const subTextColor = theme === 'dark' ? 'text-teal-400' : 'text-[#0e4e50]';

  if (variant === 'mark') {
    return <ShivashaEmblem className={className || 'w-10 h-6'} />;
  }

  if (variant === 'horizontal') {
    return (
      <div className={`inline-flex items-center gap-3 ${className}`}>
        <ShivashaEmblem className="w-11 h-7 flex-shrink-0" />
        <div className="flex flex-col leading-tight">
          <span className={`text-[15px] font-extrabold tracking-tight font-sans ${textColor}`}>
            SHIVASHA ENT CLINIC
          </span>
          <span className={`text-[9.5px] uppercase tracking-[0.18em] font-semibold ${subTextColor}`}>
            Ear • Nose • Throat
          </span>
        </div>
      </div>
    );
  }

  // Full stacked variant (Emblem on top, text underneath)
  return (
    <div className={`inline-flex flex-col items-center text-center gap-2 ${className}`}>
      <ShivashaEmblem className="w-24 h-12" />
      <span className={`text-[14px] font-extrabold tracking-wide font-sans ${textColor}`}>
        SHIVASHA ENT CLINIC
      </span>
    </div>
  );
};

export default ShivashaLogo;
