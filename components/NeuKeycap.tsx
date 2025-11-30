import React from 'react';
import { KeycapProps } from '../types';

export const NeuKeycap: React.FC<KeycapProps> = ({ 
    label, 
    size = 'md', 
    className = '' 
}) => {
    const sizes = {
        sm: 'min-w-[20px] h-5 text-[10px] px-1',
        md: 'min-w-[32px] h-8 text-xs px-2',
        lg: 'min-w-[48px] h-12 text-sm px-3'
    };

    return (
        <div className={`
            ${sizes[size]} 
            inline-flex items-center justify-center 
            bg-neu-base rounded-lg
            shadow-neu-convex
            border border-b-4 border-gray-300/50 
            text-gray-500 font-bold font-mono
            active:border-b-0 active:translate-y-1 active:shadow-neu-pressed-sm
            transition-all duration-100 select-none
            ${className}
        `}>
            {label}
        </div>
    );
};