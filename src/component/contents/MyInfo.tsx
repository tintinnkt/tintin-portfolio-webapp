import React from 'react'
import style from '../../style/contentStyle/Myinfo.module.css'
import ContentHeader from '../ContentHeader'

type Props = {}

function MyInfo({}: Props) {
  return (
    <React.Fragment>
        <div className={style.container}>
          <ContentHeader name="My Personal Info"/>
          <main className={style.contents}>
          <div className={style.name}>
            {/* <h2>Name</h2> */}
            <ul>
              <li>Thai Name : นายกฤติน ตระกูลจินดารัตน์</li>
              <li>English Name : Mr.Krittin Tragunejindarat</li>
              <li>Nickname : Tintin (ตินติน)</li>
              <li>Age : 18 years old</li>
            </ul>
          </div>
          <div className={style.nationality}>
            Nationality : Thai
          </div>
          <div className={style.edu}>
            School : Debsirin
          </div>
          </main>
        </div>
    </React.Fragment>
  )
}

export default MyInfo