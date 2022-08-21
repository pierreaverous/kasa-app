import React from "react";
import '../../Scss/components/_BannerDescription.scss'
import Rating from "./Star";
import DropDown from "./DropDown";

const bannerDescription = ({accommodation}) => {
    return(
        <div>
            <div id='container'>
                <div className='container-right'>
                    <div id={"namepicture"}>
                        <p id='username'>{accommodation.host.name}</p>
                        <img  id='user-picture' src={accommodation.host.picture}/>
                    </div>

                    <div id='stars'>
                        <Rating rating={accommodation.rating}/>
                    </div>
                </div>
                <div id='title-container'>
                    <div>
                        <p id="title">{accommodation.title}</p>
                        <p id="location">{accommodation.location}</p>
                        <div className="container-tag">
                            {accommodation.tags.map((tag) =>{
                                return(
                                    <div>
                                        <p className='tags'>{tag}</p>
                                    </div>

                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default bannerDescription