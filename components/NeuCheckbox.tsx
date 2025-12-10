import React from 'react';
import { CheckboxProps } from '../types';
import { Check } from 'lucide-react';
import { neuStyle } from '../neu-styles';
export const NeuCheckbox: React.FC<CheckboxProps> = ({ checked, onChange, label, disabled = false,
className = ''
}) => {
return (
<label className={`flex items-center gap-3 cursor-pointer select-none group ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}>
<div className="relative">
<input type="checkbox" className="sr-only" checked={checked} onChange={(e) => !disabled && onChange(e.target.checked)}
disabled={disabled}
/>
<div className={`
w-6 h-6 rounded-lg transition-all duration-200 flex items-center justify-center
${checked ? ' text-indigo-500' : ' bg-gray-100 group--sm'}
`} style={neuStyle('flat')}>
<Check size={16} strokeWidth={3}
className={`transition-all duration-200 transform ${checked ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`} />
</div>
</div>
{label && <span className="font-semibold text-gray-600 group-hover:text-gray-800 transition-colors">{label}</span>}
</label>
);
};