import React from 'react';
import s from './TitleBlock.module.scss'

type propsType = {
    id: string
    title: string
}

const TitleBlock = ({title}: propsType) => {
    return (
        <div className={s.divContainer}>
            <h1 className={s.title}>{title}</h1>
        </div>
    );
};

export default TitleBlock;