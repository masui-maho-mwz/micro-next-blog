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

export const useBlog = (id: string) => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`/api/blogs?id=${id}`);

        if (!response.ok) {
          throw new Error('Failed to fetch blog');
        }

        const data = await response.json();
        setBlog(data);
      } catch (error) {
        setError('An unknown error occurred');
      }
    };
    if (id) {
      fetchBlog();
    }
  }, [id]);

  return { blog, error };
};
