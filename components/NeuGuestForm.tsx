import React, { useState } from 'react';
import { GuestFormProps } from '../types';
import { Plus, X, User, Mail } from 'lucide-react';
import { NeuInput } from './NeuInput';
import { NeuIconButton } from './NeuButton';

export const NeuGuestForm: React.FC<GuestFormProps> = ({ 
    guests, 
    onAdd, 
    onRemove, 
    className = '' 
}) => {
    const [newName, setNewName] = useState('');
    const [newEmail, setNewEmail] = useState('');

    const handleAdd = () => {
        if (newName && newEmail) {
            onAdd({ name: newName, email: newEmail });
            setNewName('');
            setNewEmail('');
        }
    };

    return (
        <div className={`p-6 rounded-[2rem] bg-neu-base shadow-neu-flat border border-white/20 ${className}`}>
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6 px-1">Guest List</h4>
            
            {guests.length > 0 ? (
                <div className="space-y-3 mb-8 max-h-60 overflow-y-auto custom-scrollbar p-1">
                    {guests.map((guest) => (
                        <div key={guest.id} className="flex items-center justify-between p-3 pl-4 rounded-2xl bg-neu-base shadow-neu-convex border border-white/20 group">
                            <div className="flex items-center gap-3 overflow-hidden">
                                <div className="w-8 h-8 rounded-full bg-neu-base shadow-neu-pressed flex items-center justify-center text-gray-400 flex-shrink-0">
                                    <User size={14} />
                                </div>
                                <div className="min-w-0">
                                    <p className="font-bold text-gray-700 text-sm truncate">{guest.name}</p>
                                    <p className="text-xs text-gray-500 font-medium truncate">{guest.email}</p>
                                </div>
                            </div>
                            <NeuIconButton 
                                size="sm" 
                                onClick={() => onRemove(guest.id)}
                                className="text-gray-400 hover:text-neu-danger opacity-0 group-hover:opacity-100 transition-all scale-90"
                            >
                                <X size={16} />
                            </NeuIconButton>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-8 mb-6 bg-neu-base shadow-neu-pressed rounded-2xl border border-white/10">
                    <p className="text-sm text-gray-400 italic">No external guests added yet.</p>
                </div>
            )}

            <div className="space-y-3 pt-6 border-t border-gray-300/30">
                <NeuInput 
                    placeholder="Full Name" 
                    value={newName} 
                    onChange={(e) => setNewName(e.target.value)} 
                    icon={<User size={16}/>}
                    className="!mb-0"
                />
                <NeuInput 
                    placeholder="Email Address" 
                    value={newEmail} 
                    onChange={(e) => setNewEmail(e.target.value)} 
                    icon={<Mail size={16}/>}
                    className="!mb-0"
                />
                <button
                    onClick={handleAdd}
                    disabled={!newName || !newEmail}
                    className={`
                        w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all mt-2
                        ${!newName || !newEmail 
                            ? 'bg-neu-base shadow-neu-flat text-gray-300 cursor-not-allowed' 
                            : 'bg-neu-base shadow-neu-convex hover:shadow-neu-pressed text-neu-accent active:scale-[0.98]'}
                    `}
                >
                    <Plus size={18} strokeWidth={3} />
                    Add to List
                </button>
            </div>
        </div>
    );
};