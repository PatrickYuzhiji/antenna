import React from "react";
import Link from "next/link";
import ImageWithFallback from "./ImageWithFallback";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  imageUrl: string;
  slug: string;
}

export default function BlogCard({
  title,
  excerpt,
  date,
  author,
  imageUrl,
  slug,
}: BlogCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col mb-8">
      {/* Image */}
      <div className="h-48 overflow-hidden">
        <ImageWithFallback
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex-grow flex flex-col">
        <Link href={`/blog/${slug}`}>
          <h3 className="text-xl font-bold text-[#2A2559] mb-2 hover:text-[#E12026] transition-colors">
            {title}
          </h3>
        </Link>

        {/* Date and Author */}
        <div className="text-sm text-gray-500 mb-4">
          By <span className="font-medium">{author}</span> | {date}
        </div>

        {/* Excerpt */}
        <p className="text-gray-700 mb-4 flex-grow">{excerpt}</p>

        {/* Read More Link */}
        <Link
          href={`/blog/${slug}`}
          className="text-[#F39C12] hover:text-[#2A2559] font-medium transition-colors mt-auto"
        >
          Read more [...]
        </Link>
      </div>
    </div>
  );
}
