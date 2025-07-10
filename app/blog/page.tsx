export const dynamic = "force-dynamic";
import React from "react";
import Footer from "@/app/components/Footer";
import { getAllPosts, urlFor } from "@/app/sanity/client";
import Link from "next/link";
import Image from "next/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const revalidate = 60; // Revalidate every 60 seconds

interface Post {
  _id: string;
  title: string;
  slug?: string;
  mainImage: SanityImageSource;
  publishedAt: string;
  excerpt: string;
  author: {
    name: string;
    slug?: string;
  };
}

interface PageProps {
  searchParams: { page?: string };
}

export default async function Blog({ searchParams }: PageProps) {
  const posts = await getAllPosts();

  // 直接获取 page 参数，不使用中间变量
  const pageValue = searchParams.page || "1";

  // Pagination logic - fixed at 6 posts per page
  const postsPerPage = 6;
  const currentPage = parseInt(pageValue);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  // Calculate start and end indices for current page
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = posts.slice(startIndex, endIndex);

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-[#2C3E50] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">
              Blog - Tech Insights & Updates
            </h1>

            <p className="text-xl max-w-3xl mx-auto">
              Stay informed with the latest tech news, tips, and expert advice
              from our IT professionals.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentPosts.length > 0 ? (
              currentPosts.map((post: Post) => (
                <Link
                  href={`/blog/${post.slug || post._id}`}
                  key={post._id}
                  className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-[1.02] transition-all duration-300 flex flex-col h-full"
                >
                  {post.mainImage && (
                    <div className="relative h-48 w-full">
                      <Image
                        src={urlFor(post.mainImage).url()}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6 flex-grow flex flex-col">
                    <h2 className="text-xl font-bold text-[#2C3E50] mb-3">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 flex-grow">
                      {post.excerpt || "No excerpt available"}
                    </p>
                    <div className="flex justify-between items-center text-sm text-gray-500 mt-auto">
                      <span>By {post.author?.name || "Unknown Author"}</span>
                      <span>
                        {post.publishedAt
                          ? new Date(post.publishedAt).toLocaleDateString(
                              "en-US",
                              {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                              }
                            )
                          : "No date available"}
                      </span>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-2 text-center py-12">
                <p className="text-xl text-gray-600">
                  No blog posts available yet. Check back soon!
                </p>
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <nav className="flex flex-wrap gap-2" aria-label="Pagination">
                {/* Previous button */}
                {currentPage > 1 && (
                  <Link
                    href={`/blog?page=${currentPage - 1}`}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-md border border-gray-300 hover:bg-gray-50"
                  >
                    Previous
                  </Link>
                )}

                {/* Page numbers */}
                {Array.from({ length: totalPages }).map((_, index) => {
                  const pageNumber = index + 1;
                  return (
                    <Link
                      key={pageNumber}
                      href={`/blog?page=${pageNumber}`}
                      className={`px-4 py-2 text-sm font-medium rounded-md ${
                        currentPage === pageNumber
                          ? "bg-[#2C3E50] text-white"
                          : "text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      {pageNumber}
                    </Link>
                  );
                })}

                {/* Next button */}
                {currentPage < totalPages && (
                  <Link
                    href={`/blog?page=${currentPage + 1}`}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-md border border-gray-300 hover:bg-gray-50"
                  >
                    Next
                  </Link>
                )}
              </nav>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
