import Footer from "@/app/components/Footer";
import { getPost, urlFor } from "@/app/sanity/client";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import type { PortableTextReactComponents } from "@portabletext/react";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import type { TypedObject } from "@portabletext/types";

export const revalidate = 60;

// Define interfaces based on the Sanity schema
interface Post {
  _id: string;
  title: string;
  slug?: string;
  mainImage?: SanityImageSource;
  publishedAt?: string;
  excerpt?: string;
  author?: {
    name?: string;
    slug?: string;
  };
  body?: TypedObject[];
}

interface Props {
  params: {
    slug: string;
  };
}

// Define PortableText components for custom rendering
const components: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="my-8 relative rounded-lg overflow-hidden h-96">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || "Blog image"}
            fill
            className="object-cover"
          />
        </div>
      );
    },
  },
  marks: {
    link: ({ children, value }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      const rel = target === "_blank" ? "noreferrer noopener" : undefined;

      return (
        <a
          href={value?.href}
          target={target}
          rel={rel}
          className="text-[#F39C12] hover:underline"
        >
          {children}
        </a>
      );
    },
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold mt-8 mb-4 text-[#2C3E50]">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold mt-8 mb-4 text-[#2C3E50]">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold mt-6 mb-3 text-[#2C3E50]">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-bold mt-6 mb-2 text-[#2C3E50]">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[#F39C12] pl-4 py-2 my-6 italic bg-gray-50">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="my-4 text-gray-800 leading-relaxed">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="ml-6 my-4 list-disc space-y-1">{children}</ul>
    ),
  },
};

export default async function BlogPost({ params }: Props) {
  // 直接获取 slug 参数
  const slug = params.slug;

  const post = (await getPost(slug)) as Post;

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-[#2C3E50] mb-4">
              Post Not Found
            </h1>
            <p className="text-gray-600 mb-6">
              The blog post you&apos;re looking for doesn&apos;t exist or has
              been removed.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center bg-[#2C3E50] text-white px-6 py-3 rounded-md hover:bg-opacity-90"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Return to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Decorative separator line */}
      <div className="w-full h-1 bg-gradient-to-r from-[#2C3E50] via-[#F39C12] to-[#2C3E50]"></div>

      <article className="flex-grow bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back to Blog link */}
            <Link
              href="/blog"
              className="inline-flex items-center text-[#2C3E50] hover:text-[#F39C12] mb-8"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to Blog List
            </Link>

            {/* Featured Image */}
            {post.mainImage && (
              <div className="mb-8 rounded-lg overflow-hidden h-[400px] relative">
                <Image
                  src={urlFor(post.mainImage).url()}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* Title and Meta */}
            <h1 className="text-4xl font-bold text-[#2C3E50] mb-4">
              {post.title}
            </h1>
            <div className="flex items-center text-gray-600 mb-8">
              <span className="mr-4">
                By{" "}
                <span className="font-medium">
                  {post.author?.name || "Unknown Author"}
                </span>
              </span>
              <span>
                Published:{" "}
                {post.publishedAt
                  ? new Date(post.publishedAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })
                  : "No date available"}
              </span>
            </div>

            {/* Excerpt - if available */}
            {post.excerpt && (
              <div className="bg-gray-50 p-6 rounded-lg mb-8 border-l-4 border-[#F39C12]">
                <p className="text-lg text-gray-700 italic">{post.excerpt}</p>
              </div>
            )}

            {/* Content */}
            <div className="prose prose-lg max-w-none text-black">
              {Array.isArray(post.body) ? (
                <PortableText value={post.body} components={components} />
              ) : (
                <p>No content available for this post.</p>
              )}
            </div>
          </div>
        </div>
      </article>

      <div className="w-full h-1 bg-gradient-to-r from-[#2C3E50] via-[#F39C12] to-[#2C3E50]"></div>
      <Footer />
    </div>
  );
}
