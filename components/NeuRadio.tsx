import React from 'react';
import { RadioGroupProps } from '../types';
import { neuStyle } from '../neu-styles';
export const NeuRadioGroup: React.FC<RadioGroupProps> = ({ options, value, onChange, name, label,
direction = 'column',
className = ''
}) => {
return (
<div className={className}>
{label && (
<label className="block mb-3 text-sm font-bold text-gray-500 uppercase tracking-wider">
{label}
</label>
)}
<div className={`flex ${direction === 'row' ? 'gap-6 flex-wrap' : 'flex-col gap-4'}`}>
{options.map((option) => {
const isChecked = value === option.value;
return (
<label key={option.value} className="flex items-center gap-3 cursor-pointer group select-none"
onClick={() => onChange(option.value)}
>
<div className={`
w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200
${isChecked ? '' : ' bg-gray-100 group--sm'}
`} style={neuStyle('convex')}>
<div className={`
w-2.5 h-2.5 rounded-full transition-all duration-300
${isChecked ? 'bg-indigo-500 scale-100 shadow-[0_0_5px_rgba(108,99,255,0.6)]' : 'bg-transparent scale-0'}
`} />
</div>
<span className={`font-semibold transition-colors ${isChecked ? 'text-gray-800' : 'text-gray-500 group-hover:text-gray-700'}`}>
{option.label}
</span>
<input type="radio" name={name} value={option.value} checked={isChecked} onChange={() => {}}
className="sr-only"
/>
</label>
);
})}
</div>
</div>
);
};