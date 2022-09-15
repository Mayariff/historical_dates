import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import s from './Slider.module.scss'
import {eventType} from "../../data_context";
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import {Navigation, Pagination, Scrollbar} from 'swiper';
// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import SliderButton from "./SliderButton/SliderButton";
import gsap from "gsap";

type propsType = {
    items: eventType[]
    currentPage?: number
}

const Slider = ({items, ...props}: propsType) => {

    const [currentPage, setCurrentPage] = useState(1)
    let pageNumbers = Math.ceil(items.length / 3)
    const clickNext = () => setCurrentPage(currentPage - 1)
    const clickPrev = () => setCurrentPage(currentPage + 1)

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
            <Swiper
                modules={[Navigation, Pagination, Scrollbar]}
                slidesPerView={3}
                //spaceBetween={80}
                //onSlideChange={() => console.log('slide change')}
                //onSwiper={(swiper) => console.log(swiper)}

                //pagination={{clickable: true}}
                /*  navigation={{
                      nextEl: '.bannerNext',
                      prevEl: '.banner-slider-prev',
                  }}*/

            >
                <SliderButton type={'prev'} changeCurrentPage={clickNext} hidden={currentPage === 1}/>

                {items.map(i => <SwiperSlide key={i.eventId}>
                    <div className={s.itemContainer}>
                        <h3 className={s.title}>{i.eventDate}</h3>
                        <p className={s.description}>{i.eventDescription}</p>
                    </div>
                </SwiperSlide>)}
                <SliderButton type={'next'} changeCurrentPage={clickPrev} hidden={currentPage > pageNumbers - 1}/>
            </Swiper>

        </div>
    )
};

export default Slider;



