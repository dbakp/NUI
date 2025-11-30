import React from 'react';
import { EmptyStateProps } from '../types';

export const NeuEmptyState: React.FC<EmptyStateProps> = ({ 
    icon, 
    title, 
    description, 
    action, 
    className = '' 
}) => {
    return (
        <div className={`flex flex-col items-center justify-center text-center p-8 ${className}`}>
            <div className="
                w-24 h-24 rounded-full bg-neu-base shadow-neu-pressed 
                flex items-center justify-center mb-6 text-gray-300
            ">
                <div className="transform scale-150">
                    {icon}
                </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-700 mb-2">{title}</h3>
            
            {description && (
                <p className="text-gray-500 max-w-sm mb-6 leading-relaxed">
                    {description}
                </p>
            )}
            
            {action && (
                <div>{action}</div>
            )}
        </div>
    );
};