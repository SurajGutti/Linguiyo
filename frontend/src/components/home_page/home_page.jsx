import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home_page_style.css'

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="wrapper">
                <div className="slides">
                    <h2>Slide Show</h2>
                </div>
                <div className="container">
                    <div className="video">
                        <h2>Video</h2>
                    </div>
                    <div className="explore">
                        <h2>Explore</h2>
                    </div>
                </div>
                <div className="about">
                    <h2>About</h2>
                </div>
            </div>
        )
    }
}

export default HomePage;