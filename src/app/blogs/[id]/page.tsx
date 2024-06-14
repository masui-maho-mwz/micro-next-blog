'use client';

import { useBlogs } from '@/hooks/use-blogs';
import { useParams } from 'next/navigation';
import styles from './page.module.css';

const BlogHome = () => {
  const { getBlogById, error } = useBlogs();
  const { id } = useParams();
  const blog = getBlogById(id as string);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className={styles.root}>
      <h3>{blog.title}</h3>
      <div>{blog.body}</div>
    </div>
  );
};

export default BlogHome;
