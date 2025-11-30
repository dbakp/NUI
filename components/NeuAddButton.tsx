import React from 'react';
import { AddButtonProps } from '../types';
import { Plus } from 'lucide-react';

export const NeuAddButton: React.FC<AddButtonProps> = ({ 
    label, 
    onClick, 
    isExpanded = false, 
    className = '' 
}) => {
    if (isExpanded) {
        return (
            <button
                onClick={onClick}
                className={`
                    flex items-center gap-2 px-4 py-2 w-full
                    rounded-xl text-neu-accent font-bold text-sm
                    bg-neu-base shadow-neu-flat hover:shadow-neu-pressed hover:translate-y-[1px]
                    transition-all duration-200 outline-none
                    group
                    ${className}
                `}
            >
                <div className="
                    w-6 h-6 rounded-full flex items-center justify-center 
                    bg-neu-accent text-white shadow-md group-hover:scale-110 transition-transform
                ">
                    <Plus size={16} strokeWidth={3} />
                </div>
                <span>{label || 'Add Task'}</span>
            </button>
        );
    }

    return (
        <button
            onClick={onClick}
            className={`
                w-12 h-12 rounded-full flex items-center justify-center
                bg-neu-accent text-white shadow-neu-convex
                hover:shadow-neu-pressed active:scale-95
                transition-all duration-200
                ${className}
            `}
            title={label || 'Add'}
        >
            <Plus size={24} strokeWidth={3} />
        </button>
    );
};