import React, {useCallback} from 'react';
import s from './Pagination.module.scss';
import {periodsInfoType} from '../../data_context';
import PaginationButton from './PaginationButton/PaginationButton';


export type propsPaginationType = {
    currentPage: number
    pagesCount: number
    currentPeriod: periodsInfoType
    changePeriod: (value: number) => void
}

const Pagination = React.memo(({currentPage, pagesCount, changePeriod}: propsPaginationType) => {


    const onClickNext = useCallback(() => changePeriod(currentPage + 1),[currentPage])
    const onClickPrev = useCallback(() => changePeriod(currentPage - 1),[currentPage])

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
});

export default Pagination;