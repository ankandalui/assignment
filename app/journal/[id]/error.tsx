'use client';

import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex h-[50vh] flex-col items-center justify-center gap-4 text-center">
            <h2 className="font-serif text-3xl font-bold text-stone-900">
                Something went wrong!
            </h2>
            <p className="max-w-md text-stone-600">
                We encountered an error while loading this entry. It might be due to simulated network or API issues.
            </p>
            <button
                onClick={reset}
                className="rounded bg-stone-900 px-4 py-2 text-sm font-medium text-white hover:bg-stone-800"
            >
                Try again
            </button>
        </div>
    );
}
