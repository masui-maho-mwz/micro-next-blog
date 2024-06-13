import { client } from "@/libs/client";
import styles from "./page.module.css";

export default async function Home() {
  const data = await client.get({
    endpoint: "blog"
  });

  const title = data.contents[0].title;
  const body = data.contents[0].body;

  return (
    <main className={styles.main}>
      <h3>{title}</h3>
      <div>{body}</div>
    </main>
  );
}
