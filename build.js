#!/usr/bin/env node
/**
 * AI/ML Complete Study Guide Build Script (Node.js)
 * Concatenates modular chapter HTML files in src/chapters/ into src/template.html
 * and generates the production-ready standalone index.html.
 */

const fs = require('fs');
const path = require('path');

function build() {
  const startTime = Date.now();
  const templatePath = path.join(__dirname, 'src', 'template.html');
  const chaptersDir = path.join(__dirname, 'src', 'chapters');
  const outputPath = path.join(__dirname, 'index.html');

  if (!fs.existsSync(templatePath)) {
    console.error(`❌ Error: Template not found at ${templatePath}`);
    process.exit(1);
  }

  const template = fs.readFileSync(templatePath, 'utf8');

  // Read and sort all chapter HTML files
  const chapterFiles = fs.readdirSync(chaptersDir)
    .filter(file => file.endsWith('.html'))
    .sort();

  if (chapterFiles.length === 0) {
    console.error(`❌ Error: No chapter HTML files found in ${chaptersDir}`);
    process.exit(1);
  }

  const chaptersContent = chapterFiles.map(file => {
    return fs.readFileSync(path.join(chaptersDir, file), 'utf8').trim();
  });

  const combinedChapters = chaptersContent.join('\n\n  ');
  const placeholder = '<!-- CHAPTERS_PLACEHOLDER -->';

  if (!template.includes(placeholder)) {
    console.error(`❌ Error: Placeholder '${placeholder}' not found in ${templatePath}`);
    process.exit(1);
  }

  const finalHtml = template.replace(placeholder, combinedChapters);
  fs.writeFileSync(outputPath, finalHtml, 'utf8');

  const elapsed = Date.now() - startTime;
  const sizeKb = (fs.statSync(outputPath).size / 1024).toFixed(1);
  console.log(`✅ Successfully built index.html (${chapterFiles.length} chapters, ${sizeKb} KB) in ${elapsed}ms`);
}

build();
