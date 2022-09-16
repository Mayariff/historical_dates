import React, {MouseEventHandler, useContext, useEffect, useRef, useState} from 'react';
import './App.css';
import {DataContex} from './data_context';
import ItemsBlock from './Blocks/ItemsBlock/ItemsBlock';
import gsap from 'gsap';

function App() {
    const data = useContext(DataContex)
    const boxRef = useRef<HTMLInputElement | null>(null);
    const [clickCoords, setClickCoords] = useState({pageX: 0, pageY: 0});

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
        if (isDesctopVertion) {
            const anim = gsap.fromTo(boxRef.current, {
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                position: 'absolute',
                zIndex: '1',
                left: clickCoords.pageX,
                top: clickCoords.pageY,
                border: '3px solid #42567A',
                opacity: '1',
                scale: 0.6,
                transition: '0.5s cubic-bezier (.75,-1.27,.3,2.33) transform, .2s cubic-bezier (.75,-1.27,.3,2.33) opacity',
            }, {opacity: '0', delay: 0.1, scale: 1})
            return () => {
                anim.kill()
            }
        }
    }, [clickCoords, isDesctopVertion])


    const clickHandler: MouseEventHandler<HTMLDivElement> = (e) => {
        setClickCoords({pageX: e.pageX, pageY: e.pageY})
    }

    return (
        <div onClick={clickHandler}>
            <div ref={boxRef}> </div>
            <ItemsBlock data={data} title={'Истoрические даты'} isDesctopVertion={isDesctopVertion}/>
        </div>

    );
}

export default App;


