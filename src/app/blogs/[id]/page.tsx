'use client';

import { useBlog } from '@/hooks/use-blog';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import styles from './styles.module.css';

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
    <article className={styles.root}>
      <header className={styles.header}>
        <div className={styles.wrap}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.date}>
            {/* TODO: 作成日より公開日にしたい */}
            {/* TODO: 日付のフォーマットを修正 */}
            <span>
              <span>{createdAt}</span>
              に公開
            </span>
            <span>{updatedAt}</span>
          </div>
        </div>
      </header>

      <div>{body}</div>
      <div>{createdAt}</div>
      <div>{updatedAt}</div>
      <Link href="../../blogs">戻る</Link>
    </article>
  );
};

export default BlogHome;
