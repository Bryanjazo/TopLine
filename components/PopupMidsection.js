import React from "react";
import Image from "next/image";
import style from "../styles/MainHeading.module.scss";
import styles from "../styles/popUp.module.scss";
import burst1 from "../public/Images/burst1.jpeg";
import burst2 from "../public/Images/burst2.jpeg";
import before from "../public/Images/before.jpeg";
export default function popUpMidSection() {
  return (
    <div className={styles.popUp_section}>
      <div className={styles.row}>
        <div className={styles.col_1_of_2}>
          <div className={styles.composition}>
            <div className={`${styles.composition__photo1}`}>
              <Image src={burst1} />
            </div>

            <div className={`${styles.composition__photo2}`}>
              <Image src={burst2} />
            </div>

            <div className={`${styles.composition__photo3} `}>
              <Image src={before} />
            </div>
          </div>
        </div>

        <div className={styles.col_1_of_2}>
          <h1 className={styles.primary}>TopLine Makes it easy.</h1>
          <h2 className={styles.secondary}>Our Goal Is Your Comfort.</h2>
          <p className={styles.paragraph}>
            If you have never power washed your home before, you may want to
            consider doing so now. As a homeowner, you know property maintenance
            is important and so is potentially raising the value of your home.
          </p>
          <h3 className={styles.tertiary}>What benefits is there ?</h3>
          <p className={styles.paragraph}>
            Power washing has many benefits for both your home as well as your
            health. There are tons of different benefits and facts you should
            know about power washing before you decide to do it and we have laid
            out a few of those below.
          </p>
          <a href="tel:9097091148" className={styles.btn}>
            Call Today!
          </a>
        </div>
      </div>
    </div>
  );
}
