import React, { Children } from 'react'
import style from '../../style/contentStyle/Myinfo.module.css'

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
  // Define any props specific to MyInfo here if needed
};
function MyInfo({ }: Props) {
  return (
    <React.Fragment>
      <div className={style.container}>
        <ContentHeader name="My Personal Info" />
        <main className={style.contents}>
          <div className={style.name}>
            <ul className={style.info}>
              <li><Text label="Thai Name"> นายกฤติน ตระกูลจินดารัตน์</Text></li>
              <li><Text label="English Name">Mr.Krittin Tragunejindarat</Text></li>
              <li><Text label="Nickname">Tintin (ตินติน)</Text></li>
              <li><Text label="Age">18 years old</Text></li>
              <li><Text label='Sex'>Male</Text></li>
            </ul>
            <div>
              <PictureSlide />
            </div>
            <ul>
              <li><Text label='Nationality'>Thai </Text></li>
              <li><Text label='Place of Birth'>Bangkok</Text></li>
            </ul>

            <ul>
              <li><Text label='School'> Debsirin School</Text></li>
              <li><Text label='Study Plan'> Science-Math</Text></li>
              <li><Text label='GPAX'>3.90 (5 semesters)</Text></li>
            </ul>



          </div>
        </main>
      </div>
    </React.Fragment>
  )
}

export default MyInfo