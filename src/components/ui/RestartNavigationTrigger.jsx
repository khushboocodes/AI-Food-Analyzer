import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';

const RestartNavigationTrigger = ({ 
  variant = 'text',
  position = 'corner',
  className = '',
  onRestart
}) => {
  const navigate = useNavigate();

  const handleRestart = () => {
    navigate('/entry-landing');
    if (onRestart) {
      onRestart();
    }
  };

  const baseClasses = 'transition-organic focus-ring';
  
  const variantClasses = {
    text: 'text-muted-foreground hover:text-foreground text-sm font-caption',
    button: 'inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 font-caption',
    icon: 'p-2 rounded-lg bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
  };

  const positionClasses = {
    corner: 'fixed top-4 right-4 z-navigation',
    inline: 'inline-flex',
    floating: 'fixed bottom-6 right-6 z-navigation shadow-organic-lg'
  };

  const combinedClasses = `${baseClasses} ${variantClasses?.[variant]} ${positionClasses?.[position]} ${className}`;

  if (variant === 'icon') {
    return (
      <button
        onClick={handleRestart}
        className={combinedClasses}
        aria-label="Start new analysis"
        title="Start new analysis"
      >
        <Icon name="RotateCcw" size={20} />
      </button>
    );
  }

  if (variant === 'button') {
    return (
      <button
        onClick={handleRestart}
        className={combinedClasses}
      >
        <Icon name="RotateCcw" size={16} />
        <span>New Analysis</span>
      </button>
    );
  }

  return (
    <button
      onClick={handleRestart}
      className={combinedClasses}
    >
      Start New Analysis
    </button>
  );
};

export default RestartNavigationTrigger;