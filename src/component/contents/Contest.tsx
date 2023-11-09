import  { useState } from 'react'
import style from '../../style/contentStyle/Contest.module.css'
import posn from '../../assets/picDerectory/posn.json'
//component
import ContentHeader from '../ContentHeader'
import PictureSlide from './PictureSlide'



const Contest = () => {

    const [showMore, setShowMore] = useState(false);

    const toggleReadMore = () => {
        setShowMore(!showMore);
    };
    const [showMorePOSN, setShowMorePOSN] = useState(false);
    const toggleReadMorePOSN = () => {
        setShowMorePOSN(!showMorePOSN);
    };

    return (
        <div className={style.container}>
            <ContentHeader name='Contests' componentProp={null} />
            <main className={style.content}>
                <div className={style.topicContest}>POSN Camp 1 && Camp 2</div>
                <div className={style.posn}>
                    <div className={style.detail}>
                        <div className={`${style.picCon} + ${style.picConPC} `}><PictureSlide images={posn} style={{ height: '360px' }} /></div>
                        <div className={`${style.picCon} + ${style.picConPhone} `}><PictureSlide images={posn} style={{ height: '200px' }} /></div>

                        <p>Through my participation in POSN camp1 and POSN camp2, I have gained a strong foundation in programming concepts and techniques. In the Camp 1st, I learned the basics of C programming, including variable types, operators, conditional statements, loops, arrays, strings, functions, pointers, and file management. This foundational knowledge laid the groundwork for my subsequent exploration of C++ programming in the Camp 2nd. There, I delved into {!showMorePOSN ? <span className={style.show} onClick={toggleReadMorePOSN}>...Read More</span> :
                            <span>the intricacies of data structures, such as linked lists, stacks, queues, heaps, and binary search trees, and gained proficiency in selecting appropriate algorithms for various problem-solving scenarios. My exposure to algorithms encompassed brute force algorithms, recursion, dynamic programming, greedy algorithms, Dijkstra's algorithm, and Big-O analysis of algorithms. These intensive learning experiences have equipped me with a comprehensive understanding of programming principles and practices, enabling me to confidently tackle complex programming challenges.<span className={style.show} onClick={toggleReadMorePOSN}>Read Less...</span></span>}</p>
                    </div>
                    <div className={style.certificate}>
                        <div className={style.picCon}>
                            <img src="/picture/contestPics/POSN/certificate/certificate-posn1.png" alt="posn1" />
                            <div className={style.description}>เมื่อวันที่ 6-22 ตุลาคม พ.ศ.2565 <br />
                                ศูนย์โอลิมปิกวิชาการ สอวน. ค่าย 1 วิชาคอมพิวเตอร์  <br />ปีการศึกษา 2565
                                โรงเรียนสตรีวัดมหาพฤฒาราม ในพระบรมราชินูปถัมภ์</div>
                        </div>
                        <div className={style.picCon}>
                            <img src="/picture/contestPics/POSN/certificate/certificate-posn2.png" alt="posn2" />
                            <div className={style.description}>เมื่อวันที่ 20 มีนาคม - 5 เมษายน พ.ศ.2566 <br />
                                โครงการส่งเสริมโอลิมปิกวิชาการและพัฒนามาตรฐานวิทยาศาสตร์คณิตศาสตร์
                                (สอวน.) <br />วิชาคอมพิวเตอร์ ค่าย 2 ปีการศึกษา 2565
                                คณะวิทยาศาสตร์ มหาวิทยาลัยเกษตรศาสตร์</div>
                        </div>
                    </div>

                </div>

            </main>
            <main className={style.content}>
                <div className={style.topicContest}>KU01 Programming Contest</div>
                <div className={style.ku01}>
                    <div className={style.mainContent}>
                        <div className={style.certificate}>
                            <div className={style.picCon}><img src="/picture/contestPics/KU01/ku01_certificate.png" alt="" />
                                <div className={style.description}>
                                    KU01 การทดสอบความสามารถในการแก้ปัญหาโดยการเขียนโปรแกรม <br />เมื่อวันที่ 17 ธันวาคม พ.ศ.2565 <br />
                                    คณะวิศวะกรรมศาสตร์ ณ มหาวิทยาลัยเกษตรศาสตร์</div></div></div>
                        <div className={style.detail}>
                            <p>
                                <p>On December 17, 2023, I participated in the KU01 Programming Contest, hosted by the Department of Computer Engineering at Kasetsart University. I trained myself with C++ and passed the online round to reach the onsite round at Kasetsart University.</p>                 <p>At the onsite round, I met with fellow students who are passionate about solving problems with programming. We exchanged ideas and experiences, and I learned a lot about solving different types of programming problems. Even though I did not reach the final round, I am proud to have participated in the contest and gained valuable experience.{!showMore ? <span className={style.show} onClick={toggleReadMore}>...Read More</span> : null}</p>
                                {showMore ? <><p>In addition to the contest, I also attended a guidance hosted by the Department of Computer Engineering. The seminar was very helpful for me to plan my future studies and learn more about the field of computer science.</p>
                                    <p>At the end of the contest, I had the opportunity to listen to a presentation of research projects by graduate students. The presentation inspired me to pursue further studies and develop my programming problem-solving skills.<span className={style.show} onClick={toggleReadMore}>Read Less...</span></p></> : null}
                            </p>
                        </div>
                    </div>
                    <div className={style.subContent}>
                        <div className={style.picCon}>
                            <img className={style.insideImg} src="src/assets/contestPics/KU01/image23412342.png" alt="" />
                            <img src="https://media.discordapp.net/attachments/1138722166758707321/1168128756712489021/IMG_20221217_140738.jpg?ex=6550a3ae&is=653e2eae&hm=b609c1893229a7d1bd620f097f718d77960548721d12e6013dd8520f1f4681dc&=&width=676&height=507" alt="" />
                            <div className={style.description}>Post-competition career guidance and presentation of research projects by students from the Department of Computer Engineering at Kasetsart University</div>
                        </div>
                    </div>

                </div>

            </main>
        </div>
    )
}

export default Contest