import React, { useState } from 'react';
import { SearchBarProps } from '../types';
import { Search, X } from 'lucide-react';

export const NeuSearchBar: React.FC<SearchBarProps> = ({ 
  onSearch, 
  onClear,
  className = '', 
  placeholder = 'Search...',
  value,
  onChange,
  ...props 
}) => {
  const [internalValue, setInternalValue] = useState('');

  // Handle uncontrolled vs controlled state
  const isControlled = value !== undefined;
  const displayValue = isControlled ? value : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      setInternalValue(e.target.value);
    }
    onChange?.(e);
    onSearch?.(e.target.value);
  };

  const handleClear = () => {
    if (!isControlled) {
      setInternalValue('');
    }
    onClear?.();
    
    // Create a synthetic event if onChange is provided to reset parent state
    if (onChange) {
        const event = {
            target: { value: '' }
        } as React.ChangeEvent<HTMLInputElement>;
        onChange(event);
    }
  };

  return (
    <div className={`relative group ${className}`}>
      {/* Background/Shadow Layer */}
      <div className="absolute inset-0 rounded-full pointer-events-none shadow-neu-pressed bg-neu-base" />
      
      {/* Search Icon */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-neu-accent transition-colors">
        <Search size={18} />
      </div>
      
      {/* Input */}
      <input
        type="text"
        className={`
          w-full bg-transparent border-none outline-none text-gray-700 placeholder-gray-400
          py-2.5 pl-11 pr-10 rounded-full
          focus:ring-0 text-sm font-semibold
        `}
        placeholder={placeholder}
        value={displayValue}
        onChange={handleChange}
        {...props}
      />

      {/* Clear Button */}
      {displayValue && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none p-1 rounded-full hover:bg-black/5 transition-colors"
        >
          <X size={14} />
        </button>
      )}
      
      {/* Focus Glow Effect */}
      <div className="absolute inset-0 rounded-full pointer-events-none shadow-[0_0_0_2px_rgba(108,99,255,0)] group-focus-within:shadow-[0_0_0_1px_rgba(108,99,255,0.3)] transition-shadow duration-300" />
    </div>
  );
};