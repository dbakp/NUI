
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
        success: 'text-emerald-600 bg-emerald-100 border-emerald-200',
        warning: 'text-amber-600 bg-amber-100 border-amber-200',
        danger: 'text-red-600 bg-red-100 border-red-200',
        neutral: 'text-gray-600 bg-gray-100 border-gray-200'
    };

    const dotColors = {
        success: 'bg-emerald-500',
        warning: 'bg-amber-500',
        danger: 'bg-red-500',
        neutral: 'bg-gray-400'
    };

    return (
        <div className={`px-5 py-2 rounded-full text-sm font-bold border inline-flex items-center gap-2 ${colors[variant]}`}>
            <span className={`w-2 h-2 rounded-full ${dotColors[variant]} shadow-sm`} />
            {children}
        </div>
    );
}
