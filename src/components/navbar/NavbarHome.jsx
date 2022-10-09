import React from "react";
import '../navbar/navbar.css'
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

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
            <NavDropdown title="Tic Tac Toe" id='navDrop' className='navDropBack' style={{paddingRight: '25px'}}>

              <Nav.Link><Link to="/tictactoe3x3" style={{color: 'black', marginRight: '25px', textDecoration: 'none'}} ><li>Tic-Tac-Toe 3x3</li></Link></Nav.Link> 

              <Nav.Link><Link to="/tictactoe4x4" style={{color: 'black', paddingRight: '25px', textDecoration: 'none'}} ><li>Tic-Tac-Toe 4x4</li></Link></Nav.Link>
            </NavDropdown>

            <Nav.Link><Link to="/connectfour" id='nav' className='navBar' style={{color: 'white', paddingRight: '25px'}}>Connect Four</Link></Nav.Link>

            <Nav.Link><Link to="/memorygame" id='nav' className='navBar' style={{color: 'white', paddingRight: '25px'}}>Memory Game</Link></Nav.Link>

            <Nav.Link><Link to="/snake" id='nav' className='navBar' style={{color: 'white', paddingRight: '25px'}}>Snake</Link></Nav.Link>
            
            <Nav.Link><Link to="/candycrush" id='nav' className='navBar' style={{color: 'white', paddingRight: '25px'}}>Candy Crush</Link></Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;

