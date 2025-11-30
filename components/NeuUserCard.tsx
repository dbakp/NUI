import React from 'react';
import { UserCardProps } from '../types';
import { NeuAvatar } from './NeuAvatar';
import { NeuButton } from './NeuButton';
import { MapPin } from 'lucide-react';

export const NeuUserCard: React.FC<UserCardProps> = ({ 
    name, 
    role, 
    avatarSrc, 
    stats = [], 
    onFollow, 
    isFollowing = false,
    className = ''
}) => {
    return (
        <div className={`
            flex flex-col items-center p-8 rounded-[2.5rem] bg-neu-base 
            shadow-neu-convex border border-white/20 text-center
            ${className}
        `}>
            <div className="relative mb-4">
                <div className="absolute inset-0 rounded-full shadow-neu-convex blur-md opacity-50 bg-neu-accent/20" />
                <NeuAvatar src={avatarSrc} size="lg" className="!w-24 !h-24" />
            </div>
            
            <h3 className="text-xl font-bold text-gray-800 mb-1">{name}</h3>
            <p className="text-sm font-semibold text-neu-accent mb-6">{role}</p>
            
            {stats.length > 0 && (
                <div className="flex justify-center gap-6 w-full mb-8">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="flex flex-col">
                            <span className="text-lg font-extrabold text-gray-700">{stat.value}</span>
                            <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">{stat.label}</span>
                        </div>
                    ))}
                </div>
            )}
            
            <NeuButton 
                onClick={onFollow} 
                variant={isFollowing ? 'secondary' : 'primary'}
                isActive={isFollowing}
                className="w-full max-w-[160px]"
            >
                {isFollowing ? 'Following' : 'Follow'}
            </NeuButton>
        </div>
    );
};