import React, {MouseEventHandler} from 'react';
import Pagination, {propsPaginationType} from '../Pagination/Pagination';
import s from './SlideBar.module.scss'
import {periodsInfoType} from '../../data_context';



type propsType = propsPaginationType & {
    data: Array<periodsInfoType>
}

const SliderBar = ({currentPage, changePeriod, currentPeriod, data}: propsType) => {

    const onClickHandler: MouseEventHandler<HTMLDivElement> = (e) => {
        changePeriod(+e.currentTarget.id)
    }

    return (
        <div className={s.container}>
            <Pagination currentPage={currentPage} pagesCount={data.length} currentPeriod={currentPeriod}
                        changePeriod={changePeriod}/>
            {data.map((d, index) => <div key={d.periodId}
                                         id={String(index + 1)}
                                         className={currentPage === index + 1 ? `${s.point} ${s.active}` : s.point}
                                         onClick={onClickHandler}> </div>)}
        </div>
    );
};

export default SliderBar;