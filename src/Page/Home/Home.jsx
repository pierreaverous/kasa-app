/* import logo from './logo.svg'; */
import Header from '../../Components/Header/Header'
import Banner from '../../Components/Banner/Banner';
import React, {useEffect, useState} from 'react';
import Card from "../../Components/Card/CardLogement";
import {fetchAll} from "../../Api/Api";
import './_Home.scss'
import Footer from "../../Components/Footer/Footer";


const  Home = () => {
    const [accommodation , setAccommodation] = useState([])
    const loadAccommodation = async () => {
        const data = await fetchAll()
        setAccommodation(data)
      console.log(data)
    }
    useEffect(()=>{
        loadAccommodation()

    },[])

  return (
    <>
      <Header selectedMenu={'Acceuil'}/>
      <Banner/>
        <div className='container'>

            {accommodation.map(a=> <Card accommodation={a}/>)}
        </div>
        <Footer/>



    </>

  
  );
}

export default Home;
