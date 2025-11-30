import React from 'react';
import { PricingCardProps } from '../types';
import { Check, X } from 'lucide-react';
import { NeuButton } from './NeuButton';

export const NeuPricingCard: React.FC<PricingCardProps> = ({ 
    planName, 
    price, 
    period = '/mo', 
    features, 
    isPopular = false, 
    buttonText = 'Choose Plan',
    onButtonClick,
    className = '' 
}) => {
    return (
        <div className={`
            relative p-8 rounded-[2.5rem] bg-neu-base 
            border border-white/20 transition-transform duration-300 hover:-translate-y-2
            ${isPopular ? 'shadow-neu-convex ring-2 ring-neu-accent/20 scale-105 z-10' : 'shadow-neu-flat'}
            ${className}
        `}>
            {isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="
                        bg-neu-accent text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-neu-pressed-sm
                    ">
                        Most Popular
                    </span>
                </div>
            )}

            <div className="text-center mb-8">
                <h3 className="text-lg font-bold text-gray-500 uppercase tracking-widest mb-4">{planName}</h3>
                <div className="flex items-end justify-center gap-1 text-gray-700">
                    <span className="text-4xl font-extrabold">{price}</span>
                    <span className="text-gray-400 font-semibold mb-1">{period}</span>
                </div>
            </div>

            <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <div className={`
                            w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0
                            ${feature.included 
                                ? 'bg-neu-base shadow-neu-pressed text-neu-success' 
                                : 'bg-transparent opacity-30 text-gray-400'}
                        `}>
                            {feature.included ? <Check size={14} strokeWidth={3} /> : <X size={14} />}
                        </div>
                        <span className={`text-sm font-medium ${feature.included ? 'text-gray-600' : 'text-gray-400'}`}>
                            {feature.text}
                        </span>
                    </div>
                ))}
            </div>

            <NeuButton 
                variant={isPopular ? 'accent' : 'primary'} 
                className="w-full" 
                onClick={onButtonClick}
                isActive={isPopular}
            >
                {buttonText}
            </NeuButton>
        </div>
    );
};