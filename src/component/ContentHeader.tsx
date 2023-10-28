import React from 'react';
import style from '../style/componentStyle/ContentHeader.module.css';

type Props = {
  name: string;
  componentProp: React.ReactNode;
}

const ContentHeader = (props: Props) => {
  return (
    <React.Fragment>
      <header className={style.container}>
        <div className={style.header}>
          {props.name}
          <div className={style.line} />
        </div>
        {props.componentProp ? <div className={style.componentProp}>{props.componentProp}</div> : null}
      </header>
    </React.Fragment>
  );
}

export default ContentHeader;
