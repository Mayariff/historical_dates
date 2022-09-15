import React, {MouseEventHandler, useEffect, useRef} from 'react';
import s from "./Point.module.scss";
import {coordsType} from "../../../utils/utils-functions";
import gsap from "gsap";


type propsType = {
    coords: coordsType,
    numberPeriod: number
    changePeriod: (value: number) => void
    currentPeriodNumber: number
    category: string
    id?: string
}

const style = {
    visible: {
        opacity: 1,
        background: `#E5E5E5`,
        scale: 1
    },
    hidden: {
        opacity: 0,
        background: `#42567A`,
        scale: 0.1
    }
}

const Point = ({coords, numberPeriod, changePeriod, currentPeriodNumber, category}: propsType) => {

    const point = useRef(null)
    const active = numberPeriod === currentPeriodNumber
    const aria = useRef(null)

   useEffect(() => {
     const anim = gsap.to(aria.current, {
            rotate: '-=360',
            duration: 3,
            ease: 'power1.inOut',

        },);
        return () => {
            anim.kill()
        }
    }, [currentPeriodNumber])

   useEffect(() => {
        if (active) {
            gsap.to(point.current, style.visible)
        } else {
            gsap.to(point.current, style.hidden)
        }
    }, [active])


    const onMouseEnterHandler: MouseEventHandler<HTMLDivElement> = (e) => {
        if (!active) gsap.fromTo(point.current, style.hidden, style.visible)
    };
    const onMouseLeaveHandler = () => {
        if (!active) gsap.fromTo(point.current, style.visible, style.hidden)
    }

    const onclickHandler = () => {
        changePeriod(numberPeriod)
        gsap.fromTo(point.current, {
            background: `#42567A`,
        }, {
            background: `#E5E5E5`,
        })
    }

    return (
        <div className={s.clickAria} ref={aria}
             onMouseEnter={onMouseEnterHandler}
             onMouseLeave={onMouseLeaveHandler}
             style={{
                 top: coords.y - 40,
                 left: coords.x - 40,
             }}>

            <div className={s.point}>
                <div
                    onClick={onclickHandler}
                    ref={point}
                    className={s.bigPoint}>
                    {numberPeriod}
                    {active && <div className={s.category}> {category}</div>}
                </div>
            </div>
        </div>

    );
};

export default Point;