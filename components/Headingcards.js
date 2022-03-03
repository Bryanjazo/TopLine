import React from "react";
import Image from "next/image";

import styles from "../styles/HeadingCards.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faFileInvoiceDollar,
  faAirFreshener,
} from "@fortawesome/free-solid-svg-icons";
import pressureWasher from "../public/Images/pressure.png";
export default function Headingcards() {
  return (
    <section className={styles.sectionCards}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.wrap}>
              <div className={styles.widget_wrap}>
                <div className={styles.widget}>
                  <div className={styles.widget_container}>
                    <section className={styles.about_area}>
                      <div className={styles.outer_container}>
                        {/* no scss */}
                        <div className={styles.feature_section}>
                          {/* scss */}
                          <div className={styles.auto_container}>
                            <div className={styles.inner__container}>
                              <div className={styles.clearfix}>
                                <div className={styles.feature_column_1}>
                                  <div className={styles.feature_block}>
                                    <div className={styles.inner_box}>
                                      <div className={styles.icon_box}>
                                        <FontAwesomeIcon
                                          icon={faUsers}
                                          size="5x"
                                          color="white"
                                          className={styles.icon}
                                        />
                                        <h4>Professional Team</h4>
                                        <p>
                                          TopLine provides professional service.
                                          Our costumers come first.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className={styles.feature_column_2}>
                                  <div className={styles.feature_block}>
                                    <div className={styles.inner_box}>
                                      <div className={styles.icon_box}>
                                        <FontAwesomeIcon
                                          icon={faUsers}
                                          size="5x"
                                          color="red"
                                          className={styles.icon}
                                        />
                                        <h4>Professional Team</h4>
                                        <p>
                                          TopLine provides professional service.
                                          Our costumers come first.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className={styles.feature_column_3}>
                                  <div className={styles.feature_block}>
                                    <div className={styles.inner_box}>
                                      <div className={styles.icon_box}>
                                        <FontAwesomeIcon
                                          icon={faUsers}
                                          size="5x"
                                          color="white"
                                          className={styles.icon}
                                        />
                                        <h4>Professional Team</h4>
                                        <p>
                                          TopLine provides professional service.
                                          Our costumers come first.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// <div className={styles.row}>
// <div className={styles.card_box_1}>
//   <div className={styles.block}>
//     <FontAwesomeIcon icon={faUsers} size="5x" color="white" />
//   </div>
//   <div className={styles.textblock}>
//     <h3 className={styles.headingTertiary}>Professional Team</h3>
//     <p className={styles.box__text}>
//       TopLine provides professional service. Our costumers come first.
//     </p>
//   </div>
// </div>

// <div className={styles.card_box_2}>
//   <div className={styles.block}>
//     <div className={styles.image}>
//       <FontAwesomeIcon
//         icon={faAirFreshener}
//         className={styles.icon}
//         size="5x"
//       />
//     </div>
//   </div>
//   <div className={styles.textblock}>
//     <h3 className={styles.headingTertiary}>Quality Washing</h3>
//     <p className={styles.box__text}>
//       We make sure that our team gives every costumer a 100%
//       satisfaction guaranteed service.
//     </p>
//   </div>
// </div>

// <div className={styles.card_box_3}>
//   <div className={styles.block}>
//     <FontAwesomeIcon
//       icon={faFileInvoiceDollar}
//       size="5x"
//       color="white"
//     />
//   </div>
//   <div className={styles.textblock}>
//     <h3 className={styles.headingTertiary}>Free Estimate</h3>
//     <p className={styles.box__text}>
//       We provide our service at a much more affordable price with
//       amazing results.
//     </p>
//   </div>
// </div>
// </div>
