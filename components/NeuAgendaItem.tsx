import React from 'react';
import { AgendaItemProps } from '../types';
import { Check, Clock, User } from 'lucide-react';
import { neuStyle } from '../neu-styles';
export const NeuAgendaItem: React.FC<AgendaItemProps> = ({ time, title, presenter, duration, isCompleted = false, className = '' }) => {
return (
<div className={`flex gap-4 group ${className}`}>
{/* Time Column */}
<div className="flex flex-col items-end min-w-[60px] pt-1">
<span className={`text-sm font-bold ${isCompleted ? 'text-gray-400' : 'text-gray-800'}`}>{time}</span>
{duration && <span className="text-[10px] text-gray-400 font-medium">{duration}</span>}
</div>
{/* Timeline Visual */}
<div className="relative flex flex-col items-center">
<div className={`
w-4 h-4 rounded-full border-2 z-10 transition-colors
${isCompleted
? 'bg-indigo-500 border-indigo-500'
: 'bg-gray-100 border-gray-300'}
`}
style={!isCompleted ? neuStyle('convex') : undefined}>
{isCompleted && <Check size={10} className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" strokeWidth={4} />}
</div>
{/* Line connector */}
<div className="w-0.5 bg-gray-200 h-full -mt-2 -mb-2 z-0 group-last:hidden"></div>
</div>
{/* Content Card */}
<div className={`
flex-1 p-4 rounded-xl mb-4 transition-all duration-300 border border-white/20
${isCompleted
? 'bg-transparent border-transparent opacity-60'
: 'bg-gray-100 hover:-translate-y-1'}
`}
style={!isCompleted ? neuStyle('flat') : undefined}
onMouseEnter={(e) => !isCompleted && (e.currentTarget.style.boxShadow = neuStyle('convex').boxShadow as string)}
onMouseLeave={(e) => !isCompleted && (e.currentTarget.style.boxShadow = neuStyle('flat').boxShadow as string)}>
<h4 className={`font-bold text-sm ${isCompleted ? 'text-gray-500 line-through' : 'text-gray-800'}`}>
{title}
</h4>
{presenter && (
<div className="flex items-center gap-2 mt-2">
<div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
<User size={10} />
</div>
<span className="text-xs font-semibold text-gray-500">{presenter}</span>
</div>
)}
</div>
</div>
);
};