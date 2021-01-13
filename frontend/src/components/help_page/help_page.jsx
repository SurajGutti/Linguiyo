import React from 'react';
import papericon from '../../images/papericon.PNG';
import personicon from '../../images/personicon.PNG'
import computericon from '../../images/computericon.PNG'
import bookicon from '../../images/bookicon.PNG'
import moneyicon from '../../images/moneyicon.PNG'
import phoneicon from '../../images/phoneicon.PNG'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './help_page_style.css';

class help_page extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container" >
                <h2 className="pb-3 pt-3">Select a topic to search for help</h2>
                <div id="help-grid" className="row">
                    <a href="#" className="col-md">
                        <div>
                            <img className="icons" src={papericon} alt="paper-icon" />
                            <h5>Getting Started</h5>
                            <p>Learn how Udemy works and how to start learning.</p>
                        </div>
                    </a>
                    {/* use a wildcard for user id once db is up? */}
                    <Link to="/users/priya" className="col-md">
                        <div>
                            <img className="icons" src={personicon} alt="person-icon" />
                            <h5>Account/Profile</h5>
                            <p>Manage your account settings.</p>
                        </div>
                    </Link>
                    <a href="#" className="col-md">
                        <div>
                            <img className="icons" src={computericon} alt="computer-icon" />
                            <h5>Troubleshooting</h5>
                            <p>Experiencing a bug? Check here.</p>
                        </div>
                    </a>
                </div>
                <div id="help-grid" className="row">
                    <a href="#" className="col-md">
                        <div>
                            <img className="icons" src={bookicon} alt="book-icon" />
                            <h5>Course Taking</h5>
                            <p>Everything about taking a course on Udemy.</p>
                        </div>
                    </a>
                    <a href="#" className="col-md">
                        <div>
                            <img className="icons" src={moneyicon} alt="money-icon" />
                            <h5>Purchase/Refunds</h5>
                            <p>Learn about coupons, how to send gifts, and refunds.</p>
                        </div>
                    </a>
                    <a href="#" className="col-md">
                        <div>
                            <img className="icons" src={phoneicon} alt="phone-icon" />
                            <h5>Mobile</h5>
                            <p>On the go? Learn about our mobile app.</p>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}

export default help_page;