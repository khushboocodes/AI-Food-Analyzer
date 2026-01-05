import React, { useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const FlowProgressController = ({ 
  currentScreen, 
  autoAdvanceDelay = null,
  onAdvance,
  onRestart,
  children 
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const flowSequence = [
    '/entry-landing',
    '/ai-thinking-state',
    '/quick-verdict',
    '/what-actually-matters',
    '/what-s-uncertain',
    '/follow-up-actions'
  ];

  const getCurrentIndex = useCallback(() => {
    return flowSequence?.indexOf(location?.pathname);
  }, [location?.pathname, flowSequence]);

  const advanceToNext = useCallback(() => {
    const currentIndex = getCurrentIndex();
    if (currentIndex >= 0 && currentIndex < flowSequence?.length - 1) {
      const nextScreen = flowSequence?.[currentIndex + 1];
      navigate(nextScreen);
      if (onAdvance) {
        onAdvance(nextScreen);
      }
    }
  }, [getCurrentIndex, flowSequence, navigate, onAdvance]);

  const restartFlow = useCallback(() => {
    navigate(flowSequence?.[0]);
    if (onRestart) {
      onRestart();
    }
  }, [flowSequence, navigate, onRestart]);

  useEffect(() => {
    if (autoAdvanceDelay && autoAdvanceDelay > 0) {
      const timer = setTimeout(() => {
        advanceToNext();
      }, autoAdvanceDelay);

      return () => clearTimeout(timer);
    }
  }, [autoAdvanceDelay, advanceToNext]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event?.key === 'Enter' && !autoAdvanceDelay) {
        advanceToNext();
      }
      if (event?.key === 'Escape') {
        restartFlow();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [advanceToNext, restartFlow, autoAdvanceDelay]);

  return (
    <div className="flow-progress-controller">
      {children}
    </div>
  );
};

export default FlowProgressController;