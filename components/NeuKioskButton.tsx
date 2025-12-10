import React from 'react';
import { KioskActionProps } from '../types';
import { ChevronRight } from 'lucide-react';
import { neuStyle } from '../neu-styles';
export const NeuKioskButton: React.FC<KioskActionProps> = ({ title, subtitle, icon, onClick, variant = 'primary', className = '' }) => {
return (
<button
onClick={onClick}
className={`
w-full p-8 rounded-[2.5rem] text-left transition-all duration-300 group
flex items-center justify-between border-2
${variant === 'primary' ? 'bg-gray-100 border-white/20 active:scale-[0.98]' : 'bg-gray-100 border-transparent'}
${className}
`}
style={neuStyle('flat')}>
<div className="flex items-center gap-6">
<div className={`
w-20 h-20 rounded-3xl flex items-center justify-center transition-all duration-300
${variant === 'primary' ? 'bg-indigo-500 text-white group-hover:scale-110' : 'bg-gray-100 text-gray-500'}
`} style={neuStyle('flat')}>
{icon}
</div>
<div>
<h3 className="text-2xl font-bold text-gray-800 mb-1 group-hover:text-indigo-500 transition-colors">
{title}
</h3>
{subtitle && (
<p className="text-lg font-medium text-gray-500">{subtitle}</p>
)}
</div>
</div>
<div className={`
w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300
${variant === 'primary' ? 'bg-gray-100 text-gray-400 group-hover:text-indigo-500' : 'bg-transparent text-gray-300'}
`} style={neuStyle('convex')}>
<ChevronRight size={24} />
</div>
</button>
);
};