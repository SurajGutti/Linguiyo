import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home_page_style.css'

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <div className="intro container">
                    <div className="row">
                        <div className="col-sm">
                            <div className="main-img">
                            </div>
                        </div>
                        <div className="col-sm intro-right">
                            <h2>Learn a new language and experience the culture!</h2>
                            <button className="btn get-started">Get Started</button>
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
                    <h2>Cultural Experiences</h2>
                    <div className="row">
                        <div className="col-sm">
                            <h3>Turkish Coffee</h3>
                            <div className="culture-img">
                                img
                            </div>
                        </div>
                        <div className="col-sm">
                            <h3>French Wine</h3>
                            <div className="culture-img">
                                img
                            </div>
                        </div>
                        <div className="col-sm">
                            <h3>Indian Chai</h3>
                            <div className="culture-img">
                                img
                            </div>
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
                <div className="our-story">
                    <div>
                        <h2>Our story</h2>
                    </div>
                    <div className="d-flex justify-content-center">
                        <Link className="btn">Find Out More</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;