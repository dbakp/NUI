import React from 'react';
import { DividerProps } from '../types';

export const NeuDivider: React.FC<DividerProps> = ({ 
    label, 
    orientation = 'horizontal', 
    className = '' 
}) => {
    if (orientation === 'vertical') {
        return (
            <div className={`h-full w-px bg-gray-300 shadow-[1px_0_0_white] mx-2 ${className}`} />
        );
    }

    return (
        <div className={`flex items-center w-full my-4 ${className}`}>
            <div className="flex-grow h-px bg-gray-300 shadow-[0_1px_0_white]" />
            {label && (
                <span className="flex-shrink-0 px-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
                    {label}
                </span>
            )}
            {label && <div className="flex-grow h-px bg-gray-300 shadow-[0_1px_0_white]" />}
        </div>
    );
};