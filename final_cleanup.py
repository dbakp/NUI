#!/usr/bin/env python3
"""
Final cleanup script to remove ALL remaining neu- class references.
"""

import re
from pathlib import Path

# Additional patterns that may have been missed
ADDITIONAL_REPLACEMENTS = {
    'border-neu-base': 'border-gray-100',
    'border-neu-accent': 'border-indigo-500',
    'border-neu-success': 'border-emerald-500',
    'border-neu-warning': 'border-amber-500',
    'border-neu-danger': 'border-red-500',
    'ring-neu-base': 'ring-gray-100',
    'ring-neu-accent': 'ring-indigo-500',
    'ring-neu-success': 'ring-emerald-500',
    'ring-neu-warning': 'ring-amber-500',
    'ring-neu-danger': 'ring-red-500',
    'focus:ring-neu-shadow-dark/10': 'focus:ring-indigo-500/10',
    'hover:shadow-neu-convex': '',
    'hover:shadow-neu-pressed': '',
    'active:shadow-neu-pressed': '',
    'shadow-neu-flat': '',
    'shadow-neu-pressed': '',
    'shadow-neu-pressed-sm': '',
    'shadow-neu-icon': '',
    'shadow-neu-convex': '',
    'shadow-neu-concave': '',
}

def cleanup_file(file_path: Path) -> bool:
    """Remove all remaining neu- class references"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        original_content = content

        # Apply all remaining replacements
        for old_class, new_class in ADDITIONAL_REPLACEMENTS.items():
            if old_class in content:
                content = content.replace(old_class, new_class)

        # Clean up any double spaces that may have been created
        content = re.sub(r'(\s)\s+', r'\1', content)

        # Clean up empty classNames
        content = re.sub(r'className=(["\'{`])\s+', r'className=\1', content)

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

    tsx_files = sorted(components_dir.glob('*.tsx'))

    print(f"Final cleanup of {len(tsx_files)} component files...")
    print("=" * 60)

    updated_count = 0
    for file_path in tsx_files:
        if cleanup_file(file_path):
            print(f"✓ Cleaned: {file_path.name}")
            updated_count += 1

    print("=" * 60)
    print(f"\nFinal cleanup complete!")
    print(f"Updated {updated_count} files")

    # Check for any remaining neu- references
    print("\nChecking for remaining neu- references...")
    remaining = []
    for file_path in tsx_files:
        with open(file_path, 'r') as f:
            content = f.read()
            if re.search(r'\bshadow-neu-|border-neu-|ring-neu-|bg-neu-|text-neu-', content):
                # Find which patterns
                matches = re.findall(r'(\w+-neu-\w+(?:/\d+)?)', content)
                if matches:
                    remaining.append((file_path.name, set(matches)))

    if remaining:
        print(f"\n⚠ Found {len(remaining)} files with remaining neu- references:")
        for filename, patterns in remaining:
            print(f"  - {filename}: {', '.join(patterns)}")
    else:
        print("✓ No remaining neu- class references found!")

if __name__ == '__main__':
    main()
