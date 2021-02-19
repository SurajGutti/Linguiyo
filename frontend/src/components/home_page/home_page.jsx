import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home_page_style.css';
import MainImg from './home_images/main.gif';
import Ellipse from './home_images/Ellipse.png';
import Sudoku from './home_images/sudoku.PNG';
import Collage from './home_images/collage.PNG';
import TurkishCoffeeImage from "./Turkish-images/4.JPG";
import MasalaChaiImage from "./Indian-Chai-Images/6.jpeg";
import CoffeeImage from "./Turkish-images/3.jpeg";
import TurkishCoffeeImag from './assets/Turkish-images/4.JPG';
import MasalaChaiImag from './assets/Indian-Chai-Images/2.jpg';
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
              <li>
                <p className="mr-5">You can start learning new languages from<span className="teal-color"> anytime, anywhere</span>!</p><img src={Ellipse} alt="ellipse" />
              </li>
              <li className="pb-5">
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




            <div style={{ marginBottom: 120 }} className="my_div cultural_main home_cul">
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
        </div>




        <div className="container">
          <div className="game-section">
            <div className="grid">
              <div className="mx-auto">
                <h2>Learn a language while playing games!</h2>
                <button className="home-btn">Start Playing</button>
              </div>
              <div >
                <img src={Sudoku} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="student-section">
            <div className="grid">
              <div>
                <img src={Collage} alt="" />
              </div>
              <div>
                <h2>What our students say</h2>
                <p>“The teacher is amazing. I attended her classes before starting studies in Shanghai and her teaching helped me a lot. She has that natural flair as a teacher which helps connect students with diverse backgrounds. It was really a privilege to be her student. I look forward to learning more from her in the future. She is very patient and easy going when teaching (which is really a necessity when teaching mandarin :)"</p>
                <p className="font-weight-bold  mb-5">Bawa, Shanghai</p>
                <button className="home-btn">Start Learning</button>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="crypto-section">
            <h3>Want more with your "Cryptocurrency"?</h3>
            <div>
              <ul>
                <li>
                  <p>We have introduced "Ethereum" as a mode of payment!!</p>
                </li>
                <li>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus labore doloribus mollitia quas. Cumque aperiam, id obcaecati quibusdam debitis eum rerum quod laudantium, eius magni similique aliquid doloribus porro quia!</p>
                </li>
              </ul>
              <div className="mx-auto mt-5">
                <button className="home-btn">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

export default HomePage;