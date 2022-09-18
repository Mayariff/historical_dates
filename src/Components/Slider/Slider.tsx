import React, {useCallback, useLayoutEffect, useRef, useState} from 'react';
import s from './Slider.module.scss'
import {eventType} from '../../data_context';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Scrollbar, Thumbs} from 'swiper';
// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import "swiper/scss/pagination";
import 'swiper/scss/scrollbar';

import './sliderPagination.scss'
import SliderButton from "./SliderButton/SliderButton";
import gsap from 'gsap';


type propsType = {
    items: eventType[]
    currentPage?: number
    isDesctopVertion: boolean
    category?: string
}


const Slider = React.memo(({items, isDesctopVertion, category, ...props}: propsType) => {

    const [currentPage, setCurrentPage] = useState(1)
    let pageNumbers = Math.ceil(items.length / 3)
    const clickNext = useCallback(() => setCurrentPage(currentPage - 1), [currentPage])
    const clickPrev = useCallback(() => setCurrentPage(currentPage + 1),[currentPage])

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const slider = useRef(null)

    useLayoutEffect(() => {

        const anim = gsap.fromTo(slider.current, {
            rotation: 360,
            opacity: 0,
        }, {
            opacity: 1,
            duration: 1,
            stagger: 0.33,
        })
        return () => {
            anim.kill()
        }
    }, [items])


    return (
        <div className={s.container} ref={slider}>
            {!isDesctopVertion && <span className={s.category}>{category}</span>}
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, Thumbs]}
                slidesPerView={isDesctopVertion ? 3 : 2}
                spaceBetween={20}
                thumbs={{swiper: thumbsSwiper}}
                //pagination={!isDesctopVertion}
            >
                {isDesctopVertion &&
                    <SliderButton type={'prev'} changeCurrentPage={clickNext} hidden={currentPage === 1}/>}

                {items.map(i => <SwiperSlide key={i.eventId}>
                    <div className={s.itemContainer}>
                        <h3 className={s.title}>{i.eventDate}</h3>
                        <p className={s.description}>{i.eventDescription}</p>
                    </div>
                </SwiperSlide>)}
                {isDesctopVertion &&
                    <SliderButton type={'next'} changeCurrentPage={clickPrev} hidden={currentPage > pageNumbers - 1}/>}
            </Swiper>

        </div>
    )
});

export default Slider;



