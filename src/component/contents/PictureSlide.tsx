import React from 'react'
import style from '../../style/contentStyle/PictureSlide.module.css'

type Props = {}

const PictureSlide = (props: Props) => {
  return (
    <div className={style.container}>
        <img src="https://i.pinimg.com/564x/81/68/2f/81682fb8437b89d61af4edaa0cad8259.jpg" alt="" />
              <div className={style.selector}>
                <ul>
                <li></li>
                <li className={style.active}></li>
                <li></li>
                <li></li>
                </ul>
              </div>
    </div>
  )
}

export default PictureSlide