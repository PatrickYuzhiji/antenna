import fs from "fs";
import { globSync } from "glob";

// Regular expressions to find hex colors in different formats
const hexColorPatterns = [
  /\[(#[0-9A-Fa-f]{3,8})\]/g, // [#123456]
  /"(#[0-9A-Fa-f]{3,8})"/g, // "#123456"
  /'(#[0-9A-Fa-f]{3,8})'/g, // '#123456'
  /color: "(#[0-9A-Fa-f]{3,8})"/g, // color: "#123456"
  /color: '(#[0-9A-Fa-f]{3,8})'/g, // color: '#123456'
];

// Function to recursively get all TSX files
const getTsxFiles = () => {
  return globSync("app/**/*.tsx", { ignore: "node_modules/**" });
};

// Function to find colors in a file
const findColorsInFile = (filePath) => {
  try {
    const content = fs.readFileSync(filePath, "utf8");
    const colors = new Set();

    // Find all color occurrences
    hexColorPatterns.forEach((pattern) => {
      const matches = [...content.matchAll(pattern)];
      matches.forEach((match) => {
        colors.add(match[1]);
      });
    });

    return Array.from(colors);
  } catch (error) {
    console.error(`❌ Error analyzing colors in ${filePath}:`, error.message);
    return [];
  }
};

// Main function
const findAllColors = () => {
  console.log("🔍 Searching for TSX files...");
  const files = getTsxFiles();
  console.log(`📁 Found ${files.length} TSX files to analyze.`);

  const colorOccurrences = {};
  const colorByFile = {};

  files.forEach((file) => {
    const colors = findColorsInFile(file);

    if (colors.length > 0) {
      colorByFile[file] = colors;

      colors.forEach((color) => {
        if (!colorOccurrences[color]) {
          colorOccurrences[color] = 1;
        } else {
          colorOccurrences[color]++;
        }
      });
    }
  });

  // Sort colors by occurrence count (most frequent first)
  const sortedColors = Object.entries(colorOccurrences)
    .sort((a, b) => b[1] - a[1])
    .map(([color, count]) => ({ color, count }));

  console.log("\n🎨 Color Analysis Results:\n");
  console.log("Most frequently used colors:");
  sortedColors.forEach(({ color, count }) => {
    console.log(`  ${color}: ${count} occurrences`);
  });

  console.log("\nColor usage by file:");
  Object.entries(colorByFile).forEach(([file, colors]) => {
    console.log(`\n  ${file}:`);
    colors.forEach((color) => {
      console.log(`    - ${color}`);
    });
  });

  console.log("\n✅ Color analysis complete!");
  console.log(
    `Found ${sortedColors.length} unique colors across ${files.length} files.`
  );
};

findAllColors();
