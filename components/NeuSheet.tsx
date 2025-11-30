import React, { useEffect } from 'react';
import { SheetProps } from '../types';
import { X } from 'lucide-react';
import { NeuIconButton } from './NeuButton';

export const NeuSheet: React.FC<SheetProps> = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  position = 'right',
  footer 
}) => {
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

  return (
    <div 
      className={`fixed inset-0 z-50 transition-visibility duration-300 ${isOpen ? 'visible' : 'invisible'}`}
    >
      {/* Backdrop */}
      <div 
        className={`
          absolute inset-0 bg-neu-base/60 backdrop-blur-sm transition-opacity duration-300
          ${isOpen ? 'opacity-100' : 'opacity-0'}
        `} 
        onClick={onClose}
      />

      {/* Sheet Content */}
      <div 
        className={`
          absolute top-0 bottom-0 w-full max-w-md bg-neu-base shadow-2xl p-8 
          transition-transform duration-500 ease-out border-l border-white/20 flex flex-col
          ${position === 'right' ? 'right-0' : 'left-0'}
          ${isOpen 
            ? 'translate-x-0' 
            : position === 'right' ? 'translate-x-full' : '-translate-x-full'}
        `}
      >
        <div className="flex justify-between items-center mb-8">
          {title && <h2 className="text-2xl font-bold text-gray-800">{title}</h2>}
          <NeuIconButton size="sm" onClick={onClose} className="text-gray-500">
            <X size={20} />
          </NeuIconButton>
        </div>

        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
          {children}
        </div>

        {footer && (
          <div className="mt-6 pt-6 border-t border-gray-300/30">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};