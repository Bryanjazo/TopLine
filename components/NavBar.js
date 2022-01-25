import React, { useState } from "react";
import Head from "next/head";
import navStyles from "../styles/Nav.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faGoogle,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
export default function NavBar() {
  return (
    <div className={navStyles.nav_container}>
      <div className={navStyles.nav}>
        <label htmlFor="toggle" className={navStyles.hamburger}>
          &#9776;
        </label>
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          className={navStyles.toggle}
        />
        <div className={navStyles.menu}>
          <a href="#" className={navStyles.nav_red_item}>
            Home
          </a>
          <a href="#">Discover</a>
          <a href="#">Live Profile</a>
          <a href="#">Jobs</a>
          <a href="#">Create a project</a>
        </div>
        <div className={navStyles.socialIcons}>
          <ul>
            <li>
              <FontAwesomeIcon
                icon={faInstagram}
                className={navStyles.icon}
                width={3}
              />
            </li>
            <li>
              <FontAwesomeIcon icon={faFacebook} className={navStyles.icon} />
            </li>
            <li>
              <FontAwesomeIcon icon={faGoogle} className={navStyles.icon} />
            </li>
            <li>
              <FontAwesomeIcon icon={faWhatsapp} className={navStyles.icon} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className={navStyles.menu}>
<nav>
  <ul>
    <li className={navStyles.nav_red_item}>
      <a href="#">Home</a>
    </li>
    <li>
      <a href="#">Discover</a>
    </li>
    <li>
      <a href="#">Live Profile</a>
    </li>
    <li>
      <a href="#">Jobs</a>
    </li>
    <li>
      <a href="#">Create a project</a>
    </li>
  </ul>
</nav>
</div> */
}
