import React, { useState } from 'react';
import style from '../style/componentStyle/nav.module.css';

// NavigationLink component
interface NavigationLinkProps {
  activeSection: string | null;
  section: string;
  showSection: (section: string, isAnimate: boolean) => void;
  label: string;
}

const NavigationLink: React.FC<NavigationLinkProps> = ({
  activeSection,
  section,
  showSection,
  label,
}) => {
  return (
    <li>
      <a
        className={activeSection === section ? 'active' : ''}
        href={`#${section}`}
        onClick={(e) => {
          e.preventDefault();
          showSection(`#${section}`, true);
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
        <img src="/src/assets/Tintin_profile-port.png" alt="mypic" />
        <div className={style.fullname}>Krittin Tragunejindarat<br />กฤติน ตระกูลจินดารัตน์</div>
      </div>
      <nav className={`${style.navBar} ${isNavActive ? style.active : ''}`}>
        <ul>
          <NavigationLink
            activeSection={activeSection}
            section="homecontent"
            showSection={showSection}
            label="Home"
          />
          <NavigationLink
            activeSection={activeSection}
            section="myinfo"
            showSection={showSection}
            label="My Info"
          />
          <NavigationLink
            activeSection={activeSection}
            section="projects"
            showSection={showSection}
            label="Projects"
          />
          <NavigationLink
            activeSection={activeSection}
            section="activities"
            showSection={showSection}
            label="Activities"
          />
          <NavigationLink
            activeSection={activeSection}
            section="contact"
            showSection={showSection}
            label="Contact"
          />
        </ul>
      </nav>
    </header>
  );
}

export default Navmenu;
