# Color Migration Tool

This tool helps you automatically update color values across your NextJS project. It's designed to search through all TSX files in your app directory and replace specified hex color values with new ones.

## How It Works

The tool consists of three main scripts:

1. `setup-colors.js` - Installs necessary dependencies
2. `update-colors.js` - Updates colors based on mapping in config file
3. `find-colors.js` - Analyzes your codebase to find all currently used colors

## Getting Started

### 1. Setup

Run the setup script to install required dependencies:

```bash
npm run setup-colors
```

This will install the necessary packages and prepare your environment.

### 2. Find Existing Colors (Optional)

If you want to analyze your codebase to find which colors are currently used, run:

```bash
npm run find-colors
```

This will output a list of all hex colors used in your TSX files, including:

- Most frequently used colors
- Colors used in each file
- Total number of unique colors

Use this information to decide which colors you want to replace.

### 3. Configure Color Mappings

Edit the `scripts/color-config.js` file to define your color mappings:

```javascript
export const colorMappings = {
  "#253a62": "#2C3E50", // old-color: new-color
  "#10B981": "#F39C12",
  // Add more mappings as needed
};
```

### 4. Run the Update

After configuring your mappings, run:

```bash
npm run update-colors
```

This will:

1. Scan all TSX files in your app directory
2. Replace color values according to your mappings
3. Output a list of modified files

## Supported Color Formats

The tool can find and replace colors in these formats:

- `[#253a62]` - Hex in square brackets (common in Tailwind classes)
- `"#253a62"` - Hex in double quotes
- `'#253a62'` - Hex in single quotes
- `color: "#253a62"` - Hex in style properties with double quotes
- `color: '#253a62'` - Hex in style properties with single quotes

## Additional Notes

- The tool only modifies files that contain the specified colors
- It creates backups before making changes
- You can run the tool multiple times if needed

## Troubleshooting

If you encounter any issues:

1. Check that your color mappings are correctly defined
2. Make sure your files are formatted as expected
3. Try running `npm run find-colors` to verify color usage

## Extending the Tool

If you need to support additional color formats, edit the RegExp patterns in:

- `scripts/update-colors.js`
- `scripts/find-colors.js`
