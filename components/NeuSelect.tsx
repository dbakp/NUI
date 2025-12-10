import React, { useState, useRef, useEffect } from 'react';
import { SelectProps } from '../types';
import { ChevronDown } from 'lucide-react';
import { neuStyle } from '../neu-styles';
export const NeuSelect: React.FC<SelectProps> = ({ options, value, onChange, placeholder = 'Select an option', label,
className = '',
icon,
error
}) => {
const [isOpen, setIsOpen] = useState(false);
const containerRef = useRef<HTMLDivElement>(null);
const selectedOption = options.find(opt => opt.value === value);
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
<div className={`relative ${className}`} ref={containerRef}>
{label && (
<label className="block mb-2 ml-1 text-sm font-bold text-gray-500 uppercase tracking-wider">
{label}
</label>
)}
<button
type="button"
onClick={() => setIsOpen(!isOpen)}
className={`
w-full flex items-center justify-between px-4 py-3 rounded-xl
transition-all duration-200 outline-none
text-gray-700 font-semibold
${isOpen ? ' text-indigo-500' : ' hover:-translate-y-0.5 bg-gray-100'}
`}
>
<div className="flex items-center gap-3">
{icon && <span className="text-gray-400">{icon}</span>}
<span className={!selectedOption ? 'text-gray-400 font-normal' : ''}>
{selectedOption ? selectedOption.label : placeholder}
</span>
</div>
<ChevronDown size={18} className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-indigo-500' : ''}`} />
</button>
{isOpen && (
<div className="absolute z-50 w-full mt-4 p-2 rounded-xl animate-in fade-in zoom-in-95 duration-200" style={neuStyle('flat')}>
<ul className="max-h-60 overflow-auto custom-scrollbar">
{options.map((option) => (
<li key={option.value}>
<button
type="button"
onClick={() => {
onChange(option.value);
setIsOpen(false);
}}
className={`
w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold transition-all mb-1
${option.value === value ? ' text-indigo-500 bg-transparent' : 'text-gray-600 hover:text-indigo-500 hover:bg-gray-200/50'}
`}
>
{option.label}
</button>
</li>
))}
</ul>
</div>
)}
{error && <span className="mt-1 ml-1 text-xs text-red-500">{error}</span>}
</div>
);
};