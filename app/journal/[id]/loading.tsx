export default function Loading() {
    return (
        <div className="container mx-auto max-w-7xl px-4 py-8 md:px-6 lg:py-16">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
                <main className="lg:col-span-8">
                    {/* Header Skeleton */}
                    <div className="mb-12 space-y-6">
                        <div className="flex gap-2">
                            <div className="h-6 w-20 animate-pulse rounded-full bg-stone-200" />
                            <div className="h-6 w-24 animate-pulse rounded-full bg-stone-200" />
                        </div>
                        <div className="space-y-4">
                            <div className="h-12 w-3/4 animate-pulse rounded bg-stone-200" />
                            <div className="h-12 w-1/2 animate-pulse rounded bg-stone-200" />
                        </div>
                        <div className="flex items-center gap-4 border-b border-stone-200 pb-6 pt-4">
                            <div className="h-10 w-10 animate-pulse rounded-full bg-stone-200" />
                            <div className="space-y-2">
                                <div className="h-4 w-32 animate-pulse rounded bg-stone-200" />
                                <div className="h-4 w-24 animate-pulse rounded bg-stone-200" />
                            </div>
                        </div>
                    </div>

                    {/* Content Skeleton */}
                    <div className="space-y-4">
                        <div className="h-4 w-full animate-pulse rounded bg-stone-200" />
                        <div className="h-4 w-full animate-pulse rounded bg-stone-200" />
                        <div className="h-4 w-2/3 animate-pulse rounded bg-stone-200" />
                        <div className="my-8 h-8 w-1/2 animate-pulse rounded bg-stone-200" />
                        <div className="h-4 w-full animate-pulse rounded bg-stone-200" />
                        <div className="h-4 w-full animate-pulse rounded bg-stone-200" />
                    </div>
                </main>

                <aside className="hidden lg:col-span-4 lg:block">
                    <div className="space-y-8">
                        <div className="h-6 w-32 animate-pulse rounded bg-stone-200" />
                        <div className="space-y-4">
                            <div className="h-4 w-full animate-pulse rounded bg-stone-200" />
                            <div className="h-4 w-full animate-pulse rounded bg-stone-200" />
                            <div className="h-4 w-full animate-pulse rounded bg-stone-200" />
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}
