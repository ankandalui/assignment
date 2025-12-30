import { ContentBlock } from '@/lib/content';
import { cn } from '@/lib/utils';

interface ArticleContentProps {
    blocks: ContentBlock[];
}

export function ArticleContent({ blocks }: ArticleContentProps) {
    return (
        <article className="prose prose-stone prose-lg max-w-none">
            {blocks.map((block, index) => {
                switch (block.type) {
                    case 'h2':
                        return (
                            <h2
                                key={index}
                                id={block.id}
                                className="mt-8 mb-4 font-serif text-2xl font-bold scroll-mt-20 text-stone-900"
                            >
                                {block.content}
                            </h2>
                        );
                    case 'quote':
                        return (
                            <blockquote
                                key={index}
                                className="my-6 border-l-4 border-stone-900 pl-6 italic text-stone-700"
                            >
                                {block.content}
                            </blockquote>
                        );
                    case 'paragraph':
                    default:
                        return (
                            <p key={index} className="mb-4 leading-relaxed text-stone-700">
                                {block.content}
                            </p>
                        );
                }
            })}
        </article>
    );
}
