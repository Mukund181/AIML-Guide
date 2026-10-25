#!/usr/bin/env python3
"""
AI/ML Complete Study Guide Build Script
Concatenates modular chapter HTML files in src/chapters/ into src/template.html
and generates the production-ready standalone index.html.
"""

import os
import glob
import time
import sys

# Ensure UTF-8 output on Windows consoles
if sys.platform == 'win32' and hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

def build():
    start_time = time.time()
    base_dir = os.path.dirname(os.path.abspath(__file__))
    template_path = os.path.join(base_dir, 'src', 'template.html')
    chapters_dir = os.path.join(base_dir, 'src', 'chapters')
    output_path = os.path.join(base_dir, 'index.html')

    if not os.path.exists(template_path):
        print(f"❌ Error: Template not found at {template_path}")
        return False

    with open(template_path, 'r', encoding='utf-8') as f:
        template = f.read()

    # Collect and sort all chapter files
    chapter_files = sorted(glob.glob(os.path.join(chapters_dir, '*.html')))
    if not chapter_files:
        print(f"❌ Error: No chapter HTML files found in {chapters_dir}")
        return False

    chapters_content = []
    for ch_path in chapter_files:
        with open(ch_path, 'r', encoding='utf-8') as ch_f:
            chapters_content.append(ch_f.read().strip())

    combined_chapters = "\n\n  ".join(chapters_content)

    placeholder = '<!-- CHAPTERS_PLACEHOLDER -->'
    if placeholder not in template:
        print(f"❌ Error: Placeholder '{placeholder}' not found in {template_path}")
        return False

    final_html = template.replace(placeholder, combined_chapters)

    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(final_html)

    elapsed_ms = (time.time() - start_time) * 1000
    size_kb = os.path.getsize(output_path) / 1024
    print(f"✅ Successfully built index.html ({len(chapter_files)} chapters, {size_kb:.1f} KB) in {elapsed_ms:.1f}ms")
    return True

if __name__ == '__main__':
    build()
