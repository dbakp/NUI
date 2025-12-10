/**
 * Neumorphic Design System Utilities
 *
 * Theme-aware styles that adapt to light/dark mode using CSS variables.
 */

/**
 * Theme-aware neumorphic shadows using CSS variables
 * Automatically adapt based on [data-theme] attribute
 */
export const neuShadows = {
  flat: 'var(--shadow-flat, 5px 5px 10px #BABECC, -5px -5px 10px #FFFFFF)',
  pressed: 'var(--shadow-pressed, inset 5px 5px 10px #BABECC, inset -5px -5px 10px #FFFFFF)',
  pressedSm: 'var(--shadow-pressed-sm, inset 2px 2px 5px #BABECC, inset -2px -2px 5px #FFFFFF)',
  icon: 'var(--shadow-icon, 3px 3px 6px #BABECC, -3px -3px 6px #FFFFFF)',
  convex: 'var(--shadow-convex, 6px 6px 12px #BABECC, -6px -6px 12px #FFFFFF)',
  concave: 'var(--shadow-concave, inset 6px 6px 12px #BABECC, inset -6px -6px 12px #FFFFFF)',
};

/**
 * Helper to create inline style object with neumorphic shadow and background
 */
export const neuStyle = (shadowType: keyof typeof neuShadows, additionalStyles?: React.CSSProperties): React.CSSProperties => ({
  boxShadow: neuShadows[shadowType],
  backgroundColor: 'var(--neu-base, #EBECF0)',
  ...additionalStyles,
});
