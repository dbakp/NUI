import React from 'react';
import { CommentProps } from '../types';
import { NeuAvatar } from './NeuAvatar';
import { Trash2 } from 'lucide-react';
import { neuStyle } from '../neu-styles';
export const NeuComment: React.FC<CommentProps> = ({ author, avatar, date, content, onDelete, className = '' }) => {
return (
<div className={`flex gap-4 group ${className}`}>
<NeuAvatar src={avatar} fallback={author[0]} size="sm" className="mt-1" />
<div className="flex-1">
<div className="flex items-baseline justify-between mb-1">
<span className="font-bold text-sm text-gray-800">{author}</span>
<span className="text-[10px] text-gray-400 font-semibold">{date}</span>
</div>
<div className="p-3 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl bg-gray-100 border border-white/20 text-sm text-gray-600 leading-relaxed
" style={neuStyle('flat')}>
{content}
</div>
{onDelete && (
<div className="mt-1 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
<button onClick={onDelete}
className="text-xs text-red-500 hover:underline flex items-center gap-1"
>
<Trash2 size={12} /> Delete
</button>
</div>
)}
</div>
</div>
);
};