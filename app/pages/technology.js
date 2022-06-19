import React, { useState } from "react";
import styles from "../styles/Technology.module.css";
import Head from "next/head";
import data from "../utils/data.json";

const { technology } = data;

const Technology = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className={styles.container}>
      <Head>
        <title>Technology</title>
      </Head>
      <main className={styles.main}>
        <header className={styles.header}>
          <h5 className="heading5 number">03</h5>
          <h5 className={`heading5 ${styles.white}`}>Space launch 101</h5>
        </header>

        <div className={styles.content}>
          <div className={styles.sliderButtonsContainer}>
            {technology.map((item, index) => (
              <button
                className={`${styles.sliderButton} ${
                  current === index && styles.active
                }`}
                onClick={() => setCurrent(index)}
              >
                <h4 className="heading4">{index + 1}</h4>
              </button>
            ))}
          </div>

          <div className={styles.description}>
            <div className={styles.cluster}>
              <p className="navText">The terminology...</p>
              <h3 className={`heading3 ${styles.white}`}>
                {technology[current].name}
              </h3>
            </div>

            <div className={styles.descriptionTextContainer}>
              <p className="bodyText">{technology[current].description}</p>
            </div>
          </div>
          <img
            src={technology[current].images.portrait}
            className={styles.image}
            alt={technology[current].name}
          />
        </div>
      </main>
    </div>
  );
};

export default Technology;
