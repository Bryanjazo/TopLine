import React from "react";
import style from "../../styles/Footer/footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faPhoneAlt,
  faEnvelopeSquare,
  faMapPin,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className={style.footerSection}>
      <div className={style.row}>
        <div className={style.col_1_of_2}>
          <div className={style.emailSection}>
            <h2 className={style.emailSection_heading}>
              Subscribe to recieve special deals...
            </h2>
            <p className={style.emailSection_paragraph}>
              We offer many deals to our subscribers. This allows you to stay up
              to date and have the best offers.
            </p>
            <div className={style.submit}>
              <input
                type="text"
                placeholder="Enter E-mail Adress..."
                name="email"
                className={style.emailSection_input}
              />
              <a href="" className={style.btn}>
                Subscribe
              </a>
            </div>
          </div>
        </div>
        <div className={style.col_1_of_2}>
          <div className={style.optionSection}>
            <div className={style.optionSection_first}>
              <ul>
                <li className={style.heading}>Pressure washing</li>
                <div className={style.choices}>
                  <li>
                    <a href="#" className={style.choice}>
                      Houses
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#" className={style.choice}>
                      Concrete
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#" className={style.choice}>
                      Fences
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#" className={style.choice}>
                      Bins
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#" className={style.choice}>
                      Roofs
                    </a>
                  </li>
                </div>
              </ul>
            </div>
            <div className={style.optionSection_second}>
              <ul>
                <li className={style.heading}>Office Hours</li>
                <div className={style.choices}>
                  <li>
                    <FontAwesomeIcon
                      icon={faClock}
                      className={style.clockIcon}
                    />
                    <a href="#" className={style.choice}>
                      Monday-Sundays: 24 Hours
                    </a>
                  </li>
                </div>
              </ul>
            </div>
            <div className={style.optionSection_third}>
              <ul>
                <li className={style.heading}>Contact</li>
                <div className={style.choices}>
                  <li>
                    <FontAwesomeIcon
                      icon={faPhoneAlt}
                      className={style.clockIcon}
                    />
                    <a href="#" className={style.choice}>
                      Phone: (909)-709-1148
                    </a>
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faEnvelopeSquare}
                      className={style.clockIcon}
                    />
                    <a href="#" className={style.choice}>
                      E-mail: Toplinepowerwash@gmail.com{" "}
                    </a>
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faMapPin}
                      className={style.clockIcon}
                    />
                    <a href="#" className={style.choiceLocation}>
                      Location: Ontario Ca{" "}
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
