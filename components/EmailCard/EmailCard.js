import React from "react";
import style from "../../styles/Email/EmailCard.module.scss";
export default function EmailCard() {
  return (
    <div className={style.emailContainer}>
      <div className={style.heading}>
        <h1 className={style.primary}>Contact Us Today!</h1>
      </div>
      <form action="">
        <div className={style.card}>
          <div className={style.card_contactText}>
            <p>Contact</p>
          </div>
          <div className={style.card_infoText}>
            <div className={style.card_infoText_email}>
              <label htmlFor="email" className={style.label}>
                E-mail
              </label>
              <input
                type="text"
                name="email"
                className={style.inpuText}
                placeholder="Enter E-mail..."
              />
            </div>
            <div className={style.card_infoText_phone}>
              {" "}
              <label htmlFor="phone" className={style.label}>
                Phone
              </label>
              <input
                type="text"
                name="phone"
                className={style.inpuText}
                placeholder="Enter phone number..."
              />
            </div>
            <div className={style.card_infoText_topic}>
              {" "}
              <label htmlFor="topic" className={style.label}>
                Topic
              </label>
              <select name="topic" className={style.inpuTextSelect}>
                {" "}
                <option value="Bundle Special ">Bundle Special</option>
                <option value="Pressure Washing">Pressure Washing</option>
                <option value="House Washing">House Washing</option>
                <option value="Window Cleaning">Window Cleaning</option>
                <option value="Bin Cleaning">Bin Cleaning</option>
                <option value="Gutter Cleaning">Gutter Cleaning</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div className={style.message}>
            <label htmlFor="message" className={style.label}>
              Your Message
            </label>
            <textarea
              name="message"
              placeholder="Type message here..."
              className={style.inputMessage}
              cols="25"
              rows="30"
            ></textarea>
          </div>
          <div className={style.button}>
            <a href="" className={style.btn}>
              Send Your Message
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}
