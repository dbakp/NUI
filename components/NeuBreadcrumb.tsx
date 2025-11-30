import React from 'react';
import { BreadcrumbProps } from '../types';
import { ChevronRight, Home } from 'lucide-react';

export const NeuBreadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '' }) => {
  return (
    <nav className={`flex items-center space-x-2 text-sm text-gray-500 ${className}`}>
      <a 
        href="/" 
        className="w-8 h-8 rounded-full shadow-neu-convex flex items-center justify-center hover:text-neu-accent transition-colors"
      >
        <Home size={14} />
      </a>
      
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight size={14} className="text-gray-400" />
          {item.href ? (
            <a 
              href={item.href} 
              className="px-3 py-1 rounded-full hover:bg-white/40 hover:text-neu-accent transition-all font-semibold"
            >
              {item.label}
            </a>
          ) : (
            <span className="px-3 py-1 font-bold text-gray-800 rounded-full shadow-neu-pressed-sm bg-neu-base/50">
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};