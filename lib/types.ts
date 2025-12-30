export interface Author {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  email: string;
}

export interface Comment {
  id: number;
  body: string;
  postId: number;
  user: {
    id: number;
    username: string;
    fullName: string;
  };
}

export interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
  image?: string; 
}

// Extended Article type that includes related data
export interface JournalArticle extends Post {
  author?: Author;
  comments?: Comment[];
  readTime?: number;
  publishedAt?: string; 
}

export interface TOCItem {
  id: string;
  text: string;
  level: number;
}
