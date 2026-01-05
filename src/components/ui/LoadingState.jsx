import React from 'react';
import Icon from '../AppIcon';

const LoadingState = ({ 
  message = 'Analyzing ingredients...',
  submessage,
  variant = 'pulse',
  className = ''
}) => {
  const renderAnimation = () => {
    if (variant === 'pulse') {
      return (
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-3 h-3 bg-primary rounded-full animate-pulse-gentle" style={{ animationDelay: '0ms' }} />
          <div className="w-3 h-3 bg-primary rounded-full animate-pulse-gentle" style={{ animationDelay: '200ms' }} />
          <div className="w-3 h-3 bg-primary rounded-full animate-pulse-gentle" style={{ animationDelay: '400ms' }} />
        </div>
      );
    }

    if (variant === 'wave') {
      return (
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-2 h-8 bg-primary rounded-full animate-wave-gentle" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-10 bg-primary rounded-full animate-wave-gentle" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-12 bg-primary rounded-full animate-wave-gentle" style={{ animationDelay: '300ms' }} />
          <div className="w-2 h-10 bg-primary rounded-full animate-wave-gentle" style={{ animationDelay: '450ms' }} />
          <div className="w-2 h-8 bg-primary rounded-full animate-wave-gentle" style={{ animationDelay: '600ms' }} />
        </div>
      );
    }

    return (
      <div className="mb-4">
        <Icon name="Loader2" size={32} className="text-primary animate-spin" />
      </div>
    );
  };

  return (
    <div className={`flex flex-col items-center justify-center text-center py-12 ${className}`}>
      {renderAnimation()}
      
      <p className="text-h5 font-heading font-medium text-foreground mb-2">
        {message}
      </p>
      
      {submessage && (
        <p className="text-caption text-muted-foreground max-w-md">
          {submessage}
        </p>
      )}
    </div>
  );
};

export default LoadingState;