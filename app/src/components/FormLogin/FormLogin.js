import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

class FormLogin extends Component {
    render(){
        return(
            
    <MDBContainer align="center">
    <MDBRow align="center">
      <MDBCol md="6">
        <form align="center">
          <p className="h4 text-center mb-4">Iniciar Sesión</p>
          <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
            Tu correo
          </label>
          <input
            type="email"
            id="defaultFormLoginEmailEx"
            className="form-control"
          />
          <br />
          <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
            Tu contraseña
          </label>
          <input
            type="password"
            id="defaultFormLoginPasswordEx"
            className="form-control"
          />
          <div className="text-center mt-4">
            <MDBBtn color="indigo" type="submit">Entrar</MDBBtn>
          </div>
        </form>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
          
        
        )
    }
}

export default FormLogin

