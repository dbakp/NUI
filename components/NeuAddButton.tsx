import React from 'react';
import { AddButtonProps } from '../types';
import { Plus } from 'lucide-react';
import { neuStyle } from '../neu-styles';
export const NeuAddButton: React.FC<AddButtonProps> = ({ label, onClick, isExpanded = false, className = '' }) => {
if (isExpanded) {
return (
<button
onClick={onClick}
className={`
flex items-center gap-2 px-4 py-2 w-full
rounded-xl text-indigo-500 font-bold text-sm
bg-gray-100 hover:translate-y-[1px]
transition-all duration-200 outline-none
group
${className}
`}
onMouseEnter={(e) => e.currentTarget.style.boxShadow = neuStyle('pressed').boxShadow as string}
onMouseLeave={(e) => e.currentTarget.style.boxShadow = neuStyle('flat').boxShadow as string}
style={neuStyle('flat')}
>
<div className="w-6 h-6 rounded-full flex items-center justify-center bg-indigo-500 text-white shadow-md group-hover:scale-110 transition-transform
">
<Plus size={16} strokeWidth={3} />
</div>
<span>{label || 'Add Task'}</span>
</button>
);
}
return (
<button
onClick={onClick}
className={`
w-12 h-12 rounded-full flex items-center justify-center
bg-indigo-500 text-white
active:scale-95
transition-all duration-200
${className}
`}
style={neuStyle('convex')}
title={label || 'Add'}
>
<Plus size={24} strokeWidth={3} />
</button>
);
};