import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav,Button,Container, Row, Col } from 'react-bootstrap'
import  style from './footer_style.css'

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <Container className='footer'>
                <Row className="footer-row">
                    <Col>
                        <Row>
                            <Col className="footer-col-left">Open your horizons with Us!</Col>
                            <Col></Col>
                        </Row>
                    </Col>
                    <Col className="footer-col-right" href="#sign up">
                        <Button style={{ color:"white", height: "35px", background: "#1ABD9D", boxShadow: "5px 5px 3px rgba(255,255,255)"  }} outline >
                            Get Started
                        </Button>
                    </Col>
                </Row>
                <Row className="footer-row">
                    <Col>
                        <Row>
                            <Col className="footer-col-left">Connect with Us</Col>
                            <Col></Col>
                        </Row>
                    </Col>  
                    <Col></Col>  
                    <Col className="footer-col-right">
                        <Row>
                            <Col><img src="facebook.svg" width="30" height="30" /> </Col>
                            <Col><img src="twitter.svg"  width="30" height="30" /> </Col>
                            <Col><img src="instagram.svg" width="30" height="30" /> </Col>
                        </Row>
                    </Col>
                </Row>

                <Row className="footer-row">
                    <Col>
                        <Row>
                            <Col className="footer-col-left">About Us</Col>
                            <Col className="footer-col-left">Help and Support</Col>
                            <Col></Col>
                        </Row>
                    </Col>
                    <Col></Col>
                </Row>
                {/* <p className='footer li'>Open your horizons with Us!</p>
                <Nav.Link className={style.navLinks} href="#sign up"> <Button style={{ color:"white", background: "#1ABD9D", boxShadow: "5px 5px 3px rgba(255,255,255)"  }} outline >Get Started</Button></Nav.Link> */}
            </Container >
        )
    }
}

export default Footer;