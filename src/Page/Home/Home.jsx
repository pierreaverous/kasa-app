/* import logo from './logo.svg'; */
import Banner from '../../Components/Banner'
import BackGroundImage from '../../Components/backgroundImage';
import React, {useEffect, useState} from 'react';
import Card from "../../Components/CardLogement";
import {fetchAll} from "../../Api/Api";

const  Home = () => {
    const [accommodation , setAccommodation] = useState([])
    const loadAccommodation = async () => {
        const data = await fetchAll()
        setAccommodation(data)

    }
    useEffect(()=>{
        loadAccommodation()

    },[])

  return (
    <>
      <Banner/>
      <BackGroundImage/>
        {accommodation.map(a=> <Card accommodation={a}/>)}

    </>

  
  );
}

export default Home;
