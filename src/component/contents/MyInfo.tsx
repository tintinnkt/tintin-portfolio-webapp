import React from 'react'
import style from '../../style/contentStyle/Myinfo.module.css'

import mypic from '../../assets/picDerectory/profile.json'
//?component
import ContentHeader from '../ContentHeader'
import PictureSlide from './PictureSlide';

type TextProps = {
  label: string;
  children: string;
};
const podcastSrcs = [
  'https://open.spotify.com/embed/episode/2eMPZAg6eHHTF8YSKu5eRF?utm_source=generator',
  'https://open.spotify.com/embed/episode/4ODXrdVhbGjcKEg476Z7wQ?utm_source=generator',
  'https://open.spotify.com/embed/episode/5dJukBdd4q64jwfocwAwgl?utm_source=generator',
  'https://open.spotify.com/embed/episode/5nn0IuSM8v79gyZpyGmJAS?utm_source=generator',
];
const trackSrcs = [
  'https://open.spotify.com/embed/track/5sXuZdRY3HYCDIuZGjaUhB?utm_source=generator',
  'https://open.spotify.com/embed/track/0fHmpM00nb8arza6MMvM6i?utm_source=generator',
  'https://open.spotify.com/embed/track/1tKS0JOuzOOjHI2UzFg90x?utm_source=generator',
  'https://open.spotify.com/embed/track/4KBegMBVyHsfC7fPOztTzV?utm_source=generator',
  'https://open.spotify.com/embed/track/3V04nXHMTLytI0hV1Rjwps?utm_source=generator',
];



const Text = ({ label, children }: TextProps) => {
  return (
    <div className={style.TextCon}>
      {label ? <div className={style.TextLabel}>{label}</div> : null}
      {children ? <div className={style.TextChild}>{children}</div> : null}
    </div>
  );
};

type Props = {

};
function MyInfo({ }: Props) {
  return (
    <React.Fragment>
      <div className={style.container}>
        <ContentHeader name="My Personal Information" componentProp={null} />
        <main className={style.contents}>
          <div className={style.name}>
            <ul className={style.info}>
              <li className={style.listTopic}>Personal</li>
              <li><Text label="Thai Name"> นายกฤติน ตระกูลจินดารัตน์</Text></li>
              <li><Text label="English Name">Mr.Krittin Tragunejindarat</Text></li>
              <li><Text label="Nickname">Tintin (ตินติน)</Text></li>
              <li><Text label="Age">18 years old</Text><Text label='Sex'>Male</Text></li>
              <li><a href=""><Text label='Hobby'>listen to musics, podcasts, learn language</Text></a></li>
            </ul>
            <div className={style.picCon}>
              <PictureSlide images={mypic} style={{ width: '100%', height: '370px' }} />
            </div>

            <ul className={style.detail}>
              <li className={style.listTopic}>Address</li>
              <li><Text label='Nationality'>Thai </Text></li>
              <li><Text label='Place of Birth'>Bangkok</Text></li>
            </ul>
           <div className={style.aa1}>
            <ul className={style.grade}>
              <li className={style.listTopic}>Education</li>
              <li><Text label='High School'> Debsirin School</Text></li>
              <li><Text label='Study Plan'> Science-Math</Text></li>
              <li><Text label='GPAX'>3.90 (5 semesters)</Text></li>
              <li><Text label='Language'>Thai (ไทย) | English | Chinese《 華語 》</Text></li>
            </ul>
       </div>
          </div>
        </main>

        <main className={`${style.contents} ${style.additionContent}` } >
        <div className={style.Topic}>Hobby</div>
        <div className={style.hobby}>

          <ul className={style.song}>
            <li><Text label='Songs' > </Text></li>
            <li className={style.playlist}>
              <iframe
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/playlist/0nY81T4qRcFAE1Ox7NrSQ2?utm_source=generator"
                width="100%"
                height="420"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </li>
            <li>
              {trackSrcs.map((src, index) => (
                <li key={index}>
                  <iframe
                    style={{ borderRadius: '12px' }}
                    src={src}
                    width="100%"
                    height={100}
                    frameBorder={0}
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  />
                </li>
              ))}
            </li>
          </ul>
          <ul className={style.hobby}>
            <li><Text label='Podcasts' > </Text></li>
            {podcastSrcs.map((src, index) => (
              <li className={style.podcasts} key={index}>
                <iframe
                  style={{ borderRadius: '12px' }}
                  src={src}
                  width="97%"
                  height={235.5}
                  frameBorder={0}
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </li>
            ))}
          </ul>
        </div>
        </main>






      </div>
    </React.Fragment>
  )
}

export default MyInfo