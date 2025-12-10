import React from 'react';
import { ReminderProps } from '../types';
import { Clock, Bell } from 'lucide-react';
import { NeuToggle } from './NeuToggle';
import { neuStyle } from '../neu-styles';
export const NeuReminder: React.FC<ReminderProps> = ({ date, isActive, onToggle, className = '' }) => {
const timeStr = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
const dateStr = date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
return (
<div className={`
flex items-center justify-between p-4 rounded-2xl bg-gray-100 transition-all duration-300 border border-white/20
${isActive ? ' opacity-100' : ' opacity-70'}
${className}
`} style={neuStyle('flat')}>
<div className="flex items-center gap-4">
<div className={`
w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300
${isActive ? 'bg-gray-100 text-amber-500' : 'bg-transparent shadow-none text-gray-400'}
`} style={neuStyle('flat')}>
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