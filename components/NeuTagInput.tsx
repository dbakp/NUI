import React, { useState } from 'react';
import { TagInputProps } from '../types';
import { X } from 'lucide-react';

export const NeuTagInput: React.FC<TagInputProps> = ({ 
  tags, 
  onTagsChange, 
  placeholder = "Add a tag...", 
  label,
  className = '' 
}) => {
  const [input, setInput] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && input.trim()) {
      e.preventDefault();
      if (!tags.includes(input.trim())) {
        onTagsChange([...tags, input.trim()]);
      }
      setInput('');
    } else if (e.key === 'Backspace' && !input && tags.length > 0) {
      onTagsChange(tags.slice(0, -1));
    }
  };

  const removeTag = (index: number) => {
    onTagsChange(tags.filter((_, i) => i !== index));
  };

  return (
    <div className={`flex flex-col mb-4 ${className}`}>
      {label && (
        <label className="mb-2 ml-1 text-sm font-bold text-gray-500 uppercase tracking-wider">
          {label}
        </label>
      )}
      
      <div className="
        w-full bg-neu-base shadow-neu-pressed rounded-xl p-2 min-h-[56px]
        flex flex-wrap items-center gap-2 border border-transparent focus-within:border-neu-accent/30 transition-colors
      ">
        {tags.map((tag, index) => (
          <div 
            key={index} 
            className="
                flex items-center gap-1 pl-3 pr-1 py-1 rounded-lg bg-neu-base 
                shadow-neu-convex text-sm font-bold text-gray-600
                border border-white/20
                animate-in zoom-in-50 duration-200
            "
          >
            <span>{tag}</span>
            <button 
                onClick={() => removeTag(index)}
                className="p-1 rounded-md hover:text-neu-danger hover:bg-gray-200/50 transition-colors"
            >
                <X size={14} />
            </button>
          </div>
        ))}
        
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={tags.length === 0 ? placeholder : ''}
          className="bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 flex-1 min-w-[120px] px-2 py-1 h-full"
        />
      </div>
    </div>
  );
};