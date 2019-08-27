import React, { Component } from 'react'

class FormAspirante extends Component{

    constructor(){
        super();
        this.state = {
            nombre:"Nombre del aspirante",
            apepat:"Apellido Paterno",
            apemat:"Apellido Materno",
            email:"E-mail",
            direccion: "Direccion",
            anioIngreso: "Año deseado a ingresar"
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { nombre , apepat , apemat , email, direccion, anioIngreso} = this.state

        fetch('http://localhost/proyectoEscuela/api/datosAspirante/create.php',{
            method:"POST",
            body: JSON.stringify({ nombre , apepat , apemat , email, direccion, anioIngreso})
        }).then(response => {
            console.log(response)
        });
    }

    render(){
        const {nombre , apepat , apemat , email, direccion, anioIngreso} = this.state
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 offset-sm-3 py-3">
                        <form onSubmit={this.handleSubmit} className="border border-dark shadow rounded p-3">
                            <div className="form-group">
                                <label htmlFor="name">Nombre</label>
                                <input id="name" 
                                name="name" 
                                type="text" 
                                className="form-control"
                                value={nombre}
                                onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Paterno">Apellido Paterno</label>
                                <input id="apepat" 
                                name="apepat" 
                                type="text" 
                                className="form-control"
                                value={apepat}
                                onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="apepat">Apellido Paterno</label>
                                <input id="apepat" 
                                name="apepat" 
                                type="text" 
                                className="form-control"
                                value={apepat}
                                onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="image">E-mail</label>
                                <input id="email" 
                                name="email" 
                                type="text" 
                                className="form-control"
                                value={email}
                                onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="image">Direccion</label>
                                <input id="direccion" 
                                name="direccion" 
                                type="text" 
                                className="form-control"
                                value={direccion}
                                onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="image">Año a ingresar</label>
                                <input id="anioIngreso" 
                                name="anioIngreso" 
                                type="text" 
                                className="form-control"
                                value={anioIngreso}
                                onChange={this.handleChange}/>
                            </div>
                            <button type="submit" className="btn btn-outline-success">Registrarme</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default FormAspirante