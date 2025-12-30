import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getJournalEntry, getRecentEntries } from '@/lib/api';
import { processContent } from '@/lib/content';
import { ArticleHeader } from '@/components/journal/ArticleHeader';
import { ArticleContent } from '@/components/journal/ArticleContent';
import { Sidebar } from '@/components/journal/Sidebar';

type Props = {
    params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const post = await getJournalEntry(id);

    if (!post) {
        return {
            title: 'Article Not Found',
        };
    }

    return {
        title: `${post.title} | NextJS Journal`,
        description: post.body.slice(0, 160),
        authors: post.author ? [{ name: `${post.author.firstName} ${post.author.lastName}` }] : undefined,
        openGraph: {
            type: 'article',
            title: post.title,
            description: post.body.slice(0, 160),
            publishedTime: post.publishedAt,
            tags: post.tags,
        },
    };
}

export default async function JournalEntryPage({ params }: Props) {
    const { id } = await params;

    // Parallel data fetching
    const [post, recentPosts] = await Promise.all([
        getJournalEntry(id),
        getRecentEntries(),
    ]);

    if (!post) {
        notFound();
    }

    // Process raw body into structured blocks and TOC
    const { blocks, toc } = processContent(post.body);

    return (
        <div className="container mx-auto max-w-7xl px-4 py-8 md:px-6 lg:py-16">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
                {/* Main Content Area */}
                <main className="lg:col-span-8">
                    <ArticleHeader
                        title={post.title}
                        author={post.author}
                        publishedAt={post.publishedAt}
                        readTime={post.readTime}
                        tags={post.tags}
                        views={post.views}
                    />
                    <ArticleContent blocks={blocks} />
                </main>

                {/* Sidebar */}
                <aside className="lg:col-span-4">
                    <div className="sticky top-8">
                        <Sidebar recentPosts={recentPosts} toc={toc} />
                    </div>
                </aside>
            </div>
        </div>
    );
}
