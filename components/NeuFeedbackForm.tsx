import React from 'react';
import { FeedbackFormProps } from '../types';
import { NeuRating } from './NeuRating';
import { NeuButton } from './NeuButton';
import { MessageSquare } from 'lucide-react';

export const NeuFeedbackForm: React.FC<FeedbackFormProps> = ({ 
    rating, 
    tags, 
    selectedTags, 
    onRatingChange, 
    onTagsChange, 
    onSubmit, 
    className = '' 
}) => {
    
    const toggleTag = (tag: string) => {
        if (selectedTags.includes(tag)) {
            onTagsChange(selectedTags.filter(t => t !== tag));
        } else {
            onTagsChange([...selectedTags, tag]);
        }
    };

    return (
        <div className={`p-8 rounded-[2rem] bg-neu-base shadow-neu-convex border border-white/20 text-center ${className}`}>
            <h3 className="text-lg font-bold text-gray-800 mb-2">How was the meeting room?</h3>
            <p className="text-sm text-gray-500 mb-6">Your feedback helps us improve facility services.</p>

            <div className="flex justify-center mb-8">
                <div className="p-4 rounded-3xl bg-neu-base shadow-neu-pressed inline-flex">
                    <NeuRating value={rating} onChange={onRatingChange} max={5} className="gap-2" />
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
                {tags.map(tag => {
                    const isSelected = selectedTags.includes(tag);
                    return (
                        <button
                            key={tag}
                            onClick={() => toggleTag(tag)}
                            className={`
                                px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wide transition-all duration-200
                                ${isSelected 
                                    ? 'bg-neu-base shadow-neu-pressed text-neu-accent transform scale-95' 
                                    : 'bg-neu-base shadow-neu-flat hover:shadow-neu-convex text-gray-500 hover:text-gray-700'}
                            `}
                        >
                            {tag}
                        </button>
                    );
                })}
            </div>

            <NeuButton 
                onClick={onSubmit} 
                className="w-full" 
                variant="accent"
                icon={<MessageSquare size={16}/>}
            >
                Submit Feedback
            </NeuButton>
        </div>
    );
};