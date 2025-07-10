import { execSync } from "child_process";
import { existsSync, mkdirSync } from "fs";
import path from "path";

// Ensure the scripts directory exists
const scriptsDir = path.resolve("./scripts");
if (!existsSync(scriptsDir)) {
  mkdirSync(scriptsDir, { recursive: true });
}

console.log("📦 Installing required dependencies...");

try {
  // Install glob for file pattern matching
  execSync("npm install --save-dev glob", { stdio: "inherit" });

  console.log("✅ Dependencies installed successfully!");
  console.log("\n🔄 Color update system is ready!");
  console.log("\nTo update colors in your project, run:");
  console.log("  npm run update-colors");
  console.log("\nYou can modify the color mappings in:");
  console.log("  scripts/color-config.js");
} catch (error) {
  console.error("❌ Error installing dependencies:", error.message);
  process.exit(1);
}
