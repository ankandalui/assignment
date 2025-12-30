# Next.js Journal Assignment

This is a solution for the Next.js Practical Assignment. It implements a premium journal-style content page using **Next.js 15 App Router** and **Tailwind CSS v4**.

## Features

- **Dynamic Routing**: Renders posts dynamically via `/journal/[id]`.
- **Parallel Data Fetching**: Optimized loading using `Promise.all` in Server Components.
- **Content Processing**: meaningful transformations of flat API data into structured sections with interactive Table of Contents.
- **Premium Design**: Typography-focused layout using *Merriweather* (Serif) and *Inter* (Sans).
- **Graceful Loading & Error Handling**: Custom skeletons and error boundaries.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) to see the entry list.

## Project Structure

- `app/journal/[id]`: Main dynamic route logic.
- `lib/api.ts`: Data fetching layer (DummyJSON).
- `lib/content.ts`: Logic to transform raw text into "Journal" blocks.
- `components/journal`: Feature-specific components (Sidebar, Article).
