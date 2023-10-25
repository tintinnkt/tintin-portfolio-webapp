import React, { Children } from 'react'
import style from '../../style/contentStyle/Myinfo.module.css'

//?component
import ContentHeader from '../ContentHeader'
import PictureSlide from './PictureSlide';


type TextProps = {
  label: string;
  children: string;
};
const images = [
  {
    src: 'https://i.pinimg.com/564x/81/68/2f/81682fb8437b89d61af4edaa0cad8259.jpg',
  },
  {
    src: 'https://i.pinimg.com/564x/8c/2e/df/8c2edf472a94c5ad3e598eaa8cd2edcf.jpg',
  },
  {
    src: 'https://i.pinimg.com/564x/07/71/de/0771def6ce01b3346836869482e4d86b.jpg',
  },
  {
    src: 'https://i.pinimg.com/564x/23/e2/c6/23e2c6533dc1eec933c700c15fe394fb.jpg',
    description: ""
  },
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
        <ContentHeader name="My Personal Information" />
        <main className={style.contents}>
          <div className={style.name}>
            <ul className={style.info}>
              <li><Text label="Thai Name"> นายกฤติน ตระกูลจินดารัตน์</Text></li>
              <li><Text label="English Name">Mr.Krittin Tragunejindarat</Text></li>
              <li><Text label="Nickname">Tintin (ตินติน)</Text></li>
              <li><Text label="Age">18 years old</Text></li>
              <li><Text label='Sex'>Male</Text></li>
            </ul>
            <div className={style.picCon}>
              <PictureSlide images={images} style={{ width: '100%', height: '370px' }}/>
            </div>
            <ul className={style.name}>
              <li><Text label='Nationality'>Thai </Text></li>
              <li><Text label='Place of Birth'>Bangkok</Text></li>
            </ul>

            <ul className={style.name}>
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