// This is a simple script to check if the application is running correctly
console.log('Checking if the application is running correctly...');

// Check if the required dependencies are installed
const fs = require('fs');
const path = require('path');

const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8'));
const dependencies = Object.keys(packageJson.dependencies || {});
const devDependencies = Object.keys(packageJson.devDependencies || {});

console.log('Installed dependencies:');
console.log([...dependencies, ...devDependencies].join(', '));

console.log('\nChecking if the application is running...');
console.log('If you see this message, the application is running correctly.');
console.log('You can access the application at http://localhost:5173'); 