import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home_page_style.css';
import Carousel from 'react-bootstrap/Carousel';
import Turkish from './home_images/1.JPG'
import Indian from './home_images/2.jpg'
import French from './home_images/3.jpg'
class HomePage extends React.Component {
    render() {
        return (
            <div>
                <div className="intro container">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-img">
                            </div>
                        </div>
                        <div className="col-6 intro-right">
                            <h2>Learn a new language and experience the culture!</h2>
                            <Link to="/languages-main" className="btn get-started">Get Started</Link>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="second-section">
                        <h2>How Linguiyo works</h2>
                        <div>
                            <h4>Register With Us</h4>
                        </div>
                        <div className="text-center">
                            <h4>Start Learning from Anytime, Anywhere</h4>
                        </div>
                        <div className="text-right">
                            <h4>Get Immersed in the Culture</h4>
                        </div>
                    </div>
                </div>
                <div className="cultural-exp">
                    <a href="/cultural-experience-main"><h2>Cultural Experiences</h2></a>
                    <div className="row">
                        <div className="col-4">
                            <a href="/cultural-experiences/1">
                                <div className="card">
                                    <div className="card-header">
                                        <p>Turkish Coffee</p>
                                    </div>
                                    <img className="card-body" src={Turkish} alt="turkish coffee" />
                                </div>
                            </a>
                        </div>
                        <div className="col-4">
                            <a href="/cultural-experiences/2">
                                <div className="card">
                                    <div className="card-header">
                                        <h3>Indian Chai</h3>
                                    </div>
                                    <div className="card-body">
                                        <img src={Indian} alt="Indian chai" />
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-4">
                            <a href="/cultural-experiences/3">
                                <div className="card">
                                    <div className="card-header">
                                        <h3>French Wine</h3>
                                    </div>
                                    <img className="card-body" src={French} alt="French Wine" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="game-section">
                    <div className="game-grid">
                        <h2>Immersive Games for quick learning</h2>
                        <div >
                            <h3>illustration</h3>
                        </div>
                    </div>
                </div>
                <Carousel>
                    <Carousel.Item>
                        <div className="our-story">
                            <div>
                                <h2>Our story</h2>
                            </div>
                            <div className="d-flex justify-content-center">
                                <Link className="btn story-btn">Find Out More</Link>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="our-story">
                            <div>
                                <h2>What others say about us</h2>
                            </div>
                            <div className="feedback justify-content-center">
                                <h3>{'Bawa(Shanghai)'}</h3>
                                <h3>{'The teacher is amazing. I attended her classes before starting studies in Shanghai and her teaching healped me a lot. She has that natural flair as a teacher which helps connect students with divers backgrounds. It was really a privilege to be her student. I look forward to learing more from her in the future. She is very patient and easy going when teaching (which is really a necessity when teaching Mandarin.)'}</h3>
                            </div>
                            <div className="d-flex justify-content-center">
                                <Link className="btn feedback-btn">Find Out More</Link>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default HomePage;