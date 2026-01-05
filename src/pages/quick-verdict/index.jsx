import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FlowProgressController from '../../components/ui/FlowProgressController';
import RestartNavigationTrigger from '../../components/ui/RestartNavigationTrigger';
import ScreenTransitionManager from '../../components/ui/ScreenTransitionManager';
import VerdictCard from './components/VerdictCard';
import VerdictAnimation from './components/VerdictAnimation';

const QuickVerdict = () => {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);

  const verdictData = {
    verdict: "Better to limit frequent use",
    recommendation: "Consider alternatives for daily consumption"
  };

  useEffect(() => {
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 400);

    return () => clearTimeout(contentTimer);
  }, []);

  const handleAdvance = () => {
    navigate('/what-actually-matters');
  };

  const handleAnimationComplete = () => {
    // Animation completion callback
  };

  return (
    <FlowProgressController
      currentScreen="/quick-verdict"
      autoAdvanceDelay={4000}
      onAdvance={handleAdvance}
    >
      <ScreenTransitionManager transitionType="fade" duration={300}>
        <div className="min-h-screen bg-background flex flex-col">
          <RestartNavigationTrigger 
            variant="text" 
            position="corner"
          />

          <main className="flex-1 flex items-center justify-center px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
            <div className="w-full max-w-4xl">
              <div
                className={`
                  transition-organic duration-500
                  ${showContent ? 'opacity-100' : 'opacity-0'}
                `}
              >
                <VerdictAnimation onComplete={handleAnimationComplete} />
                
                <VerdictCard
                  verdict={verdictData?.verdict}
                  recommendation={verdictData?.recommendation}
                />

                <div className="text-center mt-6 md:mt-8">
                  <p className="text-caption text-muted-foreground">
                    Analyzing detailed insights...
                  </p>
                </div>
              </div>
            </div>
          </main>

          <footer className="py-4 md:py-6 text-center">
            <p className="text-caption text-muted-foreground">
              &copy; {new Date()?.getFullYear()} AI Food Analyzer. All rights reserved.
            </p>
          </footer>
        </div>
      </ScreenTransitionManager>
    </FlowProgressController>
  );
};

export default QuickVerdict;