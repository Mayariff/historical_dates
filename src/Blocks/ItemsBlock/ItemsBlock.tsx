import React, {useEffect, useState} from 'react';
import {periodsInfoType} from '../../data_context';
import VectorContainer from '../../Components/VectorContainer/VectorContainer';
import s from './ItemsBlock.module.scss';
import AccentText from '../../Components/AccentText/AccentText';
import Slider from '../../Components/Slider/Slider';
import EventWheel from '../../Components/EventWheel/EventWheel';
import SliderBar from '../../Components/SliderBar/SliderBar';

type propsType = {
    data: periodsInfoType[]
    title: string
}

const ItemsBlock = ({data, title}: propsType) => {

    const [currentPeriod, setCurrentPeriod] = useState<periodsInfoType>(data[0])
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [screenWidth, setScreenWidth] = useState<number>(0)
    const isDesctopVertion = screenWidth > 768

    useEffect(() => {
        function findWidth() {
            setScreenWidth(window.screen.width)
        }

        findWidth()
        window.addEventListener('resize', findWidth);
        return () => window.removeEventListener('resize', findWidth)
    }, [window.screen.width])

    useEffect(() => {
            setCurrentPeriod(data[currentPage - 1])
        },
        [currentPage, data])


    return (
        <VectorContainer title={title}>
            {!isDesctopVertion && <SliderBar currentPage={currentPage}
                                             pagesCount={data.length}
                                             currentPeriod={currentPeriod}
                                             changePeriod={setCurrentPage} data={data}/>}
            <div className={s.container}>
                <AccentText firstWord={currentPeriod.startPeriod}
                            secondWord={currentPeriod.endPeriod}/>

                {isDesctopVertion && <>
                    <EventWheel data={currentPeriod}
                                periodsNumbers={data.length}
                                changePeriod={setCurrentPage}
                                currentPage={currentPage}
                    />
                </>
                }
                <Slider items={currentPeriod.events}
                        category={currentPeriod.category}
                        currentPage={currentPage}
                        isDesctopVertion={isDesctopVertion}/>
            </div>
        </VectorContainer>
    );

};


export default ItemsBlock;

