import { FC } from 'react';
import styles from './Button.module.scss';

type TCheckButtonProps = {
  handleClick: () => void;
  text: string;
  isForBattle: boolean;
};

const CheckButton: FC<TCheckButtonProps> = (props) => {
  const { handleClick, text, isForBattle } = props;

  return (
    <button
      className={
        isForBattle
          ? `${styles.btn} ${styles.btn__battle}`
          : `${styles.btn} ${styles.btn__words}`
      }
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default CheckButton;
