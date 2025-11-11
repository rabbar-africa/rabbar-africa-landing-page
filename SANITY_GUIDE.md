# Sanity CMS Setup Guide

## 🚀 How to Run Sanity Studio

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Access Sanity Studio:**
   - Open your browser and go to: `http://localhost:3000/studio`
   - This is the CMS interface where your blog writer will create posts

## 👤 For Your Blog Writer (Non-Developer)

### Accessing the CMS:
1. Go to `http://localhost:3000/studio` (or `https://yourdomain.com/studio` when deployed)
2. Sign in with their Sanity account

### Creating a Blog Post:
1. Click the **"+"** button or "Create" in the Studio
2. Select **"Blog Post"**
3. Fill in the fields:
   - **Title**: The blog post title
   - **Slug**: Click "Generate" to auto-create from title
   - **Author**: Their name
   - **Published at**: Select date and time
   - **Excerpt**: Short description (shown in blog lists)
   - **Main Image**: Upload a featured image
   - **Content**: Write the blog post using the rich text editor
   - **Categories**: Add categories (optional)
   - **Tags**: Add tags (optional)
4. Click **"Publish"** when ready

### Tips for Blog Writer:
- Drafts are auto-saved
- Use the content editor toolbar for formatting (bold, italic, headings, etc.)
- Can add images within the content
- Preview changes before publishing

## 💻 Fetching Blog Posts in Your Code

I've created helper functions in `src/lib/blog.ts`:

### Get all blog posts:
```typescript
import { getAllBlogPosts } from '@/lib/blog'

const posts = await getAllBlogPosts()
```

### Get a single post by slug:
```typescript
import { getBlogPostBySlug } from '@/lib/blog'

const post = await getBlogPostBySlug('my-blog-post')
```

### Get recent posts:
```typescript
import { getRecentBlogPosts } from '@/lib/blog'

const recentPosts = await getRecentBlogPosts(5) // Get 5 most recent
```

## 📝 Example Usage in a Page

```typescript
// app/blogs/page.tsx
import { getAllBlogPosts } from '@/lib/blog'
import { urlFor } from '@/sanity/lib/image'

export default async function BlogsPage() {
  const posts = await getAllBlogPosts()
  
  return (
    <div>
      {posts.map((post) => (
        <article key={post._id}>
          <h2>{post.title}</h2>
          {post.mainImage && (
            <img 
              src={urlFor(post.mainImage).width(800).url()} 
              alt={post.mainImage.alt || post.title}
            />
          )}
          <p>{post.excerpt}</p>
          <time>{new Date(post.publishedAt).toLocaleDateString()}</time>
        </article>
      ))}
    </div>
  )
}
```

## 🔐 Setting Up User Access

To give your blog writer access:
1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Select your project
3. Go to "Project Members"
4. Invite them by email
5. Assign appropriate role (Editor or Contributor)

## 🌐 Deployment

When you deploy to production (Vercel, Netlify, etc.):
- The Studio will be available at `https://yourdomain.com/studio`
- Make sure environment variables are set:
  - `NEXT_PUBLIC_SANITY_PROJECT_ID`
  - `NEXT_PUBLIC_SANITY_DATASET`
