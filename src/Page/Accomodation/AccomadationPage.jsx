import React, {useEffect, useState,} from "react";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import {fetchById} from "../../Api/Api";
import CarousselBanner from "../../Components/Caroussel/CarousselBanner";
import {useParams} from "react-router-dom";
import BannerDescription from "../../Components/BannerDescription/BannerDescription";
import DropDown from "../../Components/DropDown/DropDown"
import './_AccommodationPage.scss'


const AccomadationPage = () => {
    const [accommodation, setAccomodation] = useState(null)
    const result = useParams();
    const loadAccommodationId = async () => {
        // console.log(fetchById())
        const accomodation = await fetchById(result.id)
         setAccomodation(accomodation)
        console.log(accomodation)
    }
    useEffect(()=>{
        loadAccommodationId()

    },[result.id])

    return(
        <>
            {accommodation != null && (
                <>
                    <Header/>
                    <CarousselBanner accommodation={accommodation}/>
                    <BannerDescription accommodation={accommodation}/>

                    <div id="container-dropdown">
                        <DropDown title={"Description"} content={accommodation.description}/>
                        <DropDown title={"Equipement"} content={accommodation.equipments}/>
                    </div>



                    <Footer/>
                </>
            )}

        </>
        )


}


export default AccomadationPage