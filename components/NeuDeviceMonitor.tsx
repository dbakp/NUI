import React from 'react';
import { DeviceMonitorProps } from '../types';
import { Wifi, WifiOff, AlertTriangle, Activity } from 'lucide-react';
import { NeuButton } from './NeuButton';

export const NeuDeviceMonitor: React.FC<DeviceMonitorProps> = ({ 
    deviceName, 
    status, 
    lastPing, 
    ip, 
    className = '' 
}) => {
    const statusConfig = {
        online: { color: 'text-neu-success', bg: 'bg-neu-success', icon: <Wifi size={20} />, label: 'Online' },
        offline: { color: 'text-gray-400', bg: 'bg-gray-400', icon: <WifiOff size={20} />, label: 'Offline' },
        warning: { color: 'text-neu-warning', bg: 'bg-neu-warning', icon: <AlertTriangle size={20} />, label: 'Warning' }
    };

    const current = statusConfig[status];

    return (
        <div className={`
            flex items-center justify-between p-4 rounded-2xl bg-neu-base 
            shadow-neu-flat border border-white/20
            ${className}
        `}>
            <div className="flex items-center gap-4 min-w-0 flex-1">
                <div className={`
                    w-12 h-12 rounded-xl flex items-center justify-center shadow-neu-pressed flex-shrink-0
                    ${current.color}
                `}>
                    {current.icon}
                </div>
                <div className="min-w-0 truncate">
                    <h4 className="font-bold text-gray-800 truncate">{deviceName}</h4>
                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 mt-1 truncate">
                        {ip && <span className="font-mono">{ip}</span>}
                        {lastPing && (
                            <>
                                <span className="w-1 h-1 rounded-full bg-gray-400" />
                                <span>{lastPing}</span>
                            </>
                        )}
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-4 flex-shrink-0 ml-4">
                <div className={`
                    hidden sm:block px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wide border border-white/20 shadow-sm
                    ${status === 'online' ? 'bg-neu-success/10 text-neu-success' : 
                      status === 'warning' ? 'bg-neu-warning/10 text-neu-warning' : 
                      'bg-gray-200 text-gray-500'}
                `}>
                    {current.label}
                </div>
                <NeuButton size="sm" icon={<Activity size={14}/>} variant="secondary">
                    Log
                </NeuButton>
            </div>
        </div>
    );
};