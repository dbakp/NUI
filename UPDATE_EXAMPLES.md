# Component Update Examples

## Example 1: Simple Component (NeuCard)

### Before:
```tsx
<div className={`
    bg-neu-base rounded-[2.5rem] shadow-neu-convex 
    p-8 transition-all duration-300 border border-white/20
    ${className}
`}>
```

### After:
```tsx
import { neuStyle } from '../neu-styles';

<div className={`
    bg-gray-100 rounded-[2.5rem] 
    p-8 transition-all duration-300 border border-white/20
    ${className}
`} style={neuStyle('flat')}>
```

## Example 2: Complex Component with Conditional Styles (NeuButton)

### Before:
```tsx
if (disabled) {
  interactionStyles = 'shadow-neu-flat bg-neu-base border border-white/40 opacity-50 cursor-not-allowed';
} else if (isPressed || isActive) {
  interactionStyles = 'shadow-neu-pressed text-neu-accent cursor-pointer';
} else {
  interactionStyles = 'shadow-neu-convex hover:translate-y-[-2px] active:shadow-neu-pressed active:translate-y-0 bg-neu-base border border-white/40 cursor-pointer';
}
```

### After:
```tsx
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

// Later in the JSX:
<button style={styleValue} ...>
```

## Example 3: Component with Multiple Shadow Elements (NeuAccordion)

### Before:
```tsx
<div key={item.id} className="rounded-[2rem] overflow-hidden bg-neu-base shadow-neu-flat border border-white/20">
  <div className={`
    w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300
    ${isOpen ? 'shadow-neu-pressed bg-neu-base text-neu-accent transform rotate-180' : 'shadow-neu-convex bg-neu-base text-gray-500'}
  `}>
```

### After:
```tsx
import { neuStyle } from '../neu-styles';

<div key={item.id} className="rounded-[2rem] overflow-hidden bg-gray-100 border border-white/20" style={neuStyle('flat')}>
  <div className={`
    w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300
    ${isOpen ? 'bg-gray-100 text-indigo-500 transform rotate-180' : 'bg-gray-100 text-gray-500'}
  `}
  style={isOpen ? neuStyle('pressed') : neuStyle('convex')}>
```

## Example 4: Input Component with Pressed Shadow (NeuInput)

### Before:
```tsx
<div className="relative group">
  <div className={`
    absolute inset-0 rounded-xl shadow-neu-pressed pointer-events-none transition-shadow duration-300
  `} />
```

### After:
```tsx
import { neuStyle } from '../neu-styles';

<div className="relative group">
  <div className={`
    absolute inset-0 rounded-xl bg-gray-100 pointer-events-none transition-shadow duration-300
  `} style={neuStyle('pressed')} />
```

## Key Patterns

### 1. Import Addition
All components using neumorphic shadows now import the helper:
```tsx
import { neuStyle } from '../neu-styles';
```

### 2. Color Replacements
- `bg-neu-base` → `bg-gray-100`
- `text-neu-accent` → `text-indigo-500`
- `text-neu-success` → `text-emerald-500`
- `text-neu-warning` → `text-amber-500`
- `text-neu-danger` → `text-red-500`

### 3. Shadow Replacements
- Remove shadow class from `className`
- Add `style={neuStyle('shadowType')}` prop
- For conditional shadows: `style={condition ? neuStyle('pressed') : neuStyle('flat')}`

### 4. Merging with Existing Styles
If an element already has inline styles:
```tsx
style={{...neuStyle('flat'), ...existingStyles}}
```

## Benefits

1. **No Custom Tailwind Config Required**: Components work in any Tailwind project
2. **Portable**: Copy-paste components between projects without configuration
3. **Standard Colors**: Use Tailwind's color palette for consistency
4. **Maintainable**: Neumorphic effects centralized in one utility file
5. **Flexible**: Easy to customize by modifying the neuStyle function

## neuStyle Function Reference

```typescript
neuStyle('flat')       // Standard raised surface
neuStyle('pressed')    // Pressed/inset surface
neuStyle('pressedSm')  // Small pressed surface
neuStyle('icon')       // Icon button shadow
neuStyle('convex')     // Prominent raised surface
neuStyle('concave')    // Deeply inset surface
```
