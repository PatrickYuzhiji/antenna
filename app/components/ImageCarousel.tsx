"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

type ImageCarouselProps = {
  images: string[];
};

const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Memoize the handleImageChange function to prevent recreations
  const handleImageChange = useCallback(
    (newIndex: number) => {
      if (isTransitioning) return; // Prevent rapid changes during transition

      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex(newIndex);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 700); // This should be less than the transition duration
      }, 300);
    },
    [isTransitioning]
  );

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const diffX = touchStartX.current - touchEndX.current;
    const threshold = 50; // Minimum swipe distance

    if (Math.abs(diffX) > threshold) {
      if (diffX > 0) {
        // Swiped left - go to next image
        handleImageChange((currentImageIndex + 1) % images.length);
      } else {
        // Swiped right - go to previous image
        handleImageChange(
          (currentImageIndex - 1 + images.length) % images.length
        );
      }
    }

    // Reset touch coordinates
    touchStartX.current = null;
    touchEndX.current = null;
  };

  useEffect(() => {
    // Preload images
    const preloadImages = async () => {
      try {
        const promises = images.map((src) => {
          return new Promise((resolve, reject) => {
            const img = new window.Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = reject;
          });
        });

        await Promise.all(promises);
        setImagesLoaded(true);
      } catch (error) {
        console.error("Failed to load one or more images", error);
        // Still mark as loaded so we can show something
        setImagesLoaded(true);
      }
    };

    preloadImages();

    const intervalId = setInterval(() => {
      if (!isTransitioning) {
        setCurrentImageIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % images.length;
          handleImageChange(nextIndex);
          return prevIndex; // Don't update state here, it's handled in handleImageChange
        });
      }
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [images, handleImageChange, isTransitioning]); // Added isTransitioning dependency

  // If images aren't loaded yet, show a placeholder
  if (!imagesLoaded) {
    return (
      <div className="relative rounded-lg overflow-hidden shadow-xl h-80 lg:h-96 bg-gray-700 animate-pulse">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white opacity-70">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative rounded-lg overflow-hidden shadow-xl h-80 lg:h-96"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="h-full w-full relative">
        {images.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentImageIndex
                ? "opacity-100 scale-100 translate-x-0"
                : index < currentImageIndex ||
                    (currentImageIndex === 0 && index === images.length - 1)
                  ? "opacity-0 scale-95 -translate-x-full"
                  : "opacity-0 scale-95 translate-x-full"
            }`}
            style={{
              zIndex: index === currentImageIndex ? 10 : 0,
              transform: `
                ${
                  index === currentImageIndex
                    ? "translate3d(0, 0, 0) scale(1)"
                    : index < currentImageIndex ||
                        (currentImageIndex === 0 && index === images.length - 1)
                      ? "translate3d(-5%, 0, 0) scale(0.95)"
                      : "translate3d(5%, 0, 0) scale(0.95)"
                }
              `,
              transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <Image
              src={image}
              alt={`Service image ${index + 1}`}
              fill
              priority={index === 0}
              quality={85}
              sizes="(max-width: 1024px) 100vw, 50vw"
              style={{
                objectFit: "cover",
                transition: "transform 1.2s ease-in-out",
              }}
              className={
                index === currentImageIndex
                  ? "motion-safe:animate-subtle-zoom"
                  : ""
              }
            />
          </div>
        ))}
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => !isTransitioning && handleImageChange(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-[#F39C12] scale-110 shadow-md"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            tabIndex={0}
            disabled={isTransitioning}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/60 text-white rounded-full p-2 opacity-0 md:opacity-50 group-hover/carousel:opacity-100 transition-all hover:scale-110"
        onClick={() =>
          !isTransitioning &&
          handleImageChange(
            (currentImageIndex - 1 + images.length) % images.length
          )
        }
        aria-label="Previous image"
        tabIndex={0}
        disabled={isTransitioning}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/60 text-white rounded-full p-2 opacity-0 md:opacity-50 group-hover/carousel:opacity-100 transition-all hover:scale-110"
        onClick={() =>
          !isTransitioning &&
          handleImageChange((currentImageIndex + 1) % images.length)
        }
        aria-label="Next image"
        tabIndex={0}
        disabled={isTransitioning}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default ImageCarousel;
