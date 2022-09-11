import { useState } from "react";
import { SiInstagram, SiTelegram } from "react-icons/si";
import { images } from "../../constants";
import AppWrap from "../../wrapper/AppWrap";
import MotionWrap from "../../wrapper/MotionWrap";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <h2 className="head-text">Take a coffee and chat with me</h2>
      <div className={styles.footerCards}>
        <div className={styles.footerCard}>
          <img src={images.email} alt="email" />
          <a href={"mailto:vovkovaloff@gmail.com"} className="p-text">
            vovkovaloff@gmail.com
          </a>
        </div>
        <div className={styles.footerCard}>
          <SiTelegram className={styles.telegramIcon} />
          <a href="https://telegram.me/ooppro" className="p-text">
            @ooppro
          </a>
        </div>
        <div className={styles.footerCard}>
          <SiInstagram className={styles.instaIcon} />
          <a href="https://www.instagram.com/just.a.techie" className="p-text">
            @just.a.techie
          </a>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, styles.footer),
  "contact",
  "app__primarybg"
);
