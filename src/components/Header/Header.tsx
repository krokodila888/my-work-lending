import icon from '../../images/icon.png';
import React, { FC, useEffect, useState } from "react";
import './header.css';

const Header: FC = () => {  

  return (
    <header className='header'>
      <div className='header__content'>
        <h2 className="header__title">(Не)рабочее пространство Женечки</h2>
        <img src={icon} alt="Иконка" className='header__icon'/>
      </div>
    </header>
  );
}  

export default Header; 