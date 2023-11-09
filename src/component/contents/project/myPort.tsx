import React, { useState } from 'react'
import style from '../../../style/contentStyle/projectContent.module.css'
type Props = {}

const MyPort = (props: Props) => {
  const [show,setShow] =useState(false)
  return (
    <section className={style.ProjectContent} id='myport'>
      <div className={`${style.detail} ${style.myport}`}>
        <div className={style.ProjectHeader}> <span>2</span> My Portfolio Website</div>
        <p className={style.note}>You are looking at this project <b>Right Now!!!</b></p>
        <div className={style.description}>
          <p className={style.text}>
            <p>As a high school student with a keen interest in computer engineering, I set my sights on creating a portfolio website to showcase my skills and knowledge. Although it was a formidable challenge, I remained steadfast in my determination to succeed.</p>

            <p>First, I brainstormed a comprehensive list of topics to include on the website. My aim was to cover several areas, ranging from web development, responsive design, programming languages to cloud computing, and machine learning. To achieve this, I conducted extensive research, delving into books, articles, blog posts, and tutorials on YouTube. I also took online courses to expand my knowledge and acquire new skills.

            {show? <p>Next, I began planning my website, opting for a content management system (CMS) to simplify content management and a responsive design to guarantee optimal viewing on all devices. With the planning stage complete, I devoted several months to developing the website. This involved creating blog posts, crafting code samples, and adding interactive elements. I was meticulous in proofreading my content, ensuring a polished final result.

            <p>Finally, I launched my website, feeling exceedingly proud of my accomplishment. I now utilize the site to apply for internships and scholarships, as well as connect with other computer engineering students and professionals. My hope is that my experience will inspire other high school students to pursue their dreams in computer engineering. <span className={style.show} onClick={()=>setShow(!show)}>Readless...</span></p></p>: <span className={style.show} onClick={()=>setShow(!show)}>...Readmore</span>}</p></p>
        </div>
        <div className={style.learn}>
          <div className={style.header}>Things I learned from this project</div>
          <ul>
            <li>Planning and execution of web application development</li>
            <li>Responsive web design to support devices with different screen sizes</li>
            <li>Picture slider and initial data display with a focus on efficient display space but displaying a lot of data</li>
            <li>Using CSS nesting to define the style of the website instead of using general syntax</li>
          </ul></div>
        <div className={style.connectContainer}>
          <div>Inspect Sorce Code here
          </div>
          <div className={style.connect}>
            <a href="https://github.com/TintinnKT/tintin-portfolio-webapp"><img src="https://cdn-icons-png.flaticon.com/512/1051/1051275.png" alt="Github" /></a>
          </div>
        </div>


      </div>

    </section>
  )
}

export default MyPort