import React from 'react';
import { KanbanColumnProps } from '../types';
import { Plus } from 'lucide-react';

export const NeuKanbanColumn: React.FC<KanbanColumnProps> = ({ 
    title, 
    count, 
    children, 
    onAddClick,
    className = '' 
}) => {
    return (
        <div className={`
            flex flex-col bg-neu-base/50 rounded-[2rem] p-4 min-w-[300px] h-full
            shadow-neu-concave border border-white/10
            ${className}
        `}>
            <div className="flex justify-between items-center mb-4 px-2">
                <div className="flex items-center gap-2">
                    <h4 className="font-bold text-gray-700">{title}</h4>
                    {count !== undefined && (
                        <span className="px-2 py-0.5 rounded-full bg-neu-base shadow-neu-flat text-xs font-bold text-gray-500">
                            {count}
                        </span>
                    )}
                </div>
                {onAddClick && (
                    <button 
                        onClick={onAddClick}
                        className="p-1 text-gray-400 hover:text-neu-accent transition-colors rounded-lg hover:bg-white/30"
                    >
                        <Plus size={18} />
                    </button>
                )}
            </div>
            
            <div className="flex-1 overflow-y-auto space-y-3 p-1 custom-scrollbar">
                {children}
            </div>
        </div>
    );
};