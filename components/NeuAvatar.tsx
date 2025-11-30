import React from 'react';
import { AvatarProps } from '../types';

export const NeuAvatar: React.FC<AvatarProps> = ({ 
    src, 
    alt, 
    fallback, 
    size = 'md', 
    status,
    className = '' 
}) => {
    const sizeClasses = {
        sm: 'w-10 h-10 text-xs',
        md: 'w-16 h-16 text-lg',
        lg: 'w-24 h-24 text-2xl'
    };

    const statusColors = {
        online: 'bg-neu-success',
        offline: 'bg-gray-400',
        busy: 'bg-neu-danger',
        away: 'bg-neu-warning'
    };

    return (
        <div className={`relative inline-block ${className}`}>
            <div className={`
                ${sizeClasses[size]} rounded-full shadow-neu-flat 
                flex items-center justify-center 
                border-4 border-neu-base overflow-hidden
            `}>
                {src ? (
                    <img src={src} alt={alt || 'Avatar'} className="w-full h-full object-cover" />
                ) : (
                    <div className="w-full h-full bg-neu-base flex items-center justify-center font-bold text-gray-500">
                        {fallback || alt?.charAt(0).toUpperCase() || '?'}
                    </div>
                )}
            </div>
            
            {status && (
                <div className={`
                    absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-neu-base
                    ${statusColors[status]} shadow-sm
                    ${size === 'sm' ? 'w-2.5 h-2.5' : ''}
                `} />
            )}
        </div>
    );
};