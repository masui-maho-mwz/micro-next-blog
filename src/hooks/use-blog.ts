import type { Blog } from '@/lib/types';
import { useGetFetch } from './use-fetch-data';

export const useBlogs = () => {
  const { data, error } = useGetFetch<{ contents: Blog[] }>('/api/blogs');
  return { blogs: data?.contents || [], error };
};

export const useBlog = (id: string) => {
  const { data, error } = useGetFetch<Blog>(id ? `/api/blogs?id=${id}` : '');
  return { blog: data, error };
};
