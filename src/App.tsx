import React, {MouseEventHandler, useContext, useEffect, useRef, useState} from 'react';
import './App.css';
import {DataContex} from './data_context';
import ItemsBlock from './Blocks/ItemsBlock/ItemsBlock';
import gsap from 'gsap';

function App() {
    const data = useContext(DataContex)
    const boxRef = useRef<HTMLInputElement | null>(null);
    const [clickCoords, setClickCoords] = useState({pageX: 0, pageY: 0});

    useEffect(() => {
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
            transition: '0.5s cubic-bezier (.75,-1.27,.3,2.33) transform, .2s cubic-bezier (.75,-1.27,.3,2.33) opacity',
        }, {opacity: '0', delay: 0.1})
        return () => {
            anim.kill()
        }
    }, [clickCoords])


    const clickHandler: MouseEventHandler<HTMLDivElement> = (e) => {
        setClickCoords({pageX: e.pageX, pageY: e.pageY})
    }

    return (
        <div onClick={clickHandler}>
            <div ref={boxRef}> </div>
            <ItemsBlock data={data} title={'Истoрические даты'}/>
        </div>

    );
}

export default App;


