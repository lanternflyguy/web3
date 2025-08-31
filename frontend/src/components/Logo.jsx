import React from 'react';

const Logo = ({ className = "", size = "md" }) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12", 
    lg: "w-16 h-16",
    xl: "w-20 h-20"
  };

  return (
    <div className={`${sizeClasses[size]} ${className} relative`}>
      {/* City skyline background */}
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Gradient definitions */}
        <defs>
          <radialGradient id="bullseyeGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#DC2626" />
            <stop offset="30%" stopColor="#374151" />
            <stop offset="60%" stopColor="#111827" />
            <stop offset="100%" stopColor="#6B7280" />
          </radialGradient>
          <linearGradient id="cityGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#374151" />
            <stop offset="100%" stopColor="#111827" />
          </linearGradient>
        </defs>
        
        {/* City skyline silhouette */}
        <rect x="0" y="70" width="15" height="30" fill="url(#cityGradient)" />
        <rect x="15" y="60" width="12" height="40" fill="url(#cityGradient)" />
        <rect x="27" y="65" width="10" height="35" fill="url(#cityGradient)" />
        <rect x="37" y="55" width="14" height="45" fill="url(#cityGradient)" />
        <rect x="51" y="62" width="11" height="38" fill="url(#cityGradient)" />
        <rect x="62" y="58" width="13" height="42" fill="url(#cityGradient)" />
        <rect x="75" y="68" width="10" height="32" fill="url(#cityGradient)" />
        <rect x="85" y="63" width="15" height="37" fill="url(#cityGradient)" />
        
        {/* Bullseye circles */}
        <circle cx="50" cy="45" r="32" fill="none" stroke="#DC2626" strokeWidth="1.5" opacity="0.8" />
        <circle cx="50" cy="45" r="26" fill="none" stroke="#374151" strokeWidth="1.2" opacity="0.9" />
        <circle cx="50" cy="45" r="20" fill="none" stroke="#111827" strokeWidth="1" />
        <circle cx="50" cy="45" r="14" fill="none" stroke="#6B7280" strokeWidth="0.8" opacity="0.7" />
        
        {/* Central spotted lanternfly silhouette */}
        <g transform="translate(50, 45)">
          {/* Lanternfly body */}
          <ellipse cx="0" cy="0" rx="3" ry="8" fill="#DC2626" />
          
          {/* Wings */}
          <ellipse cx="-4" cy="-2" rx="6" ry="3" fill="#374151" opacity="0.8" transform="rotate(-20)" />
          <ellipse cx="4" cy="-2" rx="6" ry="3" fill="#374151" opacity="0.8" transform="rotate(20)" />
          
          {/* Wing spots */}
          <circle cx="-3" cy="-2" r="1" fill="#DC2626" />
          <circle cx="3" cy="-2" r="1" fill="#DC2626" />
          <circle cx="-2" cy="-1" r="0.5" fill="#FFFFFF" />
          <circle cx="2" cy="-1" r="0.5" fill="#FFFFFF" />
          
          {/* Antennae */}
          <line x1="0" y1="-6" x2="-2" y2="-9" stroke="#111827" strokeWidth="0.5" />
          <line x1="0" y1="-6" x2="2" y2="-9" stroke="#111827" strokeWidth="0.5" />
        </g>
        
        {/* Crosshair */}
        <line x1="50" y1="25" x2="50" y2="35" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.9" />
        <line x1="50" y1="55" x2="50" y2="65" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.9" />
        <line x1="30" y1="45" x2="40" y2="45" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.9" />
        <line x1="60" y1="45" x2="70" y2="45" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.9" />
      </svg>
    </div>
  );
};

export default Logo;