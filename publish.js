const fs = require('fs');
const { exec } = require('child_process');
const path = require('path');
const semver = require('semver');
const execSync = require('child_process').execSync;

// Path to the lib project's package.json
const packageJsonPath = path.join(__dirname, 'projects', 'lib', 'package.json');

// Read and update the version in package.json
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const releaseType = process.argv[2] || 'patch';
packageJson.version = semver.inc(packageJson.version, releaseType);
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf8');

// Execute npm run build for the lib project
execSync('npm run build:lib', { stdio: 'inherit' });

// Path to the lib project's output directory (dist)
const distPath = path.join(__dirname, 'dist', 'lib');

// Check if package.json is in dist, if not, copy it manually
const distPackageJsonPath = path.join(distPath, 'package.json');
if (!fs.existsSync(distPackageJsonPath)) {
  fs.copyFileSync(packageJsonPath, distPackageJsonPath);
}

// Publish to npm
exec(`cd ${distPath} && npm publish --access public`, (err, stdout, stderr) => {
  if (err) {
    console.error(`Error executing npm publish: ${stderr}`);
    process.exit(1);
  }
  console.log(stdout);
});
