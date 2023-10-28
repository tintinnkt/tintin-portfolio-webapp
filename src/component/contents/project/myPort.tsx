import React from 'react'
import style from '../../../style/contentStyle/projectContent.module.css'
type Props = {}

const MyPort = (props: Props) => {
  return (
    <section className={style.ProjectContent} id='fi-management-webapp'>
            <div className={style.detail}>
              <div className={style.ProjectHeader}> <span>2</span> My Portfolio Website</div>
              <div className={style.description}>
                <p className={style.text}>Lorem, distinctio totam.  sed. Est alias, earum accusamus recusandae ea aut deserunt suscipit id beatae iure. Sequi dolore aliquam hic voluptatibus labore ab ex natus non velit quis mollitia quos molestiae dolores ut, at iste magnam, itaque aliquid possimus nulla vel accusantium. Reiciendis porro pariatur molestiae soluta veniam quasi laboriosam quo dignissimos voluptatem alias aut iste eligendi, vitae libero, commodi cumque obcaecati incidunt. Est, ut ad.</p>
              </div>
              <div className={style.learn}>
                <div className={style.header}>Things I learned from this project</div>
                <ul>
                  <li>helloo</li>
                </ul></div>
              <div className={style.connectContainer}>
                <div>Inspect Sorce Code and Documentation here
                    <p>!!!have to add url here</p>
                </div>
                <div className={style.connect}>
                  <a href="https://github.com/TintinnKT/"><img src="https://cdn-icons-png.flaticon.com/512/1051/1051275.png" alt="Github" /></a>
                  <a href="localhost:5173"><img src="https://cdn-icons-png.flaticon.com/512/3073/3073412.png " alt="Google Drive" /></a>
                </div>
              </div>


            </div>
            
          </section>
  )
}

export default MyPort