import React from 'react';
import { ServiceItemProps } from '../types';
import { Plus, Minus } from 'lucide-react';
import { neuStyle } from '../neu-styles';
export const NeuServicePicker: React.FC<ServiceItemProps> = ({ id, name, description, price, icon, quantity, onChange, className = '' }) => {
return (
<div className={`
flex items-center justify-between p-4 rounded-2xl bg-gray-100 border border-white/20 transition-shadow
${className}
`} style={neuStyle('flat')}>
<div className="flex items-center gap-4">
{icon && (
<div className="w-12 h-12 rounded-xl flex items-center justify-center text-indigo-500" style={neuStyle('flat')}>
{icon}
</div>
)}
<div>
<h4 className="font-bold text-gray-800">{name}</h4>
{description && <p className="text-xs text-gray-500 font-medium">{description}</p>}
{price && <p className="text-sm font-bold text-gray-700 mt-1">{price}</p>}
</div>
</div>
<div className="flex items-center gap-4 rounded-full p-1" style={neuStyle('flat')}>
<button onClick={() => onChange(Math.max(0, quantity - 1))}
disabled={quantity === 0}
className={`
w-8 h-8 rounded-full flex items-center justify-center transition-all
${quantity === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:text-red-500 bg-gray-100 active:scale-90'}
`}
>
<Minus size={14} strokeWidth={3} />
</button>
<span className="w-6 text-center font-bold text-gray-800 select-none">
{quantity}
</span>
<button onClick={() => onChange(quantity + 1)}
className="w-8 h-8 rounded-full flex items-center justify-center transition-all
text-gray-600 hover:text-emerald-500 bg-gray-100 active:scale-90
"
>
<Plus size={14} strokeWidth={3} />
</button>
</div>
</div>
);
};