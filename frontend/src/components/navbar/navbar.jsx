import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar_style.css';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <div id="navbar">
                <button>Logo</button>
                <Link className="dropdown-toggle" to="/">Languages
                    <span className="caret"></span></Link>
                <Link className="dropdown-toggle" to="/cultural-experience-main">Cultural Experiences
                    <span className="caret"></span></Link>
                <Link to="/">The Hub</Link>
                <button>Sign up</button>
            </div >
        );
    }
}

export default Navbar;