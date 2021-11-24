import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'

class NavbarBootstrap extends Component {



  render () {
    return (
      <div>
      <Navbar bg="light">
        <Container fluid>
          <Navbar.Brand>Star Wars Planet Dashboard</Navbar.Brand>
          <Navbar.Toggle />
          <Nav className="me-auto">
            <Nav.Link onClick = {this.props.tableClick}>Table</Nav.Link>
            <Nav.Link onClick = {this.props.graphClick}>Graph</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Version: <a href="#Hello">1.0</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
    )
  }
}

export default NavbarBootstrap;
