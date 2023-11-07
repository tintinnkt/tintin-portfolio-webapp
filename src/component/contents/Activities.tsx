import React, { useState } from 'react';
import style from '../../style/contentStyle/activities.module.css';
import ContentHeader from '../ContentHeader';

type Props = {};

const Activities: React.FC<Props> = (props: Props) => {
    const actArr = [<Ntnu />, <StudentConcil />]
    const [selectedContent, setSelectedContent] = useState(0);

    function handleContentSelect(contentIndex: number) {
        setSelectedContent(contentIndex);
        console.log(contentIndex)
    }
    function abs(x: number) {
        return (x > 0) ? x : -x;
    }

    return (
        <div className={style.container}>
            <ContentHeader name="Activities" componentProp={null} />
            <main className={style.contents}>
                <div className={style.ActivitiesDisplay}>
                    {actArr[selectedContent]}
                </div>
                <div className={style.ActivitiesSelector}>
                    <ul>
                        <li
                            className={`${style.prev} ${style.mover}`}
                            onClick={() => handleContentSelect(selectedContent - 1 < 0 ? 1 : selectedContent - 1)}
                        />
                        {actArr.map((_, index) => (
                            <li
                                key={index}
                                onClick={() => handleContentSelect(index)}
                                className={`${selectedContent === index ? style.active : ''} ${style.selector}`}
                            />
                        ))}
                        <li
                            className={`${style.next} ${style.mover}`}
                            onClick={() => handleContentSelect((selectedContent + 1) % actArr.length)}
                        />
                    </ul>
                </div>
            </main>
        </div>
    );
};

export default Activities;

const Ntnu: React.FC<Props> = () => {
    const [showText,setShowText]=useState(false)
    return (
        <div className={`${style.contentCon} ${style.NtnuBg}`}>
            <header className={style.contentTopic}>Taiwan NTNU Camp</header>
            <div className={style.content}>
                <div className={style.detail}>
                <p>I had the opportunity to attend a Chinese language camp in Taiwan. I had some basic knowledge of Chinese before, but after attending the camp, I was able to listen, speak, read, and write Chinese much better. This was partly due to the opportunity to use Chinese in everyday life with my friends, teachers, and local people. I also learned about the lifestyle and culture of Taiwan, such as food, manners, customs, traditions, and values.{ showText?<span>I also saw how technology is used in everyday life, such as the public transportation system with good user experience. I also visited tourist attractions and museums, and had the opportunity to visit leading universities in Taiwan, such as National Taipei University of Technology (NTUT).
                <p>Overall, I was very impressed with the experience I had at the camp. My Chinese has improved significantly, and I also saw how technology in Taiwan can be applied to Thailand. <span className={style.showText}onClick={()=>setShowText(false)}>showless....</span></p></span>: <span className={style.showText} onClick={()=>setShowText(true)}>...showmore</span> }</p>
                </div>
            </div>
        </div>
    )
}
const StudentConcil: React.FC<Props> = () => {
    const [showText,setShowText]=useState(false)
    return (
        <div className={`${style.contentCon} ${style.Debsirin}`}>
            <header className={style.contentTopic}>Debsirin's Student Concil</header>
            <div className={style.content}>
                <div className={style.detail}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet laudantium quis ab, consectetur sapiente, veritatis necessitatibus omnis maxime saepe, id natus vero. Consequuntur veritatis numquam natus doloremque temporibus, dolore quae iure tempore dolorem minus ab officia? Id excepturi in ipsam. { showText?<span>Sit adipisci libero deserunt consectetur saepe reiciendis nesciunt?
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, debitis. <span className={style.showText}onClick={()=>setShowText(false)}>showless....</span></p></span>: <span className={style.showText} onClick={()=>setShowText(true)}>...showmore</span> }</p>
                </div>
            </div>
        </div>
    )
}