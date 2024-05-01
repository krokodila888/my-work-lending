import React, { FC, useEffect, useState } from 'react';
import rip from '../../../images/rip3.png';
import win from '../../../images/win4.png';
import {
  attack1,
  attack2,
  attack3,
  superAttack,
} from '../../../utils/constants';
import styles from './BattleBlock.module.scss';
import { TAttack } from '../../../utils/types';
import MenuButton from '../../ux/Buttons/MenuButton';
import BattleButton from '../../ux/Buttons/BattleButton';
import CheckButton from '../../ux/Buttons/CheckButton';

type TBattleBlockProps = {
  showBattle: () => void;
  showStudy: () => void;
  showMereng: () => void;
  battleIsVisible: boolean;
  studyIsVisible: boolean;
  merengIsVisible: boolean;
};

const BattleBlock: FC<TBattleBlockProps> = (props) => {
  const {
    showBattle,
    showStudy,
    showMereng,
    battleIsVisible,
    studyIsVisible,
    merengIsVisible,
  } = props;

  const [text, setText] = useState(
    'Итак, перед вами штурмовик Империи/гоблин восьмого уровня/ваш враг из отдела закупок, и намерения у него самые недобрые. Ваши действия:',
  );
  const [attackMaxNum, setAttackMaxNum] = useState(0);
  const [attackCounter, setAttackCounter] = useState(0);
  const [superAttackCounter, setSuperAttackCounter] = useState(false);
  const [isWinning, setIsWinning] = useState(false);
  const [endGame, setEndGame] = useState(false);
  const [showEnd, setShowEnd] = useState(false);

  function getFightRes() {
    return Math.floor(Math.random() * 2 + 1) === 1;
  }

  function startAgain() {
    setIsWinning(getFightRes());
    setAttackMaxNum(Math.floor(Math.random() * 2 + 2));
    setText(
      'И снова перед вами кибергопник/орк десятого уровня/ваш враг из отдела работы с претензиями, и он жаждет вашей крови. Ваши действия:',
    );
    setShowEnd(false);
    setEndGame(false);
    setAttackCounter(0);
    setSuperAttackCounter(false);
  }

  useEffect(() => {
    setIsWinning(getFightRes());
  }, []);

  useEffect(() => {
    setAttackMaxNum(Math.floor(Math.random() * 2 + 2));
  }, []);

  function makeAttack(item: TAttack) {
    if (attackCounter < attackMaxNum) {
      setAttackCounter(attackCounter + 1);
      deleteAttackButton(item);
      if (Math.floor(Math.random() * 2 + 1) === 1) return setText(item.lucky);
      else return setText(item.unlucky);
    }
    if (attackCounter === attackMaxNum && isWinning) {
      setShowEnd(true);
      setEndGame(true);
      return setText(item.win);
    }
    if (attackCounter === attackMaxNum && !isWinning) {
      setShowEnd(true);
      setEndGame(true);
      return setText(item.loose);
    }
  }

  function deleteAttackButton(item: TAttack) {
    if (item === superAttack) setSuperAttackCounter(true);
  }

  function battleButtonText() {
    if (battleIsVisible) return 'Хватит с меня сражений!';
    else return 'Текстовая битва!!';
  }

  function studyButtonText() {
    if (studyIsVisible) return 'Спасибо, достаточно';
    else return 'Учить языки!';
  }

  function merengButtonText() {
    if (merengIsVisible)
      return 'Офигенно, спасибо. Вернусь когда-нибудь и посмотрю еще';
    else return 'Смотреть прелоадер-безешку';
  }

  return (
    <>
      <section className={styles.battle} id='Buttons'>
        {!merengIsVisible && !studyIsVisible && (
          <MenuButton handleClick={showBattle} makeText={battleButtonText} />
        )}
        {!battleIsVisible && !merengIsVisible && (
          <MenuButton handleClick={showStudy} makeText={studyButtonText} />
        )}
        {!studyIsVisible && !battleIsVisible && (
          <MenuButton handleClick={showMereng} makeText={merengButtonText} />
        )}

        {battleIsVisible && !merengIsVisible && !studyIsVisible && (
          <>
            <h3 className={styles.battle__storyText}>{text}</h3>
            {!endGame && (
              <>
                <BattleButton
                  handleClick={makeAttack}
                  text={attack1.name}
                  isSimple={true}
                  item={attack1}
                />
                <BattleButton
                  handleClick={makeAttack}
                  text={attack2.name}
                  isSimple={true}
                  item={attack2}
                />
                <BattleButton
                  handleClick={makeAttack}
                  text={attack3.name}
                  isSimple={true}
                  item={attack3}
                />
                {!superAttackCounter ? (
                  <BattleButton
                    handleClick={makeAttack}
                    text={superAttack.name}
                    isSimple={false}
                    item={superAttack}
                  />
                ) : (
                  <div className={styles.battle__emptyBlock}></div>
                )}
              </>
            )}
            {showEnd && (
              <div className={styles.container}>
                <CheckButton
                  handleClick={startAgain}
                  isForBattle={true}
                  text='Сразиться еще раз!'
                />
                {isWinning && (
                  <img
                    src={win}
                    alt='Знак победы'
                    className={styles.battle__resImg}
                  />
                )}
                {!isWinning && (
                  <img
                    src={rip}
                    alt='Знак поражения'
                    className={styles.battle__resImg}
                  />
                )}
              </div>
            )}
          </>
        )}
      </section>
    </>
  );
};

export default BattleBlock;
