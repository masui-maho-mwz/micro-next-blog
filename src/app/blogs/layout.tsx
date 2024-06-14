'use client';

import { createContext, useEffect, useState } from 'react';

type Blog = {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  publishedAt: string;
  revisedAt: string;
  updatedAt: string;
};

export const BlogContext = createContext<Blog[]>([]);

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/api/blogs');

        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }

        const data = await response.json();
        const { contents } = data;
        setBlogs(contents);
      } catch (error) {
        setError('An unknown error occurred');
      }
    };
    fetchBlogs();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <BlogContext.Provider value={blogs}>
      <div>{children}</div>
    </BlogContext.Provider>
  );
}
