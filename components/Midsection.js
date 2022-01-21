import React from "react";
import Image from "next/image";
import styles from "../styles/midSection.module.scss";
import Stained from "../public/Images/Stained.jpeg";
export default function Midsection() {
  return (
    <div className={styles.midSection}>
      <div className={styles.row}>
        <div className={styles.col_1_of_2}>
          <h1 className={styles.primary}>Benefits.</h1>
          <h3 className={styles.tertiary}>
            1. YOU CAN EASILY REMOVE MOLD, MILDEW, GRIME AND DIRT WITH A POWER
            WASHER.
          </h3>
          <p className={styles.paragraph}>
            The force created can move all of these substances. It will dislodge
            dirt in hard to reach areas. Removing grime and dirt between patios
            bricks, concrete, on your driveway and around your home can be
            difficult due to reach and how much can accumulate between cracks.
            Power washing makes this easy.
          </p>
          <h3 className={styles.tertiary}>
            2. PRESSURE WASHING EACH YEAR WILL EXTEND THE LIFE OF YOUR PAINT.
          </h3>
          <p className={styles.paragraph}>
            If you pressure wash each year, you can extend the life of your
            paint by at least three years. It is much less expensive to power
            wash than repaint.
          </p>
          <h3 className={styles.tertiary}>
            3. PRESSURE WASHING YOUR HOUSE REGULARLY WILL PROTECT THE HEALTH OF
            YOUR FAMILY.
          </h3>
          <p className={styles.paragraph}>
            If you let it go too long without power washing your home, the
            extended exposure to mold, mildew, algae and dirt can negatively
            affect the health of your family. The longer it sits there, the
            worse it can be.
          </p>
          <h3 className={styles.tertiary}>
            4. IT CAN HELP YOU MAXIMIZE THE SALE PRICE ON YOUR HOUSE.
          </h3>
          <p className={styles.paragraph}>
            Power washing your home regularly can help you sell it later on. The
            better your house looks, the more you will be able to get for it
            when you go to sell it. It will also help your own personal
            enjoyment as well as longevity of your home. Power washing your home
            is an important part of your annual spring or summer cleaning. It
            will not only help maintain the house itself, help the health of
            your family, and better your property all around. At Seasonal
            Yardwork, we power wash concrete, patios, pool decks, driveways,
            homes, and more.
          </p>
          <a href="#" className={styles.btn}>
            Call Today!
          </a>
        </div>
        <div className={styles.col_1_of_2}>
          <div className={styles.composition}>
            <div className={styles.box}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
