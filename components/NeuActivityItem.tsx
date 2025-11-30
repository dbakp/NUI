import React from 'react';
import { ActivityItemProps } from '../types';
import { NeuAvatar } from './NeuAvatar';
import { Activity } from 'lucide-react';

export const NeuActivityItem: React.FC<ActivityItemProps> = ({ 
    user, 
    action, 
    target, 
    time, 
    icon, 
    className = '' 
}) => {
    return (
        <div className={`flex gap-4 items-start p-4 rounded-2xl hover:bg-white/30 transition-colors ${className}`}>
             <div className="relative">
                <NeuAvatar src={user.avatar} fallback={user.name[0]} size="sm" />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-neu-base shadow-neu-flat flex items-center justify-center text-neu-accent border border-white/50">
                    {icon || <Activity size={10} />}
                </div>
             </div>
             
             <div className="flex-1 min-w-0 pt-0.5">
                 <p className="text-sm text-gray-600">
                     <span className="font-bold text-gray-800">{user.name}</span> {action} 
                     {target && <span className="font-bold text-gray-800"> {target}</span>}
                 </p>
                 <span className="text-xs font-semibold text-gray-400 block mt-1">{time}</span>
             </div>
        </div>
    );
};