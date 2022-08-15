/* import logo from './logo.svg'; */
import Header from '../../Components/Home/Header'
import Banner from '../../Components/Home/Banner';
import React, {useEffect, useState} from 'react';
import Card from "../../Components/Home/CardLogement";
import {fetchAll} from "../../Api/Api";
import '../../Scss/components/_Home.scss'
import Footer from "../../Components/Home/Footer";


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
      <Header/>
      <Banner/>
        <div className='container'>

            {accommodation.map(a=> <Card accommodation={a}/>)}
        </div>
        <Footer/>



    </>

  
  );
}

export default Home;
