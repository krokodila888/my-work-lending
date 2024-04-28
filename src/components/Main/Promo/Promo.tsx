import { FC, useState } from "react";
import left from '../../../images/left.png';
import right from '../../../images/right.png';
import './Promo.css';
import { points } from '../../../utils/constants';

const Promo: FC = () => {

  const [count, setCount] = useState(0);

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

  function colorLastWord(item: string) {
    let start = item.split(' ');
    let last = start.pop();
    let first = start.join(' ') + ' ';
    return (<>
      <h3 className="slide__title">
        {first}<span className="span_color">{last}</span>
      </h3></>
    )
  }

  return (
    <section className='slider'>
          <img 
            src={left} 
            alt="Стрелка влево в виде клавиши клавиатуры" 
            className="slider__btn slider__btn_left" 
            onClick={handleLeftClick}
          />
          <div className='slider__container'>
            <img 
              src={points[count].pic} 
              alt="Айтишный мем" 
              className="slider__img" 
            />
            <div className="slide__textblock">
              {colorLastWord(points[count].title)}
              <p className='slider__text'>
                {points[count].text1}
              </p>
              {points[count].text2 &&
              <p className='slider__text'>
                {points[count].text2}
              </p>
            }
            </div>
          </div>
          <img 
            src={right} 
            alt="Стрелка право в виде клавиши клавиатуры" 
            className="slider__btn slider__btn_right" 
            onClick={handleRightClick}
          />
        </section>
  );
}  

export default Promo; 