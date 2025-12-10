import React, { useState, useRef, useEffect, useMemo } from 'react';
import { ComboboxProps } from '../types';
import { ChevronsUpDown, Check, Search } from 'lucide-react';
import { neuStyle } from '../neu-styles';
export const NeuCombobox: React.FC<ComboboxProps> = ({ options, value, onChange, placeholder = 'Select option...', label,
className = '',
error,
icon
}) => {
const [isOpen, setIsOpen] = useState(false);
const [searchQuery, setSearchQuery] = useState('');
const containerRef = useRef<HTMLDivElement>(null);
const inputRef = useRef<HTMLInputElement>(null);
// Derive selected label
const selectedLabel = options.find(opt => opt.value === value)?.label;
// Filter options
const filteredOptions = useMemo(() => {
if (!searchQuery) return options;
return options.filter(option => option.label.toLowerCase().includes(searchQuery.toLowerCase())
);
}, [options, searchQuery]);
// Handle outside click
useEffect(() => {
const handleClickOutside = (event: MouseEvent) => {
if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
setIsOpen(false);
setSearchQuery(''); // Reset search on close
}
};
document.addEventListener('mousedown', handleClickOutside);
return () => document.removeEventListener('mousedown', handleClickOutside);
}, []);
// Focus input when opening
useEffect(() => {
if (isOpen && inputRef.current) {
inputRef.current.focus();
}
}, [isOpen]);
const handleSelect = (selectedValue: string) => {
onChange(selectedValue);
setIsOpen(false);
setSearchQuery('');
};
return (
<div className={`relative ${className}`} ref={containerRef}>
{label && (
<label className="block mb-2 ml-1 text-sm font-bold text-gray-500 uppercase tracking-wider">
{label}
</label>
)}
{/* Trigger Area */}
<div onClick={() => {
if (!isOpen) setIsOpen(true);
}}
className={`
relative flex items-center justify-between
w-full rounded-xl transition-all duration-300
${isOpen ? ' text-indigo-500 ring-1 ring-indigo-500/10' : ' bg-gray-100 cursor-pointer'}
`}
>
<div className="flex items-center gap-3 flex-1 px-4 py-3 min-h-[48px] overflow-hidden">
{icon && (
<span className={`${isOpen ? 'text-indigo-500' : 'text-gray-400'}`}>
{icon}
</span>
)}
{/* If open, show search input. If closed, show selected value or placeholder */}
{isOpen ? (
<input
ref={inputRef}
type="text"
className="w-full bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 font-semibold h-full"
placeholder="Search..."
value={searchQuery}
onChange={(e) => setSearchQuery(e.target.value)}
onClick={(e) => e.stopPropagation()} // Prevent closing immediately
/>
) : (
<span className={`text-sm font-semibold truncate select-none ${!selectedLabel ? 'text-gray-400 font-normal' : 'text-gray-700'}`}>
{selectedLabel || placeholder}
</span>
)}
</div>
<button type="button"
onClick={(e) => {
e.stopPropagation();
setIsOpen(!isOpen);
}}
className="px-4 text-gray-400 hover:text-gray-600 outline-none"
>
<ChevronsUpDown size={16} className={`transition-transform duration-200 ${isOpen ? 'text-indigo-500' : ''}`} />
</button>
</div>
{/* Dropdown Menu */}
{isOpen && (
<div className="absolute z-50 w-full mt-3 p-2 bg-gray-100 rounded-2xl border border-white/20
animate-in fade-in zoom-in-95 duration-200 origin-top
" style={neuStyle('flat')}>
{/* List */}
<ul className="max-h-60 overflow-y-auto custom-scrollbar space-y-1">
{filteredOptions.length === 0 ? (
<li className="px-4 py-6 text-center text-sm text-gray-400 font-medium">
No results found.
</li>
) : (
filteredOptions.map((option) => {
const isSelected = option.value === value;
return (
<li key={option.value}>
<button
type="button"
onClick={() => handleSelect(option.value)}
className={`
w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold transition-all
${isSelected ? 'bg-gray-100 text-indigo-500' : 'text-gray-600 hover:bg-white/40 hover:text-gray-800'}
`}
>
<span className="truncate">{option.label}</span>
{isSelected && <Check size={14} className="flex-shrink-0 ml-2" strokeWidth={3} />}
</button>
</li>
);
})
)}
</ul>
</div>
)}
{error && <span className="mt-1 ml-1 text-xs text-red-500">{error}</span>}
</div>
);
};