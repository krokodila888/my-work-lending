import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { pics } from '../../utils/constants';
import left from '../../images/arrow-l.png';
import right from '../../images/arrow-r.png';
import styles from './PageNotFound.module.scss';

const PageNotFound: FC = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  function goBack() {
    navigate(-1);
  }

  function handleLeftClick() {
    if (count !== 0) {
      setCount(count - 1);
    }
    if (count === 0) {
      setCount(5);
    }
  }

  function handleRightClick() {
    if (count !== 5) {
      setCount(count + 1);
    }
    if (count === 5) {
      setCount(0);
    }
  }

  return (
    <section className={styles.pageNotFound}>
      <h3 className={styles.pageNotFound__title}>404</h3>
      <p
        className={`${styles.pageNotFound__text} ${styles.pageNotFound__link}`}
        onClick={goBack}
      >
        Назад
      </p>
      <p className={styles.pageNotFound__text}>
        Тут ничего нет. Но раз вы здесь, то вот еще пара мемов
      </p>
      <div className={styles.pageNotFound__imgBlock}>
        <img
          src={left}
          alt='Стрелка влево'
          className={`${styles.pageNotFound__btn} ${styles.pageNotFound__btn_left}`}
          onClick={handleLeftClick}
        />
        <img
          src={pics[count]}
          alt='Айтишный мем'
          className={styles.pageNotFound__img}
        />
        <img
          src={right}
          alt='Стрелка впрво'
          className={`${styles.pageNotFound__btn} ${styles.pageNotFound__btn_right}`}
          onClick={handleRightClick}
        />
      </div>
    </section>
  );
};

export default PageNotFound;
