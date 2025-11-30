import React, { useState } from 'react';
import { CateringCartItemProps } from '../types';
import { Minus, Plus, Trash2, Edit3 } from 'lucide-react';
import { NeuIconButton } from './NeuButton';

export const NeuCateringCartItem: React.FC<CateringCartItemProps> = ({ 
    name, 
    price, 
    quantity, 
    notes, 
    onUpdateQuantity, 
    onRemove, 
    className = '' 
}) => {
    const [showNotes, setShowNotes] = useState(!!notes);
    const [noteText, setNoteText] = useState(notes || '');

    return (
        <div className={`p-4 rounded-2xl bg-neu-base shadow-neu-flat border border-white/20 ${className}`}>
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h4 className="font-bold text-gray-800">{name}</h4>
                    <p className="text-sm font-bold text-neu-accent">{price}</p>
                </div>
                <NeuIconButton size="sm" onClick={onRemove} className="text-neu-danger !w-8 !h-8">
                    <Trash2 size={14} />
                </NeuIconButton>
            </div>

            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 bg-neu-base rounded-full shadow-neu-pressed p-1">
                    <button 
                        onClick={() => onUpdateQuantity(Math.max(1, quantity - 1))}
                        className="w-8 h-8 rounded-full flex items-center justify-center bg-neu-base shadow-neu-flat hover:text-neu-danger active:scale-95 transition-all text-gray-500"
                    >
                        <Minus size={14} strokeWidth={3} />
                    </button>
                    <span className="font-bold text-gray-700 w-4 text-center">{quantity}</span>
                    <button 
                        onClick={() => onUpdateQuantity(quantity + 1)}
                        className="w-8 h-8 rounded-full flex items-center justify-center bg-neu-base shadow-neu-flat hover:text-neu-success active:scale-95 transition-all text-gray-500"
                    >
                        <Plus size={14} strokeWidth={3} />
                    </button>
                </div>

                <button 
                    onClick={() => setShowNotes(!showNotes)}
                    className={`text-xs font-bold flex items-center gap-1 ${showNotes ? 'text-neu-accent' : 'text-gray-400 hover:text-gray-600'}`}
                >
                    <Edit3 size={12} />
                    {showNotes ? 'Hide Notes' : 'Add Note'}
                </button>
            </div>

            {showNotes && (
                <div className="mt-4 animate-in slide-in-from-top-2 duration-200">
                    <div className="relative">
                        <div className="absolute inset-0 rounded-xl shadow-neu-pressed bg-neu-base pointer-events-none" />
                        <textarea
                            value={noteText}
                            onChange={(e) => setNoteText(e.target.value)}
                            placeholder="Special instructions (e.g. No allergies)..."
                            className="
                                w-full bg-transparent border-none outline-none text-xs text-gray-600 p-3 rounded-xl
                                placeholder-gray-400 resize-none h-20 focus:ring-0
                            "
                        />
                    </div>
                </div>
            )}
        </div>
    );
};