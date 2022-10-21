
import React from 'react';
import fullStar from '../../Assets/starRoseFinal.png'
import emptyStar from '../../Assets/star-gris-final.png'
import '../Stars/_Stars.scss'

const Rating = ({rating}) => {
    const stars = []
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars.push(<img  className="tailleStar" src={fullStar} alt='full-star' key={i} />)
        } else {
            stars.push(<img className="tailleStar" src={emptyStar} alt='empty-star' key={i} />)
        }
    }


    return (
        <div className='rating'>
            {stars}
        </div>
    );
};

export default Rating;