import React, { useState, useRef } from 'react';
import { QuickAddProps } from '../types';
import { Plus, Calendar, Flag, Tag, ArrowUp } from 'lucide-react';
import { neuStyle } from '../neu-styles';
export const NeuQuickAdd: React.FC<QuickAddProps> = ({ onAdd, placeholder = "Add a task...", className = '' }) => {
const [isFocused, setIsFocused] = useState(false);
const [value, setValue] = useState('');
const inputRef = useRef<HTMLInputElement>(null);
const handleSubmit = (e?: React.FormEvent) => {
e?.preventDefault();
if (value.trim()) {
onAdd(value.trim());
setValue('');
}
};
const handleKeyDown = (e: React.KeyboardEvent) => {
if (e.key === 'Enter') {
handleSubmit();
}
};
return (
<div className={`w-full ${className}`}>
<div className={`
relative rounded-2xl transition-all duration-300 border border-white/20
${isFocused ? 'bg-gray-100 ring-1 ring-indigo-500/20' : 'bg-gray-100 '}
`}
style={neuStyle('flat')}>
<div className="flex items-center p-3 gap-3">
<div className={`
w-6 h-6 rounded-full flex items-center justify-center transition-colors
${isFocused || value.length > 0 ? 'text-indigo-500' : 'text-gray-400'}
`}>
<Plus size={20} />
</div>
<input
ref={inputRef}
type="text"
value={value}
onChange={(e) => setValue(e.target.value)}
onFocus={() => setIsFocused(true)}
onBlur={() => !value && setIsFocused(false)}
onKeyDown={handleKeyDown}
className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 font-medium"
placeholder={placeholder}
/>
{value.length > 0 && (
<button onClick={() => handleSubmit()}
className="w-7 h-7 rounded-lg bg-indigo-500 text-white flex items-center justify-center hover:scale-110 transition-transform"
>
<ArrowUp size={16} strokeWidth={3} />
</button>
)}
</div>
{/* Quick Actions Bar (Visible when focused) */}
<div className={`
flex items-center gap-2 px-3 pb-3 overflow-hidden transition-all duration-300
${isFocused ? 'max-h-12 opacity-100 mt-1' : 'max-h-0 opacity-0'}
`}
>
<button className="flex items-center gap-1.5 px-2 py-1 rounded-lg border border-gray-300/30 text-xs font-bold text-gray-500 hover:text-indigo-500 hover:bg-white/40 transition-colors">
<Calendar size={12} />
<span>Today</span>
</button>
<button className="flex items-center gap-1.5 px-2 py-1 rounded-lg border border-gray-300/30 text-xs font-bold text-gray-500 hover:text-amber-500 hover:bg-white/40 transition-colors">
<Flag size={12} />
<span>Priority</span>
</button>
<button className="flex items-center gap-1.5 px-2 py-1 rounded-lg border border-gray-300/30 text-xs font-bold text-gray-500 hover:text-emerald-500 hover:bg-white/40 transition-colors">
<Tag size={12} />
<span>Labels</span>
</button>
</div>
</div>
</div>
);
};