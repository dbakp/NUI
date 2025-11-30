import React, { useState, useRef, useEffect } from 'react';
import { InlineEditProps } from '../types';

export const NeuInlineEdit: React.FC<InlineEditProps> = ({ 
    value, 
    onSave, 
    placeholder = 'Click to edit...', 
    className = '' 
}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [inputValue, setInputValue] = useState(value);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setInputValue(value);
    }, [value]);

    useEffect(() => {
        if (isEditing && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isEditing]);

    const handleSave = () => {
        setIsEditing(false);
        if (inputValue.trim() !== value) {
            onSave(inputValue);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') handleSave();
        if (e.key === 'Escape') {
            setInputValue(value);
            setIsEditing(false);
        }
    };

    if (isEditing) {
        return (
            <div className={`relative ${className}`}>
                <div className="absolute inset-0 rounded-lg shadow-neu-pressed bg-neu-base pointer-events-none" />
                <input
                    ref={inputRef}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onBlur={handleSave}
                    onKeyDown={handleKeyDown}
                    className="
                        relative w-full bg-transparent border-none outline-none 
                        text-gray-800 px-3 py-1.5 rounded-lg text-inherit font-inherit
                    "
                />
            </div>
        );
    }

    return (
        <div 
            onClick={() => setIsEditing(true)}
            className={`
                cursor-text px-3 py-1.5 rounded-lg border border-transparent 
                hover:border-white/20 hover:shadow-neu-flat transition-all
                text-inherit font-inherit truncate
                ${!value ? 'text-gray-400 italic' : ''}
                ${className}
            `}
        >
            {value || placeholder}
        </div>
    );
};