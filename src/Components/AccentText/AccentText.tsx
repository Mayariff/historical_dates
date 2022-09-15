import React, {useEffect, useRef} from 'react';
import s from './AccentText.module.scss';
import gsap from 'gsap';

type propsType = {
    firstWord: string | number
    secondWord: string | number
}

const AccentText = ({firstWord, secondWord}: propsType) => {

    const first = useRef(null)
    const second = useRef(null)

    useEffect(() => {
        gsap.to(first.current, {
            duration: 0.5,
            textContent: `${firstWord}`,
            roundProps: 'textContent'
        })
    }, [firstWord]);

    useEffect(() => {
        gsap.to(second.current, {
            duration: 0.5,
            textContent: `${secondWord}`,
            roundProps: 'textContent',
        });
    }, [secondWord]);

    return (
        <h2 className={s.mainTitle}>
            <span ref={first}> </span> <span ref={second}> </span>
        </h2>
    );
};

export default AccentText;