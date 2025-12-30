# Technical Decisions

## 1. Data Fetching Strategy
I chose **Server Components** for the main page to leverage Direct Database/API access without client-side waterfalls. 
- **Parallel Requests**: `getJournalEntry` and `getRecentEntries` are called in `Promise.all` to prevent blocking. 
- **Mocking**: I added a small delay in `lib/api.ts` to realistically demonstrate the Loading Skeleton.

## 2. Content Rendering
Since the DummyJSON API provides only a single flat string for `body`, I created a `processContent` utility in `lib/content.ts`. 
- This simulates a rich-text environment by splitting the text into paragraphs.
- It injects headers (`h2`) and blockquotes dynamically to verify the **Table of Contents** logic.
- This avoids bringing in a heavy CMS or Markdown parser for a simple assignment, keeping the bundle size small.

## 3. Styling
I used **Tailwind CSS v4** as it was pre-configured.
- **Typography**: Paired `Merriweather` (headers) with `Inter` (body) for a classic high-end publication feel.
- **Sidebar**: Implemented a sticky sidebar with an Intersection Observer in the client-side `Sidebar` component to highlight active sections, simulating a real reading app experience.

## 4. Image Handling
To enhance the visual appeal without a real CMS with image assets:
- **Simulated Images**: I used `picsum.photos` seeded with the post ID (`/seed/${post.id}`) to generate consistent, deterministic high-quality images for each entry.
- **External Configuration**: Configured `next.config.ts` to allow the `picsum.photos` domain for `next/image` optimization.

## 5. Hydration & Extensions
- **Hydration Mismatch**: Encountered simulated hydration errors due to browser extensions injecting attributes (e.g., `cz-shortcut-listen`).
- **Resolution**: Applied `suppressHydrationWarning={true}` to the `<body>` tag in `app/layout.tsx`. This is a recommended pattern when you cannot control client-side injections (like extensions) that don't affect the application logic.

## 6. Tradeoffs
- **Images**: I did not implement image rendering *within* the article body text itself, as DummyJSON posts are text-only. In a real app, I would parse image markdown or use a structured content block system.
- **Testing**: Manual verification was prioritized over Unit Tests due to the time limit. `error.tsx` acts as the main fail-safe for API issues.
