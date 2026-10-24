#!/usr/bin/env python3
"""
AI/ML Complete Study Guide Watch Script
Monitors src/ directory for modifications and automatically rebuilds index.html.
Uses standard library only (no external dependencies required).
"""

import os
import time
import sys
from build import build

# Ensure UTF-8 output on Windows consoles
if sys.platform == 'win32' and hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

def get_mtimes(directory):
    mtimes = {}
    for root, _, files in os.walk(directory):
        for f in files:
            path = os.path.join(root, f)
            try:
                mtimes[path] = os.path.getmtime(path)
            except OSError:
                pass
    return mtimes

def watch():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    src_dir = os.path.join(base_dir, 'src')
    
    print("👀 Watching src/ for changes... Press Ctrl+C to stop.")
    build()
    
    last_mtimes = get_mtimes(src_dir)
    
    try:
        while True:
            time.sleep(0.5)
            current_mtimes = get_mtimes(src_dir)
            if current_mtimes != last_mtimes:
                print("🔄 Changes detected in src/, rebuilding...")
                build()
                last_mtimes = current_mtimes
    except KeyboardInterrupt:
        print("\n🛑 Stopped watch server.")

if __name__ == '__main__':
    watch()
