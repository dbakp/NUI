import React from 'react';
import { CodeSnippetProps } from '../types';
import { Copy, Check } from 'lucide-react';
import { NeuIconButton } from './NeuButton';
export const NeuCodeSnippet: React.FC<CodeSnippetProps> = ({ code, language = 'typescript', label,
className = '' }) => {
const [copied, setCopied] = React.useState(false);
const handleCopy = () => {
navigator.clipboard.writeText(code);
setCopied(true);
setTimeout(() => setCopied(false), 2000);
};
return (
<div className={`w-full ${className}`}>
<div className="flex justify-between items-center mb-2 px-1">
{label && <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{label}</span>}
<span className="text-xs font-bold text-indigo-500 lowercase">{language}</span>
</div>
<div className="relative group">
{/* The Screen (Concave) */}
<div className="w-full bg-[#282c34] rounded-2xl p-6 shadow-[inset_6px_6px_12px_#1f2229,inset_-6px_-6px_12px_#31363f]
border border-white/10 overflow-x-auto custom-scrollbar
">
<pre className="font-mono text-sm text-gray-300 leading-relaxed">
<code>{code}</code>
</pre>
</div>
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
<button onClick={handleCopy}
className="p-2 rounded-lg bg-[#31363f] text-gray-300 hover:text-white shadow-lg transition-colors
"
>
{copied ? <Check size={14} className="text-green-400"/> : <Copy size={14} />}
</button>
</div>
</div>
</div>
);
};