import React from "react";
import Header from "../../Components/Header/Header";

import './_PageError.scss'
import {Link} from "react-router-dom";

const ErrorPage = () => {
    return(
        <>
            <Header/>
            <div className='containerError'>
                <p className="error404">404</p>
                <p className="oups">Oups! La page que vous demandez n'existe pas.</p>
                <Link  id='border' to={"/"}><p className='backToHome'>Retourner sur la page d’accueil </p></Link>
            </div>

        </>
    )



}


export default ErrorPage