import React, {useId} from 'react';
import s from './VectorContainer.module.scss';
import TitleBlock from './TitleBlock/TitleBlock';

type propsType = {
    title?: string
    children: React.ReactNode
}

const VectorContainer = ({children, title}: propsType) => {
    const id = useId()

    return (
        <div className={s.container}>
            <div className={s.content_container}>
                <div className={s.inner_content_container}>
                    {title && <TitleBlock title={title} id={id}/>}
                    {children}
                </div>
            </div>
        </div>
    );
};

export default VectorContainer;