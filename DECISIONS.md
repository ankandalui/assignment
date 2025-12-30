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

## 4. Tradeoffs
- **Images**: I did not implement image rendering within the article body as DummyJSON posts are text-only. In a real app, I would parse image markdown or use a structured content block system (like Portable Text).
- **Testing**: Manual verification was prioritized over Unit Tests due to the time limit. `error.tsx` acts as the main fail-safe for API issues.
