import React from 'react';
import Icon from '../../../components/AppIcon';

const UncertaintyCard = ({ items, className = '' }) => {
  return (
    <div className={`bg-muted/30 rounded-xl p-6 md:p-8 lg:p-10 border border-border/50 ${className}`}>
      <div className="flex items-start gap-3 mb-6">
        <div className="flex-shrink-0 mt-1">
          <Icon 
            name="AlertCircle" 
            size={24} 
            className="text-warning"
          />
        </div>
        <div>
          <h3 className="text-h4 font-heading font-semibold text-foreground mb-2">
            What We're Not Sure About
          </h3>
          <p className="text-caption text-muted-foreground">
            Important limitations to consider in this analysis
          </p>
        </div>
      </div>
      <ul className="space-y-4">
        {items?.map((item, index) => (
          <li 
            key={index}
            className="flex items-start gap-3 text-foreground"
          >
            <div className="flex-shrink-0 mt-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-warning" />
            </div>
            <p className="text-base md:text-lg leading-relaxed">
              {item}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UncertaintyCard;