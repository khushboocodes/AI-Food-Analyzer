import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PlaceholderModal = ({ isOpen, onClose, title, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-modal flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-card rounded-xl shadow-organic-xl max-w-md w-full p-8 animate-scale-in">
        <div className="flex items-start gap-4 mb-6">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Icon name="Info" size={24} className="text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-h4 font-heading font-semibold text-foreground mb-2">
              {title}
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              {message}
            </p>
          </div>
        </div>
        
        <div className="flex justify-end">
          <Button
            variant="default"
            onClick={onClose}
            className="min-w-[120px]"
          >
            Got it
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PlaceholderModal;