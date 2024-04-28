import { FC } from "react";
import styles from './Footer.module.css';
import telegram from "../../images/tlg.png";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footer__wrap}>
        <li className={styles.footer__link}>
          <a
            href="https://t.me/e_kurakina888"
            className={styles.footer__text}
            target="_blank"
          >
            <img className={styles.footer__icon} src={telegram} />
            Телеграм
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
