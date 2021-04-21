import React, { useState } from "react";
import {
 Navbar,
 Nav,
 NavDropdown,
 Form,
 FormControl,
 Button,
 NavLink
} from "react-bootstrap";
import LoginModel from "../models/login-model";

 
const Navigation = () => {
 const [modalShow, setModalShow] = useState(false);
 
 return (
   <Navbar bg="primary" variant="dark" expand="md">
     <Navbar.Brand href="/">React Hooks</Navbar.Brand>
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
     <Navbar.Collapse id="basic-navbar-nav">
       <Nav className="mr-auto">
       <NavLink
          style={{ width: "50px" }}
          onClick={() => {
            setModalShow(true);
          }}
        >
           Login
           
         </NavLink>
         <LoginModel
           show={modalShow} 
           onHide={() => setModalShow(false)} 
        />

         <Nav.Link href="/signup">Register</Nav.Link>
         <Nav.Link href="/product">Product</Nav.Link>
         <Nav.Link href="/services">Services</Nav.Link>
         <Nav.Link href="/software">Software</Nav.Link>
         <Nav.Link href="/about">About</Nav.Link>
         <Nav.Link href="/contact">Contact</Nav.Link>

         <NavDropdown title="Technologies" id="basic-nav-dropdown">
           <NavDropdown.Item href="#action/3.1">Database</NavDropdown.Item>
           <NavDropdown.Item href="#action/3.2"> NODEJS </NavDropdown.Item>
           <NavDropdown.Item href="#action/3.3">Alexa</NavDropdown.Item>
           <NavDropdown.Divider />
           <NavDropdown.Item href="#action/3.4"> Laravel </NavDropdown.Item>
         </NavDropdown>
       </Nav>
       
       <Form inline>
         <FormControl type="text" placeholder="Search" className="mr-sm-2" />
         <Button variant="outline-light">Search</Button>
       </Form>
     </Navbar.Collapse>
   </Navbar>
 );
};
export default Navigation;