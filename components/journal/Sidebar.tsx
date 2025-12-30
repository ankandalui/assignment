'use client';

import Link from 'next/link';
import { Post, TOCItem } from '@/lib/types';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface SidebarProps {
    recentPosts: Post[];
    toc?: TOCItem[];
    className?: string;
}

export function Sidebar({ recentPosts, toc, className }: SidebarProps) {
    const [activeId, setActiveId] = useState<string>('');

    // Intersection Observer to highlight active TOC item
    useEffect(() => {
        if (!toc || toc.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '-20% 0px -35% 0px' }
        );

        toc.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [toc]);

    return (
        <aside className={cn('space-y-8 py-4', className)}>
            {/* Table of Contents - Only shown if available */}
            {toc && toc.length > 0 && (
                <div className="hidden lg:block">
                    <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-stone-500">
                        In this Article
                    </h3>
                    <nav className="space-y-2 border-l border-stone-200">
                        {toc.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className={cn(
                                    'block border-l-2 py-1 pl-4 text-sm transition-colors hover:text-stone-900',
                                    activeId === item.id
                                        ? 'border-stone-900 font-medium text-stone-900'
                                        : 'border-transparent text-stone-500'
                                )}
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById(item.id)?.scrollIntoView({
                                        behavior: 'smooth',
                                    });
                                }}
                            >
                                {item.text}
                            </a>
                        ))}
                    </nav>
                </div>
            )}

            {/* Recent Entries */}
            <div>
                <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-stone-500">
                    Recent Entries
                </h3>
                <ul className="space-y-4">
                    {recentPosts.map((post) => (
                        <li key={post.id} className="group">
                            <Link
                                href={`/journal/${post.id}`}
                                className="block text-sm font-medium text-stone-800 transition-colors group-hover:text-stone-600"
                            >
                                {post.title}
                            </Link>
                            <div className="mt-1 flex items-center gap-2 text-xs text-stone-400">
                                <span>{post.reactions.likes} likes</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}
