import React from "react";
import '../../Scss/components/_Card.scss'
import {Link} from 'react-router-dom'


const Card = ({accommodation}) => {
    return  (
            <div className='Cards'>
                <Link  to ={accommodation.id}><img className='imgCard' src={accommodation.cover} alt={'cover'}/></Link>
                <p className='title'>{accommodation.title}</p>
            </div>
    )
}




export default Card