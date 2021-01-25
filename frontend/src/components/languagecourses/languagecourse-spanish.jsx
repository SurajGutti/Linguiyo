import React from 'react';
import margotmalverty from './images/MargotMalverty.jpeg';
import './langcourse.css';

class LanguageCourseSpanish extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div className="about">
                    <div className="lang-header"/>
                    <h1 class="ui header" align="center">Spanish Language Class </h1>
                    <div className="lang-about">Language Taught by Margot Malverty</div>
                    <div className="lang-description">
                    The main course objective for students of Spanish 101 is to feel confident in their ability to hold brief conversations in the target language. 
                    Students should have a general idea of certain cultural aspects of the language and traditions of its native speakers. 
                    Upon completion of this course, students should have enough understanding of basic vocabulary and grammar to be able to have simple conversations in Spanish.
                    </div>
                </div>
                <div className="about-course">
                    <div className="course-info">
                        <div className="vid-container">
                            <div class="vid-border">
                              <iframe id="vid" width="500" height="350" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1"></iframe>
                            </div>
                            <div className="cultexp-title"/>
                            <div className="participate-container">
                                <div className="format-info">Course Goals</div>
                                <div className="format-desc">
                                    During this course students will learn more about<br/>
                                    <div class="ui bulleted list">
                                        <div class="item">The connection between Hispanic culture and the Spanish language</div>
                                        <div class="item">Basic vocabulary on a range of subjects that are relevant to real-world experiences</div>
                                        <div class="item">Beginning grammar concepts and sentence formation</div>
                                        <div class="item">Read, write and understand a majority of the Spanish language that is applicable to everyday life</div>
                                    </div>
                                </div>
                            </div>
                            <div className="format-info">Linguiyo Format</div>
                            <div className="format-desc">
                            Linguiyo offers group and 1:1 courses offered in a virtual format. 
                            Each course consists of 8 classes offered weekly so you can learn a new language every 2 months. 
                            Corporate discounts are also available for groups and custom learning.
                            </div>
                        </div>
                        <div className="participate-container">
                            <div className="participate-title">How do I participate </div>
                            <div className="participate-desc">
                              Join via zoom. Download Zoom for free on a desktop or mobile device. 
                              Once your booking is complete, you’ll receive an email with a link and details on how to join.</div>
                        </div>
                    </div>
                    <div className="teacher-info">
                        <div class="ui raised card" style={{backgroundColor: '#FFD900' ,width: '70%', display: 'flex', position: 'relative', left: '15%'}}>
                            <div class="content">
                                <div class="center aligned description">
                                    <img class="ui small circular image" style={{marginBottom: '20px', marginTop: '25px'}} src={margotmalverty}/>
                                </div>
                                <div class="center aligned header" style={{marginBottom: '20px'}}>Meet Your Language Embassador</div>
                                <div class="center aligned header" style={{marginBottom: '20px'}}>Priya Ahulwaliya</div>
                                <div class="center aligned description">
                                    <div class="meta" style={{marginBottom: '20px'}}>
                                        <i class="linkedin in icon"></i>
                                        <span class="date">https://www.linkedin.com/in/margot-m</span><br/>
                                    </div>
                                </div>
                                <div class="center aligned description" style={{marginBottom: '20px'}}>
                                    Spanish Educator and Writer, Traveler
                                </div>
                                <div class="center aligned description" style={{marginBottom: '20px'}}>
                                Margot obtained her Bachelor's degree from NYU; 
                                She has experience teaching all ages and levels, from beginner's Spanish to advanced. 
                                Along with her primary focus in creating and teaching, Margot also writes articles. 
                                Margot currently lives in New Jersey with her husband and two young sons. 
                                Apart from spending time with family, she enjoys traveling, visiting the beach and playing sports and music.
                                </div>
                            </div>
                        </div>
                        <div class="ui raised card" style={{backgroundColor: '#FFD900' ,width: '50%', display: 'flex', position: 'relative', left: '25%'}}>
                            <div class="center aligned header" style={{marginTop: '25px', marginBottom: '20px', fontWeight: "bold"}}>
                                $120 / person
                            </div>
                            <div class="center aligned description">
                                <button class="ui teal button" style={{marginBottom: '20px'}}>Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LanguageCourseSpanish;