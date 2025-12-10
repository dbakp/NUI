#!/usr/bin/env python3
"""
Second pass script to add style={neuStyle('...')} props to elements
that previously had shadow-neu-* classes.
"""

import os
import re
from pathlib import Path
from typing import List, Dict, Tuple

# Map of shadow patterns to their neuStyle equivalents
SHADOW_PATTERNS = {
    # Common patterns where we can safely add style props
    r'className=(["\'{`][^"\'`]*?)(\s*)(["\'{`])(\s*)(>)': 'simple_closing',  # Simple case: className="..." >
}

def find_elements_needing_styles(content: str) -> List[Dict]:
    """
    Find elements that likely need style props added based on common patterns.
    This looks for elements with specific className patterns commonly used with shadows.
    """
    elements_to_style = []

    # Pattern 1: Elements with rounded classes and bg-gray-100 (common neu base)
    # These likely had shadow-neu-flat or shadow-neu-convex
    pattern1 = r'<(\w+)([^>]*?className=(?:"[^"]*?rounded[^"]*?bg-gray-100[^"]*?"|{`[^`]*?rounded[^`]*?bg-gray-100[^`]*?`})[^>]*?)(>)'

    for match in re.finditer(pattern1, content):
        tag = match.group(1)
        attrs = match.group(2)
        closing = match.group(3)

        # Check if already has style prop
        if 'style=' not in attrs and 'style =' not in attrs:
            elements_to_style.append({
                'type': 'bg-gray-100-rounded',
                'match': match,
                'tag': tag,
                'attrs': attrs,
                'pos': match.start(),
                'end': match.end()
            })

    return elements_to_style

def add_style_props_intelligently(content: str) -> str:
    """
    Add style props intelligently based on className patterns.
    This is a heuristic approach that handles common cases.
    """

    # For each line, if it has bg-gray-100 and rounded, and no style=, likely needs neuStyle

    lines = content.split('\n')
    modified_lines = []

    for i, line in enumerate(lines):
        modified_line = line

        # Check if line contains bg-gray-100 and needs styling
        if 'bg-gray-100' in line and 'className=' in line:
            # Check if already has style prop
            if 'style=' not in line and 'style =' not in line:
                # Determine which neuStyle to use based on context
                style_type = 'flat'  # default

                # Look at previous/next lines for context
                context = '\n'.join(lines[max(0, i-2):min(len(lines), i+3)])

                if 'button' in line.lower() or 'button' in context.lower():
                    style_type = 'convex'
                elif 'input' in line.lower() or 'textarea' in line.lower():
                    style_type = 'pressed'
                elif 'card' in context.lower():
                    style_type = 'flat'

                # Try to add style prop after className
                # Pattern: find the closing > of the tag
                if '>' in modified_line:
                    # Find className end
                    className_match = re.search(r'className=(["\'{`])([^"\'{`]*?)\1', modified_line)
                    if className_match:
                        # Insert style prop after className
                        insert_pos = className_match.end()

                        # Check if there's already a closing > nearby
                        rest = modified_line[insert_pos:]
                        closing_match = re.search(r'(\s*)([^>]*?)(>)', rest)

                        if closing_match and 'style' not in closing_match.group(2):
                            # Add style prop before the >
                            before = modified_line[:insert_pos]
                            middle = closing_match.group(2)
                            after = rest[closing_match.end():]

                            # Construct the style prop
                            modified_line = f"{before} style={{neuStyle('{style_type}')}}{middle}>{after}"

        modified_lines.append(modified_line)

    return '\n'.join(modified_lines)

def smart_style_addition(content: str) -> str:
    """
    Smart style addition based on element types and className patterns.
    """

    # Strategy: For each element with bg-gray-100, add appropriate style

    # Pattern: Match opening tags with className containing bg-gray-100
    pattern = r'(<(\w+)\s+[^>]*?className=(?:"[^"]*?bg-gray-100[^"]*?"|{`[^`]*?bg-gray-100[^`]*?`})[^>]*?)(>)'

    def add_style(match):
        opening = match.group(1)
        tag = match.group(2)
        closing = match.group(3)

        # Skip if already has style
        if 'style=' in opening or 'style =' in opening:
            return match.group(0)

        # Determine style type based on tag and classes
        style_type = 'flat'  # default

        if 'button' in tag.lower() or 'button' in opening.lower():
            if 'rounded-full' in opening:
                style_type = 'convex'
            elif 'rounded' in opening:
                style_type = 'flat'
        elif 'input' in tag.lower() or 'textarea' in tag.lower():
            style_type = 'pressed'
        elif 'rounded-full' in opening and 'w-' in opening and 'h-' in opening:
            # Likely a circular button or element
            style_type = 'convex'
        elif 'card' in opening.lower() or 'rounded-' in opening:
            style_type = 'flat'

        # Add style prop
        return f"{opening} style={{neuStyle('{style_type}')}}{closing}"

    content = re.sub(pattern, add_style, content)

    return content

def process_file(file_path: Path) -> bool:
    """Process a single file to add style props"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        original_content = content

        # Only process files that have neuStyle import
        if 'neuStyle' not in content:
            return False

        # Add style props
        content = smart_style_addition(content)

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

    print(f"Adding style props to component files...")
    print("=" * 60)

    updated_count = 0
    for file_path in tsx_files:
        if process_file(file_path):
            print(f"✓ Added styles: {file_path.name}")
            updated_count += 1
        else:
            print(f"  Skipped: {file_path.name}")

    print("=" * 60)
    print(f"\nStyle addition complete!")
    print(f"Updated {updated_count} files with style props")

if __name__ == '__main__':
    main()
