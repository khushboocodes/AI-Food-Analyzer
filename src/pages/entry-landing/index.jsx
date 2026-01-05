import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';
import IngredientInput from './components/IngredientInput';
import FileUploadZone from './components/FileUploadZone';
import SampleText from './components/SampleText';

const EntryLanding = () => {
  const navigate = useNavigate();
  const [ingredients, setIngredients] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState('');

  const handleUseSample = (sampleText) => {
    setIngredients(sampleText);
    setError('');
  };

  const handleFileSelect = (file) => {
    setSelectedFile(file);
    if (file) {
      setError('');
    }
  };

  const handleAnalyze = () => {
    if (!ingredients?.trim() && !selectedFile) {
      setError('Please enter ingredients or upload a food label image');
      return;
    }

    navigate('/ai-thinking-state');
  };

  const handleKeyPress = (e) => {
    if (e?.key === 'Enter' && (ingredients?.trim() || selectedFile)) {
      handleAnalyze();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-primary/10 mb-4 md:mb-6">
              <Icon 
                name="Sparkles" 
                size={32} 
                className="text-primary md:w-10 md:h-10 lg:w-12 lg:h-12" 
              />
            </div>
            
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-3 md:mb-4">
              AI Food Analyzer
            </h1>
            
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
              Get instant AI-powered analysis of food ingredients. Understand what matters for your health in seconds.
            </p>
          </div>

          {/* Main Content Card */}
          <div className="content-card mb-6 md:mb-8">
            <div className="space-y-6 md:space-y-8">
              {/* Input Section */}
              <div>
                <IngredientInput
                  value={ingredients}
                  onChange={setIngredients}
                  error={error}
                />
              </div>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="px-4 bg-card text-caption text-muted-foreground">
                    or
                  </span>
                </div>
              </div>

              {/* File Upload Section */}
              <div>
                <FileUploadZone
                  onFileSelect={handleFileSelect}
                  selectedFile={selectedFile}
                />
              </div>

              {/* Sample Text Section */}
              <div>
                <SampleText onUseSample={handleUseSample} />
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Button
                  variant="default"
                  size="lg"
                  fullWidth
                  onClick={handleAnalyze}
                  iconName="ArrowRight"
                  iconPosition="right"
                  disabled={!ingredients?.trim() && !selectedFile}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Let the AI take a look
                </Button>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-card rounded-lg p-4 md:p-6 border border-border">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <Icon name="Zap" size={24} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm md:text-base font-heading font-semibold text-foreground mb-1">
                    Instant Analysis
                  </h3>
                  <p className="text-caption text-muted-foreground">
                    Get results in seconds with AI-powered ingredient analysis
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-4 md:p-6 border border-border">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <Icon name="Shield" size={24} className="text-success" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm md:text-base font-heading font-semibold text-foreground mb-1">
                    Health Focused
                  </h3>
                  <p className="text-caption text-muted-foreground">
                    Understand health impacts and make informed choices
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-4 md:p-6 border border-border">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <Icon name="Eye" size={24} className="text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm md:text-base font-heading font-semibold text-foreground mb-1">
                    Clear Insights
                  </h3>
                  <p className="text-caption text-muted-foreground">
                    Simple explanations without confusing technical jargon
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-8 md:mt-12 text-center">
            <p className="text-caption text-muted-foreground">
              Your data is processed securely and never stored permanently
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntryLanding;