import React from 'react';
import TeacherImage from './cultural_experiences_show_assets/5.jpg';
import './cultural_exp_show.css'

class CulturalExpShow extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div className="about-section">
                    <div className="cultexp-title">Turkish Coffee Fortune Reading</div>
                    <div className="cultexp-price">30 min. | $45</div>
                    <div className="book-now-btn">Book Now</div>
                    <div className="carousel">
                        Carousel
                    </div>
                    <div className="cultexp-description">Turkish coffee fortune 
                    reading is an authentic tradition dating back to the Ottoman 
                    empire of the 1600s. After drinking this sweet, espresso-like coffee, 
                    it is customary to read one's fortune from the remaining coffee grinds.</div>
                    <div className="cultexp-description">Per the old school Turkish style, 
                    we prepare the coffee on the hot sand. The grinds are then projected 
                    onto an iPad screen - via endoscope camera - allowing for a visual 
                    fortune-telling experience unlike any other. The symbols and figures 
                    inside your coffee cup are interpreted right before your eyes!</div>
                    <div className="cultexp-description">These readings are always fun, 
                    light-hearted, but most importantly - insightful!</div>
                    <div className="book-now-btn">Book Now</div>
                </div>
                <div className="about-teacher-section">
                    <img src={TeacherImage} className="cultxp-teacher-image"/>
                    <div className="cultxp-teacher-bio-container">
                        <div className="cultxp-teacher-title">Meet your Turkish 
                        coffee cultural expert, Uluc!</div>
                        <div className="cultxp-teacher-bio">I'm Uluç Ülgen, the 
                        host of "The Turkish Coffee Fortune Reading." In the last 
                        4 years, over 2,000 guests have visited my East Village 
                        apartment for a cup of authentic Turkish Coffee followed 
                        by a personalized fortune read from their coffee grounds! 
                        The project has earned coverage in publications such as 
                        the New York Post, The Paris Review, and National Public Radio. 
                        I’m so excited to bring this experience to you online!</div>
                        <div className="book-now-btn-teacher-bio">Book Now</div>
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