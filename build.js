const fs = require('fs');
const path = require('path');

// Create dist directory if it doesn't exist
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

// Copy HTML files
const htmlFiles = fs.readdirSync('.').filter(file => file.endsWith('.html'));
htmlFiles.forEach(file => {
  fs.copyFileSync(file, path.join('dist', file));
  console.log(`Copied ${file} to dist/`);
});

// Copy CSS files
const cssFiles = fs.readdirSync('.').filter(file => file.endsWith('.css'));
cssFiles.forEach(file => {
  fs.copyFileSync(file, path.join('dist', file));
  console.log(`Copied ${file} to dist/`);
});

// Copy JS files (if any in root)
const jsFiles = fs.readdirSync('.').filter(file => file.endsWith('.js') && file !== 'build.js');
jsFiles.forEach(file => {
  fs.copyFileSync(file, path.join('dist', file));
  console.log(`Copied ${file} to dist/`);
});

console.log('Build completed successfully!');
console.log('Contents of dist:');
fs.readdirSync('dist').forEach(file => {
  const stats = fs.statSync(path.join('dist', file));
  console.log(`  ${file} (${stats.size} bytes)`);
});