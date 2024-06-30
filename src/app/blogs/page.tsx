'use client';

import { useBlogs } from '@/hooks/use-blog';
import styles from './styles.module.css';

export default function Home() {
  const { blogs, error } = useBlogs();

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className={styles.root}>
      <div className={styles.wrap}>
        <span className={styles.space}></span>
        <div className={styles.pageTitleWrap}>
          <h3 className={styles.pageTitle}>Tech</h3>
        </div>
        <span className={styles.space}></span>
        <div className={styles.articles}>
          {blogs.map(({ id, title, createdAt }) => (
            <article key={id} className={styles.article}>
              <div className={styles.emoji}>🦊</div>
              <div className={styles.body}>
                <a href={`/blogs/${id}`} className={styles.articleTitleWrap}>
                  <h2 className={styles.articleTitle}>{title}</h2>
                </a>
                <div>
                  TODO: 日付の表記を修正する
                  <div>{createdAt}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
