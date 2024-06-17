'use client';

import { useEffect, useState } from 'react';

type Blog = {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  publishedAt: string;
  revisedAt: string;
  updatedAt: string;
};

export const useBlogs = () => {
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

  return { blogs, error };
};
