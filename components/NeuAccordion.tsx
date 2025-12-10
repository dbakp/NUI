import React, { useState } from 'react';
import { AccordionProps } from '../types';
import { ChevronDown } from 'lucide-react';
import { neuStyle } from '../neu-styles';
export const NeuAccordion: React.FC<AccordionProps> = ({ items, allowMultiple = false, className = '' }) => {
const [openItems, setOpenItems] = useState<Set<string>>(new Set());
const toggleItem = (id: string) => {
const newOpenItems = new Set(openItems);
if (allowMultiple) {
if (newOpenItems.has(id)) {
newOpenItems.delete(id);
} else {
newOpenItems.add(id);
}
} else {
if (newOpenItems.has(id)) {
newOpenItems.clear();
} else {
newOpenItems.clear();
newOpenItems.add(id);
}
}
setOpenItems(newOpenItems);
};
return (
<div className={`space-y-4 ${className}`}>
{items.map((item) => {
const isOpen = openItems.has(item.id);
return (
<div key={item.id} className="rounded-[2rem] overflow-hidden border border-white/20" style={neuStyle('flat')}>
<button
onClick={() => toggleItem(item.id)}
className={`
w-full flex items-center justify-between px-6 py-5
text-left font-bold text-gray-700
transition-all duration-300 outline-none
${isOpen ? 'text-indigo-500' : 'hover:text-gray-900'}
`}
>
<span className="text-lg">{item.title}</span>
<div className={`
w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300
${isOpen ? 'bg-gray-100 text-indigo-500 transform rotate-180' : 'bg-gray-100 text-gray-500'}
`}
style={isOpen ? neuStyle('pressed') : neuStyle('convex')}>
<ChevronDown size={20} />
</div>
</button>
<div className={`
transition-all duration-300 ease-in-out overflow-hidden
${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
`}
>
<div className="p-6 pt-0 text-gray-600 leading-relaxed font-medium">
{item.content}
</div>
</div>
</div>
);
})}
</div>
);
};