import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: process.env.SANITY_API_VERSION,
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export const postFields = `
  _id,
  title,
  "slug": slug.current,
  mainImage,
  publishedAt,
  excerpt,
  'author': author->{name, "slug": slug.current},
`;

export async function getAllPosts() {
  const posts = await client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      ${postFields}
    }`
  );
  return posts;
}

export async function getPost(slug: string) {
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      ${postFields}
      body,
    }`,
    { slug }
  );
  return post;
}
