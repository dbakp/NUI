import React, { useState } from 'react';
import { TreeViewProps, TreeItem } from '../types';
import { ChevronRight, Folder, File } from 'lucide-react';

const TreeNode: React.FC<{ item: TreeItem; depth: number; onSelect?: (id: string) => void }> = ({ item, depth, onSelect }) => {
    const [isOpen, setIsOpen] = useState(item.defaultOpen || false);
    const hasChildren = item.children && item.children.length > 0;

    return (
        <div className="select-none">
            <div 
                className={`
                    flex items-center gap-2 py-2 pr-4 rounded-r-xl transition-all cursor-pointer group
                    hover:bg-white/40
                `}
                style={{ paddingLeft: `${depth * 1.5 + 1}rem` }}
                onClick={() => {
                    if (hasChildren) setIsOpen(!isOpen);
                    onSelect && onSelect(item.id);
                }}
            >
                {/* Toggle Arrow */}
                <div className={`
                    w-6 h-6 rounded-md flex items-center justify-center transition-all duration-200
                    ${hasChildren ? 'text-gray-500 hover:text-neu-accent' : 'opacity-0'}
                `}>
                     <ChevronRight 
                        size={14} 
                        className={`transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`} 
                     />
                </div>

                {/* Icon */}
                <div className={`
                    ${hasChildren ? 'text-neu-accent' : 'text-gray-400'}
                `}>
                    {item.icon || (hasChildren ? <Folder size={16} fill={isOpen ? "currentColor" : "none"} /> : <File size={16} />)}
                </div>

                {/* Label */}
                <span className="text-sm font-semibold text-gray-600 group-hover:text-gray-800">
                    {item.label}
                </span>
            </div>

            {hasChildren && isOpen && (
                <div className="animate-in slide-in-from-top-2 duration-200">
                    {item.children!.map(child => (
                        <TreeNode key={child.id} item={child} depth={depth + 1} onSelect={onSelect} />
                    ))}
                </div>
            )}
        </div>
    );
};

export const NeuTreeView: React.FC<TreeViewProps> = ({ items, className = '', onSelect }) => {
    return (
        <div className={`
            bg-neu-base rounded-[2rem] shadow-neu-concave p-4 border border-white/20 overflow-hidden
            ${className}
        `}>
            {items.map(item => (
                <TreeNode key={item.id} item={item} depth={0} onSelect={onSelect} />
            ))}
        </div>
    );
};