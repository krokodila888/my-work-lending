import { FC, useState } from "react";
import AboutMe from "./AboutMe/AboutMe";
import styles from './Main.module.css';
import mem from "../../images/mem1.jpg";
import Preloader from "./Preloader/Preloader";
import Promo from "./Promo/Promo";
import BattleBlock from "./BattleBlock/BattleBlock";
import CardsHolder from "./CardsHolder/CardsHolder";

const Main: FC = () => {
  const [battleIsVisible, setBattleIsVisible] = useState(false);
  const [studyIsVisible, setStudyIsVisible] = useState(false);
  const [merengIsVisible, setMerengIsVisible] = useState(false);

  function showBattle() {
    setBattleIsVisible(!battleIsVisible);
  }

  function showStudy() {
    setStudyIsVisible(!studyIsVisible);
  }

  function showMereng() {
    setMerengIsVisible(!merengIsVisible);
  }

  return (
    <main className={styles.main__content}>
      <AboutMe />
      <Promo />
      <section className={styles.main__section}>
        <div className={styles.main__column}>
          <p className={styles.main__text}>
            Тут живут демонстрационные кусочки для пет-проектов: механика боя
            для квеста с рандомайзерами, задел под фронт для изучения языка по
            карточкам и прелоадер-безешка. Оба уже реализованы лучше, чем здесь,
            но эти штуки милые.
          </p>
          <p className={styles.main__text}>
            Если захочется посмотреть в деталях - вот{" "}
            <a
              className={styles.main__link}
              href="https://creating-things.online/"
              target="_blank"
            >
              словарь с механиками повтрения
            </a>
            , а тут 
            {" "}<a
              className={styles.main__link}
              href="https://just-a-project.site/"
              target="_blank"
            >
              визуальная новелла в жанре (пост)постапокалипсиса
            </a>. На{" "}
            <a
              className={styles.main__link}
              href="https://github.com/krokodila888"
              target="_blank"
            >
              моем Гитхабе
            </a>{" "}есть их код.
          </p>
          <p className={styles.main__text}>
            И помните, что взять Женечку на работу - отличная идея! 🐱
          </p>
        </div>
        <img 
          src={mem} 
          alt="Айтишный мем" 
          className={styles.slider__img2} 
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
      {studyIsVisible && !battleIsVisible && !merengIsVisible && (
        <CardsHolder />
      )}
      {merengIsVisible && !studyIsVisible && !battleIsVisible && (
        <section className={styles.main__buttonContent}>
          <Preloader isLoading={merengIsVisible} />
        </section>
      )}
    </main>
  );
};

export default Main;
