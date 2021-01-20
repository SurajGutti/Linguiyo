import React from 'react';
import Image1 from './assets/1.JPG';
import Image2 from './assets/2.jpg';
import Image3 from './assets/3.jpeg';
import Image4 from './assets/4.JPG';
import Image6 from './assets/6.jpg';
import Image7 from './assets/7.png';
import TeacherImage from './assets/5.jpg';
import './cultural_exp_show.css';

class CulturalExpShow extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div className="about-section">
                    <div className="cultexp-title">Turkish Coffee Fortune Reading</div>
                    <div className="cultexp-price">Online Experience Hosted by Ulec!</div>
                    <div className="cultexp-description">Turkish coffee fortune
                    reading is an authentic tradition dating back to the Ottoman
                    empire of the 1600s. After drinking this sweet, espresso-like coffee,
                    it is customary to read one's fortune from the remaining coffee grinds.</div>
                    <div className="carousel">
                        <div className="slider">
                            <img src={Image1} className="slide" id="slide-1"></img>
                            <img src={Image2} className="slide" id="slide-2"></img>
                            <img src={Image3} className="slide" id="slide-3"></img>
                            <img src={Image4} className="slide" id="slide-4"></img>
                            <img src={TeacherImage} className="slide" id="slide-5"></img>
                            <img src={Image6} className="slide" id="slide-6"></img>
                            <img src={Image7} className="slide" id="slide-7"></img>
                        </div>
                    </div>
                </div>
                <div className="about-teacher-section">
                    <div className="cultxp-teacher-image">
                        <div className="cultxp-extra-info-container">
                            <div className="extra-info-title">What do we do</div>
                            <div className="extra-info-desc">
                                Per the old school Turkish style,
                                we prepare the coffee on the hot sand. The grinds are then projected
                                onto an iPad screen - via endoscope camera - allowing for a visual
                                fortune-telling experience unlike any other. The symbols and figures
                                inside your coffee cup are interpreted right before your eyes! These readings are always fun,
                                light-hearted, but most importantly - insightful!
                            </div>
                        </div>
                        <div className="cultxp-extra-info-container">
                            <div className="extra-info-title">What do I bring?</div>
                            <div className="extra-info-desc">Any cup of coffee</div>
                        </div>
                        <div className="cultxp-extra-info-container">
                            <div className="extra-info-title">How do I participate?</div>
                            <div className="extra-info-desc">
                                Join via zoom. Download Zoom for free on a desktop
                                or mobile device. Once your booking is complete,
                                you’ll receive an email with a link and details on how to join.
                            </div>
                        </div>
                    </div>
                    <div className="cultxp-teacher-bio-wrapper">
                        <div className="cultxp-teacher-bio-container">
                            <img src={TeacherImage} className="teacher-circle-img" />
                            <div className="cultxp-teacher-title">Meet your host</div>
                            <div className="cultxp-teacher-bio">I'm Uluç Ülgen, the 
                            host of "The Turkish Coffee Fortune Reading." In the last 
                            4 years, over 2,000 guests have visited my East Village 
                            apartment for a cup of authentic Turkish Coffee followed 
                            by a personalized fortune read from their coffee grounds! 
                            The project has earned coverage in publications such as 
                            the New York Post, The Paris Review, and National Public Radio. 
                            I’m so excited to bring this experience to you online!</div>
                        </div>
                        <div className="book-now-container">
                            <div className="pricing">30 min | $45 / person</div>
                            <div className="book-now-btn-teacher-bio">Book Now</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CulturalExpShow;