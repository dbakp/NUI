import React from 'react';
import { SliderProps } from '../types';

export const NeuSlider: React.FC<SliderProps> = ({ 
  min, 
  max, 
  value, 
  onChange,
  label
}) => {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="w-full">
        {label && (
            <div className="flex justify-between mb-4 px-1">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{label}</span>
                <span className="text-xs font-bold text-neu-accent">{value}%</span>
            </div>
        )}
      <div className="relative h-6 rounded-full shadow-neu-pressed flex items-center px-1 bg-neu-base">
        {/* Fill (Optional, subtle highlight in the groove) */}
        <div 
            className="absolute left-1 top-1 bottom-1 rounded-full bg-neu-accent/10 pointer-events-none" 
            style={{ width: `calc(${percentage}% - 0.5rem)` }}
        />
        
        <input 
          type="range" 
          min={min} 
          max={max} 
          value={value} 
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
        />

        {/* Custom Thumb Representation */}
        <div 
            className="
                absolute h-5 w-5 rounded-full bg-neu-base 
                shadow-neu-convex pointer-events-none 
                transition-all duration-75 flex items-center justify-center
                border border-white/40
            "
            style={{ 
                left: `${percentage}%`, 
                transform: 'translateX(-50%)' 
            }}
        >
            {/* Center dot */}
            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
        </div>
      </div>
    </div>
  );
};