import React from 'react'
import { Navbar, Nav, NavDropdown, Button, SplitButton } from 'react-bootstrap'
import style from './header.module.css'
import { Link } from 'react-router-dom';
import logo from './header_images/Logo.png'

export default function Header() {
    return (
        <div>
            <Navbar className={style.backGroundColorNav} >
                <Nav className="container-fluid" style={{ paddingLeft: 70, paddingRight: 70 }}>
                    <Nav.Item>
                        <Navbar.Brand href="/"><img src={logo} alt="Linguiyo Logo" style={{ "width": "110px", "height": "25px" }} /> </Navbar.Brand>
                    </Nav.Item>
                    <Nav.Item>
                        <div>
                            {['down'].map((direction) => (
                                <SplitButton
                                    key={direction}
                                    variant='none'
                                    title={`Languages`}
                                    href="/languages-main"
                                >
                                    {/* <NavDropdown.Item href="/language-courses/chinese">Chinese</NavDropdown.Item> */}
                                    <NavDropdown.Item href="/language-courses/french">French</NavDropdown.Item>
                                    {/* <NavDropdown.Divider /> */}
                                    <NavDropdown.Item href="/language-courses/hindi">Hindi</NavDropdown.Item>
                                    <NavDropdown.Item href="/language-courses/spanish">Spanish</NavDropdown.Item>
                                </SplitButton>
                            ))}
                        </div>
                    </Nav.Item>
                    <Nav.Item>
                        <div>
                            {['down'].map((direction) => (
                                <SplitButton
                                    key={direction}
                                    variant='none'
                                    title={`Cultural Experiences`}
                                    href="/cultural-experience-main"
                                >
                                    <NavDropdown.Item href="/cultural-experiences/2">Indian</NavDropdown.Item>
                                    <NavDropdown.Item href="/cultural-experiences/1">Turkish</NavDropdown.Item>
                                </SplitButton>
                            ))}
                        </div>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className={style.navLinks} href="/blog">The Hub</Nav.Link>
                    </Nav.Item>
                    <div>
                        <Button href="#login" style={{ color: "white", background: "#111111", borderWidth: "thin", borderColor: "white", marginRight: "10px", borderRadius: "12px" }} outline >Login</Button>
                        <Button href="#signup"style={{ color: "#111111", fontWeight: "bold", background: "#1ABD9D", borderRadius: "12px"}} outline >Sign Up</Button>
                    </div>
                </Nav>
            </Navbar>

        </div >
    )
}
