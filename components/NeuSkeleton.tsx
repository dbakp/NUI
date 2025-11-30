import React from 'react';
import { SkeletonProps } from '../types';

export const NeuSkeleton: React.FC<SkeletonProps> = ({ 
  className = '', 
  variant = 'rectangular', 
  width, 
  height 
}) => {
  const baseStyles = "animate-pulse bg-gray-300/50 shadow-neu-pressed-sm";
  
  const variantStyles = {
    text: "rounded-md h-4 w-full",
    circular: "rounded-full",
    rectangular: "rounded-xl"
  };

  const style = {
    width: width,
    height: height
  };

  return (
    <div 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      style={style}
    />
  );
};