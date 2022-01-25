import React from "react";
import style from "../../styles/Footer/footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faGoogle,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
export default function FooterStrip() {
  return (
    <div className={style.strip}>
      <div className={style.strip_row}>
        <div className={style.strip_copyright}>
          <h3>@Topline Power Wash@2022 All rights reserved. </h3>
        </div>
        <div className={style.socialIcons}>
          <ul>
            <li>
              <FontAwesomeIcon
                icon={faInstagram}
                className={style.icon}
                width={3}
              />
            </li>
            <li>
              <FontAwesomeIcon icon={faFacebook} className={style.icon} />
            </li>
            <li>
              <FontAwesomeIcon icon={faGoogle} className={style.icon} />
            </li>
            <li>
              <FontAwesomeIcon icon={faWhatsapp} className={style.icon} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
