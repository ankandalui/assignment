import Image from 'next/image';
import Link from 'next/link';
import { Post } from '@/lib/types';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

interface JournalCardProps {
    post: Post;
    className?: string;
    featured?: boolean;
}

export function JournalCard({ post, className, featured = false }: JournalCardProps) {
    return (
        <Link
            href={`/journal/${post.id}`}
            className={cn(
                'group relative flex flex-col overflow-hidden rounded-xl bg-white transition-all hover:-translate-y-1 hover:shadow-xl',
                featured ? 'md:grid md:grid-cols-2 md:gap-8' : 'border border-stone-200',
                className
            )}
        >
            {/* Image Container */}
            <div
                className={cn(
                    'relative overflow-hidden bg-stone-200',
                    featured ? 'h-64 md:h-full' : 'aspect-video w-full'
                )}
            >
                {post.image && (
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                )}
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col justify-between p-6">
                <div className="space-y-4">
                    <div className="flex gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="secondary" className="capitalize">
                                {tag}
                            </Badge>
                        ))}
                    </div>

                    <h3
                        className={cn(
                            'font-serif font-bold text-stone-900 group-hover:text-stone-700',
                            featured ? 'text-3xl md:text-4xl' : 'text-xl'
                        )}
                    >
                        {post.title}
                    </h3>

                    <p className="line-clamp-3 text-stone-600">
                        {post.body}
                    </p>
                </div>

                <div className="mt-6 flex items-center justify-between text-xs font-medium text-stone-500">
                    <div className="flex items-center gap-2">
                        <span>{post.reactions.likes} Likes</span>
                        <span>·</span>
                        <span>{post.views} Views</span>
                    </div>

                    <span className="group-hover:translate-x-1 transition-transform">
                        Read Article →
                    </span>
                </div>
            </div>
        </Link>
    );
}
