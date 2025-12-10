import React, { useEffect } from 'react';
import { ConfirmDialogProps } from '../types';
import { AlertTriangle, Info, CheckCircle, AlertCircle } from 'lucide-react';
import { NeuButton } from './NeuButton';
import { neuStyle } from '../neu-styles';
export const NeuConfirmDialog: React.FC<ConfirmDialogProps> = ({ isOpen, onClose, onConfirm,
title, description,
confirmText = 'Confirm',
cancelText = 'Cancel',
variant = 'primary'
}) => {
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
const icons = {
primary: <Info className="text-indigo-500" size={32} />,
info: <Info className="text-indigo-500" size={32} />,
success: <CheckCircle className="text-emerald-500" size={32} />,
warning: <AlertTriangle className="text-amber-500" size={32} />,
danger: <AlertCircle className="text-red-500" size={32} />
};
return (
<div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
{/* Backdrop */}
<div className="absolute inset-0 bg-gray-100/70 backdrop-blur-sm transition-opacity" onClick={onClose}
style={neuStyle('flat')}>
{/* Dialog Content */}
<div className="relative w-full max-w-sm bg-gray-100 rounded-3xl p-8 transform transition-all duration-300 animate-in fade-in zoom-in-95
border border-white/20 text-center
" style={neuStyle('flat')}>
<div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6
" style={neuStyle('convex')}>
{icons[variant] || icons.primary}
</div>
<h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
<p className="text-gray-500 mb-8 leading-relaxed">
{description}
</p>
<div className="flex gap-4 justify-center">
<NeuButton onClick={onClose} className="flex-1"
variant="secondary"
>
{cancelText}
</NeuButton>
<NeuButton variant={variant === 'danger' ? 'danger' : variant === 'success' ? 'success' : 'accent'} onClick={onConfirm}
className="flex-1"
>
{confirmText}
</NeuButton>
</div>
</div>
</div>
</div>
);
};