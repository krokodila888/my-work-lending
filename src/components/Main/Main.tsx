import { FC, useState } from "react";
import AboutMe from './AboutMe/AboutMe';
import './Main.css';
import mem from '../../images/mem1.jpg';
import Preloader from './Preloader/Preloader.js';
import Promo from './Promo/Promo';
import BattleBlock from './BattleBlock/BattleBlock';
import CardsHolder from './CardsHolder/CardsHolder';

const Main: FC = () => {

  const [battleIsVisible, setBattleIsVisible] = useState(false);
  const [studyIsVisible, setStudyIsVisible] = useState(false);
  const [merengIsVisible, setMerengIsVisible] = useState(false);

  function showBattle() {
    setBattleIsVisible(!battleIsVisible)
  };

  function showStudy() {
    setStudyIsVisible(!studyIsVisible)
  };

  function showMereng() {
    setMerengIsVisible(!merengIsVisible)
  };

  return (
    <main className="main__content">
      <AboutMe/>
      <Promo />
      <section className='aboutMe__content1'>
        <div className='aboutMe__column2'>
          <p className="aboutMe__text">
            Не смотрите на код этого лендинга, он древний (но симпатичный)! <br/> В репозитории <a className="aboutMe__link" href="https://github.com/krokodila888" target="_blank">
              на Гитхабе
            </a> уже есть лучше. 
          </p>
          <p className="aboutMe__text">
            Тут живут демонстрационные кусочки для пет-проектов: механика боя для квеста с рандомайзерами, задел под фронт для изучения языка по карточкам и прелоадер-безешка. Оба уже реализованы лучше, чем тут, но эти штуки милые.
          </p>
          <p className="aboutMe__text">
            И помните, что взять Женечку на работу - недурная идея! 🐱
          </p>
          </div>
          <img 
              src={mem} 
              alt="Айтишный мем" 
              className="slider__img2" 
            />
        </section> 
        <BattleBlock 
          showBattle={showBattle}
          showStudy={showStudy}
          showMereng={showMereng}
          battleIsVisible={battleIsVisible}
          studyIsVisible={studyIsVisible}
          merengIsVisible={merengIsVisible}
        />
      {studyIsVisible && !battleIsVisible && !merengIsVisible && 
        <CardsHolder/>
      }
      {merengIsVisible && !studyIsVisible && !battleIsVisible &&
        <section className="aboutMe__button-content">
          <Preloader isLoading={merengIsVisible}/>
        </section>
      }
    </main>
  );
}  

export default Main;
