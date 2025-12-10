/**
 * Neumorphic Design System Utilities
 *
 * This file provides standalone neumorphic styles that don't require
 * custom Tailwind configuration. Use these for fully portable components.
 */

export const neuColors = {
  base: '#EBECF0',
  text: '#59657F',
  accent: '#6C63FF',
  success: '#10B981',
  warning: '#F59E0B',
  danger: '#EF4444',
};

export const neuShadows = {
  flat: '5px 5px 10px #BABECC, -5px -5px 10px #FFFFFF',
  pressed: 'inset 5px 5px 10px #BABECC, inset -5px -5px 10px #FFFFFF',
  pressedSm: 'inset 2px 2px 5px #BABECC, inset -2px -2px 5px #FFFFFF',
  icon: '3px 3px 6px #BABECC, -3px -3px 6px #FFFFFF',
  convex: '6px 6px 12px #BABECC, -6px -6px 12px #FFFFFF',
  concave: 'inset 6px 6px 12px #BABECC, inset -6px -6px 12px #FFFFFF',
};

/**
 * Mapping from Tailwind shadow classes to inline styles
 */
export const shadowMap: Record<string, string> = {
  'shadow-neu-flat': neuShadows.flat,
  'shadow-neu-pressed': neuShadows.pressed,
  'shadow-neu-pressed-sm': neuShadows.pressedSm,
  'shadow-neu-icon': neuShadows.icon,
  'shadow-neu-convex': neuShadows.convex,
  'shadow-neu-concave': neuShadows.concave,
};

/**
 * Mapping from Tailwind color classes to standard colors
 */
export const colorMap: Record<string, string> = {
  'bg-neu-base': 'bg-gray-100',
  'text-neu-text': 'text-gray-600',
  'text-neu-accent': 'text-indigo-500',
  'bg-neu-accent': 'bg-indigo-500',
  'text-neu-success': 'text-emerald-500',
  'bg-neu-success': 'bg-emerald-500',
  'text-neu-warning': 'text-amber-500',
  'bg-neu-warning': 'bg-amber-500',
  'text-neu-danger': 'text-red-500',
  'bg-neu-danger': 'bg-red-500',
};

/**
 * Helper to create inline style object with neumorphic shadow
 */
export const neuStyle = (shadowType: keyof typeof neuShadows, additionalStyles?: React.CSSProperties): React.CSSProperties => ({
  boxShadow: neuShadows[shadowType],
  ...additionalStyles,
});
