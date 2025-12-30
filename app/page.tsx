import { getRecentEntries } from '@/lib/api';
import { JournalCard } from '@/components/journal/JournalCard';

export default async function Home() {
  const posts = await getRecentEntries(7);

  // the first post as featured
  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="bg-stone-900 px-4 py-20 text-center text-white md:py-32">
        <div className="container mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-stone-400">
            The Next.js Journal
          </p>
          <h1 className="font-serif text-5xl font-bold leading-tight md:text-7xl">
            Insights for the Modern Developer
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-stone-300">
            A curated collection of thoughts on software architecture, performance, and best practices.
          </p>
        </div>
      </section>

      {/* Content Grid */}
      <div className="container mx-auto -mt-16 max-w-7xl px-4 pb-16">
        <div className="space-y-8">
          {/* Featured Post */}
          {featuredPost && <JournalCard post={featuredPost} featured={true} />}

          {/* Grid Layout */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {remainingPosts.map((post) => (
              <JournalCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
