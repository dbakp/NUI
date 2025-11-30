import React from 'react';
import { MetricCardProps } from '../types';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

export const NeuMetricCard: React.FC<MetricCardProps> = ({ 
  title, 
  value, 
  trend, 
  icon, 
  className = '',
  chartPath
}) => {
  return (
    <div className={`relative p-6 rounded-[2rem] bg-neu-base shadow-neu-convex border border-white/20 overflow-hidden ${className}`}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">{title}</p>
          <h3 className="text-3xl font-extrabold text-gray-700 mt-2">{value}</h3>
        </div>
        {icon && (
            <div className="w-12 h-12 rounded-2xl shadow-neu-flat flex items-center justify-center text-neu-accent bg-neu-base">
                {icon}
            </div>
        )}
      </div>

      {/* Sparkline / Chart Background */}
      {chartPath && (
          <div className="absolute bottom-0 left-0 right-0 h-16 opacity-10 pointer-events-none">
              <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="w-full h-full">
                  <path d={chartPath} fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-800" />
                  <path d={`${chartPath} V 20 H 0 Z`} fill="currentColor" className="text-gray-800" />
              </svg>
          </div>
      )}

      {trend && (
        <div className="flex items-center gap-2 mt-2 relative z-10">
          <div className={`
            flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-bold shadow-neu-pressed-sm border border-white/10
            ${trend.isPositive ? 'text-neu-success bg-neu-success/5' : 'text-neu-danger bg-neu-danger/5'}
          `}>
            {trend.isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
            {Math.abs(trend.value)}%
          </div>
          <span className="text-xs font-semibold text-gray-400">{trend.label || 'vs last month'}</span>
        </div>
      )}
    </div>
  );
};