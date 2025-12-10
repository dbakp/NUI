import React from 'react';
import { TimelineProps } from '../types';
import { Check, Circle, Clock } from 'lucide-react';
import { neuStyle } from '../neu-styles';
export const NeuTimeline: React.FC<TimelineProps> = ({ items, className = '' }) => {
return (
<div className={`relative pl-4 space-y-8 ${className}`}>
{/* Vertical Track Groove */}
<div className="absolute top-0 bottom-0 left-[19px] w-1.5 bg-gray-100 rounded-full pointer-events-none" style={neuStyle('flat')}></div>
{items.map((item, index) => {
const isCompleted = item.status === 'completed';
const isCurrent = item.status === 'current';
return (
<div key={item.id} className="relative flex gap-6 items-start group">
{/* Node */}
<div className={`
relative z-10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0
transition-all duration-300 border-4 border-gray-100
${isCompleted ? 'bg-emerald-500 text-white' : isCurrent ? 'bg-gray-100 text-indigo-500 scale-110' : 'bg-gray-100 text-gray-300'}
`} style={neuStyle('convex')}>
{isCompleted ? <Check size={16} strokeWidth={3}/> : isCurrent ? <Circle size={16} fill="currentColor" /> : item.icon || <Clock size={16} />}
</div>
{/* Content Card */}
<div className={`
flex-1 p-5 rounded-2xl bg-gray-100 border border-white/20 transition-all duration-300
${isCurrent ? ' translate-x-1' : ' '}
`} style={neuStyle('flat')}>
<div className="flex justify-between items-start mb-1">
<h4 className={`font-bold text-md ${isCurrent ? 'text-gray-800' : 'text-gray-600'}`}>
{item.title}
</h4>
<span className="text-xs font-semibold text-gray-400 bg-black/5 px-2 py-1 rounded-lg">
{item.date}
</span>
</div>
{item.description && (
<p className="text-sm text-gray-500 leading-relaxed font-medium">
{item.description}
</p>
)}
</div>
</div>
)
})}
</div>
);
};