import rip from '../../../images/rip3.png';
import win from '../../../images/win4.png';
import {attack1, attack2, attack3, superAttack1} from '../../../utils/constants.js';
import React, { useEffect, useState } from "react";
import './BattleBlock.css';

function BattleBlock(props) {

  const { showBattle, showStudy, showMereng, battleIsVisible,studyIsVisible, merengIsVisible } = props;

  const [text, setText] = useState('Итак, перед вами штурмовик Империи/гоблин восьмого уровня/ваш враг из отдела закупок, и намерения у него самые недобрые. Ваши действия:');
  const [attackMaxNum, setAttackMaxNum] = useState(0);
  const [attackCounter, setAttackCounter] = useState(0);
  const [superAttackCounter, setSuperAttackCounter] = useState(false);
  const [isWinning, setIsWinning] = useState(false);
  const [endGame, setEndGame] = useState(false);
  const [showEnd, setShowEnd] = useState(false);
  const attack1Button = React.useRef(null);
  const attack2Button = React.useRef(null);
  const attack3Button = React.useRef(null);
  const superAttack1Button = React.useRef(null);

  function getFightRes() {
    return (Math.floor(Math.random() * 2 + 1) === 1);
  }

  function startAgain() {
    setIsWinning(getFightRes());
    setAttackMaxNum(Math.floor(Math.random() * 2 + 2));
    setText('И снова перед вами кибергопник/орк десятого уровня/ваш враг из отдела работы с претензиями, и он жаждет вашей крови. Ваши действия:');
    setShowEnd(false);
    setEndGame(false);
    setAttackCounter(0);
    setSuperAttackCounter(false);
    superAttack1Button.current.classList.delete('aboutMe__button-blocked');
  }

  useEffect(()=> {
    setIsWinning(getFightRes());
  }, [])

  useEffect(()=> {
    setAttackMaxNum(Math.floor(Math.random() * 2 + 2));
  }, [])
  
  function makeAttack(item) {
    if (attackCounter < attackMaxNum) {
      setAttackCounter(attackCounter + 1);
      deleteAttackButton(item);
      if (Math.floor(Math.random() * 2 + 1) === 1)
      return setText(item.lucky); else return setText(item.unlucky)
    }
    if ((attackCounter === attackMaxNum) && isWinning) {
      setShowEnd(true);
      setEndGame(true);
      return setText(item.win)};
    if ((attackCounter === attackMaxNum) && !isWinning) {
      setShowEnd(true);
      setEndGame(true);
      return setText(item.loose)}
    
  };

  function deleteAttackButton(item) {
    if (item === superAttack1)
    setSuperAttackCounter(true)
  };

  function battleButtonText() {
    if (battleIsVisible) return 'Хватит с меня сражений!';
    else return 'Текстовая битва!!'
  };

  function studyButtonText() {
    if (studyIsVisible) return 'Спасибо, достаточно';
    else return 'Учить языки!'
  };

  function merengButtonText() {
    if (merengIsVisible) return 'Офигенно, спасибо. Вернусь когда-нибудь и посмотрю еще';
    else return 'Смотреть прелоадер-безешку'
  };

  return (
    <>
      <section className="aboutMe__button-content" id="Buttons">
        {!merengIsVisible && !studyIsVisible &&
        <button className='aboutMe__button' onClick={showBattle}>
          {battleButtonText()}
        </button>}
        {!battleIsVisible && !merengIsVisible &&
        <button className='aboutMe__button' onClick={showStudy}>
          {studyButtonText()}
        </button>}
        {!studyIsVisible && !battleIsVisible &&
        <button className='aboutMe__button' onClick={showMereng}>
          {merengButtonText()}
        </button>}
      {battleIsVisible && !merengIsVisible && !studyIsVisible &&
      <>
        <h3 className='aboutMe__story-text'>{text}</h3>
        {!endGame && <>
          <button ref={attack1Button} className='aboutMe__button' onClick={() => {makeAttack(attack1)}}>{attack1.name}</button>
          <button ref={attack2Button} className='aboutMe__button' onClick={() => {makeAttack(attack2)}}>{attack2.name}</button>
          <button ref={attack3Button} className='aboutMe__button' onClick={() => {makeAttack(attack3)}}>{attack3.name}</button>
          {!superAttackCounter &&
          <button ref={superAttack1Button} className='aboutMe__button aboutMe__button1' onClick={() => {makeAttack(superAttack1)}}>{superAttack1.name}</button>}
        </>}
        {showEnd && 
        <div className='container'>
          <button className='btn' onClick={startAgain}>Сразиться еще раз!</button>
          {isWinning && <img src={win} alt="Знак победы" className='aboutMe__res-img'/>}
          {!isWinning && <img src={rip} alt="Знак поражения" className='aboutMe__res-img'/>}
        </div>}
      </>}
    </section>
    </>
  );
}  

export default BattleBlock; 
