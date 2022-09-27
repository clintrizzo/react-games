import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BasicExample() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand><Link to="/" style={{color: 'white'}}>React Games</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor: 'white'}}/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/tictactoe" style={{color: 'white'}} className='navgame'>Tic-Tac-Toe</Link></Nav.Link>
            <Nav.Link><Link to="/connectfour" style={{color: 'white'}} className='navgame'>Connect Four</Link></Nav.Link>
            <Nav.Link><Link to="/memorygame" style={{color: 'white'}} className='navgame'>Memory Game</Link></Nav.Link>
            <Nav.Link><Link to="/snake" style={{color: 'white'}} className='navgame'>Snake</Link></Nav.Link>
            <Nav.Link><Link to="/candycrush" style={{color: 'white'}} className='navgame'>Candy Crush</Link></Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;