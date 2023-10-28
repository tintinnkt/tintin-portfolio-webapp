import React from 'react'
import style from '../../style/contentStyle/Contest.module.css'
import posn from '../../assets/picDerectory/posn.json'
//component
import ContentHeader from '../ContentHeader'
import PictureSlide from './PictureSlide'
type Props = {}

const Contest = (props: Props) => {
    return (
        <div className={style.container}>
            <ContentHeader name='Contests' componentProp={null} />
            <main className={style.content}>
                <div className={style.posn}>
                    <div className={style.picCon}>
                    <PictureSlide images={[...posn.posn1, ...posn.posn2]} style={{height:'400px'}}/>
                    </div>
                    <div className={style.certificate}>
                        <img src="src/assets/contestPics/POSN/certificate/certificate-posn1.png" alt="posn1" />
                        <img src="src/assets/contestPics/POSN/certificate/certificate-posn2.png" alt="posn2" />
                    </div>
                    <p></p>
                    <p></p>

                </div>
                <div className={style.ku01}>

                </div>

            </main>
        </div>
    )
}

export default Contest