import { client } from "@/libs/client";
import styles from "./page.module.css";

type Content = {
  id: string;
  title: string;
  body: string;
};

export default async function Home() {
  const { contents } = await client.get({
    customRequestInit: {
      next: {
        tags: ["blogs"]
      }
    },
    endpoint: "blogs"
  });
  console.log("contents");
  console.log(contents);

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
