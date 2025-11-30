import React from 'react';
import { BoardCardProps } from '../types';
import { MessageSquare, Paperclip } from 'lucide-react';
import { NeuAvatar } from './NeuAvatar';

export const NeuBoardCard: React.FC<BoardCardProps> = ({ 
    title, 
    coverImage, 
    labels = [], 
    memberAvatars = [], 
    commentCount, 
    attachmentCount, 
    onClick,
    className = '' 
}) => {
    return (
        <div 
            onClick={onClick}
            className={`
                group bg-neu-base rounded-2xl p-4 shadow-neu-flat hover:shadow-neu-convex 
                border border-white/20 transition-all duration-300 cursor-pointer hover:-translate-y-1
                ${className}
            `}
        >
            {/* Cover Image */}
            {coverImage && (
                <div className="mb-3 -mx-4 -mt-4 rounded-t-2xl overflow-hidden h-32 relative">
                    <img src={coverImage} alt="Cover" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-t-2xl" />
                </div>
            )}

            {/* Labels */}
            {labels.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-2">
                    {labels.map(label => (
                        <span 
                            key={label.id} 
                            className="h-1.5 w-8 rounded-full shadow-sm"
                            style={{ backgroundColor: label.color }}
                            title={label.name}
                        />
                    ))}
                </div>
            )}

            {/* Title */}
            <h4 className="text-gray-700 font-bold mb-3 leading-snug group-hover:text-neu-accent transition-colors">
                {title}
            </h4>

            {/* Footer */}
            <div className="flex items-center justify-between mt-2">
                <div className="flex items-center -space-x-2">
                    {memberAvatars.map((src, i) => (
                        <NeuAvatar key={i} src={src} size="sm" className="!w-6 !h-6 border-2 border-neu-base" />
                    ))}
                </div>
                
                <div className="flex items-center gap-3 text-gray-400 text-xs font-bold">
                    {commentCount !== undefined && (
                        <div className="flex items-center gap-1 hover:text-gray-600">
                            <MessageSquare size={14} />
                            <span>{commentCount}</span>
                        </div>
                    )}
                    {attachmentCount !== undefined && (
                        <div className="flex items-center gap-1 hover:text-gray-600">
                            <Paperclip size={14} />
                            <span>{attachmentCount}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};