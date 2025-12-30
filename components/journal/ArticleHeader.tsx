import { Author } from '@/lib/types';
import { Avatar } from '@/components/ui/Avatar';
import { Badge } from '@/components/ui/Badge';
import { formatDate } from '@/lib/utils';

interface ArticleHeaderProps {
    title: string;
    author?: Author;
    publishedAt?: string;
    readTime?: number;
    tags: string[];
    views: number;
}

export function ArticleHeader({
    title,
    author,
    publishedAt,
    readTime,
    tags,
    views,
}: ArticleHeaderProps) {
    return (
        <header className="mb-12 space-y-6">
            <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="capitalize">
                        {tag}
                    </Badge>
                ))}
            </div>

            <h1 className="font-serif text-4xl font-extrabold leading-tight tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
                {title}
            </h1>

            <div className="flex items-center justify-between border-b border-stone-200 pb-6 pt-4">
                <div className="flex items-center gap-4">
                    {author && (
                        <Avatar
                            src={author.image}
                            alt={author.firstName}
                            fallback={author.firstName}
                        />
                    )}
                    <div className="text-sm">
                        <p className="font-medium text-stone-900">
                            {author?.firstName} {author?.lastName}
                        </p>
                        <p className="text-stone-500">
                            {publishedAt && formatDate(publishedAt)} · {readTime} min read
                        </p>
                    </div>
                </div>

                <div className="hidden text-sm text-stone-400 sm:block">
                    {views.toLocaleString()} views
                </div>
            </div>
        </header>
    );
}
