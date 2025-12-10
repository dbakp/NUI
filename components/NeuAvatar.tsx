import React from 'react';
import { AvatarProps } from '../types';
import { neuStyle } from '../neu-styles';
export const NeuAvatar: React.FC<AvatarProps> = ({ src, alt, fallback, size = 'md', status,
className = '' }) => {
const sizeClasses = {
sm: 'w-10 h-10 text-xs',
md: 'w-16 h-16 text-lg',
lg: 'w-24 h-24 text-2xl'
};
const statusColors = {
online: 'bg-emerald-500',
offline: 'bg-gray-400',
busy: 'bg-red-500',
away: 'bg-amber-500'
};
return (
<div className={`relative inline-block ${className}`}>
<div className={`
${sizeClasses[size]} rounded-full flex items-center justify-center border-4 border-gray-100 overflow-hidden
`}>
{src ? (
<img src={src} alt={alt || 'Avatar'} className="w-full h-full object-cover" />
) : (
<div className="w-full h-full bg-gray-100 flex items-center justify-center font-bold text-gray-500" style={neuStyle('flat')}>
{fallback || alt?.charAt(0).toUpperCase() || '?'}
</div>
)}
</div>
{status && (
<div className={`
absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-gray-100
${statusColors[status]} shadow-sm
${size === 'sm' ? 'w-2.5 h-2.5' : ''}
`} />
)}
</div>
);
};