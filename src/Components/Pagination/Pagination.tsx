import React from 'react';
import s from './Pagination.module.scss';
import {periodsInfoType} from '../../data_context';
import PaginationButton from './PaginationButton/PaginationButton';


type propsType = {
    currentPage: number
    pagesCount: number
    currentPeriod: periodsInfoType
    changePeriod: (value: number) => void
}

const Pagination = ({currentPage, pagesCount, changePeriod}: propsType) => {


    const onClickNext = () => changePeriod(currentPage + 1)
    const onClickPrev = () => changePeriod(currentPage - 1)

    return (
        <div className={s.pagination}>
            <div className={s.pageCounter}>{currentPage}/{pagesCount}</div>
            <div className={s.btnContainer}>
                <PaginationButton changeCurrentPage={onClickPrev} type={'prev'}
                                  disabled={currentPage === 1}/>
                <PaginationButton type={'next'} changeCurrentPage={onClickNext}
                                  disabled={currentPage === pagesCount}/>
            </div>
        </div>
    );
};

export default Pagination;