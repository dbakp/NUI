import React from 'react';
import { SafetyInductionProps } from '../types';
import { ShieldCheck, AlertTriangle } from 'lucide-react';
import { NeuToggle } from './NeuToggle';
import { neuStyle } from '../neu-styles';
export const NeuSafetyInduction: React.FC<SafetyInductionProps> = ({ title, content, isAgreed, onToggle, className = '' }) => {
return (
<div className={`
p-6 rounded-[2.5rem] bg-gray-100 border border-white/20
flex flex-col h-full max-h-[600px]
${className}
`} style={neuStyle('flat')}>
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-2xl flex items-center justify-center text-amber-500" style={neuStyle('flat')}>
<AlertTriangle size={24} />
</div>
<h3 className="text-xl font-extrabold text-gray-800">{title}</h3>
</div>
<div className="flex-1 bg-gray-100 rounded-2xl p-6 mb-6 overflow-y-auto custom-scrollbar
border border-white/10
" style={neuStyle('flat')}>
<div className="prose prose-sm prose-gray max-w-none">
{/* Render content safely - in real app use a sanitizer or component children */}
<div className="text-gray-600 leading-relaxed whitespace-pre-line font-medium">
{content}
</div>
</div>
</div>
<div className="flex items-center justify-between gap-4 pt-4 border-t border-gray-300/30">
<div className="flex items-center gap-2 text-sm font-bold text-gray-600">
<ShieldCheck size={20} className={isAgreed ? 'text-emerald-500' : 'text-gray-400'} />
<span>I agree to the safety protocols</span>
</div>
<div className="scale-90 origin-right">
<NeuToggle checked={isAgreed} onChange={onToggle} />
</div>
</div>
</div>
);
};