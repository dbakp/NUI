import React from 'react';
import { ServiceItemProps } from '../types';
import { Plus, Minus } from 'lucide-react';

export const NeuServicePicker: React.FC<ServiceItemProps> = ({ 
    id, 
    name, 
    description, 
    price, 
    icon, 
    quantity, 
    onChange, 
    className = '' 
}) => {
    return (
        <div className={`
            flex items-center justify-between p-4 rounded-2xl bg-neu-base 
            shadow-neu-flat border border-white/20 hover:shadow-neu-convex transition-shadow
            ${className}
        `}>
            <div className="flex items-center gap-4">
                {icon && (
                    <div className="w-12 h-12 rounded-xl bg-neu-base shadow-neu-pressed flex items-center justify-center text-neu-accent">
                        {icon}
                    </div>
                )}
                <div>
                    <h4 className="font-bold text-gray-800">{name}</h4>
                    {description && <p className="text-xs text-gray-500 font-medium">{description}</p>}
                    {price && <p className="text-sm font-bold text-gray-700 mt-1">{price}</p>}
                </div>
            </div>

            <div className="flex items-center gap-4 bg-neu-base rounded-full shadow-neu-pressed p-1">
                <button 
                    onClick={() => onChange(Math.max(0, quantity - 1))}
                    disabled={quantity === 0}
                    className={`
                        w-8 h-8 rounded-full flex items-center justify-center transition-all
                        ${quantity === 0 
                            ? 'text-gray-300 cursor-not-allowed' 
                            : 'text-gray-600 hover:text-neu-danger hover:shadow-neu-convex bg-neu-base active:scale-90'}
                    `}
                >
                    <Minus size={14} strokeWidth={3} />
                </button>
                
                <span className="w-6 text-center font-bold text-gray-800 select-none">
                    {quantity}
                </span>
                
                <button 
                    onClick={() => onChange(quantity + 1)}
                    className="
                        w-8 h-8 rounded-full flex items-center justify-center transition-all
                        text-gray-600 hover:text-neu-success hover:shadow-neu-convex bg-neu-base active:scale-90
                    "
                >
                    <Plus size={14} strokeWidth={3} />
                </button>
            </div>
        </div>
    );
};