import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import FormAspirante from '../FormAspirante/FormAspirante'

class Navbar extends Component {
    render(){
        return(
          <Router>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Tec MTTY</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Inicio <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/form/">Inscribirse</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login/">Iniciar Sesión</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact/">Contáctanos</Link>
                </li>
              </ul>
            </div>
          </nav>
          {/* <Route path="/" exact component={}/> */}
          <Route path="/" component={FormAspirante}/>
          {/* <Route path="/login/" component={FormLogin}/>
          <Route path="/contact/" component={Contact}/> */}
          </Router>
        )
    }
}

export default Navbar