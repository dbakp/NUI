import React, { useState } from 'react';
import { RecurringDateProps } from '../types';
import { Repeat, CalendarClock, ChevronDown } from 'lucide-react';
import { neuStyle } from '../neu-styles';
export const NeuRecurringDate: React.FC<RecurringDateProps> = ({ value, onChange, className = '' }) => {
const [isOpen, setIsOpen] = useState(false);
const options = [
{ label: 'Do not repeat', value: 'none' },
{ label: 'Every day', value: 'daily' },
{ label: 'Every week', value: 'weekly' },
{ label: 'Every month', value: 'monthly' },
{ label: 'Every year', value: 'yearly' },
];
const currentLabel = options.find(o => o.value === value)?.label || 'Custom';
return (
<div className={`relative ${className}`}>
<button
onClick={() => setIsOpen(!isOpen)}
className={`
flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-200
${isOpen ? 'bg-gray-100 text-indigo-500' : 'bg-gray-100 text-gray-600'}
`}
>
<Repeat size={16} />
<span className="text-sm font-bold">{currentLabel}</span>
<ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
</button>
{isOpen && (
<div className="absolute top-full left-0 mt-3 p-2 w-48 z-20
bg-gray-100 rounded-2xl border border-white/20
animate-in fade-in zoom-in-95 duration-200
" style={neuStyle('flat')}>
<div className="space-y-1">
{options.map((opt) => (
<button
key={opt.value}
onClick={() => {
onChange(opt.value);
setIsOpen(false);
}}
className={`
w-full text-left px-3 py-2 rounded-xl text-sm font-semibold transition-all
${value === opt.value ? 'bg-gray-100 text-indigo-500' : 'hover:bg-white/40 hover:text-gray-800 text-gray-500'}
`}
>
{opt.label}
</button>
))}
</div>
<div className="h-px bg-gray-300/50 my-2 mx-2" />
<button className="w-full flex items-center gap-2 px-3 py-2 text-xs font-bold text-gray-400 hover:text-indigo-500 uppercase tracking-wide">
<CalendarClock size={12} /> Custom...
</button>
</div>
)}
</div>
);
};