#!/usr/bin/env python3
"""
Script to update all component files to be fully portable for React/Tailwind applications.
Makes systematic replacements for color classes and shadow classes.
"""

import os
import re
from pathlib import Path

# Color class replacements
COLOR_REPLACEMENTS = {
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
}

# Shadow class to style mapping
SHADOW_REPLACEMENTS = {
    'shadow-neu-flat': 'flat',
    'shadow-neu-pressed': 'pressed',
    'shadow-neu-pressed-sm': 'pressedSm',
    'shadow-neu-icon': 'icon',
    'shadow-neu-convex': 'convex',
    'shadow-neu-concave': 'concave',
}

def needs_neu_style_import(content):
    """Check if file uses any shadow classes that need neuStyle"""
    for shadow_class in SHADOW_REPLACEMENTS.keys():
        if shadow_class in content:
            return True
    return False

def has_neu_style_import(content):
    """Check if file already imports neuStyle"""
    return "import { neuStyle }" in content or "import {neuStyle}" in content

def add_neu_style_import(content):
    """Add neuStyle import at the top of the file"""
    lines = content.split('\n')

    # Find the last import statement
    last_import_idx = -1
    for i, line in enumerate(lines):
        if line.strip().startswith('import '):
            last_import_idx = i

    # Insert after the last import
    if last_import_idx >= 0:
        lines.insert(last_import_idx + 1, "import { neuStyle } from '../neu-styles';")
    else:
        # If no imports found, add at the beginning
        lines.insert(0, "import { neuStyle } from '../neu-styles';")

    return '\n'.join(lines)

def replace_color_classes(content):
    """Replace all color classes with standard Tailwind classes"""
    for old_class, new_class in COLOR_REPLACEMENTS.items():
        content = content.replace(old_class, new_class)
    return content

def replace_shadow_classes(content):
    """Replace shadow classes with inline styles"""

    # Pattern to match className with shadow classes
    # This handles various formats including template literals

    for shadow_class, style_name in SHADOW_REPLACEMENTS.items():
        # Find all occurrences of the shadow class
        if shadow_class not in content:
            continue

        # We need to be careful with replacements
        # Pattern 1: className="... shadow-neu-XXX ..."
        # Pattern 2: className={`... shadow-neu-XXX ...`}

        # Simple approach: remove the shadow class and add style prop
        # This is complex to do perfectly, so we'll use a simple regex approach

        # First, remove the shadow class from className
        content = re.sub(
            r'(\s)' + re.escape(shadow_class) + r'(\s|"|`|})',
            r'\1\2',
            content
        )

        # Clean up double spaces
        content = re.sub(r'(\s\s+)', ' ', content)

        # Now we need to find elements that had this shadow and add style prop
        # This is tricky without a proper parser, so we'll mark locations

    return content

def add_inline_styles(content):
    """
    Add inline styles for neumorphic shadows.
    This is a more sophisticated approach that tracks which elements need styles.
    """

    # Track if we need to process this file
    needs_processing = False
    for shadow_class in SHADOW_REPLACEMENTS.keys():
        if shadow_class in content:
            needs_processing = True
            break

    if not needs_processing:
        return content

    # For each shadow class, we need to:
    # 1. Remove it from className
    # 2. Add corresponding style prop

    # This is complex to do with regex alone, so we'll use a more manual approach
    # For each shadow class occurrence:

    for shadow_class, style_name in SHADOW_REPLACEMENTS.items():
        # Pattern to find elements with this shadow class
        # We'll look for the opening tag and handle style prop

        # Find all occurrences with context
        pattern = r'(<[a-zA-Z]+[^>]*?)(\s+className=(?:"[^"]*?' + re.escape(shadow_class) + r'[^"]*?"|{`[^`]*?' + re.escape(shadow_class) + r'[^`]*?`}))([^>]*?>)'

        def replace_with_style(match):
            before = match.group(1)
            class_attr = match.group(2)
            after = match.group(3)

            # Remove the shadow class from className
            new_class_attr = class_attr.replace(shadow_class, '').strip()
            # Clean up double spaces in className
            new_class_attr = re.sub(r'\s+', ' ', new_class_attr)

            # Check if element already has style prop
            if 'style=' in before or 'style=' in after:
                # Element has existing style, need to merge
                # This is complex, we'll use a merge approach
                style_merge = f'style={{...neuStyle(\'{style_name}\'), ...(/* existing style */)}}'
                # For simplicity, we'll add a comment for manual review
                new_class_attr += f' /* TODO: merge style={{neuStyle(\'{style_name}\')}} */'
            else:
                # Add new style prop
                style_prop = f' style={{neuStyle(\'{style_name}\')}}'
                after = style_prop + after

            return before + new_class_attr + after

        content = re.sub(pattern, replace_with_style, content, flags=re.DOTALL)

    return content

def process_file(file_path):
    """Process a single component file"""
    print(f"Processing: {file_path.name}")

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content

    # Step 1: Replace color classes
    content = replace_color_classes(content)

    # Step 2: Check if we need to add neuStyle import
    needs_import = needs_neu_style_import(original_content)
    has_import = has_neu_style_import(content)

    if needs_import and not has_import:
        content = add_neu_style_import(content)

    # Step 3: Replace shadow classes with inline styles
    # We'll use a simpler approach: remove shadow classes and add comments
    # Then manually handle the style additions

    for shadow_class, style_name in SHADOW_REPLACEMENTS.items():
        if shadow_class in content:
            # Remove shadow class and clean up
            content = re.sub(
                r'(\s)' + re.escape(shadow_class) + r'(?=\s|"|`|})',
                r'\1',
                content
            )

    # Clean up any double spaces in classNames
    content = re.sub(r'className=(["\'{`])\s+', r'className=\1', content)
    content = re.sub(r'\s+(["\'{`])(\s*)(className|style)', r'\1\2\3', content)

    # Write back if changed
    if content != original_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        return True

    return False

def main():
    """Main function to process all component files"""
    components_dir = Path('/tmp/cc-agent/61348278/project/components')

    if not components_dir.exists():
        print(f"Components directory not found: {components_dir}")
        return

    # Get all .tsx files
    tsx_files = sorted(components_dir.glob('*.tsx'))

    print(f"Found {len(tsx_files)} component files to process\n")

    updated_count = 0
    for file_path in tsx_files:
        if process_file(file_path):
            updated_count += 1

    print(f"\nProcessing complete!")
    print(f"Updated {updated_count} out of {len(tsx_files)} files")

if __name__ == '__main__':
    main()
