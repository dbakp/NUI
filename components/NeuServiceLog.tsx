import React from 'react';
import { ServiceLogProps } from '../types';
import { Clock, CheckCircle2, CircleDashed, MoreHorizontal } from 'lucide-react';

export const NeuServiceLog: React.FC<ServiceLogProps> = ({ 
    logs, 
    onStatusChange, 
    className = '' 
}) => {
    const statusConfig = {
        'pending': { color: 'text-gray-400', icon: CircleDashed, bg: 'bg-gray-100' },
        'in-progress': { color: 'text-neu-warning', icon: Clock, bg: 'bg-neu-warning/10' },
        'completed': { color: 'text-neu-success', icon: CheckCircle2, bg: 'bg-neu-success/10' }
    };

    return (
        <div className={`relative pl-2 ${className}`}>
             {/* Timeline Line */}
             <div className="absolute left-[27px] top-6 bottom-6 w-0.5 bg-gray-300/50 rounded-full" />
             
             <div className="space-y-6">
                 {logs.map((log) => {
                     const config = statusConfig[log.status];
                     const Icon = config.icon;
                     
                     return (
                         <div key={log.id} className="relative flex items-center gap-5 group">
                             <button 
                                onClick={() => {
                                    const next = log.status === 'pending' ? 'in-progress' : log.status === 'in-progress' ? 'completed' : 'pending';
                                    onStatusChange(log.id, next);
                                }}
                                className={`
                                    relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center bg-neu-base
                                    shadow-neu-convex transition-all duration-300 hover:scale-105 active:scale-95
                                    border border-white/50 ${config.color}
                                `}
                             >
                                 <Icon size={24} strokeWidth={2} />
                             </button>
                             
                             <div className="flex-1 p-4 rounded-2xl bg-neu-base shadow-neu-flat border border-white/20 flex justify-between items-center transition-all hover:shadow-neu-convex">
                                 <div>
                                     <h5 className="font-bold text-gray-800 text-sm mb-1">{log.service}</h5>
                                     <div className="flex items-center gap-2">
                                         <span className="text-xs text-gray-500 font-semibold">{log.room}</span>
                                         <span className="w-1 h-1 rounded-full bg-gray-400" />
                                         <span className={`text-[10px] font-bold uppercase tracking-wider ${config.color}`}>
                                             {log.status.replace('-', ' ')}
                                         </span>
                                     </div>
                                 </div>
                                 <div className="flex flex-col items-end gap-1">
                                     <span className="text-xs font-bold text-gray-400 font-mono bg-neu-base shadow-neu-pressed px-2 py-1 rounded-lg">
                                         {log.time}
                                     </span>
                                 </div>
                             </div>
                         </div>
                     );
                 })}
             </div>
        </div>
    );
};