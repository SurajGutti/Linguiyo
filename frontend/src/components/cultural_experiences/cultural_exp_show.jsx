import React from 'react';
import './cultural_exp_show.css'

class CulturalExpShow extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div className="about-section">
                    <div className="carousel">
                        Carousel
                    </div>
                </div>
                <div className="about-teacher-section">
                    <div className="cultxp-teacher-image">Teacher image</div>
                    <div className="cultxp-teacher-bio-container">
                        <div className="cultxp-teacher-bio">Teacher bio</div>
                    </div>
                </div>
                <div className="cultxp-extra-info-wrapper">
                    <div className="cultxp-extra-info-container">
                        <div className="cultxp-extra-info-left">
                            What do I bring?
                        </div>
                        <div className="cultxp-extra-info-right">
                            Any cup of coffee
                        </div>
                    </div>
                    <div className="cultxp-extra-info-container">
                        <div className="cultxp-extra-info-left">
                            How do I participate?
                        </div>
                        <div className="cultxp-extra-info-right">
                            Join via zoom. Download Zoom for free on a desktop 
                            or mobile device. Once your booking is complete, 
                            you’ll receive an email with a link and details on how to join.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CulturalExpShow;