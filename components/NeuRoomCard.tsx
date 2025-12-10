import React from 'react';
import { RoomCardProps } from '../types';
import { Users, Clock, Monitor, Wifi, Zap } from 'lucide-react';
import { NeuButton } from './NeuButton';
import { neuStyle } from '../neu-styles';
export const NeuRoomCard: React.FC<RoomCardProps> = ({ name, capacity, status, nextMeeting, equipment = [], onBook, className = '' }) => {
const statusConfig = {
available: { color: 'text-emerald-500', bg: 'bg-emerald-500', label: 'Available' },
busy: { color: 'text-red-500', bg: 'bg-red-500', label: 'Busy' },
cleaning: { color: 'text-amber-500', bg: 'bg-amber-500', label: 'Cleaning' }
};
const currentStatus = statusConfig[status];
return (
<div className={`
p-6 rounded-[2rem] bg-gray-100 border border-white/20
flex flex-col gap-4 group transition-all duration-300 hover:-translate-y-1
${className}
`} style={neuStyle('flat')}>
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
flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide bg-gray-100 ${currentStatus.color}
`} style={neuStyle('flat')}>
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
<div className="p-3 rounded-xl border border-white/20" style={neuStyle('flat')}>
<div className="flex items-center gap-2 text-indigo-500 font-bold text-sm mb-1">
<Clock size={14} />
{nextMeeting.time}
</div>
<p className="text-sm font-semibold text-gray-700 truncate">{nextMeeting.subject}</p>
</div>
) : (
<p className="text-sm text-gray-400 italic">No upcoming meetings today.</p>
)}
</div>
<NeuButton className="w-full mt-2" variant={status === 'available' ? 'accent' : 'secondary'}
disabled={status !== 'available'}
onClick={onBook}
>
{status === 'available' ? 'Book Room' : 'Unavailable'}
</NeuButton>
</div>
);
};