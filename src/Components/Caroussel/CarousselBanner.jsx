import React, {useState} from "react";
import './_Carroussel.scss'
import BtnSlider from "./BtnSlider";


const CarousselBanner = ({accommodation}) => {
     const [slideIndex, setSlideIndex] = useState(1)
     const nextSlide = () => {
         if(slideIndex !== accommodation.pictures.length){
             setSlideIndex(slideIndex +1)
         } else if (slideIndex === accommodation.pictures.length){
             setSlideIndex(1)
         }

     }
     const prevSlide = () => {
         if(slideIndex !== 1 ){
             setSlideIndex(slideIndex -1)

         } else if(slideIndex === 1 ){
             setSlideIndex(accommodation.pictures.length)
         }

     }
    return(
        <div className='container-slider'>
                {accommodation.pictures.map((picture, index) => {
                    return (
                        <div className={slideIndex === index +1 ? "slide active-anim" : "slide"}>

                            <img src={picture} alt=""/>)}
                        </div>
                    )
                })}
            <BtnSlider moveSlide={nextSlide} direction={"next"}/>
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
        </div>
    )
}

export default  CarousselBanner