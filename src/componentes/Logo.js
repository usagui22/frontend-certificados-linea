import React from 'react';
import { Container, Figure } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import imagen from '../assets/imagenes/marcaHorizontal-02.png';

function Logo() {
  return (
    <Container className=''>
        <Figure className="d-sm -d-block  p-1">
            <Figure.Image                                        
                width={90}
                className=" bg-light d-inline h-50"
                src={imagen}
            />                
            <Link className='nav-brand' to="/">Certificados En Linea</Link>
            {/* <span className=" text-light mx-auto">Certificados En Linea</span> */}
            
        </Figure>            
    </Container>
  )
}

export default Logo