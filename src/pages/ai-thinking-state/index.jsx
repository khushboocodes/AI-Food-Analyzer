import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FlowProgressController from '../../components/ui/FlowProgressController';
import ScreenTransitionManager from '../../components/ui/ScreenTransitionManager';
import RestartNavigationTrigger from '../../components/ui/RestartNavigationTrigger';
import ThinkingAnimation from './components/ThinkingAnimation';
import ProgressiveText from './components/ProgressiveText';

const AIThinkingState = () => {
  const navigate = useNavigate();
  const [analysisComplete, setAnalysisComplete] = useState(false);

  const handleAnalysisComplete = () => {
    setAnalysisComplete(true);
    // Auto-advance to next screen after brief delay
    setTimeout(() => {
      navigate('/quick-verdict');
    }, 800);
  };

  return (
    <FlowProgressController currentScreen="/ai-thinking-state">
      <ScreenTransitionManager transitionType="fade" duration={300}>
        <div className="min-h-screen bg-background flex flex-col">
          {/* Restart trigger */}
          <RestartNavigationTrigger 
            variant="text" 
            position="corner"
          />

          {/* Main content area */}
          <div className="flex-1 flex flex-col items-center justify-center px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
            <div className="w-full max-w-2xl mx-auto">
              {/* Thinking animation */}
              <ThinkingAnimation />

              {/* Progressive text messages */}
              <ProgressiveText onComplete={handleAnalysisComplete} />

              {/* Subtle status indicator */}
              <div className="mt-12 md:mt-16 lg:mt-20 text-center">
                <p className="text-caption text-muted-foreground">
                  {analysisComplete 
                    ? 'Analysis complete' 
                    : 'AI is analyzing your ingredients'
                  }
                </p>
              </div>
            </div>
          </div>

          {/* Bottom spacing for mobile */}
          <div className="h-16 md:h-20 lg:h-24" />
        </div>
      </ScreenTransitionManager>
    </FlowProgressController>
  );
};

export default AIThinkingState;