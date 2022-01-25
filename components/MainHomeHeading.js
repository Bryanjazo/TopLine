import React from "react";
import styles from "../styles/MainHeading.module.scss";
export default function MainHomeHeading() {
  return (
    <div className={styles.container}>
      <div className={styles.header_textBox}>
        <h1 className={styles.heading_primary}>
          <span className={styles.heading_primary__main}>
            Make your surroundings better through us.
          </span>

          <span className={styles.heading_primary__sub}>
            First time callers will now recieve 10% off on their first service.
          </span>
        </h1>
        <a href="tel:9097091148" className={styles.btn}>
          Call Today!
        </a>
      </div>
    </div>
  );
}
