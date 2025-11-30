import React from 'react';
import { AvatarGroupProps } from '../types';
import { NeuAvatar } from './NeuAvatar';

export const NeuAvatarGroup: React.FC<AvatarGroupProps> = ({ 
    avatars, 
    max = 4, 
    size = 'md', 
    className = '' 
}) => {
    const displayAvatars = avatars.slice(0, max);
    const remaining = avatars.length - max;

    const sizeClasses = {
        sm: 'w-10 h-10',
        md: 'w-16 h-16',
        lg: 'w-24 h-24'
    };

    // We adjust negative margin based on size to ensure overlap
    const spacing = size === 'sm' ? '-space-x-3' : size === 'md' ? '-space-x-5' : '-space-x-6';

    return (
        <div className={`flex items-center ${spacing} ${className}`}>
            {displayAvatars.map((avatar, index) => (
                <div key={index} className="relative z-0 hover:z-10 transition-all duration-300 hover:-translate-y-1">
                     {/* The border helps cut out the shape from the previous one visually */}
                    <div className="rounded-full ring-4 ring-neu-base">
                        <NeuAvatar 
                            src={avatar.src} 
                            alt={avatar.alt} 
                            fallback={avatar.fallback} 
                            size={size}
                            className="!shadow-none border-none" // Remove default card style, use parent grouping style if needed
                        />
                         {/* Re-apply shadow to the group item manually if NeuAvatar removed it, or wrap it */}
                         <div className={`absolute inset-0 rounded-full shadow-neu-flat pointer-events-none mix-blend-multiply opacity-20`} />
                    </div>
                </div>
            ))}
            
            {remaining > 0 && (
                <div className="relative z-0 hover:z-10">
                    <div className="rounded-full ring-4 ring-neu-base">
                        <div className={`
                            ${sizeClasses[size]} rounded-full bg-neu-base shadow-neu-convex 
                            flex items-center justify-center 
                            text-gray-500 font-bold border border-white/20
                        `}>
                            +{remaining}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};