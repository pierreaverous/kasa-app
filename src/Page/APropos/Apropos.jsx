import React from "react";
import Header from "../../Components/Home/Header";
import Banner from "../../Components/Home/Banner";
import Footer from "../../Components/Home/Footer";
import DropDown from "../../Components/LogementPage/DropDown";
import '../../Scss/components/_AproposPage.scss'
import AproposBanner from "../../Components/AproposPage/AproposBanner";


const Apropos = () => {
   return (
       <>
           <Header/>
           <AproposBanner/>
           <div id="container-dropdownApropos">
               <div className="dropdowndiv">
                   <DropDown title={"Fiabilité"} content={"Les annonces postées sur Kasa garantissent une fiabilité totale. Les " +
                       "photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."}/>
               </div>
              <div className="dropdowndiv">
                  <DropDown title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comport
           ement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
              </div>
               <div className="dropdowndiv">
                   <DropDown title="Service" content="Nos équipes se tiennent à votre disposition pour vous fournir une expérien
           ce parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>
               </div>
               <div className="dropdowndiv">
                   <DropDown title="Sécurité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour l
           es voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une n
           ote aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien re
           spectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
               </div>



           </div>

           <Footer/>
       </>

   )
}

export default Apropos