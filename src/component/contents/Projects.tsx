import React from 'react'
import style from '../../style/contentStyle/Projects.module.css'
import imgData from '../../assets/picDerectory/fi-management.json'
//component
import ContentHeader from '../ContentHeader'
import PictureSlide from './PictureSlide'



type Props = {}

const Projects = (props: Props) => {
  return (
    <React.Fragment>
      <div className={style.container}>
        <ContentHeader name='Projects' />
        <main className={style.contents}>
          <main className={style.ProjectContent}>
            <div className={style.detail}>
              <div className={style.ProjectHeader}>Money Management Web App</div>
              <div className={style.description}>
                <p className={style.text}>Lorem, distinctio totam. Quia harum tenetur, molestiae exercitationem id vel magni illo libero obcaecati quasi corrupti alias doloremque illum nisi impedit officiis, inventore provident non rerum quaerat repellat iure sed. Est alias, earum accusamus recusandae ea aut deserunt suscipit id beatae iure. Sequi dolore aliquam hic voluptatibus labore ab ex natus non velit quis mollitia quos molestiae dolores ut, at iste magnam, itaque aliquid possimus nulla vel accusantium. Reiciendis porro pariatur molestiae soluta veniam quasi laboriosam quo dignissimos voluptatem alias aut iste eligendi, vitae libero, commodi cumque obcaecati incidunt. Est, ut ad.</p>
              </div>
              <div className={style.learn}>
                <div className={style.header}>Things I learned from this project</div>
                <ul>
                  <li>Planning and executing web application development</li>
                  <li>Creating folder structures for web applications</li>
                  <li>Creating React components for reusable components</li>
                  <li>Using CSS modules to reduce problems caused by
                    <br />duplicate class names between components</li>
                  <li>Connecting a web application to a database: Cloud Firestore</li>
                  <li>Performing CRUD (Create, read, update, delete) operations on data</li>
                  <li>Resolving conflicts caused by simultaneous code changes</li>
                  <li>Deploying a project to Firebase Hosting</li>
                </ul></div>
              <div className={style.connectContainer}>
                <div>Inspect Sorce Code and Documentation here</div>
                <div className={style.connect}>
                  <a href="https://github.com/TintinnKT/fi-management-webapp"><img src="https://cdn-icons-png.flaticon.com/512/1051/1051275.png" alt="Github" /></a>
                  <a href="https://drive.google.com/drive/u/0/folders/1YaoHbU25biHyA-tbUu-g1I-eJT0A0Nzg"><img src="https://cdn-icons-png.flaticon.com/512/3073/3073412.png " alt="Google Drive" /></a>
                </div>
              </div>


            </div>
            <div className={style.pics}><PictureSlide
              images={imgData}
              style={{ width: '335px', height: '641px' }}
            /></div>
          </main>

        </main>

      </div>
    </React.Fragment>
  )
}

export default Projects