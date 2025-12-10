import React from 'react';
import { CreditCardProps } from '../types';
import { CreditCard as CardIcon, Wifi } from 'lucide-react';
import { neuStyle } from '../neu-styles';
export const NeuCreditCard: React.FC<CreditCardProps> = ({ cardNumber, cardHolder, expiryDate, cardType = 'visa', variant = 'dark',
className = '' }) => {
return (
<div className={`
relative overflow-hidden rounded-[2rem] p-8 w-full max-w-[380px] aspect-[1.586/1] flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02]
${variant === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-700'}
${className}
`} style={neuStyle('flat')}>
{/* Background Decor */}
<div className={`
absolute -right-12 -top-12 w-64 h-64 rounded-full opacity-10
${variant === 'dark' ? 'bg-white' : 'bg-indigo-500'}
`} />
<div className="flex justify-between items-start z-10">
<Wifi className="transform rotate-90" size={24} />
<span className="font-bold tracking-wider uppercase italic text-lg opacity-80">{cardType}</span>
</div>
<div className="z-10 mt-4">
{/* Chip */}
<div className="w-12 h-9 rounded-md bg-yellow-500/80 mb-4 flex items-center justify-center overflow-hidden relative">
<div className="absolute inset-0 border border-black/20 rounded-md" />
<div className="w-full h-[1px] bg-black/20" />
<div className="absolute h-full w-[1px] bg-black/20" />
</div>
<div className="font-mono text-xl md:text-2xl tracking-widest font-bold shadow-black drop-shadow-md">
{cardNumber}
</div>
</div>
<div className="flex justify-between items-end z-10">
<div>
<p className="text-[10px] uppercase opacity-70 tracking-widest mb-1">Card Holder</p>
<p className="font-bold tracking-wide uppercase text-sm">{cardHolder}</p>
</div>
<div className="text-right">
<p className="text-[10px] uppercase opacity-70 tracking-widest mb-1">Expires</p>
<p className="font-bold tracking-wide text-sm">{expiryDate}</p>
</div>
</div>
</div>
);
};