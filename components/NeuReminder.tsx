import React from 'react';
import { ReminderProps } from '../types';
import { Clock, Bell } from 'lucide-react';
import { NeuToggle } from './NeuToggle';

export const NeuReminder: React.FC<ReminderProps> = ({ 
    date, 
    isActive, 
    onToggle, 
    className = '' 
}) => {
    const timeStr = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    const dateStr = date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });

    return (
        <div className={`
            flex items-center justify-between p-4 rounded-2xl bg-neu-base 
            transition-all duration-300 border border-white/20
            ${isActive ? 'shadow-neu-convex opacity-100' : 'shadow-neu-flat opacity-70'}
            ${className}
        `}>
            <div className="flex items-center gap-4">
                <div className={`
                    w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300
                    ${isActive ? 'bg-neu-base shadow-neu-pressed text-neu-warning' : 'bg-transparent shadow-none text-gray-400'}
                `}>
                    <Bell size={20} fill={isActive ? "currentColor" : "none"} />
                </div>
                
                <div>
                    <h5 className={`font-bold text-lg ${isActive ? 'text-gray-700' : 'text-gray-500'}`}>
                        {timeStr}
                    </h5>
                    <div className="flex items-center gap-1 text-xs font-bold text-gray-400 uppercase tracking-wide">
                        <Clock size={10} />
                        <span>{dateStr}</span>
                    </div>
                </div>
            </div>
            
            <div className="scale-90">
                <NeuToggle checked={isActive} onChange={onToggle} size="sm" />
            </div>
        </div>
    );
};