/* eslint-disable @next/next/no-img-element */
import { cn } from '@/lib/utils';

interface AvatarProps {
    src?: string;
    alt: string;
    fallback: string;
    className?: string;
}

export function Avatar({ src, alt, fallback, className }: AvatarProps) {
    return (
        <div
            className={cn(
                'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-stone-100',
                className
            )}
        >
            {src ? (
                <img
                    src={src}
                    alt={alt}
                    className="aspect-square h-full w-full object-cover"
                />
            ) : (
                <div className="flex h-full w-full items-center justify-center bg-stone-200 text-stone-600 font-medium">
                    {fallback.substring(0, 2).toUpperCase()}
                </div>
            )}
        </div>
    );
}
