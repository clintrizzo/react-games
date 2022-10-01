import React from "react";
import './components/navbar/navbar.css'
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BasicExample() {
  return (
    function openGame(evt, openGame) {
      var i, x, tablinks;
      x = document.getElementsByClassName("game");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablink");
      for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
      }
      document.getElementById(openGame)
      evt.currentTarget.className += " w3-red";
    },

    <Navbar expand="lg" sticky="top" style={{backgroundColor: '#414a4c'}}>
      <Container>
        <Navbar.Brand><Link to="/" style={{color: 'white'}} className='navgame'><h2>React Games</h2></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor: 'white'}}/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{paddingLeft: '50px'}}>
            <Nav.Link><Link to="/tictactoe" style={{color: 'white', paddingRight: '25px'}} className="w3-bar-item w3-button tablink w3-red">Tic-Tac-Toe</Link></Nav.Link>

            <Nav.Link><Link to="/connectfour" style={{color: 'white', paddingRight: '25px'}} className="w3-bar-item w3-button tablink w3-red">Connect Four</Link></Nav.Link>

            <Nav.Link><Link to="/memorygame" style={{color: 'white', paddingRight: '25px'}} className="w3-bar-item w3-button tablink w3-red">Memory Game</Link></Nav.Link>

            <Nav.Link><Link to="/snake" style={{color: 'white', paddingRight: '25px'}} className="w3-bar-item w3-button tablink w3-red">Snake</Link></Nav.Link>
            
            <Nav.Link><Link to="/candycrush" style={{color: 'white', paddingRight: '25px'}} className="w3-bar-item w3-button tablink w3-red">Candy Crush</Link></Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;

