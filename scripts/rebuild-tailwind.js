import { execSync } from "child_process";
import fs from "fs";
import path from "path";

console.log("🔄 Rebuilding Tailwind CSS configuration...");

// 1. Remove any .next cache
try {
  console.log("🗑️  Removing .next cache...");
  execSync("rm -rf .next", { stdio: "inherit" });
} catch (error) {
  console.error("⚠️  Warning: Error removing .next directory:", error.message);
}

// 2. Touch the tailwind.config.js file to ensure it's reloaded
try {
  console.log("🔄 Updating tailwind.config.js timestamp...");
  const configPath = path.resolve("./tailwind.config.js");
  const now = new Date();
  fs.utimesSync(configPath, now, now);
} catch (error) {
  console.error(
    "⚠️  Warning: Error updating tailwind.config.js:",
    error.message
  );
}

// 3. Rebuild the project
try {
  console.log("🏗️  Rebuilding the project...");
  execSync("npm run build", { stdio: "inherit" });
  console.log("✅ Build completed successfully!");
} catch (error) {
  console.error("❌ Error during build:", error.message);
  process.exit(1);
}

console.log("\n🎉 Tailwind CSS has been rebuilt!");
console.log('Now run "npm run dev" to start the development server.');
