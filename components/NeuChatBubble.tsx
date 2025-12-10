import React from 'react';
import { ChatBubbleProps } from '../types';
import { Check, CheckCheck } from 'lucide-react';
import { neuStyle } from '../neu-styles';
export const NeuChatBubble: React.FC<ChatBubbleProps> = ({ message, isOwn = false, timestamp, avatar, status,
className = '' }) => {
return (
<div className={`flex gap-3 items-end mb-4 ${isOwn ? 'flex-row-reverse' : 'flex-row'} ${className}`}>
{avatar && (
<div className="mb-1 flex-shrink-0">
{avatar}
</div>
)}
<div className={`max-w-[75%] flex flex-col ${isOwn ? 'items-end' : 'items-start'}`}>
<div className={`
p-4 relative transition-all duration-300
${isOwn ? 'bg-indigo-500 text-white rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-sm' : 'bg-gray-100 text-gray-700 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-sm border border-white/20'}
`}
style={neuStyle('flat')}>
<p className="text-sm leading-relaxed font-medium">{message}</p>
</div>
<div className="flex items-center gap-1 mt-1 px-1">
{timestamp && <span className="text-[10px] font-bold text-gray-400">{timestamp}</span>}
{isOwn && status && (
<span className="text-indigo-500">
{status === 'read' ? <CheckCheck size={12} /> : <Check size={12} />}
</span>
)}
</div>
</div>
</div>
);
};