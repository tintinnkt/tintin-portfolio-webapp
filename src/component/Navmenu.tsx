import React, { useState } from 'react';
import style from '../style/componentStyle/nav.module.css';

// NavigationLink component
interface NavigationLinkProps {
  activeSection: string | null;
  section: string;
  showSection: (section: string, isAnimate: boolean) => void;
  label: string;
  setIsNavActive: (active: boolean) => void;
}

const NavigationLink: React.FC<NavigationLinkProps> = ({
  activeSection,
  section,
  showSection,
  label,
  setIsNavActive
}) => {
  return (
    <li>
      <a
        className={activeSection === section ? 'active' : ''}
        href={`#${section}`}
        onClick={(e) => {
          e.preventDefault();
          showSection(`#${section}`, true);
          setIsNavActive(false);
        }}
      >
        {label}
      </a>
    </li>
  );
};

// Navmenu component
interface NavmenuProps {
  activeSection: string | null;
  showSection: (section: string, isAnimate: boolean) => void;
}

const Navmenu: React.FC<NavmenuProps> = ({ activeSection, showSection }) => {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <header className={style.menuNav}>
      <div className={style.logoCon}>
        <img className={style.logo} src="https://cdn-icons-png.flaticon.com/512/4997/4997543.png" alt="" />
        <div className={style.name}>Tintinnkt</div>
      </div>
      <div className={`${style.hamburger} ${isNavActive ? style.active : ''}`} onClick={toggleNav}>
        <div className={style.line}></div>
        <div className={style.line}></div>
        <div className={style.line}></div>
      </div>
      <div className={style.profileCon}>
        <img src="../../public/picture/Tintin_nav.png" alt="mypic" />
        <div className={style.fullname}>Krittin Tragunejindarat<br />กฤติน ตระกูลจินดารัตน์</div>
      </div>
      <nav className={`${style.navBar} ${isNavActive ? style.active : ''}`}>
        <ul>
          {/* <NavigationLink
            activeSection={activeSection}
            section="homecontent"
            showSection={showSection}
            label="Home"
            setIsNavActive={setIsNavActive}
          /> */}
          <NavigationLink
            activeSection={activeSection}
            section="myinfo"
            showSection={showSection}
            label="My Info"
            setIsNavActive={setIsNavActive}
          />
          <NavigationLink
            activeSection={activeSection}
            section="projects"
            showSection={showSection}
            label="Projects"
            setIsNavActive={setIsNavActive}
          />
          <NavigationLink
            activeSection={activeSection}
            section="contests"
            showSection={showSection}
            label="Contests"
            setIsNavActive={setIsNavActive}
          />
          <NavigationLink
            activeSection={activeSection}
            section="activities"
            showSection={showSection}
            label="Activities"
            setIsNavActive={setIsNavActive}
          />
          <NavigationLink
            activeSection={activeSection}
            section="contact"
            showSection={showSection}
            label="Contact"
            setIsNavActive={setIsNavActive}
          />
        </ul>
      </nav>
    </header>
  );
}

export default Navmenu;
