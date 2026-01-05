import React, { useState, useEffect } from 'react';

const ProgressiveText = ({ onComplete }) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const messages = [
    "Understanding what matters here...",
    "Interpreting ingredients in context...",
    "Weighing health tradeoffs..."
  ];

  useEffect(() => {
    // Show first message immediately
    setIsVisible(true);

    const messageTimer = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => {
        if (prevIndex < messages?.length - 1) {
          setIsVisible(false);
          setTimeout(() => {
            setIsVisible(true);
          }, 300);
          return prevIndex + 1;
        } else {
          clearInterval(messageTimer);
          // Notify parent that all messages are complete
          if (onComplete) {
            setTimeout(() => {
              onComplete();
            }, 2000);
          }
          return prevIndex;
        }
      });
    }, 2500);

    return () => clearInterval(messageTimer);
  }, [onComplete]);

  return (
    <div className="text-center px-4 md:px-6 lg:px-8 mt-8 md:mt-10 lg:mt-12">
      <p 
        className={`
          text-base md:text-lg lg:text-xl font-body text-foreground
          transition-organic duration-500
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        `}
      >
        {messages?.[currentMessageIndex]}
      </p>
      {/* Progress dots */}
      <div className="flex items-center justify-center gap-2 mt-6 md:mt-8 lg:mt-10">
        {messages?.map((_, index) => (
          <div
            key={index}
            className={`
              w-2 h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 rounded-full transition-organic
              ${index <= currentMessageIndex 
                ? 'bg-primary scale-100' :'bg-muted scale-75'
              }
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default ProgressiveText;