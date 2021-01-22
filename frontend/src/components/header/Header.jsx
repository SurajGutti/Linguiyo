import React from 'react'
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap'
import style from './header.module.css'


export default function Header() {

    

    return (
        
           <div>
               
                <Navbar variant="dark" bg="dark" sticky="top"  > 
                    <Nav className="container-fluid" style={{ paddingLeft: 70, paddingRight: 70 }}>
                        <Nav.Item>
                            <Navbar.Brand href="#home"><img src="Logo.png" alt="Linguiyo Logo" style={{"width" : "110px","height" : "25px"}} /> </Navbar.Brand>
                        </Nav.Item>
                        <Nav.Item>
                            <NavDropdown title={<span className={style.navDropDownTitle}>Languages</span>} id="language-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2"></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4"></NavDropdown.Item>
                            </NavDropdown>
                        </Nav.Item>
                        <Nav.Item>
                            <NavDropdown title={<span className={style.navDropDownTitle}>Cultural Experiences</span>} id="cultural-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2"></NavDropdown.Item>
                            </NavDropdown>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className={style.navLinks} href="#hub">The Hub</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className={style.navLinks} href="#sign up"> <Button style={{ color:"white", background: "#1ABD9D", boxShadow: "5px 5px 3px rgba(255,255,255)"  }} outline >Sign Up</Button></Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar>

        </div>
    )
}
