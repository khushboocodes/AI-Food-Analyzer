import React from 'react';
import Icon from '../../../components/AppIcon';

const InsightCard = ({ 
  ingredient, 
  impact, 
  riskLevel = 'moderate',
  icon = 'AlertCircle',
  className = '' 
}) => {
  const riskStyles = {
    high: {
      border: 'border-l-error',
      bg: 'bg-error/5',
      iconColor: 'text-error',
      badgeBg: 'bg-error/10',
      badgeText: 'text-error'
    },
    moderate: {
      border: 'border-l-warning',
      bg: 'bg-warning/5',
      iconColor: 'text-warning',
      badgeBg: 'bg-warning/10',
      badgeText: 'text-warning'
    },
    low: {
      border: 'border-l-success',
      bg: 'bg-success/5',
      iconColor: 'text-success',
      badgeBg: 'bg-success/10',
      badgeText: 'text-success'
    }
  };

  const currentStyle = riskStyles?.[riskLevel];

  return (
    <div 
      className={`
        content-card border-l-4 ${currentStyle?.border} ${currentStyle?.bg}
        transition-organic hover:shadow-organic-lg
        ${className}
      `}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0 mt-1">
          <div className={`p-2 rounded-lg ${currentStyle?.badgeBg}`}>
            <Icon 
              name={icon} 
              size={24} 
              className={currentStyle?.iconColor} 
            />
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-lg md:text-xl lg:text-2xl font-heading font-semibold text-foreground mb-2">
            {ingredient}
          </h3>
          
          <p className="text-sm md:text-base lg:text-lg text-foreground/80 leading-relaxed">
            {impact}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border">
        <span className={`
          inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs md:text-sm font-caption
          ${currentStyle?.badgeBg} ${currentStyle?.badgeText}
        `}>
          <Icon name="Info" size={14} />
          {riskLevel === 'high' && 'High Priority'}
          {riskLevel === 'moderate' && 'Moderate Concern'}
          {riskLevel === 'low' && 'Low Risk'}
        </span>
      </div>
    </div>
  );
};

export default InsightCard;