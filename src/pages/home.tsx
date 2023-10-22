import React,{useState} from 'react'
import style from '../style/Pstyles/home.module.css'
//component
import Navmenu from '../component/Navmenu'
import MyInfo from '../component/contents/MyInfo'
import Projects from '../component/contents/Projects'
const Home = () => {
    const [activeSection, setActiveSection] = useState<string>('');

  // Handler for setting the active section
  const handleSetActive = (to:string) => {
    setActiveSection(to);
  };
    return (
        <React.Fragment>
                <div className={style.nav}><Navmenu /></div>
            <div className={style.containerBackground} />
                <main className={style.homeContent}>
                    <div className={style.eachContent}><MyInfo /></div>
                    <div className={style.eachContent}><Projects /></div>
                    
                </main>
        </React.Fragment>
    )
}

export default Home