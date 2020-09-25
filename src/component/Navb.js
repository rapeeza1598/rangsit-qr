import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import {
    FormControl,
    Form,
    Button,
    Navbar,
    Nav,
    NavDropdown,
} from "react-bootstrap"
function Navb() {
    return (
        <div>
            <Navbar
                collapseOnSelect
                expand="lg"
                bg="dark"
                variant="dark"
                fixed="top"
            >
                <Navbar.Brand href="#home">HOME</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#register">ลงทะเบียน</Nav.Link>
                        <Nav.Link href="#scan">Scan QR-Code</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navb
