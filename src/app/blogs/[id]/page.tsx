'use client';

import { useBlogs } from '@/hooks/use-blogs';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const BlogHome = () => {
  const { getBlogById, error } = useBlogs();
  const params = useParams();
  const blogId = typeof params.id === 'string' ? params.id : '';
  const blog = getBlogById(blogId);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!blog) {
    return <div>Blog not found</div>;
  }

  const { title, body, createdAt, updatedAt } = blog;

  return (
    <div>
      <h3>{title}</h3>
      <div>{body}</div>
      <div>{createdAt}</div>
      <div>{updatedAt}</div>
      <Link href="../../blogs">戻る</Link>
    </div>
  );
};

export default BlogHome;
