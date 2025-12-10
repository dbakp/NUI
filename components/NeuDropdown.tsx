import React, { useState, useRef, useEffect } from 'react';
import { DropdownProps } from '../types';
import { neuStyle } from '../neu-styles';
export const NeuDropdown: React.FC<DropdownProps> = ({ trigger, items, className = '',
position = 'left'
}) => {
const [isOpen, setIsOpen] = useState(false);
const containerRef = useRef<HTMLDivElement>(null);
useEffect(() => {
const handleClickOutside = (event: MouseEvent) => {
if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
setIsOpen(false);
}
};
document.addEventListener('mousedown', handleClickOutside);
return () => document.removeEventListener('mousedown', handleClickOutside);
}, []);
return (
<div className={`relative inline-block text-left ${className}`} ref={containerRef}>
<div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
{trigger}
</div>
{isOpen && (
<div className={`
absolute z-50 mt-4 min-w-[220px] p-2
bg-gray-100 rounded-2xl border border-white/20
animate-in fade-in zoom-in-95 duration-200 origin-top-right
${position === 'right' ? 'right-0' : 'left-0'}
`}
style={neuStyle('flat')}>
<div className="flex flex-col gap-1">
{items.map((item, index) => (
<button
key={index}
onClick={() => {
item.onClick();
setIsOpen(false);
}}
className={`
flex items-center w-full px-4 py-3 text-sm font-bold rounded-xl
transition-all duration-200 outline-none text-left
${item.variant === 'danger' ? 'text-red-500 hover:bg-gray-100 active:scale-[0.98]' : 'text-gray-600 hover:text-indigo-500 hover:bg-gray-100 active:scale-[0.98]'}
`}
>
{item.icon && <span className="mr-3">{item.icon}</span>}
{item.label}
</button>
))}
</div>
</div>
)}
</div>
);
};