import React, { useState, useEffect, useRef } from 'react';
import { CommandPaletteProps } from '../types';
import { Search, CornerDownLeft } from 'lucide-react';
import { NeuKeycap } from './NeuKeycap';
import { neuStyle } from '../neu-styles';
export const NeuCommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose, items }) => {
const [query, setQuery] = useState('');
const inputRef = useRef<HTMLInputElement>(null);
// Filter items based on query
const filteredItems = items.filter(item => item.label.toLowerCase().includes(query.toLowerCase()) ||
item.group?.toLowerCase().includes(query.toLowerCase())
);
// Lock scroll and focus input
useEffect(() => {
if (isOpen) {
document.body.style.overflow = 'hidden';
setTimeout(() => inputRef.current?.focus(), 50);
} else {
document.body.style.overflow = 'unset';
setQuery('');
}
}, [isOpen]);
// Close on escape
useEffect(() => {
const handleKeyDown = (e: KeyboardEvent) => {
if (e.key === 'Escape') onClose();
};
window.addEventListener('keydown', handleKeyDown);
return () => window.removeEventListener('keydown', handleKeyDown);
}, [onClose]);
if (!isOpen) return null;
return (
<div className="fixed inset-0 z-[60] flex items-start justify-center pt-[15vh] px-4">
<div className="absolute inset-0 bg-gray-100/80 backdrop-blur-sm transition-opacity" onClick={onClose}
style={neuStyle('flat')}>
<div className="relative w-full max-w-2xl bg-gray-100 rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-white/40
animate-in fade-in zoom-in-95 duration-200
" style={neuStyle('flat')}>
{/* Search Header */}
<div className="p-4 border-b border-gray-200/50">
<div className="relative">
<Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
<input
ref={inputRef}
className="w-full bg-gray-100 rounded-xl py-4 pl-12 pr-4
outline-none text-gray-700 placeholder-gray-400 text-lg
"
placeholder="Type a command or search..."
value={query}
onChange={(e) => setQuery(e.target.value)}
style={neuStyle('pressed')}
/>
</div>
</div>
{/* Results List */}
<div className="max-h-[60vh] overflow-y-auto p-2 custom-scrollbar">
{filteredItems.length === 0 ? (
<div className="py-12 text-center text-gray-400">
<p>No results found.</p>
</div>
) : (
<div className="space-y-1">
{filteredItems.map((item) => (
<button
key={item.id}
onClick={() => {
item.onClick();
onClose();
}}
className="w-full flex items-center justify-between px-4 py-3 rounded-xl
text-left group transition-all duration-200
hover:bg-white/40 focus:bg-white/40 focus: focus:outline-none
"
>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg flex items-center justify-center
bg-gray-100 text-gray-500
group-hover:text-indigo-500 group-hover:scale-110 transition-transform
" style={neuStyle('flat')}>
{item.icon || <Search size={18} />}
</div>
<div>
<p className="font-bold text-gray-700">{item.label}</p>
{item.group && <p className="text-xs text-gray-400 font-semibold">{item.group}</p>}
</div>
</div>
{item.shortcut && (
<div className="flex gap-1">
{item.shortcut.map((key, i) => (
<NeuKeycap key={i} label={key} size="sm" />
))}
</div>
)}
{!item.shortcut && (
<CornerDownLeft className="opacity-0 group-hover:opacity-30 transition-opacity" size={16}/>
)}
</button>
))}
</div>
)}
</div>
{/* Footer */}
<div className="p-3 bg-gray-50/50 border-t border-gray-200/50 flex justify-between px-6 text-xs text-gray-400 font-semibold">
<span>ProTip: Use <NeuKeycap label="↑" size="sm" className="mx-1 h-5 w-5 inline-flex" /> <NeuKeycap label="↓" size="sm" className="mx-1 h-5 w-5 inline-flex" /> to navigate</span>
<span><NeuKeycap label="ESC" size="sm" className="mr-1 inline-flex" /> to close</span>
</div>
</div>
</div>
</div>
);
};