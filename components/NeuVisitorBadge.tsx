import React from 'react';
import { VisitorPassProps } from '../types';
import { QrCode } from 'lucide-react';
import { neuStyle } from '../neu-styles';
export const NeuVisitorBadge: React.FC<VisitorPassProps> = ({ visitorName, company, hostName, date, qrCodeValue,
className = '' }) => {
return (
<div className={`relative ${className}`}>
{/* Lanyard Hole */}
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-16 bg-gray-300 rounded-full shadow-inner z-0 opacity-50"></div>
<div className="relative z-10 w-full max-w-[280px] bg-gray-100 rounded-[20px] border border-white/20 p-6 text-center flex flex-col gap-4 overflow-hidden
" style={neuStyle('flat')}>
{/* Punch Hole Visual */}
<div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-3 rounded-full" style={neuStyle('convex')}></div>
<div className="mt-6">
<h5 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-1">Visitor Pass</h5>
<h2 className="text-2xl font-extrabold text-gray-800 leading-tight">{visitorName}</h2>
{company && <p className="text-sm font-semibold text-indigo-500 mt-1">{company}</p>}
</div>
<div className="w-full h-px bg-gray-300/50" />
<div className="grid grid-cols-2 gap-4 text-left">
<div>
<p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Host</p>
<p className="font-bold text-gray-700 text-sm">{hostName}</p>
</div>
<div>
<p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Date</p>
<p className="font-bold text-gray-700 text-sm">{date}</p>
</div>
</div>
<div className="mt-2 flex justify-center">
<div className="p-3 bg-white rounded-xl border border-white/50">
{/* Mock QR Code Pattern */}
<div className="w-24 h-24 bg-gray-800 flex items-center justify-center text-white relative overflow-hidden">
<div className="absolute inset-0 border-4 border-white"></div>
<div className="absolute top-2 left-2 w-6 h-6 border-2 border-white bg-gray-800"></div>
<div className="absolute top-2 right-2 w-6 h-6 border-2 border-white bg-gray-800"></div>
<div className="absolute bottom-2 left-2 w-6 h-6 border-2 border-white bg-gray-800"></div>
<QrCode size={48} className="opacity-20" />
</div>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 h-2 bg-indigo-500 opacity-50"></div>
</div>
</div>
);
};