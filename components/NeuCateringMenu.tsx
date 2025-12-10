import React from 'react';
import { CateringMenuProps } from '../types';
import { NeuButton } from './NeuButton';
import { Plus } from 'lucide-react';
import { neuStyle } from '../neu-styles';
export const NeuCateringMenu: React.FC<CateringMenuProps> = ({ image, title, description, price, dietary = [], onAdd, className = '' }) => {
return (
<div className={`
group rounded-[2rem] bg-gray-100 border border-white/20 p-4 transition-all duration-300
${className}
`} style={neuStyle('flat')}>
{/* Image Area */}
<div className="relative h-48 rounded-2xl overflow-hidden mb-4 bg-gray-100" style={neuStyle('flat')}>
{image ? (
<img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
) : (
<div className="w-full h-full flex items-center justify-center text-gray-300 font-bold text-xl uppercase tracking-widest">
No Image
</div>
)}
{/* Dietary Badges */}
{dietary.length > 0 && (
<div className="absolute top-3 right-3 flex gap-2">
{dietary.map(d => (
<span key={d} className="px-2 py-1 rounded-md bg-gray-100/90 backdrop-blur-sm text-[10px] font-extrabold text-gray-700 shadow-sm border border-white/20
" style={neuStyle('flat')}>
{d}
</span>
))}
</div>
)}
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-bold text-gray-800">{title}</h3>
<span className="text-lg font-extrabold text-indigo-500">{price}</span>
</div>
<p className="text-sm text-gray-500 font-medium leading-relaxed mb-6 line-clamp-2">
{description}
</p>
<NeuButton onClick={onAdd} className="w-full" variant="secondary"
icon={<Plus size={16}/>}
>
Add to Order
</NeuButton>
</div>
);
};