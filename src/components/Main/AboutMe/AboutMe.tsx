import photo from '../../../images/photo1.jpg';
import { FC, useState } from "react";
import './AboutMe.css';

const AboutMe: FC = () => {

  const [showText, setShowText] = useState(false);


  function showHiddenText() {
    setShowText(true)
  };

  return (
    <section className="aboutMe__content" id="AboutMe">
      <div className='aboutMe__text-block'>
        <div className='aboutMe__column'>
          <div className='aboutMe__column1'>
            <p className="aboutMe__name-text">
              Евгения
            </p>
            <p className="aboutMe__status-text">
            <span className='span_color2'>Фронтенд-разработчик</span>, 35&nbsp;лет
            </p>
            <p className="aboutMe__text">
              Родилась и живу в Москве, отучилась на юриста и менеджера информационной безопасности. Замужем, есть дочь. Консультировала людей по настольным играм, работала следователем (ошибки юности), <span className='span_color2'> кондитер 4 разряда</span>; последние годы - корректор-документовед на хорошей зарплате. Переучиваюсь на веб-разработчика, чтобы привязать зарплату к универсальному языку и перекрасить волосы в <span className='span_color3'>синий навсегда.</span>
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
  );
}  

export default AboutMe; 
