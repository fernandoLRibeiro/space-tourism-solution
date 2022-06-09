import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <main className={styles.mainContent}>
        <div className={styles.textContainer}>
          <h5 className="heading5">SO, YOU WANT TO TRAVEL TO</h5>
          <h1 className="heading1">SPACE</h1>

          <p className="bodyText">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <button className={styles.exploreButton}>
          <h4 className="heading4">EXPLORE</h4>
        </button>
      </main>
    </div>
  );
}
