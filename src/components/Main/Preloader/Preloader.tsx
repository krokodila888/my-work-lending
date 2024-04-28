import { FC } from "react";
import styles from './Preloader.module.css';
import mereng from "../../../images/mereng.png";

type TPreloaderProps = {
  isLoading: boolean;
};

const Preloader: FC<TPreloaderProps> = (props) => {

  const { isLoading } = props;

  return (
    <div className={isLoading ? styles.preloader_isActive : styles.preloader}>
      <div className={styles.preloader__container}>
        <img
          src={mereng}
          alt="Фото красивой меренги в виде прелоадера, медленно крутится"
          className={styles.preloader__round}
        />
      </div>
    </div>
  );
};

export default Preloader;
