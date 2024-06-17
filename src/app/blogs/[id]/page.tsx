'use client';

import { useBlog } from '@/hooks/use-blog';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const BlogHome = () => {
  const params = useParams();
  const blogId = typeof params.id === 'string' ? params.id : '';
  const { blog, error } = useBlog(blogId);

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
