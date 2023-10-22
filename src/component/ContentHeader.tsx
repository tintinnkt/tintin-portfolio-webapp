import React from 'react'
import style from '../style/componentStyle/ContentHeader.module.css'

type Props = {
    name: string
}

const ContentHeader = (props: Props) => {
    return (
        <React.Fragment>
            <header className={style.container}>
                {props.name}
                <div className={style.line}/>
            </header>
        </React.Fragment>
    )
}

export default ContentHeader