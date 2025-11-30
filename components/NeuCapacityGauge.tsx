import React from 'react';
import { CapacityGaugeProps } from '../types';
import { Users } from 'lucide-react';

export const NeuCapacityGauge: React.FC<CapacityGaugeProps> = ({ 
    current, 
    max, 
    label = "Occupancy", 
    className = '' 
}) => {
    const percentage = Math.min(100, Math.max(0, (current / max) * 100));
    
    // Color logic
    let color = '#10B981'; // Green
    if (percentage > 75) color = '#F59E0B'; // Orange
    if (percentage > 90) color = '#EF4444'; // Red

    return (
        <div className={`flex flex-col items-center p-4 ${className}`}>
            <div className="relative w-32 h-16 overflow-hidden mb-2">
                {/* Gauge Background (Semi-circle) */}
                <div className="absolute top-0 left-0 w-32 h-32 rounded-full border-[12px] border-neu-base shadow-neu-pressed box-border"></div>
                
                {/* Gauge Fill */}
                <div 
                    className="absolute top-0 left-0 w-32 h-32 rounded-full border-[12px] border-transparent transition-transform duration-1000 ease-out origin-bottom"
                    style={{ 
                        borderColor: color,
                        clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)',
                        transform: `rotate(${(percentage / 100) * 180}deg)` 
                    }}
                />
                
                {/* Mask to hide bottom half and create semi-circle effect properly for rotation */}
                {/* Actually, a simpler CSS approach for semi-circle progress usually involves rotating a covered half. 
                    Let's use an SVG for precision in neumorphism context. */}
            </div>
            
            {/* Re-implementing with SVG for cleaner arc control */}
            <div className="relative -mt-16 w-32 h-16">
                 <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible">
                     {/* Background Track */}
                     <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="12" strokeLinecap="round" />
                     <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="12" strokeLinecap="round" className="translate-y-[1px]" />
                     
                     {/* Progress Arc */}
                     <path 
                        d="M 10 50 A 40 40 0 0 1 90 50" 
                        fill="none" 
                        stroke={color} 
                        strokeWidth="12" 
                        strokeLinecap="round"
                        strokeDasharray="126" // Approx length of arc
                        strokeDashoffset={126 - (126 * (percentage / 100))}
                        className="transition-all duration-1000 ease-out drop-shadow-md"
                     />
                 </svg>
                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
                     <Users size={16} className="text-gray-400 mb-1" />
                 </div>
            </div>

            <div className="text-center mt-2">
                <span className="text-2xl font-extrabold text-gray-700">{current}</span>
                <span className="text-xs font-bold text-gray-400"> / {max}</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-1">{label}</span>
        </div>
    );
};