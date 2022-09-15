import React from 'react';
import s from './SliderButton.module.scss';
import {useSwiper} from 'swiper/react';

type propsType = React.HTMLProps<HTMLButtonElement> & {
    type: 'next' | 'prev'
    changeCurrentPage: () => void
    hidden?: boolean
}

const SliderButton = ({type, changeCurrentPage, hidden, ...props}: propsType) => {
    const swiper = useSwiper();

    const onClickHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        if (type === 'next') swiper.slideNext()

        if (type === 'prev') swiper.slidePrev()
        changeCurrentPage()
    }
    const style = type === 'next' ? `${s.btn} ${s.next}` : `${s.btn} ${s.prev}`

    return (
        <button onClick={onClickHandler} className={hidden ? `${style} ${s.hidden}` : style} {...props} > </button>
    );
};

export default SliderButton;