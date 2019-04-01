import React, { Component } from 'react';
import Header from './components/Header'
import Navbar from './components/Navbar'
import MainContainer from './containers/MainContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navbar />
        <MainContainer />
      </div>
    );
  }
}

export default App;
