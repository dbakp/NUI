import React from 'react';
import { SubtaskItemProps } from '../types';
import { Check, CornerDownRight } from 'lucide-react';

export const NeuSubtaskItem: React.FC<SubtaskItemProps> = ({ 
    id, 
    title, 
    completed, 
    onToggle, 
    className = ''
}) => {
    return (
        <div className={`flex items-start gap-3 pl-4 group ${className}`}>
             <div className="text-gray-300 mt-1">
                 <CornerDownRight size={16} />
             </div>
             
             <button
                onClick={() => onToggle(id)}
                className={`
                    w-11/12 flex items-center gap-3 p-3 rounded-xl transition-all duration-200 text-left
                    ${completed 
                        ? 'bg-transparent text-gray-400 opacity-60' 
                        : 'bg-neu-base hover:shadow-neu-flat text-gray-700'}
                `}
            >
                <div className={`
                    w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 transition-all duration-200 border border-transparent
                    ${completed 
                        ? 'bg-gray-300 text-white shadow-inner' 
                        : 'bg-neu-base shadow-neu-pressed border-white/20 group-hover:border-neu-accent/30'}
                `}>
                    {completed && <Check size={12} strokeWidth={3} />}
                </div>
                
                <span className={`text-sm font-medium transition-all ${completed ? 'line-through' : ''}`}>
                    {title}
                </span>
            </button>
        </div>
    );
};