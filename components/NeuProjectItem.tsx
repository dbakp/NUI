import React from 'react';
import { ProjectItemProps } from '../types';
import { Hash } from 'lucide-react';

export const NeuProjectItem: React.FC<ProjectItemProps> = ({ 
    name, 
    color = '#6B7280', 
    count, 
    isActive = false, 
    onClick,
    icon,
    className = '' 
}) => {
    return (
        <button
            onClick={onClick}
            className={`
                w-full flex items-center justify-between px-4 py-3 rounded-2xl
                transition-all duration-200 group outline-none
                ${isActive 
                    ? 'shadow-neu-pressed bg-neu-base text-gray-800' 
                    : 'shadow-neu-flat hover:shadow-neu-convex text-gray-600 hover:text-gray-800 bg-neu-base'}
                ${className}
            `}
        >
            <div className="flex items-center gap-3">
                {icon ? (
                    <span className={isActive ? 'text-neu-accent' : 'text-gray-400'}>{icon}</span>
                ) : (
                    <div 
                        className="w-3 h-3 rounded-full shadow-neu-pressed-sm border border-white/20"
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
                    ${isActive 
                        ? 'bg-transparent text-gray-500' 
                        : 'text-gray-400 group-hover:text-gray-500'}
                `}>
                    {count}
                </span>
            )}
        </button>
    );
};