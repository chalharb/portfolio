export type Post = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  coverImage: string;
  tags: string[];
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  preview?: boolean;
};
