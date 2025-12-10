import React, { useState } from 'react';
import { ButtonProps } from '../types';
import { neuStyle } from '../neu-styles';
export const NeuButton: React.FC<ButtonProps> = ({ children, className = '', size = 'md', variant = 'primary', isActive = false,
isRound = false,
disabled,
icon,
onClick,
...props }) => {
const [isPressed, setIsPressed] = useState(isActive);
// Sync internal state with external prop if provided
React.useEffect(() => {
setIsPressed(isActive);
}, [isActive]);
const baseStyles = "relative font-bold transition-all duration-200 ease-in-out flex items-center justify-center select-none outline-none focus:outline-none focus:ring-2 focus:ring-indigo-500/10";
const sizeStyles = {
sm: isRound ? 'w-10 h-10' : 'px-4 py-2 text-xs',
md: isRound ? 'w-14 h-14' : 'px-6 py-3 text-sm',
lg: isRound ? 'w-20 h-20' : 'px-8 py-4 text-base',
};
const roundedStyles = isRound ? 'rounded-full' : 'rounded-full'; // Default to pill/full rounded
// Determine shadow and interaction styles based on state
let interactionStyles = '';
let styleValue = null;
if (disabled) {
interactionStyles = 'bg-gray-100 border border-white/40 opacity-50 cursor-not-allowed';
styleValue = neuStyle('flat');
} else if (isPressed || isActive) {
interactionStyles = 'text-indigo-500 cursor-pointer';
styleValue = neuStyle('pressed');
} else {
interactionStyles = 'hover:translate-y-[-2px] active:translate-y-0 bg-gray-100 border border-white/40 cursor-pointer';
styleValue = neuStyle('convex');
}
const variantStyles = {
primary: 'text-gray-600 active:text-indigo-500',
secondary: 'text-gray-500',
accent: 'text-indigo-500',
danger: 'text-red-500',
success: 'text-emerald-500',
warning: 'text-amber-500 text-opacity-90 bg-[#FCD34D] bg-opacity-10' // Special case for badges like 'New'
};
// Override for badge buttons
if (variant === 'warning') {
const disabledBadgeStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'active:translate-y-0 cursor-pointer hover:translate-y-[-1px]';
return (
<button
className={`
${baseStyles} px-4 py-1.5 text-xs rounded-full text-amber-500 border border-white/40
${disabledBadgeStyles}
${className}
`}
style={disabled ? neuStyle('flat') : neuStyle('convex')}
onClick={onClick}
disabled={disabled}
{...props}
>
{children}
</button>
)
}
const handleMouseDown = () => !disabled && setIsPressed(true);
const handleMouseUp = () => !disabled && !isActive && setIsPressed(false);
const handleMouseLeave = () => !disabled && !isActive && setIsPressed(false);
return (
<button
className={`
${baseStyles} ${sizeStyles[size]} ${roundedStyles} ${interactionStyles} ${variantStyles[variant]}
${className}
`}
style={styleValue}
onMouseDown={handleMouseDown}
onMouseUp={handleMouseUp}
onMouseLeave={handleMouseLeave}
onTouchStart={handleMouseDown}
onTouchEnd={handleMouseUp}
onClick={onClick}
disabled={disabled}
{...props}
>
{icon && <span className={`${children ? 'mr-2' : ''}`}>{icon}</span>}
{children}
</button>
);
};
export const NeuIconButton: React.FC<ButtonProps> = (props) => (
<NeuButton {...props} isRound={true} />
);