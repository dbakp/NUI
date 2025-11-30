import React from 'react';
import { MeetingInviteProps } from '../types';
import { Calendar, MapPin, User, Check, X, HelpCircle } from 'lucide-react';
import { NeuAvatar } from './NeuAvatar';

export const NeuMeetingInvite: React.FC<MeetingInviteProps> = ({ 
    title, 
    organizer, 
    time, 
    location, 
    avatar, 
    status = 'pending', 
    onResponse, 
    className = '' 
}) => {
    return (
        <div className={`
            p-6 rounded-[2rem] bg-neu-base shadow-neu-convex border border-white/20
            flex flex-col gap-4 ${className}
        `}>
            <div className="flex justify-between items-start">
                <div className="flex gap-4">
                    <NeuAvatar src={avatar} fallback={organizer[0]} size="md" />
                    <div>
                        <h4 className="font-bold text-gray-800 text-lg leading-tight">{title}</h4>
                        <p className="text-sm font-semibold text-gray-500 mt-1">Invited by {organizer}</p>
                    </div>
                </div>
                {status !== 'pending' && (
                    <div className={`
                        px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider
                        ${status === 'accepted' ? 'text-neu-success bg-neu-success/10' : 'text-neu-danger bg-neu-danger/10'}
                    `}>
                        {status}
                    </div>
                )}
            </div>

            <div className="flex flex-col gap-2 p-4 rounded-xl bg-neu-base shadow-neu-flat border border-white/20">
                <div className="flex items-center gap-3 text-gray-600">
                    <Calendar size={16} className="text-neu-accent" />
                    <span className="text-sm font-semibold">{time}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                    <MapPin size={16} className="text-neu-accent" />
                    <span className="text-sm font-semibold">{location}</span>
                </div>
            </div>

            <div className="flex gap-3 mt-2">
                <button
                    onClick={() => onResponse && onResponse('accept')}
                    className={`
                        flex-1 py-2 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200
                        ${status === 'accepted' 
                            ? 'bg-neu-base shadow-neu-pressed text-neu-success' 
                            : 'bg-neu-base shadow-neu-flat hover:shadow-neu-convex text-gray-600 hover:text-neu-success'}
                    `}
                >
                    <Check size={16} strokeWidth={3} />
                    Accept
                </button>
                <button
                    onClick={() => onResponse && onResponse('maybe')}
                    className={`
                        flex-1 py-2 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200
                        ${status === 'pending' 
                            ? 'bg-neu-base shadow-neu-flat hover:shadow-neu-convex text-gray-600 hover:text-neu-warning' 
                            : 'bg-neu-base shadow-neu-flat text-gray-400'}
                    `}
                >
                    <HelpCircle size={16} strokeWidth={3} />
                    Maybe
                </button>
                <button
                    onClick={() => onResponse && onResponse('decline')}
                    className={`
                        flex-1 py-2 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200
                        ${status === 'declined' 
                            ? 'bg-neu-base shadow-neu-pressed text-neu-danger' 
                            : 'bg-neu-base shadow-neu-flat hover:shadow-neu-convex text-gray-600 hover:text-neu-danger'}
                    `}
                >
                    <X size={16} strokeWidth={3} />
                    Decline
                </button>
            </div>
        </div>
    );
};