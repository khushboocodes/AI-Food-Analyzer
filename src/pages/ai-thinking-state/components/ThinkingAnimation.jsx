import React from 'react';

const ThinkingAnimation = () => {
  return (
    <div className="relative w-full max-w-md mx-auto h-48 md:h-56 lg:h-64 flex items-center justify-center">
      {/* Glowing nodes animation */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Center node */}
        <div className="absolute w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-primary/30 rounded-full animate-pulse-gentle" />
        
        {/* Orbiting nodes */}
        <div className="absolute w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-accent/40 rounded-full animate-wave-gentle"
             style={{ 
               top: '20%', 
               left: '15%',
               animationDelay: '0ms' 
             }} />
        
        <div className="absolute w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-secondary/50 rounded-full animate-wave-gentle"
             style={{ 
               top: '15%', 
               right: '20%',
               animationDelay: '300ms' 
             }} />
        
        <div className="absolute w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 bg-accent/35 rounded-full animate-pulse-gentle"
             style={{ 
               bottom: '25%', 
               left: '10%',
               animationDelay: '600ms' 
             }} />
        
        <div className="absolute w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-primary/40 rounded-full animate-wave-gentle"
             style={{ 
               bottom: '20%', 
               right: '15%',
               animationDelay: '900ms' 
             }} />

        {/* Connecting lines effect */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <line x1="50%" y1="50%" x2="20%" y2="25%" stroke="var(--color-primary)" strokeWidth="2" className="animate-pulse-gentle" />
          <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="var(--color-accent)" strokeWidth="2" className="animate-pulse-gentle" style={{ animationDelay: '300ms' }} />
          <line x1="50%" y1="50%" x2="15%" y2="75%" stroke="var(--color-secondary)" strokeWidth="2" className="animate-pulse-gentle" style={{ animationDelay: '600ms' }} />
          <line x1="50%" y1="50%" x2="85%" y2="80%" stroke="var(--color-primary)" strokeWidth="2" className="animate-pulse-gentle" style={{ animationDelay: '900ms' }} />
        </svg>
      </div>

      {/* Wave animation overlay */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 border-2 border-primary/20 rounded-full animate-ping" 
             style={{ animationDuration: '3s' }} />
        <div className="absolute w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 border-2 border-accent/20 rounded-full animate-ping" 
             style={{ animationDuration: '3s', animationDelay: '1s' }} />
      </div>
    </div>
  );
};

export default ThinkingAnimation;