import React, { useEffect } from 'react';
import { DialogProps } from '../types';
import { X } from 'lucide-react';
import { NeuIconButton } from './NeuButton';
import { neuStyle } from '../neu-styles';
export const NeuDialog: React.FC<DialogProps> = ({ isOpen, onClose, title, children, footer }) => {
// Lock scroll when open
useEffect(() => {
if (isOpen) {
document.body.style.overflow = 'hidden';
} else {
document.body.style.overflow = 'unset';
}
return () => {
document.body.style.overflow = 'unset';
};
}, [isOpen]);
if (!isOpen) return null;
return (
<div className="fixed inset-0 z-50 flex items-center justify-center p-4">
{/* Backdrop */}
<div className="absolute inset-0 bg-gray-100/60 backdrop-blur-sm transition-opacity" onClick={onClose} />
{/* Dialog Content */}
<div className="relative w-full max-w-lg bg-gray-100 rounded-3xl p-8 transform transition-all duration-300 animate-in fade-in zoom-in-95 border border-white/20" style={neuStyle('flat')}>
<div className="flex justify-between items-start mb-6">
{title && <h2 className="text-2xl font-bold text-gray-700">{title}</h2>}
<NeuIconButton size="sm" onClick={onClose} className="text-gray-500">
<X size={20} />
</NeuIconButton>
</div>
<div className="text-gray-600 mb-8">
{children}
</div>
{footer && (
<div className="flex justify-end gap-3 mt-4">
{footer}
</div>
)}
</div>
</div>
);
};