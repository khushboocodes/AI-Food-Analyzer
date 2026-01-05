import React from 'react';

const ProgressHeader = ({ currentStep = 4, totalSteps = 6, className = '' }) => {
  const progress = currentStep / totalSteps * 100;

  return (
    <div className={`w-full ${className}`}>
      







      
      <div className="relative w-full h-1.5 bg-muted rounded-full overflow-hidden">
        



      </div>
    </div>);

};

export default ProgressHeader;