import React, {useEffect, useState} from "react";
import Header from "../../Components/Home/Header";
import Footer from "../../Components/Home/Footer";
import {fetchById} from "../../Api/Api";
import BannerLogment from "../../Components/LogementPage/bannerLogment";


const AccomadationPage = () => {
    const [accommodationId , setAccommodationId] = useState([])
    const loadAccommodationId = async () => {
        // console.log(fetchById())
        const dataId = await fetchById()
        setAccommodationId(dataId)
        console.log(dataId)
       
    }

    useEffect(()=>{
        loadAccommodationId()

    },[])

    return(
        <>
            <Header/>
            <BannerLogment/>

            <Footer/>
        </>
        )


}


export default AccomadationPage