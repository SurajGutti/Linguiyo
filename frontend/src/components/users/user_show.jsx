import React from 'react';
import { Link } from 'react-router-dom';
import './user_show_style.css';

class UserShow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            // COMMENTS FOR WHEN DATABASE ADDED
            <div className="user-show-bg">
                <Link to="/" className="home-link">Home</Link>
                <div className="user-show">
                    <div className="user-info">
                        <div className="edit-button-container">
                            <button className="edit-button">edit</button>
                        </div>
                        {/* here we can use user.name that we pass into props */}
                        <p className="user-name">Priya Ahluwalia</p>
                        {/* user.bio */}
                        <p className="user-bio">Priya is a true entrepreneur at heart. She serves as the
                        COO for PlateRate (food tech startup), CEO for Linguiyo (
                        an Ed-Tech startup), Director of Operations for CPIC Global (
                        international real estate firm), and is also a language professor.
                        She loves to travel, try new wines, and talk about space explortation.
                        </p>
                        <div className="user-info-footer">
                            {/* user.occupation */}
                            <p className="user-info-footer-item">COO @PlateRate</p>
                            {/* user.location */}
                            <p className="user-info-footer-item">New York City</p>
                            {/* user.connections.length */}
                            <p className="user-info-footer-item">15 connections</p>
                        </div>
                    </div>
                    <div className="user-extra-info">
                        <div className="edit-button-container">
                            <button className="edit-button">edit</button>
                        </div>
                        <div className="extra-info-item">
                            <div className="extra-info-item-left">
                                <p className="icon">(icon)</p>
                            </div>
                            <div className="extra-info-item-right">
                                <p className="extra-info-heading">I'm interested in</p>
                                {/* Map of user.interest? */}
                                <div className="interest-tags-container">
                                    <p className="interest-tag">angel investing</p>
                                    <p className="interest-tag">entrepreneurship</p>
                                    <p className="interest-tag">travel</p>
                                    <p className="interest-tag">education</p>
                                    <p className="interest-tag">food</p>
                                    <p className="interest-tag">venture capital</p>
                                    <p className="interest-tag">e-commerce</p>
                                    <p className="interest-tag">space</p>
                                    <p className="interest-tag">wine</p>
                                    <p className="interest-tag">startups</p>
                                    <p className="interest-tag">ed-tech</p>
                                </div>
                            </div>
                        </div>
                        <div className="extra-info-item">
                            <div className="extra-info-item-left">
                                <p className="icon">(icon)</p>
                            </div>
                            <div className="extra-info-item-right">
                                <p className="extra-info-heading">Ask me about</p>
                                <p>how to learn a new language? how to set up and grow a startup?</p>
                            </div>
                        </div>
                        <div className="extra-info-item">
                            <div className="extra-info-item-left">
                                <p className="icon">(icon)</p>
                            </div>
                            <div className="extra-info-item-right">
                                <p className="extra-info-heading">I'd like to learn about</p>
                                <p>how to disrupt the education system? how to start a wine distribution company?</p>
                            </div>
                        </div>
                        <div className="extra-info-item">
                            <div className="extra-info-item-left">
                                <p className="icon">(icon)</p>
                            </div>
                            <div className="extra-info-item-right">
                                <p className="extra-info-heading">Something I just learned</p>
                                <p>so much of the world still needs to be disrupted.</p>
                            </div>
                        </div>
                        <div className="extra-info-item">
                            <div className="extra-info-item-left">
                                <p className="icon">(icon)</p>
                            </div>
                            <div className="extra-info-item-right">
                                <p className="extra-info-heading">Top of mind for me</p>
                                <p>how can I achieve financial independence in the next 1 year?</p>
                            </div>
                        </div>
                        <div className="extra-info-item">
                            <div className="extra-info-item-left">
                                <p className="icon">(icon)</p>
                            </div>
                            <div className="extra-info-item-right">
                                <p className="extra-info-heading">Working on a side project</p>
                                <p>1. language Ed-Tech platform 2. trying to launch a new drink in the market</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserShow;