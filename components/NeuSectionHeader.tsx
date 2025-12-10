import React from 'react';
import { SectionHeaderProps } from '../types';
import { MoreHorizontal, GripVertical } from 'lucide-react';
import { NeuIconButton } from './NeuButton';
export const NeuSectionHeader: React.FC<SectionHeaderProps> = ({ title, count, onMenuClick, className = '' }) => {
return (
<div className={`
group flex items-center justify-between py-2 mt-6 mb-2
border-b border-gray-300/30 hover:border-gray-300/60 transition-colors
${className}
`}>
<div className="flex items-center gap-2">
<span className="text-gray-300 cursor-grab opacity-0 group-hover:opacity-100 transition-opacity">
<GripVertical size={16} />
</span>
<h4 className="font-bold text-gray-800 text-md">{title}</h4>
{count !== undefined && (
<span className="text-xs font-semibold text-gray-400 ml-1">
{count}
</span>
)}
</div>
{onMenuClick && (
<div className="opacity-0 group-hover:opacity-100 transition-opacity">
<NeuIconButton size="sm" onClick={onMenuClick} className="!w-8 !h-8">
<MoreHorizontal size={14} />
</NeuIconButton>
</div>
)}
</div>
);
};