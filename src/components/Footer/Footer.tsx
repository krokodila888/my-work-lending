import React, { FC } from "react";
import './footer.css';
import telegram from '../../images/tlg.png';

const Footer: FC = () => {

  return (
    <footer className="footer">
      <ul className="footer-wrap">
        <li className="footer__link">
          <a href='https://t.me/e_kurakina888' className="footer__link1" target="_blank">
          <img className="footer__social-icon" src={telegram}/>Телеграм</a>
        </li>
      </ul>
    </footer>
  );
}
  
export default Footer;