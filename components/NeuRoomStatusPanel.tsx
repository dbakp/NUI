import React from 'react';
import { RoomDisplayProps } from '../types';
import { Clock, User } from 'lucide-react';

export const NeuRoomStatusPanel: React.FC<RoomDisplayProps> = ({ 
    roomName, 
    status, 
    currentMeeting, 
    nextMeeting, 
    onBookNow, 
    className = '' 
}) => {
    const isBusy = status === 'busy';

    return (
        <div className={`
            relative overflow-hidden rounded-[3rem] bg-neu-base shadow-neu-convex border-[8px] border-neu-base 
            flex flex-col h-[500px] w-full max-w-sm mx-auto
            ${className}
        `}>
            {/* Status Header */}
            <div className={`
                flex-1 p-8 flex flex-col justify-between relative z-10 transition-colors duration-500
                ${isBusy ? 'bg-neu-danger/10' : 'bg-neu-success/10'}
            `}>
                <div className="flex justify-between items-start">
                    <h2 className="text-3xl font-extrabold text-gray-800">{roomName}</h2>
                    <div className={`
                        px-4 py-2 rounded-xl text-sm font-bold uppercase tracking-widest shadow-neu-pressed-sm border border-white/20
                        ${isBusy ? 'bg-neu-danger text-white' : 'bg-neu-success text-white'}
                    `}>
                        {isBusy ? 'Occupied' : 'Available'}
                    </div>
                </div>

                <div className="mt-8">
                    {isBusy && currentMeeting ? (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <p className="text-xs font-bold text-neu-danger uppercase tracking-widest mb-2">Current Meeting</p>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2 leading-tight">{currentMeeting.subject}</h3>
                            <div className="flex items-center gap-4 text-gray-600 font-semibold">
                                <div className="flex items-center gap-1"><User size={16}/> {currentMeeting.organizer}</div>
                                <div className="flex items-center gap-1"><Clock size={16}/> Ends {currentMeeting.endTime}</div>
                            </div>
                        </div>
                    ) : (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                             <h3 className="text-4xl font-light text-gray-400 mb-2">Room is free</h3>
                             <p className="text-gray-500 font-medium">You can book this room instantly.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Bottom Panel */}
            <div className="bg-neu-base p-8 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] z-20 relative">
                {nextMeeting && (
                    <div className="mb-6 flex items-center justify-between">
                         <div>
                             <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Up Next</p>
                             <p className="font-bold text-gray-700">{nextMeeting.subject}</p>
                         </div>
                         <div className="text-right">
                             <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Time</p>
                             <p className="font-bold text-gray-700">{nextMeeting.time}</p>
                         </div>
                    </div>
                )}
                
                <button
                    onClick={onBookNow}
                    className="
                        w-full py-4 rounded-2xl font-bold text-lg
                        shadow-neu-convex hover:shadow-neu-pressed active:scale-[0.98]
                        bg-neu-base text-gray-700 border border-white/20
                        transition-all duration-200
                    "
                >
                    {isBusy ? 'Book for Later' : 'Book Now'}
                </button>
            </div>
        </div>
    );
};