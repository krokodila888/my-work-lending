import icon from "../../images/icon.png";
import { FC } from "react";
import styles from './Header.module.css';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <h2 className={styles.header__title}>(Не)рабочее пространство Женечки</h2>
        <img src={icon} alt="Иконка" className={styles.header__icon} />
      </div>
    </header>
  );
};

export default Header;
