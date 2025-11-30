import React from 'react';
import { DateBadgeProps } from '../types';
import { Calendar } from 'lucide-react';

export const NeuDateBadge: React.FC<DateBadgeProps> = ({ 
    date, 
    isOverdue = false, 
    className = '' 
}) => {
    const dateStr = date instanceof Date ? date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : date;

    return (
        <div className={`
            inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wide
            shadow-neu-convex border border-white/20 transition-all cursor-default
            ${isOverdue 
                ? 'text-neu-danger bg-neu-danger/5 hover:bg-neu-danger/10' 
                : 'text-neu-success bg-neu-success/5 hover:bg-neu-success/10'}
            ${className}
        `}>
            <Calendar size={12} className={isOverdue ? 'text-neu-danger' : 'text-neu-success'} />
            {dateStr}
        </div>
    );
};