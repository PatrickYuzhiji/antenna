import fs from "fs";
import { globSync } from "glob";

// Color mappings from the configuration
import { colorMappings } from "./color-config.js";

// Function to recursively get all TSX files
const getTsxFiles = () => {
  return globSync("app/**/*.tsx", { ignore: "node_modules/**" });
};

// Function to update colors in a file
const updateColorsInFile = (filePath) => {
  try {
    const content = fs.readFileSync(filePath, "utf8");
    let updatedContent = content;
    let hasChanged = false;

    // Replace all color occurrences
    Object.entries(colorMappings).forEach(([oldColor, newColor]) => {
      // Create regex patterns to match colors in different contexts
      const patterns = [
        new RegExp(`\\[${oldColor}\\]`, "g"), // Match [#123456]
        new RegExp(`"${oldColor}"`, "g"), // Match "#123456"
        new RegExp(`'${oldColor}'`, "g"), // Match '#123456'
        new RegExp(`color: "${oldColor}"`, "g"), // Match color: "#123456"
        new RegExp(`color: '${oldColor}'`, "g"), // Match color: '#123456'
      ];

      patterns.forEach((pattern) => {
        const replacement = pattern.source.includes("\\[")
          ? `[${newColor}]`
          : pattern.source.includes("color:")
            ? pattern.source.includes('"')
              ? `color: "${newColor}"`
              : `color: '${newColor}'`
            : pattern.source.includes('"')
              ? `"${newColor}"`
              : `'${newColor}'`;

        if (pattern.test(updatedContent)) {
          updatedContent = updatedContent.replace(pattern, replacement);
          hasChanged = true;
        }
      });
    });

    // Only write to file if changes were made
    if (hasChanged) {
      // Create a backup before modifying
      const backupPath = `${filePath}.bak`;
      fs.writeFileSync(backupPath, content, "utf8");

      // Write the updated content
      fs.writeFileSync(filePath, updatedContent, "utf8");
      console.log(`✅ Updated colors in: ${filePath}`);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`❌ Error updating colors in ${filePath}:`, error.message);
    return false;
  }
};

// Main function
const updateAllColors = () => {
  console.log("🔍 Searching for TSX files...");
  const files = getTsxFiles();
  console.log(`📁 Found ${files.length} TSX files to process.`);

  let updatedFilesCount = 0;

  files.forEach((file) => {
    const updated = updateColorsInFile(file);
    if (updated) updatedFilesCount++;
  });

  console.log(
    `\n🎉 Color migration complete! Updated ${updatedFilesCount} files.`
  );
  console.log(`\nColor mappings applied:`);
  Object.entries(colorMappings).forEach(([oldColor, newColor]) => {
    console.log(`  ${oldColor} → ${newColor}`);
  });
};

updateAllColors();
