import React, { useState } from 'react';
import { TooltipProps } from '../types';

export const NeuTooltip: React.FC<TooltipProps> = ({ 
    content, 
    children, 
    position = 'top',
    className = ''
}) => {
    const [isVisible, setIsVisible] = useState(false);

    const positionClasses = {
        top: 'bottom-full left-1/2 -translate-x-1/2 mb-3',
        bottom: 'top-full left-1/2 -translate-x-1/2 mt-3',
        left: 'right-full top-1/2 -translate-y-1/2 mr-3',
        right: 'left-full top-1/2 -translate-y-1/2 ml-3'
    };

    return (
        <div 
            className={`relative inline-block ${className}`}
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {children}
            
            <div className={`
                absolute z-50 px-3 py-2 text-xs font-bold text-gray-600 bg-neu-base 
                rounded-xl shadow-neu-flat pointer-events-none transition-all duration-200
                border border-white/20 whitespace-nowrap
                ${positionClasses[position]}
                ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
            `}>
                {content}
            </div>
        </div>
    );
};