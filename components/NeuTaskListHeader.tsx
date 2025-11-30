import React from 'react';
import { TaskListHeaderProps } from '../types';

export const NeuTaskListHeader: React.FC<TaskListHeaderProps> = ({ 
    title, 
    count, 
    action, 
    className = '' 
}) => {
    return (
        <div className={`
            flex items-center justify-between pb-2 mb-4 
            border-b border-gray-300/30 sticky top-0 bg-neu-base/95 z-10 backdrop-blur-sm
            ${className}
        `}>
            <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-gray-800">{title}</h3>
                {count !== undefined && (
                    <span className="text-xs font-bold text-gray-400 bg-black/5 px-2 py-0.5 rounded-md">
                        {count}
                    </span>
                )}
            </div>
            {action && (
                <div>{action}</div>
            )}
        </div>
    );
};