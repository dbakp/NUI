import React from 'react';
import { WayfindingArrowProps } from '../types';
import { ArrowLeft, ArrowRight, ArrowUp, ArrowDown } from 'lucide-react';
import { neuStyle } from '../neu-styles';
export const NeuWayfindingArrow: React.FC<WayfindingArrowProps> = ({ direction, room, distance, color = '#10B981', // Default emerald/green
className = '' }) => {
const icons = {
left: <ArrowLeft size={48} strokeWidth={3} />,
right: <ArrowRight size={48} strokeWidth={3} />,
straight: <ArrowUp size={48} strokeWidth={3} />,
back: <ArrowDown size={48} strokeWidth={3} />
};
return (
<div className={`
flex items-center p-6 rounded-[2rem] bg-gray-100 border border-white/20 overflow-hidden relative
${className}
`} style={neuStyle('flat')}>
{/* Color Accent Bar */}
<div className="absolute left-0 top-0 bottom-0 w-3"
style={{ backgroundColor: color }} />
<div className={`
w-24 h-24 rounded-2xl flex items-center justify-center flex-shrink-0 ml-4
bg-gray-100
`} style={{ color: color }}>
{icons[direction]}
</div>
<div className="ml-6 flex-1">
<h2 className="text-3xl font-extrabold text-gray-800 leading-tight">{room}</h2>
{distance && (
<p className="text-lg font-bold text-gray-500 mt-1 uppercase tracking-wider">
{distance}
</p>
)}
</div>
</div>
);
};