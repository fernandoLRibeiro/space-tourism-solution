import React, { useState } from "react";
import styles from "../styles/PrimaryHeader.module.css";
import Link from "next/link";

const PrimaryHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className={styles.primaryHeader}>
      <img src="./assets/shared/logo.svg" className={styles.headerLogo} />
      <button
        className={styles.mobileNavButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src={`${
            isOpen
              ? "./assets/shared/icon-close.svg"
              : "./assets/shared/icon-hamburger.svg"
          }`}
        />
      </button>

      <nav className={`${styles.mainNavigation} ${isOpen && styles.open}`}>
        <ul className={styles.navLinksContainer}>
          <li className={styles.navLinkContainer}>
            <Link href="/" passHref>
              <a className={styles.navLink}>
                <p className="navNumber">00</p>
                <p className="navText">Home</p>
              </a>
            </Link>
          </li>
          <li className={styles.navLinkContainer}>
            <Link href="/destination" passHref>
              <a className={styles.navLink}>
                <p className="navNumber">01</p>
                <p className="navText">Destination</p>
              </a>
            </Link>
          </li>
          <li className={styles.navLinkContainer}>
            <Link href="/crew" passHref>
              <a className={styles.navLink}>
                <p className="navNumber">02</p>
                <p className="navText">Crew</p>
              </a>
            </Link>
          </li>
          <li className={styles.navLinkContainer}>
            <Link href="/technology" passHref>
              <a className={styles.navLink}>
                <p className="navNumber">03</p>
                <p className="navText">Technology</p>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default PrimaryHeader;
