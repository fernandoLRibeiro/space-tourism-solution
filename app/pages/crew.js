import React, { useState } from "react";
import styles from "../styles/Crew.module.css";
import Head from "next/head";
import data from "../utils/data.json";

const { crew } = data;

const Crew = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className={styles.container}>
      <Head>
        <title>Crew</title>
      </Head>

      <main className={styles.main}>
        <header className={`header `}>
          <h5 className="heading5 number">02</h5>
          <h5 className={`heading5 ${styles.white}`}>Meet Your Crew</h5>
        </header>

        <div className={styles.description}>
          <div className={styles.cluster}>
            <h4 className={`heading4 ${styles.role}`}>{crew[current].role}</h4>
            <h3 className={`heading3 ${styles.white}`}>{crew[current].name}</h3>
          </div>
          <div className={styles.bioContainer}>
            <p className={`bodyText ${styles.bio}`}>{crew[current].bio}</p>
          </div>
        </div>
        <div className={styles.sliderButtonsContainer}>
          {crew.map((member, index) => (
            <button
              key={index}
              className={`${styles.sliderButton} ${
                index === current && styles.active
              }`}
              onClick={() => setCurrent(index)}
            ></button>
          ))}
        </div>

        <div className={styles.imageContainer}>
          <img
            src={crew[current].images.webp}
            className={styles.image}
            alt={crew[current].name}
          />
        </div>
      </main>
    </div>
  );
};

export default Crew;
