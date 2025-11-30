import React from 'react';
import { BookingTimelineProps } from '../types';

export const NeuBookingTimeline: React.FC<BookingTimelineProps> = ({ 
    startTime, 
    endTime, 
    bookings, 
    className = '' 
}) => {
    // Helper to convert time string (HH:mm) to minutes from start of day
    const getMinutes = (time: string) => {
        const [h, m] = time.split(':').map(Number);
        return h * 60 + m;
    };

    const startTotal = getMinutes(startTime);
    const endTotal = getMinutes(endTime);
    const totalDuration = endTotal - startTotal;

    const getPosition = (time: string) => {
        const current = getMinutes(time);
        return Math.max(0, Math.min(100, ((current - startTotal) / totalDuration) * 100));
    };

    return (
        <div className={`w-full ${className}`}>
            <div className="flex justify-between text-xs font-bold text-gray-400 mb-2 px-1">
                <span>{startTime}</span>
                <span>{endTime}</span>
            </div>
            
            <div className="relative h-12 bg-neu-base rounded-xl shadow-neu-pressed w-full overflow-hidden flex items-center px-1">
                {/* Hour Markers (Optional) */}
                <div className="absolute inset-0 flex justify-between px-2 opacity-10 pointer-events-none">
                     {[...Array(10)].map((_, i) => <div key={i} className="w-px h-full bg-gray-500"></div>)}
                </div>

                {bookings.map((booking, index) => {
                    const left = getPosition(booking.start);
                    const width = getPosition(booking.end) - left;
                    
                    return (
                        <div
                            key={index}
                            className="absolute top-1 bottom-1 rounded-lg bg-neu-accent shadow-neu-convex border border-white/20 flex items-center justify-center overflow-hidden group cursor-pointer hover:bg-neu-accent/90 transition-colors"
                            style={{ left: `${left}%`, width: `${width}%` }}
                            title={`${booking.title} (${booking.start} - ${booking.end})`}
                        >
                             <span className="text-[10px] font-bold text-white truncate px-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                 {booking.title}
                             </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};