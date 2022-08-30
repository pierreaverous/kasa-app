import React from 'react'
import './_Carroussel.scss'
import leftArrow from '../../Assets/left-arrow.svg'
import rightArrow from '../../Assets/right-arrow.svg'


export default function BtnSlider({direction, moveSlide}){
    return(
        <button
            onClick={moveSlide}
            className={direction === "next" ? 'btn-slide next' : "btn-slide prev"}>
            <img src={direction ==="next"? rightArrow : leftArrow} alt=''/>
        </button>
    )


}
