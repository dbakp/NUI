import React from 'react';
import { FilterPillProps } from '../types';

export const NeuFilterPill: React.FC<FilterPillProps> = ({ 
    label, 
    isActive, 
    count, 
    onClick, 
    className = '' 
}) => {
    return (
        <button
            onClick={onClick}
            className={`
                inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide
                transition-all duration-200 outline-none select-none
                ${isActive 
                    ? 'shadow-neu-pressed text-neu-accent bg-neu-base transform scale-95' 
                    : 'shadow-neu-flat hover:shadow-neu-convex text-gray-500 hover:text-gray-700 bg-neu-base'}
                ${className}
            `}
        >
            {label}
            {count !== undefined && (
                <span className={`
                    w-4 h-4 flex items-center justify-center rounded-full text-[9px]
                    ${isActive 
                        ? 'bg-neu-accent text-white shadow-inner' 
                        : 'bg-gray-200 text-gray-500 shadow-inner'}
                `}>
                    {count}
                </span>
            )}
        </button>
    );
};