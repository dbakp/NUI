import React from 'react';
import { VisitorLogItemProps } from '../types';
import { User, Clock, Briefcase, LogOut } from 'lucide-react';
import { NeuIconButton } from './NeuButton';
import { neuStyle } from '../neu-styles';
export const NeuVisitorLogItem: React.FC<VisitorLogItemProps> = ({ visitorName, company, host, checkInTime, isSignedOut = false, onSignOut, className = '' }) => {
return (
<div className={`
flex flex-col md:flex-row md:items-center justify-between p-4 rounded-2xl bg-gray-100 border border-white/20 gap-4
${isSignedOut ? 'opacity-60' : ''}
${className}
`} style={neuStyle('flat')}>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full flex items-center justify-center text-gray-400" style={neuStyle('convex')}>
<User size={20} />
</div>
<div>
<h4 className="font-bold text-gray-800 text-lg">{visitorName}</h4>
<div className="flex items-center gap-2 text-xs font-semibold text-gray-500">
<Briefcase size={12} />
<span>{company}</span>
<span className="w-1 h-1 rounded-full bg-gray-400 mx-1" />
<span>Host: {host}</span>
</div>
</div>
</div>
<div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto">
<div className="flex items-center gap-2 text-indigo-500 font-bold px-3 py-1.5 rounded-lg border border-white/10" style={neuStyle('flat')}>
<Clock size={14} />
<span className="text-sm">{checkInTime}</span>
</div>
{isSignedOut ? (
<span className="text-xs font-bold text-gray-400 uppercase tracking-wider border border-gray-300 px-3 py-1 rounded-lg">
Signed Out
</span>
) : (
<button
onClick={onSignOut}
className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-red-500
bg-gray-100 transition-all duration-200
"
style={neuStyle('flat')}>
<LogOut size={16} />
Sign Out
</button>
)}
</div>
</div>
);
};