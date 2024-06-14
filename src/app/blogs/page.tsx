'use client';

import { useBlogs } from '@/hooks/use-blogs';
import Link from 'next/link';

export default function Home() {
  const { getAllBlogs, error } = useBlogs();
  const blogs = getAllBlogs();

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {blogs.map(({ id, title, body }) => (
        <div key={id}>
          <h3>{title}</h3>
          <p>{body}</p>
          <Link href={`/blogs/${id}`}>詳細</Link>
        </div>
      ))}
    </div>
  );
}
