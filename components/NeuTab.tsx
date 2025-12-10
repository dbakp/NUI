import React from 'react';
import { TabItem } from '../types';
import { neuStyle } from '../neu-styles';
interface NeuTabProps {
items: TabItem[];
activeTab: string;
onChange: (id: string) => void;
className?: string;
}
export const NeuTab: React.FC<NeuTabProps> = ({ items, activeTab, onChange, className = '' }) => {
return (
<div className={`
inline-flex items-center justify-center p-2 rounded-full bg-gray-100
${className}
`} style={neuStyle('flat')}>
{items.map((item) => {
const isActive = activeTab === item.id;
return (
<button
key={item.id}
onClick={() => onChange(item.id)}
className={`
w-12 h-12 flex items-center justify-center rounded-full
transition-all duration-300 mx-1
${isActive ? ' text-indigo-500' : 'text-gray-400 hover:text-gray-600'}
`}
>
{item.icon || <span className="text-sm font-bold">{item.label.substring(0, 2)}</span>}
</button>
);
})}
</div>
);
};