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
      </div>
    </React.Fragment>
  )
}

export default MyInfo