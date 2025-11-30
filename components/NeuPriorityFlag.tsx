import React from 'react';
import { PriorityFlagProps } from '../types';
import { Flag } from 'lucide-react';

export const NeuPriorityFlag: React.FC<PriorityFlagProps> = ({ 
    priority, 
    onChange, 
    className = '' 
}) => {
    const priorities = [
        { value: 1, color: 'text-red-500', fill: 'fill-red-500' },
        { value: 2, color: 'text-orange-500', fill: 'fill-orange-500' },
        { value: 3, color: 'text-blue-500', fill: 'fill-blue-500' },
        { value: 4, color: 'text-gray-400', fill: 'fill-transparent' }
    ];

    const current = priorities.find(p => p.value === priority) || priorities[3];

    // If readonly (no onChange), just render icon
    if (!onChange) {
        return (
            <div className={`p-1 ${current.color} ${className}`}>
                 <Flag size={18} className={current.fill === 'fill-transparent' ? '' : current.fill} />
            </div>
        );
    }

    return (
        <div className={`flex gap-2 p-1.5 rounded-xl bg-neu-base shadow-neu-pressed ${className}`}>
            {priorities.map((p) => (
                <button
                    key={p.value}
                    onClick={() => onChange(p.value as 1|2|3|4)}
                    className={`
                        p-1.5 rounded-lg transition-all duration-200
                        ${priority === p.value 
                            ? 'bg-neu-base shadow-neu-convex scale-110' 
                            : 'hover:bg-white/40 opacity-50 hover:opacity-100'}
                    `}
                    title={`Priority ${p.value}`}
                >
                    <Flag 
                        size={16} 
                        className={p.color} 
                        fill={priority === p.value && p.value !== 4 ? 'currentColor' : 'none'}
                    />
                </button>
            ))}
        </div>
    );
};