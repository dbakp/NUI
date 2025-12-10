#!/usr/bin/env python3
"""
Comprehensive script to update all component files for React/Tailwind portability.
Handles color classes and shadow style replacements systematically.
"""

import os
import re
from pathlib import Path
from typing import Dict, List, Tuple

# Color class replacements
COLOR_MAP = {
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

# Shadow class to neuStyle type mapping
SHADOW_MAP = {
    'shadow-neu-flat': 'flat',
    'shadow-neu-pressed': 'pressed',
    'shadow-neu-pressed-sm': 'pressedSm',
    'shadow-neu-icon': 'icon',
    'shadow-neu-convex': 'convex',
    'shadow-neu-concave': 'concave',
}

def replace_colors(content: str) -> str:
    """Replace all neu color classes with standard Tailwind classes"""
    for old_class, new_class in COLOR_MAP.items():
        content = content.replace(old_class, new_class)
    return content

def needs_neu_style_import(content: str) -> bool:
    """Check if file uses any shadow classes"""
    return any(shadow in content for shadow in SHADOW_MAP.keys())

def has_neu_style_import(content: str) -> bool:
    """Check if file already has neuStyle import"""
    return bool(re.search(r"import\s*{\s*neuStyle\s*}\s*from\s*['\"]\.\.\/neu-styles['\"]", content))

def add_neu_style_import(content: str) -> str:
    """Add neuStyle import after existing imports"""
    lines = content.split('\n')

    # Find the last import line
    last_import_idx = -1
    for i, line in enumerate(lines):
        if line.strip().startswith('import '):
            last_import_idx = i

    if last_import_idx >= 0:
        # Insert after last import
        lines.insert(last_import_idx + 1, "import { neuStyle } from '../neu-styles';")
    else:
        # No imports found, add at beginning (after any comments)
        insert_idx = 0
        for i, line in enumerate(lines):
            if line.strip() and not line.strip().startswith('//') and not line.strip().startswith('/*'):
                insert_idx = i
                break
        lines.insert(insert_idx, "import { neuStyle } from '../neu-styles';")

    return '\n'.join(lines)

def extract_element_info(content: str, pos: int) -> Tuple[int, int, str]:
    """Extract the opening tag of an element starting at position"""
    # Find the start of the tag
    tag_start = content.rfind('<', 0, pos + 100)
    if tag_start == -1:
        return -1, -1, ""

    # Find the end of the opening tag
    tag_end = content.find('>', pos)
    if tag_end == -1:
        # Look further ahead
        tag_end = content.find('>', pos, pos + 1000)

    if tag_end == -1:
        return -1, -1, ""

    return tag_start, tag_end + 1, content[tag_start:tag_end + 1]

def process_shadow_classes(content: str) -> str:
    """
    Process shadow classes by removing them from className and adding style props.
    This handles various patterns including conditional classes.
    """

    # Track all shadow class occurrences
    replacements = []

    for shadow_class, style_name in SHADOW_MAP.items():
        # Find all occurrences of this shadow class
        pattern = re.escape(shadow_class)

        for match in re.finditer(pattern, content):
            pos = match.start()

            # Get the element context
            tag_start, tag_end, tag_content = extract_element_info(content, pos)

            if tag_start == -1:
                continue

            # Check if this element already has a style prop
            has_style = 'style=' in tag_content or 'style =' in tag_content

            # Store replacement info
            replacements.append({
                'pos': pos,
                'shadow_class': shadow_class,
                'style_name': style_name,
                'tag_start': tag_start,
                'tag_end': tag_end,
                'tag_content': tag_content,
                'has_style': has_style
            })

    # Sort by position (descending) to replace from end to beginning
    replacements.sort(key=lambda x: x['pos'], reverse=True)

    # Process each replacement
    for repl in replacements:
        # Remove the shadow class from className
        content = content[:repl['pos']] + content[repl['pos'] + len(repl['shadow_class']):]

        # Clean up any double spaces in className
        content = re.sub(r'className=(["\'{`])(\s+)', r'className=\1', content)
        content = re.sub(r'(\s+)(["\'{`])\s*(className|style|[a-zA-Z])', r'\1\2\3', content)

    # Now add style props where needed
    # This is a simplified approach - for complex cases, manual review may be needed

    return content

def simple_shadow_removal(content: str) -> str:
    """Simple approach: remove all shadow classes, leaving style addition for manual work"""
    for shadow_class in SHADOW_MAP.keys():
        # Remove the shadow class, preserving spacing
        content = re.sub(r'\s+' + re.escape(shadow_class) + r'(?=\s|"|\'|`|})', '', content)

    # Clean up any resulting double spaces
    content = re.sub(r'(\s)\s+', r'\1', content)

    return content

def process_file(file_path: Path) -> bool:
    """Process a single component file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        original_content = content

        # Step 1: Replace color classes
        content = replace_colors(content)

        # Step 2: Add neuStyle import if needed
        if needs_neu_style_import(original_content) and not has_neu_style_import(content):
            content = add_neu_style_import(content)

        # Step 3: Remove shadow classes (style props will be added manually or in next pass)
        content = simple_shadow_removal(content)

        # Write back if changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True

        return False

    except Exception as e:
        print(f"Error processing {file_path.name}: {e}")
        return False

def main():
    """Process all component files"""
    components_dir = Path('/tmp/cc-agent/61348278/project/components')

    if not components_dir.exists():
        print(f"Components directory not found: {components_dir}")
        return

    # Get all .tsx files
    tsx_files = sorted(components_dir.glob('*.tsx'))

    print(f"Processing {len(tsx_files)} component files...")
    print("=" * 60)

    updated_count = 0
    for file_path in tsx_files:
        if process_file(file_path):
            print(f"✓ Updated: {file_path.name}")
            updated_count += 1
        else:
            print(f"  Skipped: {file_path.name} (no changes)")

    print("=" * 60)
    print(f"\nProcessing complete!")
    print(f"Updated {updated_count} out of {len(tsx_files)} files")
    print(f"\nNote: Shadow classes have been removed from classNames.")
    print(f"The neuStyle import has been added where needed.")
    print(f"Style props with neuStyle() calls need to be added manually.")

if __name__ == '__main__':
    main()
