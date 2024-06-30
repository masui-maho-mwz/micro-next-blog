import Link from 'next/link';

export default async function Home() {
  return (
    <main>
      HOME
      <Link href="./blogs">ブログ一覧ページ</Link>
    </main>
  );
}
