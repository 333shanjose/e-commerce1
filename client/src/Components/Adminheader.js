import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
function Adminheader() {
  return (
    <div>
       <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="/admin">Admin panel</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/admin/addproducts">Add products</Nav.Link>
          <Nav.Link href="/admin/orderhistory">All orders</Nav.Link>
          <Nav.Link href="/admin/userslist">All users</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar> 
    </div>
  )
}

export default Adminheader