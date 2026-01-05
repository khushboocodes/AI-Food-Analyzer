import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FlowProgressController from '../../components/ui/FlowProgressController';
import RestartNavigationTrigger from '../../components/ui/RestartNavigationTrigger';
import ContentCard from '../../components/ui/ContentCard';
import ActionButton from './components/ActionButton';
import PlaceholderModal from './components/PlaceholderModal';

const FollowUpActions = () => {
  const navigate = useNavigate();
  const [modalState, setModalState] = useState({
    isOpen: false,
    title: '',
    message: ''
  });

  const handleCompareProduct = () => {
    setModalState({
      isOpen: true,
      title: 'Product Comparison',
      message: 'The product comparison feature is coming soon. You\'ll be able to analyze multiple products side-by-side and see detailed ingredient breakdowns to make informed choices.'
    });
  };

  const handleFindAlternative = () => {
    setModalState({
      isOpen: true,
      title: 'Alternative Suggestions',
      message: 'The alternative product finder is coming soon. We\'ll help you discover healthier options with simpler ingredient lists that match your dietary preferences.'
    });
  };

  const closeModal = () => {
    setModalState({
      isOpen: false,
      title: '',
      message: ''
    });
  };

  return (
    <FlowProgressController currentScreen="/follow-up-actions">
      <div className="min-h-screen bg-background flex flex-col">
        {/* Header with Restart Trigger */}
        <div className="w-full px-4 md:px-6 lg:px-8 py-4 md:py-6">
          <RestartNavigationTrigger 
            variant="button" 
            position="inline"
            className="ml-auto"
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
          <div className="w-full max-w-2xl">
            <ContentCard
              type="default"
              icon="Compass"
              title="What would you like to do next?"
              subtitle="Choose an option to continue your food analysis journey"
              className="mb-8 md:mb-10 lg:mb-12"
            >
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                We've analyzed your food product and provided insights on what matters most. Now you can explore further by comparing with other products or finding healthier alternatives.
              </p>
            </ContentCard>

            {/* Action Buttons */}
            <div className="space-y-4 md:space-y-6">
              <ActionButton
                icon="GitCompare"
                text="Want to compare with another product?"
                onClick={handleCompareProduct}
                variant="default"
              />

              <ActionButton
                icon="Lightbulb"
                text="Looking for a simpler alternative?"
                onClick={handleFindAlternative}
                variant="outline"
              />
            </div>

            {/* Additional Info */}
            <div className="mt-8 md:mt-10 lg:mt-12 p-6 md:p-8 bg-muted/50 rounded-lg border border-border">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xl md:text-2xl">💡</span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-base md:text-lg font-heading font-semibold text-foreground mb-2">
                    Pro Tip
                  </h4>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    For the most accurate analysis, always check the complete ingredient list on the product packaging. Our AI provides guidance, but your individual health needs may vary.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full px-4 md:px-6 lg:px-8 py-6 md:py-8 border-t border-border">
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-caption text-muted-foreground text-center md:text-left">
                &copy; {new Date()?.getFullYear()} AI Food Analyzer. Making healthy choices easier.
              </p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => navigate('/entry-landing')}
                  className="text-caption text-primary hover:text-primary/80 transition-organic focus-ring rounded px-2 py-1"
                >
                  Start New Analysis
                </button>
              </div>
            </div>
          </div>
        </footer>

        {/* Placeholder Modal */}
        <PlaceholderModal
          isOpen={modalState?.isOpen}
          onClose={closeModal}
          title={modalState?.title}
          message={modalState?.message}
        />
      </div>
    </FlowProgressController>
  );
};

export default FollowUpActions;