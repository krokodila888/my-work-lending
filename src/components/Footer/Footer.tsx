import { FC } from 'react';
import styles from './Footer.module.scss';
import telegram from '../../images/tlg.png';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footer__wrap}>
        <li className={styles.footer__link}>
          <a
            href='https://t.me/e_kurakina888'
            className={styles.footer__text}
            target='_blank'
            rel='noreferrer'
          >
            <img
              className={styles.footer__icon}
              src={telegram}
              alt='Иконка Телеграмм'
            />
            Телеграм
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
