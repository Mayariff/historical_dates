import React, {useEffect, useRef, useState} from 'react';
import {periodsInfoType} from '../../data_context';
import VectorContainer from '../../Components/VectorContainer/VectorContainer';
import s from './ItemsBlock.module.scss';
import AccentText from '../../Components/AccentText/AccentText';
import Slider from '../../Components/Slider/Slider';
import EventWheel from '../../Components/EventWheel/EventWheel';
import Pagination from "../../Components/Pagination/Pagination";

type propsType = {
    data: periodsInfoType[]
    title: string
}

const ItemsBlock = ({data, title}: propsType) => {

    const [currentPeriod, setCurrentPeriod] = useState<periodsInfoType>(data[0])
    const [currentPage,setCurrentPage]= useState<number>(1)


 useEffect(()=>{
          setCurrentPeriod(data[currentPage-1])
   },
       [currentPage,data])


    return (
        <VectorContainer title={title}>
            <div className={s.container} >
                <AccentText firstWord={currentPeriod.startPeriod}
                            secondWord={currentPeriod.endPeriod}/>

                <EventWheel data={currentPeriod}
                            periodsNumbers={data.length}
                            changePeriod={setCurrentPage}
                            currentPage={currentPage}
                />
                <div className={s.leftContainer}>
                <Pagination currentPage={currentPage}
                            pagesCount={data.length}
                            currentPeriod={currentPeriod}
                            changePeriod={setCurrentPage} />
                </div>
                <Slider items={currentPeriod.events} currentPage={currentPage}/>
            </div>
        </VectorContainer>
    );

};


export default ItemsBlock;

