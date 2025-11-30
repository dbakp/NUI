import React from 'react';
import { DeskSelectorProps } from '../types';
import { Monitor, Wifi, Zap } from 'lucide-react';

export const NeuDeskSelector: React.FC<DeskSelectorProps> = ({ 
    deskId, 
    status, 
    features = [], 
    onSelect, 
    className = '' 
}) => {
    const isAvailable = status === 'available';
    const isBooked = status === 'booked';

    return (
        <button 
            onClick={isAvailable ? onSelect : undefined}
            disabled={!isAvailable}
            className={`
                relative flex flex-col items-center justify-center p-4 rounded-2xl transition-all duration-300 w-full aspect-square
                ${isAvailable 
                    ? 'bg-neu-base shadow-neu-flat hover:shadow-neu-convex hover:-translate-y-1 cursor-pointer' 
                    : 'bg-neu-base shadow-neu-pressed opacity-80 cursor-not-allowed'}
                border border-white/20
                ${className}
            `}
        >
            <div className={`
                w-3 h-3 rounded-full absolute top-3 right-3 shadow-sm
                ${isAvailable ? 'bg-neu-success' : isBooked ? 'bg-neu-danger' : 'bg-gray-400'}
            `} />

            <h4 className={`text-xl font-bold mb-2 ${isAvailable ? 'text-gray-700' : 'text-gray-400'}`}>
                {deskId}
            </h4>
            
            <div className="flex gap-2 text-gray-400">
                {features.includes('monitor') && <Monitor size={14} />}
                {features.includes('dock') && <Zap size={14} />}
            </div>

            {isBooked && (
                <div className="absolute inset-0 flex items-center justify-center bg-neu-base/60 backdrop-blur-[1px] rounded-2xl">
                    <span className="text-xs font-bold text-neu-danger uppercase tracking-widest border border-neu-danger px-2 py-1 rounded-lg">
                        Booked
                    </span>
                </div>
            )}
        </button>
    );
};