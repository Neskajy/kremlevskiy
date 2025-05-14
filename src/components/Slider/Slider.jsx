import s from "./Slider.module.scss";
import { useState, useRef, createElement, useEffect } from "react";
import forward__icon from "../../assets/vectors/forward__icon.svg";
import backward__icon from "../../assets/vectors/backward__icon.svg";

import p1 from "../../assets/raster/photos/p1.png";
import p2 from "../../assets/raster/photos/p2.png";
import p3 from "../../assets/raster/photos/p3.png";


import React from "react";


export default function Slider() {
    
    const [slideIndex, setSlideIndex] = useState(0);
    const galleryRef = useRef(null);
    const dotsRef = useRef(null);

    const slides = [
        <div className={s.slide}>
            <img src={p1} alt="" />
        </div>,
        <div className={s.slide}>
            <img src={p2} alt="" />
        </div>,
        <div className={s.slide}>
            <img src={p3} alt="" />
        </div>,
    ];

    const slidesCount = slides.length;


    function forward() {
        let newIndex
        console.log(`${slidesCount} - 1 > ${slideIndex}`)
        if (slidesCount - 1 > slideIndex) {
            newIndex = slideIndex + 1;
        } else {
            newIndex = 0;
        }
        setSlideIndex(newIndex);
        transformToActiveSlider(newIndex);
    }

    function backward() {
        let newIndex
        if (slideIndex == 0) {
            newIndex = slidesCount - 1;
        } else {
            newIndex = slideIndex - 1;
        }
        setSlideIndex(newIndex);
        transformToActiveSlider(newIndex);
    }


    function transformToActiveSlider(index) {
        if (galleryRef.current) {
            const offSet = -index * 100;
            galleryRef.current.style.transform = `translateX(${offSet}%)`;
        }
    }

    
    useEffect(() => {
        const interval = setInterval(() => {
            forward();
        }, 5000);

        return () => clearInterval(interval);
    }, [slideIndex, slidesCount]);



    return (
        <>
            <div className={s.Slider}>
                <div className={s.wrapper}>
                    <div className={s.gallery} ref={galleryRef}>
                        {slides}
                    </div>
                </div>
                <div className={s.remotes}>
                    <div className={s.forward} onClick={forward}><img src={forward__icon} alt="" /></div>
                    <div className={s.backward} onClick={backward}><img src={backward__icon} alt="" /></div>
                </div>
                <div className={s.dots}>
                    {Array.from({ length: slidesCount }, (_, i) => (
                        <span
                        key={i}
                        className={`${s.dot} ${i === slideIndex ? s.active : ''}`}
                        onClick={() => {
                            setSlideIndex(i);
                            transformToActiveSlider(i);
                        }}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}