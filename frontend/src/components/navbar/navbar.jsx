import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar_style.css';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    listener = null;
    state = {
        nav: false
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll');
    }
    handleScroll = () => {
        if (window.pageYOffset > 140) {
            if (!this.state.nav) {
                this.setState({ nav: true });
            }
        } else {
            if (this.state.nav) {
                this.setState({ nav: false });
            }
        }

    }

    render() {
        return (
            <div id="navbar">
                <Link to="/">Home</Link>
                <Link to="/">Explore Languages</Link>
                <Link to="/cultural-experience-land">Online Cultural Experiences</Link>
                <Link to="/">The Hub</Link>
                <Link to="/">Contact Us</Link>
            </div>
        );
    }
}

export default Navbar;