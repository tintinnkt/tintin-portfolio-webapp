import React, { useState } from 'react'
import style from '../../style/contentStyle/Projects.module.css'
import styles from '../../style/componentStyle/toggleBtn.module.css'
//component
import ContentHeader from '../ContentHeader'
import FiManagement from './project/fiManagement'
import MyPort from './project/myPort'

type ToggleProps = {
  onToggle: () => void;
};

const Tabber: React.FC<ToggleProps> = ({ onToggle }) => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
    onToggle();
  };

  return (
    <nav className={styles.projectNav}>
      <div
        className={`${styles.toggle} ${isOn ? styles.toggleOff : styles.toggleOn }`}
        onClick={handleToggle}
      >
      </div>
    </nav>
  );
};

type Props = {}

const Projects: React.FC<Props> = (props: Props) => {
  const [projectShowing, setShowing] = useState<boolean>(true);

  return (
    <React.Fragment>
      <div className={style.container}>
          <ContentHeader name='Projects' componentProp={<Tabber onToggle={()=>setShowing(!projectShowing)}/>} />
        <main className={style.contents}>
          {/* project 1 */}
          <div className={style.projectContainer}>
            {projectShowing ? <FiManagement /> : <MyPort />}
          </div>
        </main>
      </div>
    </React.Fragment>
  );
}

export default Projects;