import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav,Button,Container, Row, Col } from 'react-bootstrap'
import  style from './footer_style.css'
import facebook from './footer_images/facebook.svg';
import instagram from './footer_images/instagram.svg';
import twitter from './footer_images/twitter.svg';


class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <Container className='footer' fluid>
                <Row className="footer-row">
                    <Col>
                        <Row>
                            <Col className="footer-col-left">Open your horizons with Us!</Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col className="footer-col-left">About Us</Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col className="footer-col-left">Help and Support</Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col className="footer-col-left">Connect with Us</Col>
                        </Row>
                    </Col>  
                </Row>
                <Row className="footer-row">
                    <Col className="footer-col-left" href="#sign up">
                        <Button style={{ color:"#111111", fontWeight: "bold",  height: "35px", background: "#1ABD9D", borderRadius: "10px"}} outline >
                            Get Started
                        </Button>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                    <Col>
                        <Row className="footer-logo-img">
                            <Col><img src={facebook} /> </Col>
                            <Col><img src={twitter} /> </Col>
                            <Col><img src={instagram} /> </Col>
                        </Row>
                    </Col>

                </Row>
            </Container >
        )
    }
}

export default Footer;