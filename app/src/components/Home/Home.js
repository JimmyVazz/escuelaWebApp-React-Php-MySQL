import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'

class Home extends Component {
    render(){
        return(
            <div>
            <Navbar />
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                <h1 class="display-1">Bienvenido</h1>
                <p class="lead">Somos la mejor escuela de México.</p>
                </div>
            </div>
            </div>
        )
    }
}

export default Home