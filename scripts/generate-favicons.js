import favicons from "favicons";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Source SVG file path
const source = path.resolve(__dirname, "../public/favicon.svg");

// Configuration for favicon generation
const configuration = {
  path: "/", // Path where the files will be placed
  appName: "Aussietech Masters",
  appShortName: "Aussietech",
  appDescription: "Professional IT support services",
  background: "#253a62",
  theme_color: "#253a62",
  appleStatusBarStyle: "black-translucent",
  display: "standalone",
  start_url: "/",
  version: "1.0",
  logging: false,
  icons: {
    android: true,
    appleIcon: true,
    appleStartup: false,
    coast: false,
    favicons: true,
    firefox: false,
    windows: true,
    yandex: false,
  },
};

// Output directory
const outputDir = path.resolve(__dirname, "../public");

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Generate favicons
console.log("Generating favicons...");

favicons(source, configuration)
  .then((response) => {
    // Save files
    response.images.forEach((image) => {
      const filePath = path.join(outputDir, image.name);
      fs.writeFileSync(filePath, image.contents);
      console.log(`Generated: ${image.name}`);
    });

    response.files.forEach((file) => {
      const filePath = path.join(outputDir, file.name);
      fs.writeFileSync(filePath, file.contents);
      console.log(`Generated: ${file.name}`);
    });

    console.log("Favicon generation completed!");
  })
  .catch((error) => {
    console.error("Error generating favicons:", error);
  });
