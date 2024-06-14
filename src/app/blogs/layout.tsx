import { Header } from '@/features/blogs/header';
import styles from './layout.module.css';

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.root}>
      <Header />
      <div>{children}</div>
    </div>
  );
}
