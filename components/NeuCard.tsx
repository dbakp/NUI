import React from 'react';
import { CardProps } from '../types';
import { neuStyle } from '../neu-styles';
export const NeuCard: React.FC<CardProps> = ({ children, className = '', title, subtitle,
action
}) => {
return (
<div className={`
bg-gray-100 rounded-[2.5rem] p-8 transition-all duration-300 border border-white/20
${className}
`} style={neuStyle('flat')}>
{(title || action) && (
<div className="flex justify-between items-center mb-6">
<div>
{title && <h3 className="text-xl font-bold text-gray-700">{title}</h3>}
{subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
</div>
{action && <div>{action}</div>}
</div>
)}
<div className="relative">
{children}
</div>
</div>
);
};