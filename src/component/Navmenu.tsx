import { useState } from 'react';
import style from '../style/componentStyle/nav.module.css'


function Navmenu() {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive(()=>!isNavActive);
  };

  return (
    <header className={style.menuNav}>
      <div className={style.logoCon}>
      <img className={style.logo} src="https://cdn-icons-png.flaticon.com/512/4997/4997543.png " alt="" />
      <div className={style.name}>Tintinnkt</div>
      </div>
      <div className={`${style.hamburger} ${isNavActive ? style.active : ''}`} onClick={toggleNav}>
        <div className={style.line}></div>
        <div className={style.line}></div>
        <div className={style.line}></div>
      </div>
      <div className={style.profileCon}>
        <img src="/src/assets/Tintin_profile-port.png" alt="mypic" />
        <div className={style.fullname}>Krittin Tragunejindarat<br />กฤติน ตระกูลจินดารัตน์</div>
      </div>
      <nav className={`${style.navBar} ${isNavActive ? style.active : ''}`}>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="" className={`${style.active} ${style['nav-menu']}`}>My Info</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Activities</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navmenu;
