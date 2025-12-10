import React from 'react';
import { ReviewCardProps } from '../types';
import { NeuRating } from './NeuRating';
import { NeuAvatar } from './NeuAvatar';
import { neuStyle } from '../neu-styles';
export const NeuReviewCard: React.FC<ReviewCardProps> = ({ author, avatar, rating, date, content, className = '' }) => {
return (
<div className={`
p-6 rounded-3xl bg-gray-100 border border-white/20
flex flex-col gap-4 ${className}
`} style={neuStyle('flat')}>
<div className="flex justify-between items-start">
<div className="flex items-center gap-3">
<NeuAvatar src={avatar} fallback={author[0]} size="md" />
<div>
<h4 className="font-bold text-gray-800">{author}</h4>
<span className="text-xs text-gray-400 font-semibold">{date}</span>
</div>
</div>
<div className="p-2 rounded-xl" style={neuStyle('flat')}>
<NeuRating value={rating} readOnly className="!gap-1" />
</div>
</div>
<div className="relative">
<span className="absolute -top-2 -left-2 text-4xl text-gray-300 font-serif opacity-50">"</span>
<p className="text-gray-600 leading-relaxed italic relative z-10 px-2">
{content}
</p>
</div>
</div>
);
};