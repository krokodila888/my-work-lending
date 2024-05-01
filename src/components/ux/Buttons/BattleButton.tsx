import { FC } from 'react';
import styles from './Button.module.scss';
import { TAttack } from '../../../utils/types';

type TBattleButtonProps = {
  handleClick: (item: TAttack) => void;
  text: string;
  isSimple: boolean;
  item: TAttack;
};

const BattleButton: FC<TBattleButtonProps> = (props) => {
  const { handleClick, text, isSimple, item } = props;

  return (
    <button
      className={
        isSimple
          ? styles.button
          : `${styles.button} ${styles.button__superattack}`
      }
      onClick={() => handleClick(item)}
    >
      {text}
    </button>
  );
};

export default BattleButton;
