import { Post, Author, Comment, JournalArticle } from './types';
import { calculateReadTime } from './utils';

const BASE_URL = 'https://dummyjson.com';

// Simulate network delay for realism
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getRecentEntries(limit: number = 5): Promise<Post[]> {
  try {
    const res = await fetch(`${BASE_URL}/posts?limit=${limit}&select=title,id,tags,reactions`);
    if (!res.ok) throw new Error('Failed to fetch recent entries');
    const data = await res.json();
    return data.posts.map((post: Post) => ({
      ...post,
      image: `https://picsum.photos/seed/${post.id}/800/600`,
    }));
  } catch (error) {
    console.error('Error fetching recent entries:', error);
    return [];
  }
}

export async function getJournalEntry(id: string): Promise<JournalArticle | null> {
  // Simulate network conditions appropriate for a "real" system
  await delay(500); 

  try {
    // Parallel data fetching for performance
    const [postRes, commentsRes] = await Promise.all([
      fetch(`${BASE_URL}/posts/${id}`),
      fetch(`${BASE_URL}/posts/${id}/comments`)
    ]);

    if (postRes.status === 404) return null;
    if (!postRes.ok) throw new Error('Failed to fetch post');

    const post: Post = await postRes.json();
    
    // Fetch author details separately since post only has userId
    const userRes = await fetch(`${BASE_URL}/users/${post.userId}`);
    const author: Author = userRes.ok ? await userRes.json() : null;

    const commentsData = await commentsRes.json();
    const comments: Comment[] = commentsData.comments;

    // Enhance the data with "simulated" fields for the journal feel
    const enrichedPost: JournalArticle = {
      ...post,
      author,
      comments,
      readTime: calculateReadTime(post.body),
   
      publishedAt: new Date(2025, 0, (post.id % 30) + 1).toISOString(),
      image: `https://picsum.photos/seed/${post.id}/800/600`, //image
    };

    return enrichedPost;

  } catch (error) {
    console.error(`Error fetching journal entry ${id}:`, error);
    throw error;
  }
}
