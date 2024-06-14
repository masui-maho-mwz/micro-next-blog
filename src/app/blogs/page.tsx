'use client';

import { BlogContext } from '@/app/blogs/layout';
import Link from 'next/link';
import { useContext } from 'react';

export default function Home() {
  const blogs = useContext(BlogContext);

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
