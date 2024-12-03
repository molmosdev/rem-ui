const fs = require("fs");
const { exec } = require("child_process");
const path = require("path");
const semver = require("semver");

// Path to the package.json of the realm-ui-angular project
const packageJsonPath = path.join(
  __dirname,
  "projects",
  "realm-ui-angular",
  "package.json"
);

// Read the package.json file
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

// Increment the version based on the type of release
const releaseType = process.argv[2] || "patch"; // default to 'patch' if no argument is provided
packageJson.version = semver.inc(packageJson.version, releaseType);

// Save the package.json file with the new version
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), "utf8");

// Execute ng build realm-ui-angular
exec("ng build realm-ui-angular", (err, stdout, stderr) => {
  if (err) {
    console.error(`Error executing ng build: ${stderr}`);
    process.exit(1);
  }
  console.log(stdout);

  // Change to the dist/realm-ui-angular directory and execute npm publish
  const distPath = path.join(__dirname, "dist", "realm-ui-angular");
  exec(`cd ${distPath} && npm publish`, (err, stdout, stderr) => {
    if (err) {
      console.error(`Error executing npm publish: ${stderr}`);
      process.exit(1);
    }
    console.log(stdout);
  });
});
