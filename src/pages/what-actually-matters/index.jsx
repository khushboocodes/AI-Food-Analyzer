import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FlowProgressController from '../../components/ui/FlowProgressController';
import RestartNavigationTrigger from '../../components/ui/RestartNavigationTrigger';
import ScreenTransitionManager from '../../components/ui/ScreenTransitionManager';
import InsightCard from './components/InsightCard';
import ProgressHeader from './components/ProgressHeader';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';

const WhatActuallyMatters = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const insights = [
    {
      id: 1,
      ingredient: "Added sugars",
      impact: "Increase health risk if consumed daily. Regular intake of added sugars can contribute to weight gain, increased risk of type 2 diabetes, heart disease, and dental problems. The American Heart Association recommends limiting added sugar intake to no more than 6-9 teaspoons per day.",
      riskLevel: "high",
      icon: "AlertTriangle"
    },
    {
      id: 2,
      ingredient: "Flavor enhancers (E621)",
      impact: "Generally safe for most, but sensitivity varies. E621 (Monosodium Glutamate/MSG) is recognized as safe by major food safety authorities. However, some individuals may experience mild symptoms like headaches or flushing. Those with sensitivities should monitor their response to foods containing this additive.",
      riskLevel: "moderate",
      icon: "AlertCircle"
    }
  ];

  const handleContinue = () => {
    navigate('/what-s-uncertain');
  };

  return (
    <FlowProgressController currentScreen="/what-actually-matters">
      <ScreenTransitionManager transitionType="fade" duration={300}>
        <div className="min-h-screen bg-background">
          <RestartNavigationTrigger 
            variant="icon" 
            position="corner"
          />

          <div className="container mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-8 lg:py-12 max-w-4xl">
            <ProgressHeader 
              currentStep={4} 
              totalSteps={6}
              className="mb-6 md:mb-8 lg:mb-10"
            />

            <div 
              className={`
                transition-organic duration-500
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              `}
            >
              <div className="text-center mb-8 md:mb-10 lg:mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-primary/10 mb-4 md:mb-5 lg:mb-6">
                  <Icon 
                    name="Lightbulb" 
                    size={32} 
                    className="text-primary md:w-10 md:h-10 lg:w-12 lg:h-12" 
                  />
                </div>

                <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-3 md:mb-4">
                  What Actually Matters
                </h1>
                
                <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                  Here are the key ingredients that have the most significant impact on your health based on current scientific evidence.
                </p>
              </div>

              <div className="space-y-4 md:space-y-5 lg:space-y-6 mb-8 md:mb-10 lg:mb-12">
                {insights?.map((insight, index) => (
                  <div
                    key={insight?.id}
                    className={`
                      transition-organic duration-500
                      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                    `}
                    style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                  >
                    <InsightCard
                      ingredient={insight?.ingredient}
                      impact={insight?.impact}
                      riskLevel={insight?.riskLevel}
                      icon={insight?.icon}
                    />
                  </div>
                ))}
              </div>

              <div 
                className={`
                  flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4
                  transition-organic duration-500
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                `}
                style={{ transitionDelay: '450ms' }}
              >
                <Button
                  variant="default"
                  size="lg"
                  onClick={handleContinue}
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="w-full sm:w-auto min-w-[200px]"
                >
                  Continue to Uncertainties
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => navigate('/quick-verdict')}
                  iconName="ArrowLeft"
                  iconPosition="left"
                  className="w-full sm:w-auto"
                >
                  Back to Verdict
                </Button>
              </div>

              <div className="mt-8 md:mt-10 lg:mt-12 p-4 md:p-5 lg:p-6 bg-muted/50 rounded-lg border border-border">
                <div className="flex items-start gap-3">
                  <Icon 
                    name="Info" 
                    size={20} 
                    className="text-primary flex-shrink-0 mt-0.5" 
                  />
                  <p className="text-xs md:text-sm lg:text-base text-caption text-muted-foreground">
                    These insights are based on current scientific research and general health guidelines. Individual health needs may vary. Consult with a healthcare professional for personalized dietary advice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScreenTransitionManager>
    </FlowProgressController>
  );
};

export default WhatActuallyMatters;