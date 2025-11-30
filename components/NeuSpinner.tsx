import React from 'react';
import { SpinnerProps } from '../types';

export const NeuSpinner: React.FC<SpinnerProps> = ({ 
    size = 'md', 
    className = '' 
}) => {
    const sizeClasses = {
        sm: 'w-6 h-6 border-2',
        md: 'w-10 h-10 border-4',
        lg: 'w-16 h-16 border-4'
    };

    return (
        <div className={`relative flex items-center justify-center ${className}`}>
             {/* Recessed Track */}
            <div 
                className={`
                    ${size === 'sm' ? 'w-10 h-10' : size === 'md' ? 'w-16 h-16' : 'w-24 h-24'}
                    rounded-full shadow-neu-pressed bg-neu-base
                    flex items-center justify-center
                `}
            >
                <div 
                    className={`
                        ${sizeClasses[size]}
                        rounded-full border-gray-300 border-t-neu-accent
                        animate-spin
                    `} 
                />
            </div>
        </div>
    );
};