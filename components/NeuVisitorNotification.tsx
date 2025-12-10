import React from 'react';
import { VisitorNotificationProps } from '../types';
import { Bell, MessageSquare, Check, UserCheck } from 'lucide-react';
import { NeuButton } from './NeuButton';
import { neuStyle } from '../neu-styles';
export const NeuVisitorNotification: React.FC<VisitorNotificationProps> = ({ visitorName, hostName, location, onAcknowledge, onMessage, className = '' }) => {
return (
<div className={`
p-8 rounded-[2.5rem] bg-gray-100 border border-white/20
relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300
${className}
`} style={neuStyle('flat')}>
{/* Background Decoration */}
<div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
<div className="absolute top-6 right-6 text-gray-100 p-4 rounded-2xl opacity-20 transform rotate-12">
<Bell size={40} />
</div>
<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-4 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest">
Reception Alert
</span>
</div>
<h3 className="text-3xl font-extrabold text-gray-800 leading-tight mb-2">
{visitorName}
</h3>
<div className="flex items-start gap-3 mb-8 p-4 rounded-2xl border border-white/10" style={neuStyle('flat')}>
<div className="mt-1 text-gray-400">
<UserCheck size={18} />
</div>
<p className="text-sm font-medium text-gray-600 leading-relaxed">
Checked in to see <span className="font-bold text-gray-800">{hostName}</span>. Waiting at <span className="font-bold text-indigo-500">{location}</span>.
</p>
</div>
<div className="grid grid-cols-2 gap-4">
<NeuButton onClick={onAcknowledge} className="w-full"
icon={<Check size={18}/>}
>
On My Way
</NeuButton>
<NeuButton onClick={onMessage} variant="secondary"
className="w-full"
icon={<MessageSquare size={18}/>}
>
Message
</NeuButton>
</div>
</div>
</div>
);
};