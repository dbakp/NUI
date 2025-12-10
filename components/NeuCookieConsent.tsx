import React from 'react';
import { CookieConsentProps } from '../types';
import { Cookie } from 'lucide-react';
import { NeuButton } from './NeuButton';
import { neuStyle } from '../neu-styles';
export const NeuCookieConsent: React.FC<CookieConsentProps> = ({ isOpen, onAccept, onDecline, className = '' }) => {
if (!isOpen) return null;
return (
<div className={`
fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6
flex justify-center pointer-events-none
${className}
`}>
<div className="pointer-events-auto
bg-gray-100/90 backdrop-blur-md shadow-[0_-10px_40px_rgba(0,0,0,0.1)] border border-white/20 rounded-3xl p-6 md:p-8
max-w-4xl w-full flex flex-col md:flex-row items-center gap-6 md:gap-8
animate-in slide-in-from-bottom-10 duration-500
" style={neuStyle('flat')}>
<div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center text-amber-500 flex-shrink-0
" style={neuStyle('flat')}>
<Cookie size={32} />
</div>
<div className="flex-1 text-center md:text-left">
<h4 className="text-lg font-bold text-gray-800 mb-2">We value your privacy</h4>
<p className="text-sm text-gray-600 leading-relaxed">
We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
</p>
</div>
<div className="flex gap-4 flex-shrink-0">
<NeuButton variant="secondary" onClick={onDecline}>Decline</NeuButton>
<NeuButton variant="accent" onClick={onAccept}>Accept All</NeuButton>
</div>
</div>
</div>
);
};