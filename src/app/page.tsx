import { client } from "@/libs/client";
import styles from "./page.module.css";

export default async function Home() {
  const { contents } = await client.get({
    endpoint: "blogs"
  });

  type Content = {
    id: string;
    title: string;
    body: string;
  };

  return (
    <main className={styles.main}>
      {contents.map((content: Content) => (
        <div key={content.id}>
          <h3>{content.title}</h3>
          <div>{content.body}</div>
        </div>
      ))}
    </main>
  );
}
