import React from 'react';
import { RoomLayoutPickerProps } from '../types';
import { LayoutGrid, Users, Circle, Square } from 'lucide-react';

export const NeuRoomLayoutPicker: React.FC<RoomLayoutPickerProps> = ({ 
    selectedLayoutId, 
    onChange, 
    className = '' 
}) => {
    const layouts = [
        { id: 'boardroom', label: 'Boardroom', icon: <Square size={24} /> },
        { id: 'classroom', label: 'Classroom', icon: <LayoutGrid size={24} /> },
        { id: 'u-shape', label: 'U-Shape', icon: <Users size={24} /> },
        { id: 'round', label: 'Banquet', icon: <Circle size={24} /> }
    ];

    return (
        <div className={`grid grid-cols-2 gap-4 ${className}`}>
            {layouts.map((layout) => {
                const isSelected = selectedLayoutId === layout.id;
                return (
                    <button
                        key={layout.id}
                        onClick={() => onChange(layout.id)}
                        className={`
                            relative flex flex-col items-center justify-center p-6 rounded-3xl transition-all duration-300
                            border
                            ${isSelected 
                                ? 'bg-neu-base shadow-neu-pressed text-neu-accent border-neu-accent/10 translate-y-[2px]' 
                                : 'bg-neu-base shadow-neu-flat hover:shadow-neu-convex hover:-translate-y-1 text-gray-500 hover:text-gray-700 border-white/20'}
                        `}
                    >
                        {isSelected && (
                            <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-neu-accent shadow-[0_0_8px_rgba(108,99,255,0.6)]" />
                        )}
                        
                        <div className={`mb-3 transition-transform duration-300 ${isSelected ? 'scale-110 drop-shadow-sm' : ''}`}>
                            {layout.icon}
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest">{layout.label}</span>
                    </button>
                );
            })}
        </div>
    );
};