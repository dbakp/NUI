import React from 'react';
import { StepperProps } from '../types';
import { Check } from 'lucide-react';
import { neuStyle } from '../neu-styles';
export const NeuStepper: React.FC<StepperProps> = ({ steps, currentStep, onStepClick, className = '' }) => {
return (
<div className={`w-full ${className}`}>
<div className="flex items-center justify-between relative">
{/* Background Track (Groove) */}
<div className="absolute top-1/2 left-0 w-full h-2 -translate-y-1/2 rounded-full pointer-events-none z-0" style={neuStyle('convex')}></div>
{/* Progress Fill */}
<div className="absolute top-1/2 left-0 h-2 -translate-y-1/2 bg-indigo-500/20 rounded-full shadow-none pointer-events-none z-0 transition-all duration-500"
style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
/>
{steps.map((step, index) => {
const isCompleted = index < currentStep;
const isCurrent = index === currentStep;
const isPending = index > currentStep;
return (
<div key={step.id} className="relative z-10 flex flex-col items-center group cursor-pointer"
onClick={() => onStepClick && onStepClick(index)}
>
<div className={`
w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
border-4 border-gray-100
${isCompleted ? 'bg-indigo-500 text-white' : isCurrent ? 'bg-gray-100 text-indigo-500' : 'bg-gray-100 text-gray-300'}
`}
style={neuStyle('convex')}>
{isCompleted ? <Check size={18} strokeWidth={3} /> : <span className="text-sm font-bold">{index + 1}</span>}
</div>
<div className="absolute top-12 w-32 text-center hidden md:block">
<p className={`text-xs font-bold uppercase tracking-wider mb-1 ${isCurrent ? 'text-indigo-500' : 'text-gray-500'}`}>
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