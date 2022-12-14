import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    async function load(url = "https://localhost:3000/tokenid0") {
      console.log(url);
      let res = await fetch(url)
        .then((res) => res.ok)
        .catch(() => false);
      console.log(res);
    }
    load();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Moralis 2.0 <a href="https://docs.moralis.io/">Docs Here</a>
        </h1>

        <p className={styles.description}>
          Click <Link href={"/signin"}>Here to Proceed to Login Page</Link>
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
