import React from 'react';
import priyahluwalia from './images/PriyaAhluwalia.jpeg';
import './langcourse.css';

class LanguageCourseHindi extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div className="about">
                    <div className="lang-header"/>
                    <h1 class="ui header" align="center">Hindi Language Class</h1>
                    <div className="lang-about">Language Taught by Priya Ahluwalia</div>
                    <div className="lang-description">
                    The main objective for Hindi 101 is to enable students to develop usable proficiency in Hindi in each of a number of distinct skills, 
                    namely, speaking, reading, writing, listening, and knowledge of formal grammar.
                    At the end of this 16 lesson plan, each student should be able to have a basic understanding of the language. 
                    The students should be able to form simple sentences and be able to have short-conversations.
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
                                    By the end of the course students will be able to;<br/>
                                    <div class="ui bulleted list">
                                        <div class="item">Be familiar with the language</div>
                                        <div class="item">Form simple sentences and have short-conversations</div>
                                        <div class="item">Develop a list of new vocabulary words</div>
                                        <div class="item">Have formal understanding of basic Hindi grammar</div>
                                        <div class="item">Should be able to start understanding words/phrases while watching a movie/show</div>
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
                            <div className="participate-title">How do I participate </div>
                            <div className="participate-desc" style={{marginBottom: '50px'}}>
                              Join via zoom. Download Zoom for free on a desktop or mobile device. 
                              Once your booking is complete, you’ll receive an email with a link and details on how to join.</div>
                    </div>
                    <div className="teacher-info">
                        <div class="ui raised card" style={{backgroundColor: '#FFD900' ,width: '70%', display: 'flex', position: 'relative', left: '15%'}}>
                            <div class="content">
                                <div class="center aligned description">
                                    <img class="ui small circular image" style={{marginBottom: '20px', marginTop: '25px'}} src={priyahluwalia}/>
                                </div>
                                <div class="center aligned header" style={{marginBottom: '20px'}}>Meet Your Language Embassador</div>
                                <div class="center aligned header" style={{marginBottom: '20px'}}>Priya Ahulwaliya</div>
                                <div class="center aligned description">
                                    <div class="meta" style={{marginBottom: '20px'}}>
                                        <i class="linkedin in icon"></i>
                                        <span class="date">priya-ahluwalia-59101423</span><br/>
                                        <i class="envelope icon"></i>
                                        <span class="date">priyahluwalia@gmail.com</span><br/>
                                        <i class="phone icon"></i>
                                        <span class="date">415.802.5001</span><br/>
                                    </div>
                                </div>
                                <div class="center aligned description" style={{marginBottom: '20px'}}>
                                    Serial entrepreneur, CEO @ Linguiyo, Chief Operating Officer @ PlateRate, Director of Operations @ CPIC Global, Professor, Artist
                                </div>
                                <div class="center aligned description" style={{marginBottom: '20px'}}>
                                Teaching Hindi and Chinese is a true passion for Priya. She has taught over a 1000 students in India, China, and the US. Priya currently lives in New York City and is an avid foodie.
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

export default LanguageCourseHindi;