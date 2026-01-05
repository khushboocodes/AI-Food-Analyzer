import React from 'react';
import Icon from '../AppIcon';

const ContentCard = ({ 
  type = 'default',
  title,
  subtitle,
  children,
  icon,
  status,
  className = '',
  actions
}) => {
  const typeStyles = {
    default: 'content-card',
    verdict: 'content-card border-l-4 border-l-primary',
    insight: 'content-card border-l-4 border-l-accent',
    uncertainty: 'content-card border-l-4 border-l-warning bg-warning/5',
    success: 'content-card border-l-4 border-l-success bg-success/5',
    error: 'content-card border-l-4 border-l-error bg-error/5'
  };

  const statusIcons = {
    success: { name: 'CheckCircle2', color: 'text-success' },
    warning: { name: 'AlertCircle', color: 'text-warning' },
    error: { name: 'XCircle', color: 'text-error' },
    info: { name: 'Info', color: 'text-primary' }
  };

  return (
    <div className={`${typeStyles?.[type]} ${className}`}>
      {(icon || status || title) && (
        <div className="flex items-start gap-4 mb-4">
          {icon && (
            <div className="flex-shrink-0 mt-1">
              <Icon name={icon} size={24} className="text-primary" />
            </div>
          )}
          {status && statusIcons?.[status] && (
            <div className="flex-shrink-0 mt-1">
              <Icon 
                name={statusIcons?.[status]?.name} 
                size={24} 
                className={statusIcons?.[status]?.color} 
              />
            </div>
          )}
          <div className="flex-1 min-w-0">
            {title && (
              <h3 className="text-h4 font-heading font-semibold text-foreground mb-1">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="text-caption text-muted-foreground">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      )}
      <div className="text-foreground">
        {children}
      </div>
      {actions && (
        <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-border">
          {actions}
        </div>
      )}
    </div>
  );
};

export default ContentCard;