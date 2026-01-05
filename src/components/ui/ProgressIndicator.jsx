import React from 'react';

const ProgressIndicator = ({ 
  currentStep = 1,
  totalSteps = 6,
  showLabels = false,
  labels = [],
  className = ''
}) => {
  const steps = Array.from({ length: totalSteps }, (_, i) => i + 1);
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className={`w-full ${className}`}>
      <div className="relative">
        <div className="flex items-center justify-between mb-2">
          {steps?.map((step) => (
            <div
              key={step}
              className={`
                flex items-center justify-center w-8 h-8 rounded-full border-2 
                transition-organic z-10 bg-background
                ${step <= currentStep 
                  ? 'border-primary bg-primary text-primary-foreground' 
                  : 'border-muted text-muted-foreground'
                }
              `}
            >
              <span className="text-sm font-medium">{step}</span>
            </div>
          ))}
        </div>

        <div className="absolute top-4 left-0 right-0 h-0.5 bg-muted -z-0">
          <div 
            className="h-full bg-primary transition-organic"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      {showLabels && labels?.length === totalSteps && (
        <div className="flex justify-between mt-3">
          {labels?.map((label, index) => (
            <div
              key={index}
              className={`
                text-caption text-center max-w-[80px]
                ${index + 1 <= currentStep ? 'text-foreground' : 'text-muted-foreground'}
              `}
            >
              {label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProgressIndicator;