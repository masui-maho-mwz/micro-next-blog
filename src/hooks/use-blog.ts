import type { Blog } from '@/lib/types';
import { useFetchData } from './use-fetch-data';

export const useBlogs = () => {
  const { data, error } = useFetchData<{ contents: Blog[] }>('/api/blogs');
  return { blogs: data?.contents || [], error };
};

export const useBlog = (id: string) => {
  const { data, error } = useFetchData<Blog>(id ? `/api/blogs?id=${id}` : '');
  return { blog: data, error };
};
