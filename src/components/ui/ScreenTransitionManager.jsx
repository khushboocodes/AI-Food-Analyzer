import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScreenTransitionManager = ({ 
  children,
  transitionType = 'fade',
  duration = 250
}) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('enter');

  useEffect(() => {
    if (location?.pathname !== displayLocation?.pathname) {
      setTransitionStage('exit');
    }
  }, [location, displayLocation]);

  useEffect(() => {
    if (transitionStage === 'exit') {
      const timer = setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage('enter');
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [transitionStage, location, duration]);

  const getTransitionClasses = () => {
    const baseClasses = 'transition-organic w-full';
    
    const transitionMap = {
      fade: {
        enter: 'animate-fade-in',
        exit: 'opacity-0'
      },
      slide: {
        enter: 'animate-slide-up',
        exit: 'opacity-0 translate-y-4'
      },
      scale: {
        enter: 'animate-scale-in',
        exit: 'opacity-0 scale-95'
      }
    };

    const currentTransition = transitionMap?.[transitionType] || transitionMap?.fade;
    const stageClass = transitionStage === 'enter' ? currentTransition?.enter : currentTransition?.exit;

    return `${baseClasses} ${stageClass}`;
  };

  return (
    <div 
      className={getTransitionClasses()}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
};

export default ScreenTransitionManager;