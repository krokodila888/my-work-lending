import photo from '../../../images/photo1.jpg';
import rip from '../../../images/rip3.png';
import win from '../../../images/win4.png';
import left from '../../../images/left.png';
import right from '../../../images/right.png';
import mem from '../../../images/mem1.jpg';
import {attack1, attack2, attack3, superAttack1} from '../../../utils/constants.js';
import React, { useEffect, useState } from "react";
import './AboutMe.css';
import Preloader from '../Preloader/Preloader.js';
import Promo from '../Promo/Promo.jsx';
import CardsHolder from '../CardsHolder/CardsHolder.jsx';
import { points } from '../../../utils/constants.js';

function AboutMe() {

  const [text, setText] = useState('Итак, перед вами штурмовик Империи/гоблин восьмого уровня/ваш враг из отдела закупок, и намерения у него самые недобрые. Ваши действия:');
  const [attackMaxNum, setAttackMaxNum] = useState(0);
  const [attackCounter, setAttackCounter] = useState(0);
  const [superAttackCounter, setSuperAttackCounter] = useState(false);
  const [isWinning, setIsWinning] = useState(false);
  const [endGame, setEndGame] = useState(false);
  const [showEnd, setShowEnd] = useState(false);
  const [showText, setShowText] = useState(false);
  const [count, setCount] = useState(0);
  const [battleIsVisible, setBattleIsVisible] = useState(false);
  const [studyIsVisible, setStudyIsVisible] = useState(false);
  const [merengIsVisible, setMerengIsVisible] = useState(false);
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

  function handleLeftClick() {
    if (count !== 0) {
      setCount(count - 1)
    };
    if (count === 0) {
      setCount(10)
    };
  }

  function handleRightClick() {
    if (count !== 10) {
      setCount(count + 1)
    };
    if (count === 10) {
      setCount(0)
    };
  }

  useEffect(()=> {
    setIsWinning(getFightRes());
  }, [])

  useEffect(()=> {
    console.log(isWinning);
  }, [isWinning])

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

  function showBattle() {
    setBattleIsVisible(!battleIsVisible)
  };

  function showStudy() {
    setStudyIsVisible(!studyIsVisible)
  };

  function showMereng() {
    setMerengIsVisible(!merengIsVisible)
  };

  function showHiddenText() {
    setShowText(true)
  };

  return (
    <>
    <section className="aboutMe__content" id="AboutMe">
      <div className='aboutMe__text-block'>
        <div className='aboutMe__column'>
          <div className='aboutMe__column1'>
            <p className="aboutMe__name-text">
              Евгения
            </p>
            <p className="aboutMe__status-text">
              Фронтенд-разработчик, 34 года
            </p>
            <p className="aboutMe__text">
              Родилась и живу в Москве, получила две вышки: юридическое и менеджмент по профилю информационной безопасности. Замужем, есть дочь. Консультировала людей по настольным играм, работала следователем (ошибки юности), кондитер 4 разряда; последние годы работала корректором-документоведом на хорошей зарплате. Переучиваюсь на веб-разработчика, чтобы привязать зарплату к универсальному языку и перекрасить волосы в синий навсегда.
            </p>
            <a className="aboutMe__link" href="https://github.com/krokodila888" target="_blank">
              Мой GitHub
            </a>

          <div className='aboutMe__column'>
          
          <p className="aboutMe__text">
            Тут будет убедительный текст про то, почему нанять Женечку - отличная идея (а заодно демонстрация для друзей: лендинг это несложно! Давайте быстрее, а то я найду работу и акция "лендинг за пиццу" закончится навсегда).
          </p>
          <p 
            className="aboutMe__text aboutMe__text1" 
            onClick={showHiddenText}>
            Так почему же?
          </p>
          {showText && 
          <>
            <p className="aboutMe__text">
              Женечка классная. Нет, ну правда.
            </p>
            <p className="aboutMe__text">
              А еще Женечка адекватная, быстро учится и чертовски много работает. <br/>И вот еще...
            </p>
          </>}
        </div> 
          </div>
        </div>        
        <div className='aboutMe__column'>
          <img 
            src={photo} 
            alt="Фото Женечки, ужасно симпатичное" 
            className="aboutMe__photo" 
          />
        </div>      
        </div>
        </section>
        <section className='slider'>
          <img 
            src={left} 
            alt="Стрелка влево в виде клавиши клавиатуры" 
            className="slider__btn" 
            onClick={handleLeftClick}
          />
          <div className='slider__container'>
            <img 
              src={points[count].pic} 
              alt="Айтишный мем" 
              className="slider__img" 
            />
            <p className='slider__text'>
              {points[count].text}
            </p>
          </div>
            <img 
            src={right} 
            alt="Стрелка право в виде клавиши клавиатуры" 
            className="slider__btn" 
            onClick={handleRightClick}
          />
        </section>
        <div className='aboutMe__content1'>
          <div className='aboutMe__column'>
          
          <p className="aboutMe__text">
            Не смотрите на код этого лендинга, он древний (но симпатичный)! В репозитории <a className="aboutMe__link" href="https://github.com/krokodila888" target="_blank">
              на Гитхабе
            </a> уже есть лучше. 
          </p>
          <p className="aboutMe__text">
            Тут живут демонстрационные кусочки для пет-проектов: механика боя для квеста с рандомайзерами, задел под фронт для изучения языка по карточкам и прелоадер-безешка. Оба уже реализованы лучше, чем тут, но эти штуки милые.
          </p>
          </div>
          <img 
              src={mem} 
              alt="Айтишный мем" 
              className="slider__img" 
            />
        </div>  
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
    {studyIsVisible && !battleIsVisible && !merengIsVisible && <CardsHolder/>}
    {merengIsVisible && !studyIsVisible && !battleIsVisible &&
      <section className="aboutMe__button-content">
        <Preloader isLoading={merengIsVisible}/>
      </section>
    }
    </>
  );
}  

export default AboutMe; 