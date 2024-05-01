import { FC } from 'react';
import styles from './Button.module.scss';

type TMenuButtonProps = {
  handleClick: () => void;
  makeText: () => string;
};

const MenuButton: FC<TMenuButtonProps> = (props) => {
  const { handleClick, makeText } = props;

  return (
    <button className={styles.button} onClick={handleClick}>
      {makeText()}
    </button>
  );
};

export default MenuButton;
