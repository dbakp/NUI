import React from 'react';
import { KioskActionProps } from '../types';
import { ChevronRight } from 'lucide-react';

export const NeuKioskButton: React.FC<KioskActionProps> = ({ 
    title, 
    subtitle, 
    icon, 
    onClick, 
    variant = 'primary', 
    className = '' 
}) => {
    return (
        <button
            onClick={onClick}
            className={`
                w-full p-8 rounded-[2.5rem] text-left transition-all duration-300 group
                flex items-center justify-between border-2
                ${variant === 'primary' 
                    ? 'bg-neu-base shadow-neu-convex hover:shadow-neu-pressed border-white/20 active:scale-[0.98]' 
                    : 'bg-neu-base shadow-neu-flat hover:shadow-neu-convex border-transparent'}
                ${className}
            `}
        >
            <div className="flex items-center gap-6">
                <div className={`
                    w-20 h-20 rounded-3xl flex items-center justify-center transition-all duration-300
                    ${variant === 'primary' 
                        ? 'bg-neu-accent text-white shadow-neu-convex group-hover:scale-110' 
                        : 'bg-neu-base text-gray-500 shadow-neu-pressed'}
                `}>
                    {icon}
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-1 group-hover:text-neu-accent transition-colors">
                        {title}
                    </h3>
                    {subtitle && (
                        <p className="text-lg font-medium text-gray-500">{subtitle}</p>
                    )}
                </div>
            </div>

            <div className={`
                w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300
                ${variant === 'primary' 
                    ? 'bg-neu-base text-gray-400 shadow-neu-pressed group-hover:text-neu-accent' 
                    : 'bg-transparent text-gray-300'}
            `}>
                <ChevronRight size={24} />
            </div>
        </button>
    );
};