/* eslint-disable */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

function fixAssetsInFile(filePath) {
  console.log(`🔍 Checking file: ${filePath}`);
  
  const content = readFileSync(filePath, 'utf-8');
  
  const fixedContent = content
    // Fix asset and build paths
    .replace(/="\/assets\//g, '="./assets/')
    .replace(/="\/build\//g, '="./build/')
    .replace(/src="\/assets\//g, 'src="./assets/')
    .replace(/href="\/assets\//g, 'href="./assets/')
    
    // Fix srcSet attributes (NEW)
    .replace(/srcSet="([^"]*)/g, (match, srcsetContent) => {
      const fixedSrcset = srcsetContent.replace(/\/assets\//g, './assets/');
      return `srcSet="${fixedSrcset}`;
    })
    .replace(/srcset="([^"]*)/g, (match, srcsetContent) => {
      const fixedSrcset = srcsetContent.replace(/\/assets\//g, './assets/');
      return `srcset="${fixedSrcset}`;
    })
    
    // Fix favicon paths
    .replace(/href="\/favicon\.svg"/g, 'href="./favicon.svg"')
    .replace(/href="\/favicon\.ico"/g, 'href="./favicon.ico"')
    .replace(/href="\/favicon\.png"/g, 'href="./favicon.png"')
    .replace(/href="\/favicon-32x32\.png"/g, 'href="./favicon-32x32.png"')
    .replace(/href="\/favicon-16x16\.png"/g, 'href="./favicon-16x16.png"')
    .replace(/href="\/apple-touch-icon\.png"/g, 'href="./apple-touch-icon.png"')
    .replace(/href="\/site\.webmanifest"/g, 'href="./site.webmanifest"')
    
    // Generic fallback for any remaining absolute paths to static assets
    .replace(/href="\/([^"]*\.(ico|png|svg|webmanifest))"/g, 'href="./$1"')
    .replace(/src="\/([^"]*\.(ico|png|svg|jpg|jpeg|webp))"/g, 'src="./$1"');
  
  if (content !== fixedContent) {
    writeFileSync(filePath, fixedContent);
    console.log(`✅ Fixed asset paths in: ${filePath}`);
  } else {
    console.log(`ℹ️  No changes needed in: ${filePath}`);
  }
  
  // Debug logging
  const absolutePaths = content.match(/="\/[^"]*"/g) || [];
  const srcSetPaths = content.match(/srcSet="[^"]*"/gi) || [];
  console.log(`📊 Found ${absolutePaths.length} absolute paths and ${srcSetPaths.length} srcSet attributes`);
}

function walkDir(dir) {
  try {
    const files = readdirSync(dir);
    
    for (const file of files) {
      const filePath = join(dir, file);
      const stat = statSync(filePath);
      
      if (stat.isDirectory()) {
        walkDir(filePath);
      } else if (file.endsWith('.html')) {
        fixAssetsInFile(filePath);
      }
    }
  } catch (error) {
    console.log(`❌ Error reading directory ${dir}: ${error.message}`);
  }
}

console.log('🚀 Starting asset path fixing...');
walkDir('dist');
console.log('🏁 Asset path fixing complete!');