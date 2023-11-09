import {useState} from 'react'
import style from '../../../style/contentStyle/projectContent.module.css'
import imgData from '../../../assets/picDerectory/fi-management.json'

import PictureSlide from '../PictureSlide'

const FiManagement = () =>{
  const [showMore, setShowMore] = useState(false);

  const toggleReadMore = () => {
    setShowMore(!showMore);
  };
  
  return (
    <section className={style.ProjectContent} id='fi-management-webapp'>
      <div className={style.detail}>
        <div className={style.ProjectHeader}> <span>1</span> Money Management Web App</div>
          <p className={style.note}>My First Web App Project</p>
        <div className={style.description}>

          <p className={style.text}>As a high school student that interested in web development, my first project was a web application. It was a challenging but rewarding experience.</p>

          <p className={style.text}>I began by learning HTML, CSS, and JavaScript, drawing on my prior knowledge of C and C++ for a quicker grasp of the concepts. I supplemented my learning with YouTube tutorials and documentation.</p>
          
          <p className={style.text}>Once I had a solid foundation, I used React and Vite.js to build the web app, designing the user interface in Figma.{!showMore?<span className={style.show}onClick= {toggleReadMore}>...Read More</span>:null}</p>

          {showMore ? <><p className={style.text}>I collaborated with a friend, focusing on the front-end and dummy data. Along the way, I deepened my understanding of React Router DOM and related technologies.</p>

          <p className={style.text}>Towards the end, I tackled Google login integration and Firestore Firebase for database management, with the help of online resources and my friend.</p>

          <p className={style.text}>Our web app is a Money Management App built with React.js, enabling users to track their finances. We hosted it on Firebase for accessibility.</p>

          <p className={style.text}>This project taught me valuable lessons in planning, organizing code, creating reusable components, using CSS modules, connecting to Firestore, resolving conflicts, and deploying to Firebase Hosting.</p>

          <p className={style.text}>I'm proud of my accomplishments and look forward to continuing my growth as a software engineer.<span className={style.show} onClick={toggleReadMore}>Read Less...</span>
            </p></>: null}
        </div>
        <div className={style.learn}>
          <div className={style.header}>Things I learned from this project</div>
          <ul>
            <li>Strong foundation building with HTML, CSS, and JavaScript</li>
            <li>Effective utilization of React and its ecosystem</li>
            <li>Collaboration and teamwork with fellow developers</li>
            <li>Deeper proficiency in web technologies and React Router DOM</li>
            <li>Integration of Google login and Firestore Firebase for data management</li>
            <li>Deployment of a web application on Firebase</li>
            <li>Structural organization and folder management</li>
            <li>Efficient CSS management using CSS modules</li>
            <li>Database operations, including CRUD functions</li>
            <li>Code conflict resolution and effective use of version control</li>
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
    </section>
  )
}

export default FiManagement