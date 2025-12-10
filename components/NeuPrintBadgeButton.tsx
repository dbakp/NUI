import React, { useState } from 'react';
import { PrintBadgeButtonProps } from '../types';
import { Printer, Check, Loader2 } from 'lucide-react';
import { neuStyle } from '../neu-styles';
export const NeuPrintBadgeButton: React.FC<PrintBadgeButtonProps> = ({ visitorName, onClick, isPrinting = false, className = '' }) => {
const [localPrinting, setLocalPrinting] = useState(isPrinting);
const [printed, setPrinted] = useState(false);
const handleClick = () => {
if (printed || localPrinting) return;
setLocalPrinting(true);
onClick();
// Simulation steps
setTimeout(() => {
setLocalPrinting(false);
setPrinted(true);
setTimeout(() => setPrinted(false), 4000);
}, 2500); // Print duration
};
return (
<button
onClick={handleClick}
disabled={localPrinting || printed}
className={`
relative w-full h-28 rounded-3xl transition-all duration-300
flex flex-col items-center justify-center gap-2 group outline-none
${localPrinting ? 'bg-gray-100 cursor-wait' : printed ? 'bg-gray-100 cursor-default border-2 border-emerald-500/30' : 'bg-gray-100 hover:-translate-y-1 cursor-pointer border border-white/20'}
${className}
`}
style={neuStyle('flat')}>
{/* The Slot where paper comes out */}
<div className="absolute top-0 w-32 h-1 bg-gray-800/10 rounded-full blur-[1px]"></div>
{/* Paper Sheet */}
<div className={`
absolute w-24 bg-white shadow-md flex flex-col items-center justify-center border border-gray-200
transition-all duration-[2500ms] ease-linear z-0
${localPrinting ? 'h-24 top-2 opacity-100' : printed ? 'h-24 top-32 opacity-0' : 'h-0 top-0 opacity-0'}
`}>
{localPrinting && (
<div className="w-full p-2 space-y-2 opacity-50">
<div className="w-12 h-12 bg-gray-200 rounded-full mx-auto" />
<div className="w-full h-2 bg-gray-200 rounded" />
<div className="w-2/3 h-2 bg-gray-200 rounded mx-auto" />
</div>
)}
</div>
{/* Front Plate (Covers the paper origin) */}
<div className="relative z-10 w-full h-full flex flex-col items-center justify-center rounded-3xl backdrop-blur-[1px]" style={neuStyle('flat')}>
{localPrinting ? (
<>
<Loader2 size={28} className="text-indigo-500 animate-spin mb-1" />
<span className="text-xs font-bold text-gray-500 animate-pulse">Printing Badge...</span>
</>
) : printed ? (
<>
<div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center mb-1">
<Check size={20} className="text-white" strokeWidth={3} />
</div>
<span className="text-xs font-bold text-emerald-500">Collect Badge Below</span>
</>
) : (
<>
<Printer size={32} className="text-gray-600 group-hover:text-indigo-500 group-hover:scale-110 transition-all mb-1" />
<span className="text-sm font-bold text-gray-700">Print Badge</span>
<span className="text-[10px] font-semibold text-gray-400">{visitorName}</span>
</>
)}
</div>
</button>
);
};