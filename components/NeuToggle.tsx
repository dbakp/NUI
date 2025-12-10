import React from 'react';
import { ToggleProps } from '../types';
import { neuStyle } from '../neu-styles';
export const NeuToggle: React.FC<ToggleProps> = ({ checked, onChange, label,
size = 'md'
}) => {
return (
<div className="flex items-center justify-between cursor-pointer group select-none w-full"
onClick={() => onChange(!checked)}
>
{/* Label on left (if provided) */}
{label && (
<span className={`font-bold transition-colors ${checked ? 'text-gray-700' : 'text-gray-400'}`}>
{label}
</span>
)}
<div className={`
relative rounded-full transition-all duration-300 bg-gray-100 flex items-center
${size === 'sm' ? 'w-12 h-6' : 'w-20 h-10'}
`} style={neuStyle('convex')}>
{/* The Knob */}
<div className={`
absolute top-1 left-1 rounded-full transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
flex items-center justify-center bg-gray-100
border border-white/50
${size === 'sm' ? 'w-4 h-4' : 'w-8 h-8'}
${checked ? (size === 'sm' ? 'translate-x-6' : 'translate-x-10') : 'translate-x-0'}
`}
style={neuStyle('convex')}>
{/* The Dot/Light inside the knob */}
<div className={`
rounded-full transition-all duration-300
${size === 'sm' ? 'w-1.5 h-1.5' : 'w-2 h-2'}
${checked ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]' : 'bg-gray-300'}
`} />
</div>
</div>
</div>
);
};