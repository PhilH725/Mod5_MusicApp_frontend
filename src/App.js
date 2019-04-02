import React, { Component } from 'react';
import Header from './components/Header'
import Navbar from './components/Navbar'
import MainContainer from './containers/MainContainer'
import './App.css';
import {fetchingSongs} from './redux/actionCreators'
import {connect} from 'react-redux'

class App extends Component {

  componentDidMount() {
    this.props.fetchingSongs()
  }

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

const mapDispatchToProps = dispatch => {
  return {
    fetchingSongs: () => {dispatch(fetchingSongs())}
  }
}

export default connect(null, mapDispatchToProps)(App);
