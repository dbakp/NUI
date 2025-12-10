import React from 'react';
import { ProjectItemProps } from '../types';
import { Hash } from 'lucide-react';
import { neuStyle } from '../neu-styles';
export const NeuProjectItem: React.FC<ProjectItemProps> = ({ name, color = '#6B7280', count, isActive = false, onClick,
icon,
className = '' }) => {
return (
<button
onClick={onClick}
className={`
w-full flex items-center justify-between px-4 py-3 rounded-2xl
transition-all duration-200 group outline-none
${isActive ? ' bg-gray-100 text-gray-800' : ' text-gray-600 hover:text-gray-800 bg-gray-100'}
${className}
`}
style={neuStyle('flat')}>
<div className="flex items-center gap-3">
{icon ? (
<span className={isActive ? 'text-indigo-500' : 'text-gray-400'}>{icon}</span>
) : (
<div className="w-3 h-3 rounded-full border border-white/20"
style={{ backgroundColor: color }}
/>
)}
<span className={`font-semibold text-sm ${isActive ? 'font-bold' : ''}`}>
{name}
</span>
</div>
{count !== undefined && (
<span className={`
text-xs font-bold px-2 py-0.5 rounded-md
${isActive ? 'bg-transparent text-gray-500' : 'text-gray-400 group-hover:text-gray-500'}
`}>
{count}
</span>
)}
</button>
);
};