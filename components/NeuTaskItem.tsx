import React from 'react';
import { TaskItemProps } from '../types';
import { Check } from 'lucide-react';
import { NeuAvatar } from './NeuAvatar';
import { neuStyle } from '../neu-styles';
export const NeuTaskItem: React.FC<TaskItemProps> = ({ id, title, completed, onToggle, priority = 'medium', assigneeAvatar,
className = ''
}) => {
const priorityColors = {
low: 'bg-emerald-500',
medium: 'bg-amber-500',
high: 'bg-red-500'
};
return (
<div className={`
flex items-center gap-4 p-4 rounded-2xl bg-gray-100 transition-all duration-300 border border-white/20
${completed ? 'opacity-60' : ' '}
${className}
`} style={neuStyle('flat')}>
<button
onClick={() => onToggle(id)}
className={`
w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200
${completed ? 'bg-indigo-500 text-white' : 'bg-gray-100 text-transparent hover:text-gray-300'}
`}
>
<Check size={14} strokeWidth={3} />
</button>
<div className="flex-1 min-w-0">
<p className={`font-bold truncate ${completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
{title}
</p>
</div>
<div className="flex items-center gap-3">
<div className={`w-2 h-2 rounded-full ${priorityColors[priority]} shadow-sm`} title={`${priority} priority`} />
{assigneeAvatar && <NeuAvatar src={assigneeAvatar} size="sm" className="!w-6 !h-6" />}
</div>
</div>
);
};