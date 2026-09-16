import Link from 'next/link'
import { getBlogPosts } from 'app/blog/utils'

export function BlogPosts({ limit }: { limit?: number }) {
  let allBlogs = getBlogPosts()

  let sortedBlogs = allBlogs.sort((a, b) => {
    if (
      new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
    ) {
      return -1
    }
    return 1
  })

  let displayedBlogs = limit ? sortedBlogs.slice(0, limit) : sortedBlogs

  return (
    <div>
      {displayedBlogs.map((post) => (
        <Link
          key={post.slug}
          className="block mb-4 hover:underline"
          href={`/blog/${post.slug}`}
        >
          <p className="text-neutral-100 tracking-tight">
            {post.metadata.title}
          </p>
        </Link>
      ))}
    </div>
  )
}