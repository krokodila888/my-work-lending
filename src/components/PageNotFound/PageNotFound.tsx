import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { pics } from '../../utils/constants';
import left from '../../images/arrow-l.png';
import right from '../../images/arrow-r.png';
import './PageNotFound.css';

const PageNotFound: FC = () => { 

  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  function goBack() {
    navigate(-1);
  }

  function handleLeftClick() {
    if (count !== 0) {
      setCount(count - 1)
    };
    if (count === 0) {
      setCount(5)
    };
  }

  function handleRightClick() {
    if (count !== 5) {
      setCount(count + 1)
    };
    if (count === 5) {
      setCount(0)
    };
  }

  return (
    <section className="pageNotFound">
      <h3 className="pageNotFound__title">404</h3>
      <p 
        className="pageNotFound__text pageNotFound__link" 
        onClick={goBack} >
          Назад
      </p>
      <p className="pageNotFound__text">
        Тут ничего нет. Но раз вы здесь, то вот еще пара мемов
      </p>
      <div className="pageNotFound__imgBlock">
        <img 
          src={left} 
          alt="Стрелка влево" 
          className="pageNotFound__btn pageNotFound__btn_left" 
          onClick={handleLeftClick}
        />
        <img 
          src={pics[count]} 
          alt="Айтишный мем" 
          className="pageNotFound__img" 
        />
        <img 
            src={right} 
            alt="Стрелка впрво" 
            className="pageNotFound__btn pageNotFound__btn_right" 
            onClick={handleRightClick}
          />
      </div>
    </section>
  )
}

export default PageNotFound;
