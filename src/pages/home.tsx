import React,{useState} from 'react'
import style from '../style/Pstyles/home.module.css'
//component
import Navmenu from '../component/Navmenu'
import MyInfo from '../component/contents/MyInfo'
import Projects from '../component/contents/Projects'
import HomeContent from '../component/contents/HomeContent'
const Home = () => {

  
    return (
        <React.Fragment>
                <div className={style.nav}><Navmenu /></div>
            <div className={style.containerBackground} />
                <main className={style.homeContent}>
                <div className={style.eachContent}><HomeContent /></div>
                    <div className={style.eachContent}><MyInfo /></div>
                    <div className={style.eachContent}><Projects /></div>
                    
                </main>
        </React.Fragment>
    )
}

export default Home