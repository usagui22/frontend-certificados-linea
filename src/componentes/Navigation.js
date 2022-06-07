import React, { Component } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from './Logo'


export default class Navigation extends Component {

  render() {
    return (
      <div>
        <Navbar className='navbar navbar-expand navbar-light fixed-top' variant='dark' >
            <Container className='nav'>                
                <div className="nav-brand">
                <Logo/>
                </div>
                <Nav className='ml-auto navbar-nav nav-links'>                    
                    <Link className='nav-link text-white' to="/Ingresar">Ingresar</Link>
                    {/* <Link className='nav-link text-white' to="/Logout">Logout</Link> */}
                    {/* <Link className='nav-link text-white' to="/Registrarse">Registrarse</Link> */}
                </Nav>

            </Container>
        </Navbar>
        
      </div>
    )
  }
}
