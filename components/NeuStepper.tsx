import React from 'react';
import { StepperProps } from '../types';
import { Check } from 'lucide-react';

export const NeuStepper: React.FC<StepperProps> = ({ 
  steps, 
  currentStep, 
  onStepClick, 
  className = '' 
}) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-center justify-between relative">
        {/* Background Track (Groove) */}
        <div className="absolute top-1/2 left-0 w-full h-2 -translate-y-1/2 bg-neu-base rounded-full shadow-neu-pressed pointer-events-none z-0"></div>
        
        {/* Progress Fill */}
        <div 
            className="absolute top-1/2 left-0 h-2 -translate-y-1/2 bg-neu-accent/20 rounded-full shadow-none pointer-events-none z-0 transition-all duration-500"
            style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        />

        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;
          const isPending = index > currentStep;

          return (
            <div 
              key={step.id} 
              className="relative z-10 flex flex-col items-center group cursor-pointer"
              onClick={() => onStepClick && onStepClick(index)}
            >
              <div 
                className={`
                    w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
                    border-4 border-neu-base
                    ${isCompleted 
                        ? 'bg-neu-accent shadow-neu-convex text-white' 
                        : isCurrent 
                            ? 'bg-neu-base shadow-neu-pressed text-neu-accent' 
                            : 'bg-neu-base shadow-neu-flat text-gray-300'}
                `}
              >
                {isCompleted ? <Check size={18} strokeWidth={3} /> : <span className="text-sm font-bold">{index + 1}</span>}
              </div>
              
              <div className="absolute top-12 w-32 text-center hidden md:block">
                <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${isCurrent ? 'text-neu-accent' : 'text-gray-500'}`}>
                    {step.title}
                </p>
                {step.description && (
                    <p className="text-[10px] text-gray-400 font-semibold">{step.description}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="h-10 md:hidden"></div> {/* Spacer for mobile labels if needed later */}
    </div>
  );
};