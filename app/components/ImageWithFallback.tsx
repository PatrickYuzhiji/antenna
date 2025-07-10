"use client";

import React, { useState } from "react";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ImageWithFallback({
  src,
  alt,
  className,
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState<string>(src);

  // Generate a unique color-based placeholder if the image fails
  const generateColorPlaceholder = (): string => {
    // Create a hash from the alt text to generate a consistent color
    let hash = 0;
    for (let i = 0; i < alt.length; i++) {
      hash = alt.charCodeAt(i) + ((hash << 5) - hash);
    }

    // Convert hash to a color
    const color = `hsl(${hash % 360}, 70%, 80%)`;
    const textColor = "#2A2559"; // Dark blue for text

    // Create a simple SVG placeholder with the first letter of the alt text
    const firstLetter = alt.charAt(0).toUpperCase();

    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100">
        <rect width="100" height="100" fill="${color}" />
        <text x="50" y="50" font-family="Arial, sans-serif" font-size="40" text-anchor="middle" dominant-baseline="middle" fill="${textColor}">${firstLetter}</text>
        <text x="50" y="75" font-family="Arial, sans-serif" font-size="10" text-anchor="middle" dominant-baseline="middle" fill="${textColor}">${alt.slice(
      0,
      15
    )}${alt.length > 15 ? "..." : ""}</text>
      </svg>
    `;

    // Convert SVG to a data URL
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={() => {
        // If the image fails to load, generate a color placeholder
        setImgSrc(generateColorPlaceholder());
      }}
    />
  );
}
