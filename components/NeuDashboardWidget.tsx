import React from 'react';
import { DashboardWidgetProps } from '../types';

export const NeuDashboardWidget: React.FC<DashboardWidgetProps> = ({ 
    title, 
    action, 
    children, 
    className = '' 
}) => {
    return (
        <div className={`
            flex flex-col h-full
            p-6 rounded-[2.5rem] bg-neu-base shadow-neu-convex border border-white/20
            transition-all duration-300 hover:shadow-lg
            ${className}
        `}>
            <div className="flex items-center justify-between mb-6 pl-1">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest">{title}</h3>
                {action && (
                    <div className="flex-shrink-0">
                        {action}
                    </div>
                )}
            </div>
            
            <div className="flex-1 min-h-0 relative">
                {children}
            </div>
        </div>
    );
};