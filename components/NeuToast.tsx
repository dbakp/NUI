import React, { useEffect } from 'react';
import { ToastProps } from '../types';
import { X, CheckCircle, AlertTriangle, Info, AlertCircle } from 'lucide-react';

export const NeuToast: React.FC<ToastProps> = ({ 
  title, 
  message, 
  type = 'info', 
  isVisible, 
  onClose 
}) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  const icons = {
    success: <CheckCircle className="text-neu-success" size={20} />,
    error: <AlertCircle className="text-neu-danger" size={20} />,
    warning: <AlertTriangle className="text-neu-warning" size={20} />,
    info: <Info className="text-neu-accent" size={20} />
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 duration-300">
      <div className="
        flex items-start gap-4 p-4 pr-10
        bg-neu-base rounded-2xl shadow-neu-flat border border-white/40
        min-w-[300px] max-w-sm
      ">
        <div className="mt-0.5">{icons[type]}</div>
        <div>
          {title && <h4 className="font-bold text-gray-800 text-sm mb-1">{title}</h4>}
          <p className="text-sm text-gray-600 leading-relaxed">{message}</p>
        </div>
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 p-1.5 text-gray-400 hover:text-gray-600 rounded-full hover:bg-black/5 transition-colors"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
};