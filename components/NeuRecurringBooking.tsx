import React from 'react';
import { RecurringBookingProps } from '../types';
import { NeuSelect } from './NeuSelect';
import { CalendarClock } from 'lucide-react';

export const NeuRecurringBooking: React.FC<RecurringBookingProps> = ({ 
    frequency, 
    days, 
    onFrequencyChange, 
    onDaysChange, 
    className = '' 
}) => {
    const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    const toggleDay = (day: string) => {
        if (days.includes(day)) {
            onDaysChange(days.filter(d => d !== day));
        } else {
            onDaysChange([...days, day]);
        }
    };

    return (
        <div className={`p-6 rounded-[2rem] bg-neu-base shadow-neu-convex border border-white/20 ${className}`}>
            <div className="flex items-center gap-2 mb-6">
                <div className="text-neu-accent p-2 rounded-xl bg-neu-base shadow-neu-pressed">
                    <CalendarClock size={20} />
                </div>
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest">Recurring Schedule</h4>
            </div>
            
            <div className="mb-8">
                <NeuSelect 
                    value={frequency}
                    onChange={(val) => onFrequencyChange(val as any)}
                    options={[
                        { value: 'daily', label: 'Daily' },
                        { value: 'weekly', label: 'Weekly' },
                        { value: 'monthly', label: 'Monthly' }
                    ]}
                    label="Frequency"
                />
            </div>

            {frequency === 'weekly' && (
                <div className="mb-6">
                    <label className="block mb-3 ml-1 text-sm font-bold text-gray-500 uppercase tracking-wider">Repeat On</label>
                    <div className="flex justify-between gap-2 overflow-x-auto pb-2 custom-scrollbar">
                        {weekDays.map(day => {
                            const isSelected = days.includes(day);
                            return (
                                <button
                                    key={day}
                                    onClick={() => toggleDay(day)}
                                    className={`
                                        w-10 h-10 flex-shrink-0 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300
                                        ${isSelected 
                                            ? 'bg-neu-base shadow-neu-pressed text-neu-accent ring-1 ring-neu-accent/20 scale-95' 
                                            : 'bg-neu-base shadow-neu-convex text-gray-500 hover:text-gray-700 hover:-translate-y-0.5'}
                                    `}
                                >
                                    {day.charAt(0)}
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}
            
            <div className="flex items-center justify-center pt-4 border-t border-gray-300/30">
                <p className="text-xs text-neu-accent font-bold bg-neu-accent/5 px-3 py-1 rounded-full border border-neu-accent/10">
                    Ends on Dec 31, 2024
                </p>
            </div>
        </div>
    );
};