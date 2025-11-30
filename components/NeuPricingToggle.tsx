import React from 'react';
import { PricingToggleProps } from '../types';

export const NeuPricingToggle: React.FC<PricingToggleProps> = ({ 
    isYearly, 
    onChange, 
    monthlyLabel = "Monthly", 
    yearlyLabel = "Yearly", 
    discountBadge,
    className = ''
}) => {
    return (
        <div className={`flex items-center gap-4 ${className}`}>
            <span className={`font-bold transition-colors ${!isYearly ? 'text-gray-800' : 'text-gray-400'}`}>
                {monthlyLabel}
            </span>
            
            <button
                onClick={() => onChange(!isYearly)}
                className="
                    relative w-16 h-8 rounded-full bg-neu-base shadow-neu-pressed 
                    flex items-center transition-all duration-300 outline-none
                "
            >
                <div className={`
                    w-6 h-6 rounded-full bg-neu-accent shadow-neu-convex
                    absolute top-1 transition-all duration-300
                    ${isYearly ? 'left-[calc(100%-28px)]' : 'left-1'}
                `} />
            </button>
            
            <div className="flex items-center gap-2">
                <span className={`font-bold transition-colors ${isYearly ? 'text-gray-800' : 'text-gray-400'}`}>
                    {yearlyLabel}
                </span>
                {discountBadge && (
                    <span className="
                        px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider
                        text-neu-success bg-neu-success/10 border border-neu-success/20
                    ">
                        {discountBadge}
                    </span>
                )}
            </div>
        </div>
    );
};