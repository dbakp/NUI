import React from 'react';
import { ResourceListProps } from '../types';
import { CheckCircle, Wrench } from 'lucide-react';
import { NeuToggle } from './NeuToggle';
import { neuStyle } from '../neu-styles';
export const NeuResourceList: React.FC<ResourceListProps> = ({ resources, onStatusToggle, className = '' }) => {
return (
<div className={`flex flex-col gap-4 ${className}`}>
{resources.map((item) => {
const isWorking = item.status === 'working';
return (
<div key={item.id} className={`
flex items-center justify-between p-4 rounded-2xl bg-gray-100 transition-all duration-300 border border-white/20
${isWorking ? '' : ' opacity-95 bg-gray-100/50'}
`}
style={neuStyle('flat')}>
<div className="flex items-center gap-4">
<div className={`
w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300
${isWorking ? ' text-emerald-500' : ' text-red-500 bg-red-500/5'}
`}>
{isWorking ? <CheckCircle size={20} /> : <Wrench size={20} />}
</div>
<div>
<h5 className={`font-bold transition-colors ${isWorking ? 'text-gray-700' : 'text-gray-500'}`}>
{item.name}
</h5>
<p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide flex items-center gap-1">
<span className={`w-1.5 h-1.5 rounded-full ${isWorking ? 'bg-emerald-500' : 'bg-red-500'}`}></span>
Last Checked: {item.lastChecked}
</p>
</div>
</div>
<div className="flex flex-col items-end gap-1">
<div className="scale-75 origin-right">
<NeuToggle checked={isWorking} onChange={(checked) => onStatusToggle(item.id, checked ? 'working' : 'broken')} />
</div>
<span className={`text-[10px] font-bold uppercase tracking-widest ${isWorking ? 'text-emerald-500' : 'text-red-500'}`}>
{isWorking ? 'Active' : 'Repair'}
</span>
</div>
</div>
);
})}
</div>
);
};