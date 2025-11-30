
import React from 'react';

export const NeuProgressCircle: React.FC<{ progress: number, size?: number }> = ({ progress, size = 120 }) => {
  const strokeWidth = 10;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div 
        className="relative rounded-full shadow-neu-flat flex items-center justify-center bg-neu-base"
        style={{ width: size, height: size }}
    >
        <div className="absolute inset-0 rounded-full shadow-neu-pressed m-2 flex items-center justify-center">
            <span className="text-xl font-bold text-gray-600">{progress}%</span>
        </div>
        
        <svg
            className="absolute inset-0 transform -rotate-90 pointer-events-none"
            width={size}
            height={size}
        >
            <circle
                stroke="transparent"
                fill="transparent"
                strokeWidth={strokeWidth}
                r={radius}
                cx={size / 2}
                cy={size / 2}
            />
            <circle
                stroke="#6C63FF"
                fill="transparent"
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
                r={radius}
                cx={size / 2}
                cy={size / 2}
                className="transition-all duration-1000 ease-out m-4"
                style={{ filter: 'drop-shadow(0px 0px 4px rgba(108,99,255,0.5))' }}
            />
        </svg>
    </div>
  );
};

export const NeuBadge: React.FC<{ children: React.ReactNode, variant?: 'success' | 'warning' | 'danger' | 'neutral' }> = ({ 
    children, 
    variant = 'neutral' 
}) => {
    const colors = {
        success: 'text-neu-success bg-neu-success/10',
        warning: 'text-neu-warning bg-neu-warning/10',
        danger: 'text-neu-danger bg-neu-danger/10',
        neutral: 'text-gray-500 bg-gray-500/10'
    };

    return (
        <div className={`px-3 py-1 rounded-lg text-xs font-bold shadow-neu-pressed-sm border border-white/20 inline-flex items-center gap-2 ${colors[variant]}`}>
            <span className={`w-2 h-2 rounded-full ${variant === 'success' ? 'bg-neu-success' : variant === 'warning' ? 'bg-neu-warning' : variant === 'danger' ? 'bg-neu-danger' : 'bg-gray-400'} shadow-sm`} />
            {children}
        </div>
    );
}
