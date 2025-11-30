import React from 'react';
import { OccupancyHeatmapProps } from '../types';

export const NeuOccupancyHeatmap: React.FC<OccupancyHeatmapProps> = ({ 
    data, 
    className = '' 
}) => {
    const hours = Array.from({length: 10}, (_, i) => i + 8); // 8 AM to 5 PM
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

    const getIntensityColor = (value: number) => {
        if (value === 0) return 'bg-gray-200/30';
        if (value < 30) return 'bg-neu-accent/20';
        if (value < 60) return 'bg-neu-accent/50';
        if (value < 90) return 'bg-neu-accent/80';
        return 'bg-neu-accent';
    };

    return (
        <div className={`p-8 rounded-[2.5rem] bg-neu-base shadow-neu-convex border border-white/20 overflow-hidden ${className}`}>
            <div className="flex justify-between items-center mb-6">
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest">Occupancy Heatmap</h4>
                <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase">
                    <span>Low</span>
                    <div className="w-20 h-2 rounded-full bg-gradient-to-r from-neu-accent/10 to-neu-accent shadow-neu-pressed"></div>
                    <span>High</span>
                </div>
            </div>
            
            <div className="overflow-x-auto pb-2 custom-scrollbar">
                <div className="grid grid-cols-[auto_repeat(10,1fr)] gap-3 min-w-[600px]">
                    {/* Header Row (Hours) */}
                    <div className="h-6"></div>
                    {hours.map(h => (
                        <div key={h} className="text-[10px] font-bold text-gray-400 text-center flex items-end justify-center pb-1">
                            {h <= 12 ? h : h - 12}{h < 12 ? 'am' : 'pm'}
                        </div>
                    ))}

                    {/* Rows */}
                    {days.map(day => (
                        <React.Fragment key={day}>
                            <div className="text-xs font-bold text-gray-500 self-center pr-2">{day}</div>
                            {hours.map(h => {
                                const cell = data.find(d => d.day === day && d.hour === h);
                                const val = cell ? cell.value : 0;
                                return (
                                    <div 
                                        key={`${day}-${h}`}
                                        className="relative group aspect-square"
                                    >
                                        <div 
                                            className={`
                                                w-full h-full rounded-lg transition-all duration-300 
                                                border border-transparent hover:border-white/50 hover:scale-110 hover:shadow-lg hover:z-10 relative
                                                ${getIntensityColor(val)}
                                            `}
                                        />
                                        {/* Tooltip */}
                                        <div className="
                                            absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 
                                            bg-gray-800 text-white text-[10px] font-bold rounded-md 
                                            opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20
                                        ">
                                            {val}%
                                        </div>
                                    </div>
                                );
                            })}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};