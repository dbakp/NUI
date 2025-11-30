import React, { useState } from 'react';
import { LabelPickerProps } from '../types';
import { Tag, Check } from 'lucide-react';
import { NeuButton } from './NeuButton';

export const NeuLabelPicker: React.FC<LabelPickerProps> = ({ 
    labels, 
    selectedIds, 
    onChange, 
    className = '' 
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleLabel = (id: string) => {
        if (selectedIds.includes(id)) {
            onChange(selectedIds.filter(lid => lid !== id));
        } else {
            onChange([...selectedIds, id]);
        }
    };

    return (
        <div className={`relative ${className}`}>
            <NeuButton 
                onClick={() => setIsOpen(!isOpen)} 
                variant="secondary" 
                size="sm" 
                icon={<Tag size={14}/>}
                isActive={isOpen || selectedIds.length > 0}
            >
                {selectedIds.length > 0 ? `${selectedIds.length} Labels` : 'Labels'}
            </NeuButton>

            {isOpen && (
                <div className="
                    absolute top-full left-0 mt-3 p-3 w-56 z-20
                    bg-neu-base rounded-2xl shadow-neu-convex border border-white/20
                    animate-in fade-in zoom-in-95 duration-200
                ">
                    <h5 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 px-1">Select Labels</h5>
                    <div className="space-y-1 max-h-48 overflow-y-auto custom-scrollbar">
                        {labels.map(label => {
                            const isSelected = selectedIds.includes(label.id);
                            return (
                                <button
                                    key={label.id}
                                    onClick={() => toggleLabel(label.id)}
                                    className={`
                                        w-full flex items-center justify-between px-3 py-2 rounded-xl transition-all
                                        ${isSelected 
                                            ? 'bg-neu-base shadow-neu-pressed' 
                                            : 'hover:bg-white/40 hover:shadow-neu-flat'}
                                    `}
                                >
                                    <div className="flex items-center gap-2">
                                        <div 
                                            className="w-3 h-3 rounded-full shadow-sm"
                                            style={{ backgroundColor: label.color }}
                                        />
                                        <span className={`text-sm font-semibold ${isSelected ? 'text-gray-800' : 'text-gray-600'}`}>
                                            {label.name}
                                        </span>
                                    </div>
                                    {isSelected && <Check size={14} className="text-neu-accent" />}
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};