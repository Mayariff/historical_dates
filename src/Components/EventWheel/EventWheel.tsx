import React, {useEffect, useRef, useState} from 'react';
import s from './EventWheel.module.scss'
import {periodsInfoType} from '../../data_context';
import {coordsType, findAllPointsCoords, getRadius} from '../../utils/utils-functions';
import gsap from 'gsap';
import MotionPathPlugin from 'gsap/MotionPathPlugin'
import Point from './Point/Point';
import Pagination from "../Pagination/Pagination";

gsap.registerPlugin(MotionPathPlugin);


type propsType = {
    data: periodsInfoType
    changePeriod: (value: number) => void
    periodsNumbers: number
    currentPage: number
}


const EventWheel = ({data, periodsNumbers, currentPage, changePeriod, ...props}: propsType) => {

    const [radius, setRadius] = useState<number>(0)
    const [pointsCoords, setPointsCoords] = useState<coordsType[]>([])
    const circle = useRef(null)

    useEffect(() => {
        function findCoords() {
            const radius = circle.current && getRadius(circle.current) || 0
            const points = radius && findAllPointsCoords(periodsNumbers, radius, 0)
            setRadius(radius)
            points && setPointsCoords(points)
        }

        findCoords()
        window.addEventListener('resize', findCoords);
        return () => window.removeEventListener('resize', findCoords)
    }, [data])

    useEffect(() => {
        const anim = gsap.to(circle.current, {
            rotate: '+=360',
            duration: 3,
            ease: 'power1.inOut',
        })
        return () => {
            anim.kill()
        }
    }, [data.periodId])


    return (
        <div className={s.container}>
            <div className={s.circle} ref={circle}>
                {pointsCoords.map((p, index) => <div
                    key={p.x + p.y + index} className={'shape'}><Point
                    numberPeriod={index + 1}
                    key={p.x + p.y + index}
                    coords={p}
                    category={data.category}
                    changePeriod={changePeriod}
                    currentPeriodNumber={currentPage}/>
                </div>)}
            </div>
            <div className={s.pageContainer}>
                <Pagination currentPage={currentPage} pagesCount={periodsNumbers} currentPeriod={data}
                            changePeriod={changePeriod}/>
            </div>
        </div>
    );
};

export default EventWheel;