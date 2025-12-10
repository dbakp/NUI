import React from 'react';
import { AlertProps } from '../types';
import { Info, CheckCircle, AlertTriangle, XCircle, X } from 'lucide-react';
import { neuStyle } from '../neu-styles';
export const NeuAlert: React.FC<AlertProps> = ({ title, children, variant = 'info', icon, className = '',
onClose }) => {
const variants = {
info: { color: 'text-indigo-500', bg: 'bg-gray-100', icon: <Info size={24} /> },
success: { color: 'text-emerald-500', bg: 'bg-gray-100', icon: <CheckCircle size={24} /> },
warning: { color: 'text-amber-500', bg: 'bg-gray-100', icon: <AlertTriangle size={24} /> },
danger: { color: 'text-red-500', bg: 'bg-gray-100', icon: <XCircle size={24} /> },
};
const currentVariant = variants[variant];
return (
<div className={`relative p-4 rounded-2xl border-l-4 ${
variant === 'info' ? 'border-indigo-500' : variant === 'success' ? 'border-emerald-500' : variant === 'warning' ? 'border-amber-500' : 'border-red-500'
} ${className}`} style={neuStyle('flat')}>
<div className="flex gap-4">
<div className={`${currentVariant.color} flex-shrink-0`}>
{icon || currentVariant.icon}
</div>
<div className="flex-1">
{title && <h5 className={`font-bold mb-1 ${currentVariant.color}`}>{title}</h5>}
<div className="text-sm text-gray-600 leading-relaxed">
{children}
</div>
</div>
{onClose && (
<button onClick={onClose}
className="text-gray-400 hover:text-gray-600 transition-colors p-1"
>
<X size={18} />
</button>
)}
</div>
</div>
);
};