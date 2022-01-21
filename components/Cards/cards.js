import React from "react";

import styles from "../../styles/Cards/cards.module.scss";
export default function cards() {
  return (
    <div className={styles.card_section}>
      <div className={styles.row}>
        <div className={styles.col_1of_4}>
          <div className={styles.card}>
            <div className={styles.card_side}>
              <div className={styles.card_picture}></div>
              <h4 className={styles.card__heading}>
                <span className={styles.card__heading_span}>House Washing</span>
              </h4>
              <div className={styles.card__details}>
                <ul>
                  <li>Safe and easy!</li>
                  <li>Remove dirt. </li>
                  <li>Make your home new.</li>
                </ul>
              </div>
              <a href="#" className={styles.btn}>
                Free quote!
              </a>
            </div>
          </div>
        </div>
        <div className={styles.col_1of_4}>
          <div className={styles.card}>
            <div className={styles.card_side}>
              <div className={styles.card_picture2}></div>
              <h4 className={styles.card__heading2}>
                <span className={styles.card__heading_span}>Power Washing</span>
              </h4>
              <div className={styles.card__details}>
                <ul>
                  <li>Restore Your floor.</li>
                  <li>Make your home shine.</li>
                  <li>Remove algae and stains.</li>
                </ul>
              </div>
              <a href="#" className={styles.btn}>
                Free quote!
              </a>
            </div>
          </div>
        </div>
        <div className={styles.col_1of_4}>
          <div className={styles.card}>
            <div className={styles.card_side}>
              <div className={styles.card_picture3}></div>
              <h4 className={styles.card__heading3}>
                <span className={styles.card__heading_span}>
                  Floor striping
                </span>
              </h4>
              <div className={styles.card__details}>
                <ul>
                  <li>Restore faded lines.</li>
                  <li>Renovate your space.</li>
                  <li>We do it right.</li>
                </ul>
              </div>
              <a href="#" className={styles.btn}>
                Free quote!
              </a>
            </div>
          </div>
        </div>
        <div className={styles.col_1of_4}>
          <div className={styles.card}>
            <div className={styles.card_side}>
              <div className={styles.card_picture4}></div>
              <h4 className={styles.card__heading4}>
                <span className={styles.card__heading_span}>
                  Gutter cleaning
                </span>
              </h4>
              <div className={styles.card__details}>
                <ul>
                  <li>Remove gunk!</li>
                  <li>Reestablish flow.</li>
                  <li>We make it easy.</li>
                </ul>
              </div>
              <a href="#" className={styles.btn}>
                Free quote!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
