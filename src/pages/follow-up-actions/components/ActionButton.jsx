import React from 'react';
import Button from '../../../components/ui/Button';


const ActionButton = ({ 
  icon, 
  text, 
  onClick, 
  variant = 'default',
  className = '' 
}) => {
  return (
    <Button
      variant={variant}
      size="lg"
      onClick={onClick}
      iconName={icon}
      iconPosition="left"
      iconSize={24}
      fullWidth
      className={`h-auto py-6 px-8 rounded-pill text-lg font-medium transition-organic hover:scale-[1.02] active:scale-[0.98] ${className}`}
    >
      {text}
    </Button>
  );
};

export default ActionButton;