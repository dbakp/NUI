import React from 'react';
import { AlertProps } from '../types';
import { Info, CheckCircle, AlertTriangle, XCircle, X } from 'lucide-react';

export const NeuAlert: React.FC<AlertProps> = ({ 
    title, 
    children, 
    variant = 'info', 
    icon, 
    className = '',
    onClose 
}) => {
    const variants = {
        info: { color: 'text-neu-accent', bg: 'bg-neu-base', icon: <Info size={24} /> },
        success: { color: 'text-neu-success', bg: 'bg-neu-base', icon: <CheckCircle size={24} /> },
        warning: { color: 'text-neu-warning', bg: 'bg-neu-base', icon: <AlertTriangle size={24} /> },
        danger: { color: 'text-neu-danger', bg: 'bg-neu-base', icon: <XCircle size={24} /> },
    };

    const currentVariant = variants[variant];

    return (
        <div className={`relative p-4 rounded-2xl shadow-neu-flat border-l-4 ${
            variant === 'info' ? 'border-neu-accent' : 
            variant === 'success' ? 'border-neu-success' : 
            variant === 'warning' ? 'border-neu-warning' : 
            'border-neu-danger'
        } ${className}`}>
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
                    <button 
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                    >
                        <X size={18} />
                    </button>
                )}
            </div>
        </div>
    );
};