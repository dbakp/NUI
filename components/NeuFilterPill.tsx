import React from 'react';
import { FilterPillProps } from '../types';
import { neuStyle } from '../neu-styles';
export const NeuFilterPill: React.FC<FilterPillProps> = ({ label, isActive, count, onClick, className = '' }) => {
return (
<button
onClick={onClick}
className={`
inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide
transition-all duration-200 outline-none select-none
${isActive ? ' text-indigo-500 bg-gray-100 transform scale-95' : ' text-gray-500 hover:text-gray-700 bg-gray-100'}
${className}
`}
style={neuStyle('convex')}>
{label}
{count !== undefined && (
<span className={`
w-4 h-4 flex items-center justify-center rounded-full text-[9px]
${isActive ? 'bg-indigo-500 text-white shadow-inner' : 'bg-gray-200 text-gray-500 shadow-inner'}
`}>
{count}
</span>
)}
</button>
);
};