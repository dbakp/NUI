import React from 'react';
import { FloorPlanProps } from '../types';
import { User, Layout } from 'lucide-react';

export const NeuFloorPlan: React.FC<FloorPlanProps> = ({ 
    imageUrl, 
    points, 
    onPointClick, 
    className = '' 
}) => {
    const statusColors = {
        available: 'bg-neu-success text-white',
        busy: 'bg-neu-danger text-white',
        reserved: 'bg-neu-warning text-white'
    };

    return (
        <div className={`
            relative w-full aspect-[4/3] rounded-3xl bg-neu-base shadow-neu-concave 
            overflow-hidden border border-white/20 p-4
            ${className}
        `}>
            {/* Background Grid if no image */}
            {!imageUrl && (
                <div className="absolute inset-0 opacity-10 pointer-events-none" 
                     style={{ 
                         backgroundImage: 'radial-gradient(circle, #6C63FF 1px, transparent 1px)', 
                         backgroundSize: '20px 20px' 
                     }} 
                />
            )}
            
            {/* Optional Image */}
            {imageUrl && (
                <img 
                    src={imageUrl} 
                    alt="Floor Plan" 
                    className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay" 
                />
            )}
            
            {/* Wall Outline Simulation (if no image) */}
            {!imageUrl && (
                <div className="absolute inset-10 border-4 border-gray-300/30 rounded-xl pointer-events-none">
                     <div className="absolute top-0 right-1/3 w-1/3 h-full border-l-4 border-r-4 border-gray-300/30"></div>
                     <div className="absolute bottom-1/3 left-0 w-full h-px border-t-4 border-gray-300/30"></div>
                </div>
            )}

            {/* Interactive Points */}
            {points.map(point => (
                <button
                    key={point.id}
                    onClick={() => onPointClick && onPointClick(point)}
                    className={`
                        absolute transform -translate-x-1/2 -translate-y-1/2
                        transition-all duration-300 group
                        ${point.type === 'room' ? 'w-12 h-12 rounded-xl' : 'w-8 h-8 rounded-full'}
                        ${statusColors[point.status]}
                        shadow-neu-convex hover:scale-110 active:scale-95 border border-white/20
                    `}
                    style={{ left: `${point.x}%`, top: `${point.y}%` }}
                    title={`${point.label || point.type} (${point.status})`}
                >
                    <div className="w-full h-full flex items-center justify-center">
                        {point.type === 'room' ? <Layout size={18} /> : <User size={14} />}
                    </div>
                    
                    {/* Tooltip Label */}
                    {point.label && (
                        <div className="
                            absolute -top-8 left-1/2 -translate-x-1/2 
                            bg-neu-base text-gray-700 text-[10px] font-bold px-2 py-1 rounded-md shadow-neu-flat
                            opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none
                        ">
                            {point.label}
                        </div>
                    )}
                </button>
            ))}
            
            {/* Legend */}
            <div className="absolute bottom-4 left-4 bg-neu-base/90 backdrop-blur-sm p-2 rounded-xl shadow-neu-flat border border-white/20 flex gap-4 text-[10px] font-bold uppercase text-gray-500">
                <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-neu-success" /> Available</div>
                <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-neu-danger" /> Busy</div>
                <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-neu-warning" /> Reserved</div>
            </div>
        </div>
    );
};