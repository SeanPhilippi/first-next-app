import React from 'react';
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Simple Next.js demo! See <Link href="/cars">Cars</Link>
        </h1>
      </main>
    </div>
  );
};

export default Home;
