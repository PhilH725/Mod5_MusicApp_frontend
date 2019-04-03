import React, { Component } from 'react';
import Header from './components/Header'
import Navbar from './components/Navbar'
import MainContainer from './containers/MainContainer'
import './App.css';
import {connect} from 'react-redux'
import {fetchingSongs} from './redux/actionCreators'
import {fetchingFavorites} from './redux/actionCreators'

class App extends Component {

  componentDidMount() {
    this.props.fetchingSongs()
    this.props.fetchingFavorites()
    this.props.fetchingPlaylists()
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
    fetchingSongs: () => dispatch(fetchingSongs()),
    fetchingFavorites: () => dispatch(fetchingFavorites()),
    fetchingPlaylists: () => dispatch(fetchingPlaylists())
  }
}

export default connect(null, mapDispatchToProps)(App);
