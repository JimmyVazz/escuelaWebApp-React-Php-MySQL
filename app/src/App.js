import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'
class App extends Component{
  render(){
    return (
      <div className="App">
          <Navbar />
          
      </div>
    );
  }
}

export default App;