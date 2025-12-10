import React from 'react';
import { StatsRingProps } from '../types';
import { neuStyle } from '../neu-styles';
export const NeuStatsRing: React.FC<StatsRingProps> = ({ rings, size = 200, className = '' }) => {
const center = size / 2;
const strokeWidth = 12;
const gap = 14;
return (
<div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
{/* Base Container Shadow */}
<div className="absolute inset-0 rounded-full" style={neuStyle('flat')}>
<svg width={size} height={size} className="transform -rotate-90 drop-shadow-sm">
{rings.map((ring, index) => {
const radius = (size / 2) - (index * gap) - 20;
const circumference = 2 * Math.PI * radius;
const progress = Math.min(100, Math.max(0, (ring.value / ring.max) * 100));
const offset = circumference - (progress / 100) * circumference;
return (
<React.Fragment key={index}>
{/* Track */}
<circle
cx={center}
cy={center}
r={radius}
stroke="rgba(0,0,0,0.05)"
strokeWidth={strokeWidth}
fill="transparent"
strokeLinecap="round"
/>
{/* Progress */}
<circle
cx={center}
cy={center}
r={radius}
stroke={ring.color}
strokeWidth={strokeWidth}
fill="transparent"
strokeDasharray={circumference}
strokeDashoffset={offset}
strokeLinecap="round"
className="transition-all duration-1000 ease-out"
/>
</React.Fragment>
);
})}
</svg>
{/* Icons floating on rings (Optional simple legend center) */}
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="flex flex-col gap-1 items-center backdrop-blur-sm p-2 rounded-xl" style={neuStyle('flat')}>
{rings.map((ring, i) => (
<div key={i} className="flex items-center gap-1 text-[10px] font-bold text-gray-500">
<div className="w-2 h-2 rounded-full" style={{ backgroundColor: ring.color }} />
{ring.icon}
<span>{Math.round((ring.value / ring.max) * 100)}%</span>
</div>
))}
</div>
</div>
</div>
</div>
);
};