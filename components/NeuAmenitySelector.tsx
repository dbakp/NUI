import React from 'react';
import { AmenitySelectorProps } from '../types';
import { Check } from 'lucide-react';
import { neuStyle } from '../neu-styles';
export const NeuAmenitySelector: React.FC<AmenitySelectorProps> = ({ amenities, selectedIds, onChange, className = '' }) => {
const toggleAmenity = (id: string) => {
if (selectedIds.includes(id)) {
onChange(selectedIds.filter(aid => aid !== id));
} else {
onChange([...selectedIds, id]);
}
};
return (
<div className={`grid grid-cols-2 sm:grid-cols-3 gap-4 ${className}`}>
{amenities.map(item => {
const isSelected = selectedIds.includes(item.id);
return (
<button
key={item.id}
onClick={() => toggleAmenity(item.id)}
className={`
flex flex-col items-center justify-center gap-2 p-4 rounded-2xl transition-all duration-300
${isSelected ? 'bg-gray-100 text-indigo-500 ring-1 ring-indigo-500/20' : 'bg-gray-100 text-gray-500 hover:text-gray-700'}
`}
>
<div className={`
w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
${isSelected ? 'bg-indigo-500 text-white shadow-inner' : 'bg-transparent'}
`}>
{item.icon}
</div>
<span className="text-xs font-bold uppercase tracking-wide text-center">
{item.label}
</span>
<div className={`
absolute top-2 right-2 w-4 h-4 rounded-full flex items-center justify-center
${isSelected ? 'opacity-100' : 'opacity-0'} transition-opacity text-indigo-500
`}>
<Check size={12} strokeWidth={4} />
</div>
</button>
);
})}
</div>
);
};