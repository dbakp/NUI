import React from 'react';
import { InsightChartProps } from '../types';

export const NeuInsightChart: React.FC<InsightChartProps> = ({ 
    title, 
    data, 
    maxValue, 
    className = '' 
}) => {
    // Determine max value for scaling if not provided
    const calculatedMax = maxValue || Math.max(...data.map(d => d.value)) * 1.2;

    return (
        <div className={`p-6 rounded-[2rem] bg-neu-base shadow-neu-convex border border-white/20 ${className}`}>
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">{title}</h3>
            
            <div className="flex items-end justify-between gap-2 h-48 relative">
                {/* Y-Axis Grid Lines (Visual only) */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                    <div className="w-full h-px bg-gray-400 border-dashed border-t"></div>
                    <div className="w-full h-px bg-gray-400 border-dashed border-t"></div>
                    <div className="w-full h-px bg-gray-400 border-dashed border-t"></div>
                    <div className="w-full h-px bg-gray-400 border-dashed border-t"></div>
                </div>

                {data.map((item, index) => {
                    const heightPercent = (item.value / calculatedMax) * 100;
                    return (
                        <div key={index} className="flex-1 flex flex-col items-center justify-end h-full z-10 group">
                            {/* Tooltip Value */}
                            <div className="mb-2 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold text-gray-700 bg-white/50 px-2 py-1 rounded-lg shadow-sm transform translate-y-2 group-hover:translate-y-0 duration-200">
                                {item.value}
                            </div>
                            
                            {/* The Bar */}
                            <div className="w-full max-w-[24px] bg-neu-base rounded-t-full rounded-b-lg shadow-neu-pressed relative overflow-hidden h-full">
                                <div 
                                    className="absolute bottom-0 w-full transition-all duration-1000 ease-out rounded-t-full"
                                    style={{ 
                                        height: `${heightPercent}%`, 
                                        backgroundColor: item.color || '#6C63FF' 
                                    }} 
                                />
                            </div>
                            
                            {/* Label */}
                            <span className="mt-3 text-[10px] font-bold text-gray-400 uppercase tracking-wide truncate w-full text-center">
                                {item.label}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};