import React, { useState } from 'react';
import { RatingProps } from '../types';
import { Star } from 'lucide-react';
import { neuStyle } from '../neu-styles';
export const NeuRating: React.FC<RatingProps> = ({ value, max = 5, onChange, readOnly = false,
className = '' }) => {
const [hoverValue, setHoverValue] = useState<number | null>(null);
return (
<div className={`flex items-center gap-2 ${className}`}>
{[...Array(max)].map((_, index) => {
const ratingValue = index + 1;
const isActive = ratingValue <= (hoverValue || value);
return (
<button
key={index}
type="button"
disabled={readOnly}
onClick={() => onChange && onChange(ratingValue)}
onMouseEnter={() => !readOnly && setHoverValue(ratingValue)}
onMouseLeave={() => !readOnly && setHoverValue(null)}
className={`
w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200
${readOnly ? 'cursor-default' : 'cursor-pointer hover:scale-110'}
${isActive ? ' text-yellow-400' : ' text-gray-300'}
`}
>
<Star size={20} fill={isActive ? "currentColor" : "none"} className="transition-colors duration-200"
/>
</button>
);
})}
</div>
);
};