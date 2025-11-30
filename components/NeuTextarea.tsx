import React from 'react';
import { TextareaProps } from '../types';

export const NeuTextarea: React.FC<TextareaProps> = ({ 
  label, 
  error, 
  className = '', 
  ...props 
}) => {
  return (
    <div className={`flex flex-col mb-4 ${className}`}>
      {label && (
        <label className="mb-2 ml-1 text-sm font-bold text-gray-500 uppercase tracking-wider">
          {label}
        </label>
      )}
      <div className="relative group">
        <div className="absolute inset-0 rounded-xl pointer-events-none shadow-neu-pressed" />
        
        <textarea
          className="
            w-full bg-transparent border-none outline-none text-gray-700 placeholder-gray-400
            p-4 rounded-xl min-h-[120px] resize-y
            focus:ring-0
          "
          {...props}
        />
        
        {/* Focus glow */}
        <div className="absolute inset-0 rounded-xl pointer-events-none shadow-[0_0_0_2px_rgba(108,99,255,0)] group-focus-within:shadow-[0_0_0_1px_rgba(108,99,255,0.3)] transition-shadow duration-300" />
      </div>
      {error && <span className="mt-1 ml-1 text-xs text-neu-danger">{error}</span>}
    </div>
  );
};