import React, { useState, useEffect } from 'react';

const VerdictAnimation = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      if (onComplete) {
        setTimeout(onComplete, 600);
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`
        transition-organic duration-500
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
    >
      <div className="flex justify-center mb-6 md:mb-8">
        <div className="relative">
          <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-amber-200/50 dark:bg-amber-800/30 animate-pulse-gentle" />
          <div className="absolute inset-0 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-amber-300/30 dark:bg-amber-700/20 animate-pulse-gentle" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
};

export default VerdictAnimation;