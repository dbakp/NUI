import React, { useState, useEffect } from 'react';
import { MeetingTimerProps } from '../types';
import { Play, Pause, Plus, Square, Clock } from 'lucide-react';
import { neuStyle } from '../neu-styles';
export const NeuMeetingTimer: React.FC<MeetingTimerProps> = ({ durationMinutes, onExtend, onEnd, className = '' }) => {
const [totalSeconds, setTotalSeconds] = useState(durationMinutes * 60);
const [timeLeft, setTimeLeft] = useState(durationMinutes * 60);
const [isActive, setIsActive] = useState(false);
useEffect(() => {
let interval: any = null;
if (isActive && timeLeft > 0) {
interval = setInterval(() => {
setTimeLeft(prev => prev - 1);
}, 1000);
} else if (timeLeft === 0) {
setIsActive(false);
}
return () => clearInterval(interval);
}, [isActive, timeLeft]);
const formatTime = (seconds: number) => {
const h = Math.floor(seconds / 3600);
const m = Math.floor((seconds % 3600) / 60);
const s = seconds % 60;
if (h > 0) {
return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}
return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
};
const progress = ((totalSeconds - timeLeft) / totalSeconds) * 100;
const toggleTimer = () => setIsActive(!isActive);
const handleEnd = () => {
setIsActive(false);
onEnd();
};
const handleExtend = () => {
const extension = 15 * 60;
setTimeLeft(prev => prev + extension);
setTotalSeconds(prev => prev + extension);
onExtend();
};
return (
<div className={`flex flex-col items-center p-8 rounded-[2.5rem] border border-white/20 ${className}`} style={neuStyle('flat')}>
<div className="flex items-center gap-2 mb-6 opacity-50">
<Clock size={14} />
<h4 className="text-xs font-bold uppercase tracking-widest">Meeting Timer</h4>
</div>
<div className="relative mb-8 group cursor-default">
{/* Progress Ring Background */}
<div className="absolute -inset-4 rounded-full opacity-50" style={neuStyle('flat')}>
{/* Timer Display */}
<div className="relative w-64 h-32 rounded-3xl bg-gray-100 flex items-center justify-center border border-white/10
overflow-hidden
" style={neuStyle('flat')}>
{/* Progress Bar (Bottom) */}
<div className="absolute bottom-0 left-0 h-1.5 bg-indigo-500 transition-all duration-1000"
style={{ width: `${Math.min(100, Math.max(0, (timeLeft / totalSeconds) * 100))}%` }}
/>
<span className={`text-6xl font-mono font-bold tracking-wider tabular-nums transition-colors ${isActive ? 'text-gray-800' : 'text-gray-400'}`}>
{formatTime(timeLeft)}
</span>
</div>
</div>
<div className="flex gap-6">
<button onClick={toggleTimer}
className={`
w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300
border border-white/20
${isActive ? 'bg-gray-100 text-indigo-500' : 'bg-gray-100 hover:scale-105 text-emerald-500'}
`}
style={neuStyle('convex')}>
{isActive ? <Pause size={28} fill="currentColor"/> : <Play size={28} fill="currentColor" className="ml-1"/>}
</button>
<button onClick={handleExtend}
className="px-6 h-16 rounded-full flex items-center gap-2 bg-gray-100 text-gray-600 font-bold transition-all border border-white/20
"
style={neuStyle('convex')}>
<Plus size={20} /> <span>15m</span>
</button>
<button onClick={handleEnd}
className="w-16 h-16 rounded-full flex items-center justify-center bg-gray-100 text-red-500 transition-all border border-white/20 group
"
style={neuStyle('convex')}>
<Square size={24} fill="currentColor" className="group-hover:scale-90 transition-transform"/>
</button>
</div>
</div>
</div>
);
};