import photo from "../../../images/photo1.jpg";
import { FC, useState } from "react";
import styles from './AboutMe.module.css';

const AboutMe: FC = () => {
  const [showText, setShowText] = useState(false);

  function showHiddenText() {
    setShowText(true);
  }

  return (
    <section className={styles.aboutMe__content} id="AboutMe">
      <div className={styles.aboutMe__textBlock}>
        <div className={styles.aboutMe__column}>
          <div>
            <p className={styles.aboutMe__nameText}>Евгения</p>
            <p className={styles.aboutMe__statusText}>
              <span className={styles.span_color2}>
                Фронтенд-разработчик
              </span>,
              35&nbsp;лет
            </p>
            <p className={styles.aboutMe__text}>
              Родилась и живу в Москве, отучилась на юриста и менеджера
              информационной безопасности. Замужем, есть дочь. Консультировала
              людей по настольным играм, работала следователем (ошибки юности),{" "}
              <span className={styles.span_color2}> 
                кондитер 4 разряда
              </span>;
              последние годы - корректор-документовед на хорошей зарплате.
              Переучиваюсь на веб-разработчика, чтобы привязать зарплату к
              универсальному языку и перекрасить волосы в{" "}
              <span className={styles.span_color3}>
                синий навсегда.
              </span>
            </p>
            <a
              className={styles.aboutMe__link}
              href="https://github.com/krokodila888"
              target="_blank"
            >
              Мой GitHub
            </a>
            <div className={styles.aboutMe__column}>
              <p className={styles.aboutMe__text}>
                Тут будет убедительный текст про то, почему нанять Женечку -
                отличная идея (а заодно демонстрация для друзей: лендинг это
                несложно! Давайте быстрее, а то я найду работу и акция "лендинг
                за пиццу" закончится навсегда).
              </p>
              <p
                className={`${styles.aboutMe__text} ${styles.aboutMe__text1}`}
                onClick={showHiddenText}
              >
                Так почему же?
              </p>
              {showText && (
                <>
                  <p className={styles.aboutMe__text}>
                    Женечка классная. Нет, ну правда.
                  </p>
                  <p className={styles.aboutMe__text}>
                    А еще Женечка адекватная, быстро учится и чертовски много
                    работает. <br />И вот еще...
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
        <div className={styles.aboutMe__column}>
          <img
            src={photo}
            alt="Фото Женечки, ужасно симпатичное"
            className={styles.aboutMe__photo}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
