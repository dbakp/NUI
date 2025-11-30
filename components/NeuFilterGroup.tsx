import React from 'react';
import { FilterGroupProps } from '../types';

export const NeuFilterGroup: React.FC<FilterGroupProps> = ({ 
    options, 
    selectedId, 
    onChange, 
    className = '' 
}) => {
    return (
        <div className={`
            inline-flex p-1.5 rounded-2xl bg-neu-base shadow-neu-pressed 
            gap-1 ${className}
        `}>
            {options.map((option) => {
                const isSelected = selectedId === option.id;
                return (
                    <button
                        key={option.id}
                        onClick={() => onChange(option.id)}
                        className={`
                            px-4 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wide transition-all duration-300
                            ${isSelected 
                                ? 'bg-neu-base shadow-neu-convex text-neu-accent transform scale-105' 
                                : 'text-gray-400 hover:text-gray-600'}
                        `}
                    >
                        {option.label}
                    </button>
                );
            })}
        </div>
    );
};