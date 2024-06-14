'use client';

import { getBlogs } from '@/libs/get-blogs';
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

  useEffect(() => {
    const ferchBlogs = async () => {
      const contents = await getBlogs();
      setBlogs(contents);
    };
    ferchBlogs();
  }, []);

  return (
    <BlogContext.Provider value={blogs}>
      <div>{children}</div>
    </BlogContext.Provider>
  );
}
