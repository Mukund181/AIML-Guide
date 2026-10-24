#!/usr/bin/env node
/**
 * AI/ML Complete Study Guide Watch Script (Node.js)
 * Watches src/ directory and auto-rebuilds index.html on file changes.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const srcDir = path.join(__dirname, 'src');

console.log('👀 Watching src/ for changes... Press Ctrl+C to stop.');

function triggerBuild() {
  try {
    const output = execSync('node build.js', { encoding: 'utf8' });
    process.stdout.write(output);
  } catch (err) {
    console.error('❌ Build failed:', err.message);
  }
}

// Initial build
triggerBuild();

let debounceTimer = null;
fs.watch(srcDir, { recursive: true }, (eventType, filename) => {
  if (!filename || !filename.endsWith('.html')) return;
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    console.log(`🔄 Detected change in ${filename}, rebuilding...`);
    triggerBuild();
  }, 100);
});
