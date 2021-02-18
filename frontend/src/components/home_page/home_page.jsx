import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home_page_style.css';
import Carousel from 'react-bootstrap/Carousel';
import Turkish from './home_images/1.JPG'
import Indian from './home_images/2.jpg'
import MainImg from './home_images/main.gif'
import French from './home_images/3.jpg'
import Ellipse from './home_images/Ellipse.png'
import TurkishCoffeeImage from "./Turkish-images/4.JPG";
import MasalaChaiImage from "./Indian-Chai-Images/6.jpeg";
import CoffeeImage from "./Turkish-images/3.jpeg";
import TurkishCoffeeImag from './assets/Turkish-images/4.JPG';
import MasalaChaiImag from './assets/Indian-Chai-Images/2.jpg'
import TestImage from './assets/Indian-Chai-Images/3.jpg'
import CoffeeImag from './assets/Turkish-images/3.jpeg';
class HomePage extends React.Component {
    render() {
        return (
            <div>
                <div className="intro">
                    <img src={MainImg} alt="main img" />
                </div>
                <div className="container">
                    <div className="second-section">
                        <h2>Learn a new language</h2>
                        <h2>and experience the culture!</h2>
                        <div className="mx-auto">
                            <button className="home-btn">Start Learning</button>
                        </div>
                    </div>
                </div>
                <div className="why-section">
                    <h3>Why Linguiyo?</h3>
                    <div className="list-section">
                        <ul>
                            <li>
                                <img src={Ellipse} alt="ellipse" /><p>We offer <span className="teal-color">American Sign Language(ASL)</span> along with <span className="teal-color">12 Foreign Languages</span> and immersive <span className="teal-color">cultural experiences</span>!</p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <p className="mr-5">You can start learning new languages from<span className="teal-color"> anytime, anywhere</span>!</p><img src={Ellipse} alt="ellipse" />
                            </li>
                        </ul>
                        <ul className="pb-5">
                            <li>
                                <img src={Ellipse} alt="ellipse" /><p>Once you complete the basic course you can <span className="teal-color">form simple sentences </span>and have<span className="teal-color"> conversations</span>!</p>
                            </li>
                        </ul>
                        <div className="mx-auto mt-5">
                            <button className="home-btn">Read More</button>
                        </div>
                    </div>
                </div>













                <div className="container">
                <div className="my_div cultural_main home_cul">
            <div>
              <h2 className="text-center his">Our Popular Courses</h2>
            </div>
            <div className="row d-flex justify-content-around cards_">
              <div
                onClick={() =>
                  this.props.history.push("/language-courses/hindi")
                }
                className="col-md-3 p-0"
              >
                <div
                  style={{ backgroundImage: `url('${CoffeeImag}')` }}
                  className="col-md-12 col-xs-12 each_card_"
                >
                  <div className="innerfade_"></div>
                  <div className="row desc_container">
                    <div className="desc nnni">
                      <h3> 
                          Hindi Language</h3>
                    </div>
                  </div>
                </div>

                <div className="row d-flex btn__ justify-content-center mt-4">
                    <div className="btn btn-success">
                        Start Learning
                    </div>
                </div>
              </div>
              <div
                onClick={() =>
                  this.props.history.push("/language-courses/spanish")
                }
                className="col-md-3 p-0"
              >
                <div
                  style={{ backgroundImage: `url('${MasalaChaiImag}')` }}
                  className="col-md-12 col-xs-12 each_card_"
                >
                  <div className="innerfade_"></div>
                  <div className="row desc_container">
                    <div className="desc">
                      <h3>
                          Spanish Language</h3>
                    </div>
                  </div>
                </div>

                <div className="row d-flex btn__ justify-content-center mt-4">
                    <div className="btn btn-success">
                        Start Learning
                    </div>
                </div>
              </div>
              <div
                onClick={() =>
                  this.props.history.push("/language-courses/french")
                }
                className="col-md-3 p-0"
              >
                <div
                  style={{ backgroundImage: `url('${TurkishCoffeeImag}')` }}
                  className="col-md-12 col-xs-12 each_card_"
                >
                  <div className="innerfade_"></div>
                  <div className="row desc_container">
                    <div className="desc">
                    <h3> 
                          French Language</h3>
                    </div>
                  </div>
                </div>
                <div className="row d-flex btn__ justify-content-center mt-4">
                    <div className="btn btn-success">
                        Start Learning
                    </div>
                </div>
              </div>
              
            </div>
          </div>









          <div style={{marginBottom:120}} className="my_div cultural_main home_cul">
            <div>
              <h2 className="text-center his">Our Popular Experiences</h2>
            </div>
            <div className="row d-flex justify-content-around cards_">
              <div
                onClick={() =>
                  this.props.history.push("/cultural-experiences/1")
                }
                className="col-md-3 p-0"
              >
                <div
                  style={{ backgroundImage: `url('${CoffeeImage}')` }}
                  className="col-md-12 col-xs-12 each_card_"
                >
                  <div className="innerfade_"></div>
                  <div className="row desc_container">
                    <div className="desc nnni">
                      <h3>Turkish Coffee Experience</h3>
                    </div>
                  </div>
                </div>

                <div className="row d-flex btn__ justify-content-center mt-4">
                    <div className="btn btn-success">
                        Start Learning
                    </div>
                </div>
              </div>
              <div
                onClick={() =>
                  this.props.history.push("/cultural-experiences/2")
                }
                className="col-md-3 p-0"
              >
                <div
                  style={{ backgroundImage: `url('${MasalaChaiImage}')` }}
                  className="col-md-12 col-xs-12 each_card_"
                >
                  <div className="innerfade_"></div>
                  <div className="row desc_container">
                    <div className="desc">
                      <h3>Indian tea & 
Pakoda Experience</h3>
                    </div>
                  </div>
                </div>

                <div className="row d-flex btn__ justify-content-center mt-4">
                    <div className="btn btn-success">
                        Start Learning
                    </div>
                </div>
              </div>
              <div
                onClick={() =>
                  this.props.history.push("/cultural-experiences/2")
                }
                className="col-md-3 p-0"
              >
                <div
                  style={{ backgroundImage: `url('${TurkishCoffeeImage}')` }}
                  className="col-md-12 col-xs-12 each_card_"
                >
                  <div className="innerfade_"></div>
                  <div className="row desc_container">
                    <div className="desc">
                      <h3>French Wine Experience</h3>
                    </div>
                  </div>
                </div>
                <div className="row d-flex btn__ justify-content-center mt-4">
                    <div className="btn btn-success">
                        Start Learning
                    </div>
                </div>
              </div>
              
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
            </div >
        )
    }
}

export default HomePage;