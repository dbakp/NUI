
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
    const styles = {
        success: {
            bg: 'bg-emerald-50',
            text: 'text-emerald-600',
            border: 'border-2 border-emerald-300',
            dot: 'bg-emerald-500'
        },
        warning: {
            bg: 'bg-orange-50',
            text: 'text-orange-500',
            border: 'border-2 border-orange-300',
            dot: 'bg-orange-400'
        },
        danger: {
            bg: 'bg-red-50',
            text: 'text-red-600',
            border: 'border-2 border-red-300',
            dot: 'bg-red-500'
        },
        neutral: {
            bg: 'bg-gray-50',
            text: 'text-gray-600',
            border: 'border-2 border-gray-300',
            dot: 'bg-gray-400'
        }
    };

    const style = styles[variant];

    return (
        <div
            className={`px-4 py-1 rounded-full text-xs font-bold inline-flex items-center gap-2 ${style.bg} ${style.text} ${style.border}`}
            style={{
                boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.5), 0 1px 2px rgba(0, 0, 0, 0.05)'
            }}
        >
            <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
            {children}
        </div>
    );
}
