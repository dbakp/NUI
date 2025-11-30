import React from 'react';
import { QrScannerProps } from '../types';
import { Camera, ScanLine } from 'lucide-react';

export const NeuQrScanner: React.FC<QrScannerProps> = ({ 
    isActive = true, 
    onScan, 
    label = "Scan QR Code", 
    className = '' 
}) => {
    return (
        <div className={`
            flex flex-col items-center justify-center p-6 rounded-[2.5rem] bg-neu-base 
            shadow-neu-convex border border-white/20 text-center relative overflow-hidden
            ${className}
        `}>
            {/* Camera Viewport Simulation */}
            <div 
                className="
                    relative w-64 h-64 bg-gray-900 rounded-3xl shadow-neu-pressed overflow-hidden mb-6
                    flex items-center justify-center group cursor-pointer
                "
                onClick={onScan}
            >
                {/* Simulated Camera Feed (Static pattern or image) */}
                <div className="absolute inset-0 opacity-20" 
                     style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '10px 10px' }} 
                />
                
                {/* Corner Markers */}
                <div className="absolute top-6 left-6 w-8 h-8 border-t-4 border-l-4 border-neu-accent rounded-tl-xl opacity-80" />
                <div className="absolute top-6 right-6 w-8 h-8 border-t-4 border-r-4 border-neu-accent rounded-tr-xl opacity-80" />
                <div className="absolute bottom-6 left-6 w-8 h-8 border-b-4 border-l-4 border-neu-accent rounded-bl-xl opacity-80" />
                <div className="absolute bottom-6 right-6 w-8 h-8 border-b-4 border-r-4 border-neu-accent rounded-br-xl opacity-80" />

                {/* Scan Line Animation */}
                {isActive && (
                    <div className="absolute left-4 right-4 h-0.5 bg-neu-accent shadow-[0_0_10px_rgba(108,99,255,0.8)] animate-[scan_2s_ease-in-out_infinite]" />
                )}

                <div className="text-white/50 flex flex-col items-center gap-2">
                    <Camera size={32} />
                    <span className="text-xs font-bold uppercase tracking-widest">Tap to Scan</span>
                </div>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-1">{label}</h3>
            <p className="text-sm text-gray-500 font-medium">Place code inside the frame</p>

            <style>{`
                @keyframes scan {
                    0% { top: 10%; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { top: 90%; opacity: 0; }
                }
            `}</style>
        </div>
    );
};