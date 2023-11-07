import React, { useState, useEffect } from 'react';
import style from '../style/Pstyles/home.module.css';
import Navmenu from '../component/Navmenu';

//pages
import MyInfo from '../component/contents/MyInfo';
import Projects from '../component/contents/Projects';
import HomeContent from '../component/contents/HomeContent';
import Contest from '../component/contents/Contest';
import Contact from '../component/contents/Contact';
import Activities from '../component/contents/Activities';

const Home = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const checkSection = () => {
    const sections = document.querySelectorAll(`.${style.eachContent}`);
    sections.forEach((section) => {
      const topEdge = section.getBoundingClientRect().top + window.scrollY - 80;
      const bottomEdge = topEdge + section.clientHeight;
      const wScroll = window.scrollY;

      if (topEdge < wScroll && bottomEdge > wScroll) {
        const currentId = section.getAttribute('data-section');
        setActiveSection(currentId);
      }
    });
  };

  useEffect(() => {
    checkSection();
    window.addEventListener('scroll', checkSection);

    return () => {
      window.removeEventListener('scroll', checkSection);
    };
  }, []);

  const showSection = (section: string, isAnimate: boolean) => {
    if (section) {
      const direction = section.replace('#', '');
      const reqSection = document.querySelector(`[data-section="${direction}"]`);
      const reqSectionPos = (reqSection?.getBoundingClientRect().top ?? 0) + window.scrollY;

      if (isAnimate) {
        window.scrollTo({
          top: reqSectionPos,
          behavior: 'smooth',
        });
      } else {
        window.scrollTo(0, reqSectionPos);
      }

      // Modify the URL without adding to history
      window.history.replaceState(null, '', window.location.pathname + `${""}`);
    }
  };


  return (
    <React.Fragment>
      <div className={style.nav}>
        <Navmenu activeSection={activeSection} showSection={showSection} />
      </div>
      <div className={style.containerBackground} />
      <main className={style.homeContent}>
        <div className={style.eachContent} data-section="homecontent"><HomeContent /></div>
        <div className={style.eachContent} data-section="myinfo"><MyInfo /></div>
        <div className={style.eachContent} data-section="projects"><Projects /> </div>
        <div className={style.eachContent} data-section="contests"><Contest /></div>
        <div className={style.eachContent} data-section="activities"><Activities/></div>
        <div className={style.eachContent} data-section="contact"><Contact /></div>
      </main>
      <div className={style.bottom} />
    </React.Fragment>
  );
};

export default Home;
