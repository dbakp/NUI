import React from 'react';
import { ColorPickerProps } from '../types';
import { Check } from 'lucide-react';

export const NeuColorPicker: React.FC<ColorPickerProps> = ({ 
    colors, 
    selectedColor, 
    onChange, 
    className = '' 
}) => {
    return (
        <div className={`flex flex-wrap gap-3 ${className}`}>
            {colors.map((color) => {
                const isSelected = selectedColor === color;
                return (
                    <button
                        key={color}
                        onClick={() => onChange(color)}
                        className={`
                            w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
                            ${isSelected 
                                ? 'shadow-neu-pressed border-2 border-white/10' 
                                : 'shadow-neu-flat hover:scale-110'}
                        `}
                        style={{ backgroundColor: color }}
                    >
                        {isSelected && (
                            <Check size={16} className="text-white drop-shadow-md" strokeWidth={3} />
                        )}
                    </button>
                );
            })}
        </div>
    );
};