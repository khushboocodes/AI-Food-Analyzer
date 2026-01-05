import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FlowProgressController from '../../components/ui/FlowProgressController';
import RestartNavigationTrigger from '../../components/ui/RestartNavigationTrigger';
import ScreenTransitionManager from '../../components/ui/ScreenTransitionManager';
import ContentCard from '../../components/ui/ContentCard';
import UncertaintyCard from './components/UncertaintyCard';
import ContinueButton from './components/ContinueButton';

const WhatsUncertain = () => {
  const navigate = useNavigate();

  const uncertaintyFactors = [
    "Evidence around long-term effects is mixed",
    "Risk depends on how often you consume this",
    "Individual biological response varies"
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleContinue = () => {
    navigate('/follow-up-actions');
  };

  return (
    <FlowProgressController currentScreen="/what-s-uncertain">
      <ScreenTransitionManager transitionType="fade" duration={300}>
        <div className="min-h-screen bg-background">
          <RestartNavigationTrigger 
            variant="text" 
            position="corner"
          />

          <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8 md:mb-10 lg:mb-12">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-3 md:mb-4">
                  Understanding the Limits
                </h1>
                <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                  Transparency is key. Here's what we can't say with complete certainty about this product.
                </p>
              </div>

              <UncertaintyCard 
                items={uncertaintyFactors}
                className="mb-8 md:mb-10 lg:mb-12"
              />

              <ContentCard
                type="default"
                className="mb-8 md:mb-10"
              >
                <div className="space-y-4">
                  <h4 className="text-h5 font-heading font-semibold text-foreground">
                    Why This Matters
                  </h4>
                  <p className="text-base text-foreground leading-relaxed">
                    Food science is constantly evolving, and individual health responses can vary significantly. While we provide the best analysis based on current research, these uncertainties mean you should consider your personal health context and consumption patterns when making decisions.
                  </p>
                  <p className="text-base text-foreground leading-relaxed">
                    If you have specific health concerns or dietary restrictions, consulting with a healthcare professional is always recommended for personalized guidance.
                  </p>
                </div>
              </ContentCard>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <ContinueButton onClick={handleContinue} />
              </div>

              <div className="mt-8 md:mt-10 text-center">
                <p className="text-caption text-muted-foreground">
                  Press Enter to continue or Escape to start a new analysis
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScreenTransitionManager>
    </FlowProgressController>
  );
};

export default WhatsUncertain;