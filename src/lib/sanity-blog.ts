import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableTextBlock } from "sanity";

export interface SanityBlogPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  author?: string;
  publishedAt: string;
  excerpt?: string;
  mainImage?: {
    asset: {
      _ref: string;
      _type: string;
    };
    alt?: string;
  };
  content?: PortableTextBlock[];
  categories?: string[];
  tags?: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  publishedAt: string;
  image: string;
  category: string;
  categories: string[];
  tags: string[];
  content: PortableTextBlock[];
  readingTime: number;
}

/**
 * Calculate reading time based on content
 */
function calculateReadingTime(content?: PortableTextBlock[]): number {
  if (!content) return 5;

  const wordsPerMinute = 200;
  const wordCount = content.reduce((count, block) => {
    if (block._type === "block" && Array.isArray(block.children)) {
      return (
        count +
        block.children.reduce(
          (childCount: number, child: { text?: string }) => {
            return childCount + (child.text?.split(/\s+/).length || 0);
          },
          0,
        )
      );
    }
    return count;
  }, 0);

  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}

/**
 * Transform Sanity blog post to app format
 */
function transformBlogPost(post: SanityBlogPost): BlogPost {
  const imageUrl = post.mainImage
    ? urlFor(post.mainImage).width(1200).height(630).url()
    : "/placeholder-blog.jpg";

  return {
    id: post._id,
    slug: post.slug.current,
    title: post.title,
    excerpt: post.excerpt || "",
    author: post.author || "Rabbar Africa",
    date: new Date(post.publishedAt).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    publishedAt: post.publishedAt,
    image: imageUrl,
    category: post.categories?.[0] || "General",
    categories: post.categories || [],
    tags: post.tags || [],
    content: post.content || [],
    readingTime: calculateReadingTime(post.content),
  };
}

/**
 * Fetch paginated blog posts from Sanity
 */
export async function getPaginatedBlogPosts(
  page: number = 1,
  pageSize: number = 9,
) {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  const query = `{
    "posts": *[_type == "blogPost"] | order(publishedAt desc) [${start}...${end}] {
      _id,
      title,
      slug,
      author,
      publishedAt,
      excerpt,
      mainImage {
        asset,
        alt
      },
      content,
      categories,
      tags
    },
    "total": count(*[_type == "blogPost"])
  }`;

  const data = await client.fetch(query);

  return {
    posts: data.posts.map(transformBlogPost),
    total: data.total,
    hasMore: end < data.total,
    currentPage: page,
    totalPages: Math.ceil(data.total / pageSize),
  };
}

/**
 * Fetch all blog posts (for static generation)
 */
export async function getAllBlogPosts() {
  const query = `*[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    author,
    publishedAt,
    excerpt,
    mainImage {
      asset,
      alt
    },
    content,
    categories,
    tags
  }`;

  const data = await client.fetch(query);
  return data.map(transformBlogPost);
}

/**
 * Fetch a single blog post by slug
 */
export async function getBlogPostBySlug(slug: string) {
  const query = `*[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    author,
    publishedAt,
    excerpt,
    mainImage {
      asset,
      alt
    },
    content,
    categories,
    tags
  }`;

  const data = await client.fetch(query, { slug });

  if (!data) return null;

  return transformBlogPost(data);
}

/**
 * Get all blog slugs for static generation
 */
export async function getAllBlogSlugs() {
  const query = `*[_type == "blogPost"].slug.current`;
  const data = await client.fetch(query);
  return data;
}

/**
 * Get related posts based on categories/tags
 */
export async function getRelatedPosts(currentSlug: string, limit: number = 3) {
  const query = `*[_type == "blogPost" && slug.current == $slug][0] {
    categories,
    tags
  }`;

  const currentPost = await client.fetch(query, { slug: currentSlug });

  if (!currentPost) return [];

  const relatedQuery = `*[
    _type == "blogPost" && 
    slug.current != $slug &&
    (
      categories match $categories ||
      tags match $tags
    )
  ] | order(publishedAt desc) [0...${limit}] {
    _id,
    title,
    slug,
    author,
    publishedAt,
    excerpt,
    mainImage {
      asset,
      alt
    },
    content,
    categories,
    tags
  }`;

  const data = await client.fetch(relatedQuery, {
    slug: currentSlug,
    categories: currentPost.categories || [],
    tags: currentPost.tags || [],
  });

  return data.map(transformBlogPost);
}

/**
 * Get blog posts by category
 */
export async function getBlogPostsByCategory(category: string) {
  const query = `*[_type == "blogPost" && $category in categories] | order(publishedAt desc) {
    _id,
    title,
    slug,
    author,
    publishedAt,
    excerpt,
    mainImage {
      asset,
      alt
    },
    content,
    categories,
    tags
  }`;

  const data = await client.fetch(query, { category });
  return data.map(transformBlogPost);
}
