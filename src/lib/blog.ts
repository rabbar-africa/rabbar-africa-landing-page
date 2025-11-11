import { client } from '@/sanity/lib/client'
import { PortableTextBlock } from 'next-sanity'

export interface BlogPost {
  _id: string
  title: string
  slug: {
    current: string
  }
  author?: string
  publishedAt: string
  excerpt?: string
  mainImage?: {
    asset: {
      _ref: string
      _type: string
    }
    alt?: string
  }
  content: PortableTextBlock[]
  categories?: string[]
  tags?: string[]
}

// Fetch all published blog posts
export async function getAllBlogPosts(): Promise<BlogPost[]> {
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
    categories,
    tags
  }`
  
  return await client.fetch(query)
}

// Fetch a single blog post by slug
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
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
  }`
  
  return await client.fetch(query, { slug })
}

// Fetch recent blog posts (limit)
export async function getRecentBlogPosts(limit: number = 5): Promise<BlogPost[]> {
  const query = `*[_type == "blogPost"] | order(publishedAt desc) [0...$limit] {
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
    categories,
    tags
  }`
  
  return await client.fetch(query, { limit: limit - 1 })
}
