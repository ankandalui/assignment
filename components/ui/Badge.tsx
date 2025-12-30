import { cn } from '@/lib/utils';

interface BadgeProps {
    children: React.ReactNode;
    className?: string;
    variant?: 'default' | 'outline' | 'secondary';
}

export function Badge({ children, className, variant = 'default' }: BadgeProps) {
    const variants = {
        default: 'bg-stone-900 text-white hover:bg-stone-800',
        outline: 'border border-stone-200 text-stone-900 hover:bg-stone-100',
        secondary: 'bg-stone-100 text-stone-900 hover:bg-stone-200',
    };

    return (
        <span
            className={cn(
                'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2',
                variants[variant],
                className
            )}
        >
            {children}
        </span>
    );
}
