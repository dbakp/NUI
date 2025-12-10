import React, { useState } from 'react';
import { InputProps } from '../types';
import { Eye, EyeOff } from 'lucide-react';
import { neuStyle } from '../neu-styles';
export const NeuInput: React.FC<InputProps> = ({ label, error, icon, className = '', type = 'text',
...props }) => {
const [showPassword, setShowPassword] = useState(false);
const isPassword = type === 'password';
return (
<div className={`flex flex-col mb-4 ${className}`}>
{label && (
<label className="mb-2 ml-1 text-sm font-bold text-gray-500 uppercase tracking-wider">
{label}
</label>
)}
<div className="relative group">
<div className={`
absolute inset-0 rounded-xl bg-gray-100 pointer-events-none transition-shadow duration-300
`} style={neuStyle('pressed')} />
{icon && (
<div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
{icon}
</div>
)}
<input
type={isPassword ? (showPassword ? 'text' : 'password') : type}
className={`
w-full bg-transparent border-none outline-none text-gray-700 placeholder-gray-400
py-3 px-4 rounded-xl
focus:ring-0
${icon ? 'pl-11' : ''}
${isPassword ? 'pr-12' : ''}
`}
{...props}
/>
{isPassword && (
<button
type="button"
onClick={() => setShowPassword(!showPassword)}
className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none p-1 rounded-full hover:bg-black/5 transition-colors"
>
{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
</button>
)}
{/* Focus indicator glow */}
<div className="absolute inset-0 rounded-xl pointer-events-none shadow-[0_0_0_2px_rgba(108,99,255,0)] group-focus-within:shadow-[0_0_0_1px_rgba(108,99,255,0.3)] transition-shadow duration-300" />
</div>
{error && <span className="mt-1 ml-1 text-xs text-red-500">{error}</span>}
</div>
);
};