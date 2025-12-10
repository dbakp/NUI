import React from 'react';
import { DateBadgeProps } from '../types';
import { Calendar } from 'lucide-react';
import { neuStyle } from '../neu-styles';
export const NeuDateBadge: React.FC<DateBadgeProps> = ({ date, isOverdue = false, className = '' }) => {
const dateStr = date instanceof Date ? date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : date;
return (
<div className={`
inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wide border border-white/20 transition-all cursor-default
${isOverdue ? 'text-red-500 bg-red-500/5 hover:bg-red-500/10' : 'text-emerald-500 bg-emerald-500/5 hover:bg-emerald-500/10'}
${className}
`}>
<Calendar size={12} className={isOverdue ? 'text-red-500' : 'text-emerald-500'} />
{dateStr}
</div>
);
};