import React from 'react';

const VerdictCard = ({ 
  verdict, 
  recommendation, 
  className = '' 
}) => {
  return (
    <div 
      className={`
        w-full max-w-2xl mx-auto
        bg-gradient-to-br from-amber-50 to-amber-100
        dark:from-amber-900/20 dark:to-amber-800/20
        rounded-2xl md:rounded-3xl
        p-6 md:p-8 lg:p-10
        shadow-organic-lg
        border border-amber-200/50 dark:border-amber-700/30
        transition-organic
        ${className}
      `}
      role="article"
      aria-label="AI Verdict Result"
    >
      <div className="text-center space-y-4 md:space-y-6">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold text-foreground leading-tight">
          {verdict}
        </h1>
        
        <p className="text-base md:text-lg lg:text-xl text-muted-foreground font-body max-w-xl mx-auto">
          {recommendation}
        </p>
      </div>
    </div>
  );
};

export default VerdictCard;