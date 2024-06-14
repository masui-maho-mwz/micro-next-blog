import styles from './page.module.css';

type Blog = {
  id: string;
  title: string;
  body: string;
};

type Props = {
  contents: Blog;
};

export default async function BlogHome({ contents }: Props) {
  return (
    <div className={styles.root}>
      {contents.map(({ id, title, body }: Blog) => (
        <div key={id}>
          <h3>{title}</h3>
          <div>{body}</div>
        </div>
      ))}
    </div>
  );
}
