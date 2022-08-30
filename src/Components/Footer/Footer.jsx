import React from "react";
import LogoFooter from "../../Assets/LOGO-FOOTER.png"
import "./_Footer.scss"


const Footer = () => {
    return(
        <div className='backgroundfooter'>
            <div>
                <img className='logoFooter' src={LogoFooter} alt='logo du footer'/>
            </div>
            <div>
                <p className='footerText'> © 2020 Kasa. All rights reserved </p>
            </div>
        </div>
    )
}

export default Footer