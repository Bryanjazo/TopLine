import React from "react";
import Head from "next/head";
import Image from "next/image";

import logo from "../public/Images/log.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faPhoneAlt,
  faMapPin,
  faAirFreshener,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Home.module.scss";
import MainHomeHeading from "./MainHomeHeading";
import Headingcards from "./Headingcards";
import PopupMidsection from "./PopupMidsection";
import Midsection from "./Midsection";
import Cards from "./Cards/cards";
import EmailCard from "./EmailCard/EmailCard";
export default function HomeComponent() {
  return (
    <div>
      <header className={styles.mainHeader}>
        <div className={styles.headerUpper}>
          <div className={styles.autoContainer}>
            <div className={styles.clearfix}>
              <div className={styles.pull_left}>
                <div className={styles.logo_box}>
                  <div className={styles.bgColor}></div>
                  <figure className={styles.logo}>
                    <div className={styles.l}>
                      <Image
                        src={logo}
                        alt="Picture of the author"
                        width={200}
                        height={100}
                      />
                    </div>
                  </figure>
                </div>
              </div>
              <div className={styles.pull_right}>
                <ul className={styles.info_list}>
                  <li>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className={styles.icon}
                    />
                    <h2>Contact Us</h2>
                    <p>ToplineWash</p>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faMapPin} className={styles.icon} />
                    <h2>Location</h2>
                    <p>Ontario, CA</p>
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faPhoneAlt}
                      className={styles.icon}
                    />
                    <h2>Call Today</h2>
                    <p>909-709-1148</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <MainHomeHeading />
      <Headingcards />
      <PopupMidsection />
      <Midsection />
      <Cards />
      <EmailCard />
    </div>
  );
}

// <div className={styles.home_container}>
// <div className={styles.home}>
//   <div className={styles.home_logo}>
//     <Image
//       src={logo}
//       alt="Picture of the author"
//       width={200}
//       height={100}
//     />
//   </div>

//   <div className={styles.socialIcons}>
//     <ul>
//       <li>
//         <i>
//           <FontAwesomeIcon
//             icon={faEnvelope}
//             className={styles.icon}
//             size="3x"
//           />
//           <h5 className={styles.topText}>Contact Us Now</h5>
//         </i>
//         <a
//           className={styles.text}
//           href="mailto:Toplinepowerwash@gmail.com"
//         >
//           Toplinepowerwash@gmail.com
//         </a>
//       </li>
//       <li>
//         {" "}
//         <i>
//           <FontAwesomeIcon
//             icon={faPhoneAlt}
//             className={styles.icon}
//             size="3x"
//           />
//           <h5 className={styles.topText}>Call Us Now</h5>
//         </i>
//         <a className={styles.phone} href="tel:9097091148">
//           (909)-709-1148
//         </a>
//       </li>
//       <li>
//         {" "}
//         <i>
//           <FontAwesomeIcon
//             icon={faMapPin}
//             className={styles.icon}
//             size="3x"
//           />
//           <h5 className={styles.topText}>Where were located</h5>
//         </i>
//         <a
//           className={(styles.text, styles.location)}
//           href="https://g.co/kgs/25yBJt"
//         >
//           Ontario, Ca
//         </a>
//       </li>
//     </ul>
//   </div>
// </div>
// </div>
