import React from 'react';
import TeacherImage from './2nd_assets/1.jpeg';
import Image2 from './2nd_assets/21.jpg';
import Image3 from './2nd_assets/2.jpeg';
import Image4 from './2nd_assets/3.jpg';
import Image6 from './2nd_assets/41.jpg';
import Image7 from './2nd_assets/52.jpg';
import Image1 from './2nd_assets/6.jpeg';
import './cultural_exp_show.css';

class CulturalExpShow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="about-section">
                    <div className="cultexp-title">Indian Masala Chai & Pakoda Experience</div>
                    <div className="cultexp-price">Online Experience Hosted by Neha!</div>
                    <div className="cultexp-description">Learn the intricacies of 
                    preparing India’s most loved dish by taking part in a fun class. 
                    You will learn to make an authentic masala chai and some 
                    mouth-watering pakodas. Come and immerse yourself into Indian 
                    culture and food!</div>
                    <div className="carousel">
                        <div className="slider">
                            <img src={Image4} className="slide" id="slide-1"></img>
                            <img src={Image2} className="slide" id="slide-2"></img>
                            <img src={Image3} className="slide" id="slide-3"></img>
                            <img src={Image1} className="slide" id="slide-4"></img>
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
                                In this experience we will cook authentic masala 
                                chai and vegetable pakoras.
                            </div>
                        </div>
                        <div className="cultxp-extra-info-container">
                            <div className="extra-info-title">What do I bring?</div>
                            <div className="extra-info-desc">Pots and pans, 
                            <br></br>
                            <br></br>
                            For Pakoras
                            <br></br>
                            <br></br>
                            - Any oil for frying (I prefer vegetable oil)
                            <br></br>
                            - Chickpea flour
                            <br></br>
                            - Cornstarch
                            <br></br>
                            - Baking powder
                            <br></br>
                            - Ground spices 
                            <br></br>
                            - Vegetables of your choice
                            <br></br>
                            <br></br>
                            For tea
                            <br></br>
                            <br></br>
                            - Water 
                            <br></br>
                            - Milk
                            <br></br>
                            - Loose tea 
                            <br></br>
                            - Sugar 
                            <br></br>
                            -Cardamom (if you want extra flavor)
</div>
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
                            <div className="pricing">30 min | $15 / person</div>
                            <div className="book-now-btn-teacher-bio">Book Now</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CulturalExpShow;