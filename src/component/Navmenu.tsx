import React, { useState } from 'react';
import style from './nav.module.css';

function Navmenu() {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <header>
      <div className={style.logo}>Soft</div>
      <div className={style.name}>Krittin Tragunejindarat</div>
      <div className={`${style.hamburger} ${isNavActive ? style.active : ''}`} onClick={toggleNav}>
        <div className={style.line}></div>
        <div className={style.line}></div>
        <div className={style.line}></div>
      </div>
      <nav className={`${style.navBar} ${isNavActive ? style.active : ''}`}>
        <ul>
          <li><a href="" className={`${style.active} ${style['nav-menu']}`}>Home</a></li>
          <li><a href="">Page1</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navmenu;
