import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import FormAspirante from '../FormAspirante/FormAspirante'
import Home from '../Home/Home'
import FormLogin from '../FormLogin/FormLogin'
import Contactanos from '../Contactanos/Contactanos'

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
                  <Link className="nav-link" to="/inscripcion/">Inscribirse</Link>
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
  
          <Route exact path="/" component={Home}/>
          <Route exact path="/inscripcion/" component={FormAspirante} />
          <Route exact path="/login/" component={FormLogin}/>
          <Route exact path="/contact/" component={Contactanos}/>
          </Router>
        )
    }
}

export default Navbar