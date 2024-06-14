import Link from 'next/link';
import styles from './styles.module.css';

export default async function Home() {
  return (
    <main className={styles.root}>
      HOME
      <Link href="./blogs">ブログ一覧ページ</Link>
    </main>
  );
}
