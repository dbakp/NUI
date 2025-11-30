import React from 'react';
import { RoomCardProps } from '../types';
import { Users, Clock, Monitor, Wifi, Zap } from 'lucide-react';
import { NeuButton } from './NeuButton';

export const NeuRoomCard: React.FC<RoomCardProps> = ({ 
    name, 
    capacity, 
    status, 
    nextMeeting, 
    equipment = [], 
    onBook, 
    className = '' 
}) => {
    const statusConfig = {
        available: { color: 'text-neu-success', bg: 'bg-neu-success', label: 'Available' },
        busy: { color: 'text-neu-danger', bg: 'bg-neu-danger', label: 'Busy' },
        cleaning: { color: 'text-neu-warning', bg: 'bg-neu-warning', label: 'Cleaning' }
    };

    const currentStatus = statusConfig[status];

    return (
        <div className={`
            p-6 rounded-[2rem] bg-neu-base shadow-neu-convex border border-white/20
            flex flex-col gap-4 group transition-all duration-300 hover:-translate-y-1
            ${className}
        `}>
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-xl font-bold text-gray-800">{name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                        <Users size={14} className="text-gray-400" />
                        <span className="text-sm text-gray-500 font-semibold">{capacity} People</span>
                    </div>
                </div>
                
                {/* Status LED */}
                <div className={`
                    flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide
                    shadow-neu-pressed bg-neu-base ${currentStatus.color}
                `}>
                    <div className={`w-2 h-2 rounded-full ${currentStatus.bg} shadow-[0_0_8px_currentColor] animate-pulse`} />
                    {currentStatus.label}
                </div>
            </div>

            {/* Equipment Icons */}
            <div className="flex gap-2 text-gray-400">
                {equipment.includes('tv') && <Monitor size={16} />}
                {equipment.includes('wifi') && <Wifi size={16} />}
                {equipment.includes('power') && <Zap size={16} />}
            </div>

            <div className="h-px bg-gray-300/30 w-full" />

            <div className="flex-1">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Next Meeting</p>
                {nextMeeting ? (
                    <div className="bg-neu-base/50 p-3 rounded-xl shadow-neu-flat border border-white/20">
                        <div className="flex items-center gap-2 text-neu-accent font-bold text-sm mb-1">
                            <Clock size={14} />
                            {nextMeeting.time}
                        </div>
                        <p className="text-sm font-semibold text-gray-700 truncate">{nextMeeting.subject}</p>
                    </div>
                ) : (
                    <p className="text-sm text-gray-400 italic">No upcoming meetings today.</p>
                )}
            </div>

            <NeuButton 
                className="w-full mt-2" 
                variant={status === 'available' ? 'accent' : 'secondary'}
                disabled={status !== 'available'}
                onClick={onBook}
            >
                {status === 'available' ? 'Book Room' : 'Unavailable'}
            </NeuButton>
        </div>
    );
};