import React from 'react';
import barbaralandrevie from './images/BarbaraLandrevie.jpg';
import './langcourse.css';

class LanguageCourseFrench extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
    // From Sunkanmi: To ensure page scroll to top when navigated to
    window.scrollTo(0,0)
    }

    render(){
        return(
            <div>
                <div className="about">
                    <div className="lang-header"/>
                    <h1 class="ui header" align="center">French Language Class</h1>
                    <div className="lang-about">Language Taught by Barbara Landrevie</div>
                    <div className="lang-description">
                    The main objective for French is to enable students to develop usable proficiency in French in each of a number of distinct skills, namely, speaking, reading, writing, listening, and knowledge of formal grammar.
                    At the end of this 16 lesson plan, each student should be able to have a basic understanding of the language. The students should be able to form simple sentences and be able to have short-conversations.
                    </div>
                </div>
                <div className="about-course">
                    <div className="course-info">
                        <div className="vid-container">
                            <div class="vid-border">
                              <iframe id="vid" width="500" height="350" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1"></iframe>
                            </div>
                            <div className="cultexp-title"/>
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
                    </div>
                    <div className="teacher-info">
                        <div class="ui raised card" style={{backgroundColor: '#FFD900' ,width: '70%', height: '70%', display: 'flex', position: 'relative', left: '15%'}}>
                            <div class="content">
                                <div class="center aligned description">
                                    <img class="ui small circular image" style={{marginBottom: '20px', marginTop: '25px'}} src={barbaralandrevie}/>
                                </div>
                                <div class="center aligned header" style={{marginBottom: '20px'}}>Meet Your Language Embassador</div>
                                <div class="center aligned header" style={{marginBottom: '20px'}}>Barbara Landrevie</div>
                                <div class="center aligned description">
                                </div>
                                <div class="center aligned description" style={{marginBottom: '20px'}}>
                                French teacher, previously press journalist
                                </div>
                                <div class="center aligned description" style={{marginBottom: '20px'}}>
                                Journalist in the written press for twenty years for the Nouvel Observateur, Liberation or Le Monde Diplomatique, I am now a French teacher. I will make you discover the language of Moli??re but also the French culture, its history, its gastronomy, its architecture.
                                </div>
                            </div>
                        </div>
                        <div class="ui raised card" style={{backgroundColor: '#FFD900' ,width: '70%', height: '18%', display: 'flex', position: 'relative', left: '15%'}}>
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

export default LanguageCourseFrench;