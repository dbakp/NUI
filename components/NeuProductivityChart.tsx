import React from 'react';
import { ProductivityChartProps } from '../types';
import { Trophy } from 'lucide-react';

export const NeuProductivityChart: React.FC<ProductivityChartProps> = ({ 
    current, 
    goal, 
    label = "Daily Goal", 
    className = '' 
}) => {
    const percentage = Math.min(100, Math.max(0, (current / goal) * 100));
    const size = 100;
    const strokeWidth = 8;
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (percentage / 100) * circumference;
    const isGoalMet = current >= goal;

    return (
        <div className={`flex flex-col items-center text-center p-4 ${className}`}>
            <div className="relative w-[100px] h-[100px] mb-3">
                 {/* Background Circle (Groove) */}
                 <div className="absolute inset-0 rounded-full shadow-neu-pressed bg-neu-base"></div>
                 
                 {/* Progress SVG */}
                 <svg className="absolute inset-0 transform -rotate-90 drop-shadow-sm" width={size} height={size}>
                    <circle
                        stroke="transparent"
                        fill="transparent"
                        strokeWidth={strokeWidth}
                        r={radius}
                        cx={size / 2}
                        cy={size / 2}
                    />
                    <circle
                        stroke={isGoalMet ? "#10B981" : "#6C63FF"}
                        fill="transparent"
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        r={radius}
                        cx={size / 2}
                        cy={size / 2}
                        className="transition-all duration-1000 ease-out"
                    />
                 </svg>
                 
                 {/* Inner Content */}
                 <div className="absolute inset-0 flex items-center justify-center">
                     <div className="flex flex-col items-center">
                         {isGoalMet ? (
                             <Trophy size={24} className="text-neu-success mb-1" fill="currentColor" />
                         ) : (
                             <span className="text-2xl font-extrabold text-gray-700">{current}</span>
                         )}
                         <span className="text-[10px] text-gray-400 font-bold uppercase">/ {goal}</span>
                     </div>
                 </div>
            </div>
            
            <h5 className="text-xs font-bold text-gray-600 uppercase tracking-widest">{label}</h5>
            {isGoalMet && <span className="text-[10px] text-neu-success font-bold mt-1">Goal Reached!</span>}
        </div>
    );
};