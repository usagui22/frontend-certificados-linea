import React from 'react';
import { NavLink } from 'react-bootstrap';


const Lista =(titulos,atributos)=>{
  
  return (
      <div>
        <table>
          <thead>
            <tr>
              {titulos.map((titulo)=>(<th>{titulo}</th>))}
            </tr>
          </thead>
          <tbody>
            {              
                atributos.map((atributos, i)=>{
                  return(
                    <tr>
                      {/* <td>{atributo.id}</td>
                      <td>{atributo.name}</td> */}
                      <td>
                        <NavLink to={"/editar/"} >
                          {/* Editar<FormEditar/> */}
                          </NavLink>
                      </td>
                      <td>
                        <NavLink to={"/eliminar"}>
                          Eliminar
                          </NavLink>
                      </td>
                    </tr>
                  );
                })              
              }
          </tbody>
        </table>
      </div>
    );
  
}


export default Lista;