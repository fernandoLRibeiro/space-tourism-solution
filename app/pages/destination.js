import React, { useState } from "react";
import styles from "../styles/Destination.module.css";
import Head from "next/head";
import data from "../utils/data.json";

const { destinations } = data;

const Destination = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <div className={styles.container}>
      <Head>
        <title>Destination</title>
      </Head>
      <main className={styles.main}>
        <header className={`header `}>
          <h5 className="heading5 number">01</h5>
          <h5 className={`heading5 ${styles.white}`}>Pick your destination</h5>
        </header>
        <div className={styles.content}>
          <img
            className={styles.image}
            src={destinations[selectedItem].images.webp}
            alt={destinations[selectedItem].name}
            loading="lazy"
          />
          <div className={styles.textContent}>
            <div className={styles.labelsContainer}>
              {destinations.map((destination, index) => (
                <button
                  key={index}
                  className={`${styles.selectorButton} ${
                    index === selectedItem && styles.active
                  }`}
                  onClick={() => setSelectedItem(index)}
                >
                  <h6 className="navText">{destination.name}</h6>
                </button>
              ))}
            </div>
            <div className={styles.description}>
              <h2 className="heading2">{destinations[selectedItem].name}</h2>
              <p className="bodyText">
                {destinations[selectedItem].description}
              </p>
            </div>
            <div className={styles.lastSection}>
              <div className={styles.clusterContainer}>
                <div className={styles.cluster}>
                  <h5 className="subheading2">AVG. DISTANCE</h5>
                  <h4
                    className={`heading4 ${styles.white} ${styles.customSize}`}
                  >
                    {destinations[selectedItem].distance}
                  </h4>
                </div>

                <div className={styles.cluster}>
                  <h5 className="subheading2">Est. travel time</h5>
                  <h4
                    className={`heading4 ${styles.white} ${styles.customSize}`}
                  >
                    {destinations[selectedItem].travel}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Destination;
