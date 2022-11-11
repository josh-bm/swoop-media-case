import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { GetServerSideProps } from "next";

interface IndexPageProps {
  data: {
    items: {
      id: string;
      title: string;
      price: number;
      amount: number;
    }[];
  };
}

export default function Home({ data }: IndexPageProps) {
  console.log(data);
  return (
    <div className={styles.container}>
      <Head>
        <title>My Inbox</title>
        <meta name="description" content="Redeem your packs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>My Inbox</h1>
        <h2>Redeem your packs</h2>
        <div>
          {data.items.map(
            ({
              id,
              title,
              price,
              amount,
            }: {
              id: string;
              title: string;
              price: number;
              amount: number;
            }) => (
              <li key={id}>{title}</li>
            )
          )}
        </div>
      </div>

      {/* <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main> */}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/packs/records"
  );
  const data = await res.json();

  return { props: { data } };
};
