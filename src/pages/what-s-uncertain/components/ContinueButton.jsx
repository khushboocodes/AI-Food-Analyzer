import React from 'react';
import Button from '../../../components/ui/Button';


const ContinueButton = ({ onClick, className = '' }) => {
  return (
    <Button
      variant="default"
      size="lg"
      onClick={onClick}
      iconName="ArrowRight"
      iconPosition="right"
      className={`w-full md:w-auto min-w-[200px] ${className}`}
    >
      Continue to Actions
    </Button>
  );
};

export default ContinueButton;