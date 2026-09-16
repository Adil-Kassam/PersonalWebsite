import Image from 'next/image'
import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <div className="relative w-full aspect-video sm:aspect-16/9 md:aspect-21/9 mb-8 -mt-2 rounded-xl overflow-hidden bg-neutral-900">
        <Image
          src="/adillandscape3.png"
          alt="A wide banner image"
          fill
          className="object-contain sm:object-cover"
          priority
        />
      </div>

      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Welcome...           I'm Adil
      </h1>

      <p className="mb-10">I'm a Conscientious Computer Science Grad from KCL with 1 year of experience
        working as a Software Engineer in London. I'm enthusiastic about 
        how structures and systems function, and love to understand concepts to a deep extent, which
        is probably what drew me to the technology industry.
      </p>
      <p className="mb-4">
        You're currently in the Landing page, click <b>about</b> to learn
        more about my experience, <b>blog</b> to have a look at my thoughts
        on different experiences, <b>projects</b> to see what I've worked
        on and <b>reading</b> if you'd like to know the books I'm currently reading.
      </p>
      <div className="my-8">
        <b>Recent Blog Posts:</b>
        <div className="mt-4">
          <BlogPosts limit={3} />
        </div>
      </div>
    </section>
  )
}