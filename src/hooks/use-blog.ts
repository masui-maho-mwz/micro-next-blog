import { useFetchData } from './use-fetch-data';

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
  const { data, error } = useFetchData<{ contents: Blog[] }>('/api/blogs');
  return { blogs: data?.contents || [], error };
};

export const useBlog = (id: string) => {
  const { data, error } = useFetchData<Blog>(id ? `/api/blogs?id=${id}` : '');
  return { blog: data, error };
};
