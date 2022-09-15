import React from 'react';
import s from './PaginationButton.module.scss';

type propsType = React.HTMLProps<HTMLButtonElement> & {
    type: 'next' | 'prev'
    changeCurrentPage: () => void
    disabled?: boolean
}

const PaginationButton = ({type, changeCurrentPage, disabled, ...props}: propsType) => {

    const style = type === 'next' ? `${s.btn} ${s.next}` : `${s.btn} ${s.prev}`

    return (
        <button onClick={changeCurrentPage} className={style} {...props} disabled={disabled}> </button>
    );
};

export default PaginationButton;