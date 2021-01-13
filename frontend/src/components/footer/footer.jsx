import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer_style.css'

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer>
                <ul>
                    <li>Basic Footer</li>
                    <li><Link to="/help">Help</Link></li>
                </ul>
            </footer>
        )
    }
}

export default Footer;