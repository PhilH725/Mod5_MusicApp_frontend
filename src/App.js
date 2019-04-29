
import React, { Component } from 'react';
import Header from './components/Header'
import Navbar from './components/Navbar'
import MainContainer from './containers/MainContainer'
import MusicPlayer from './components/MusicPlayer'
import './App.css';
import {connect} from 'react-redux'
import { fetchingFavorites, loadingData, fetchingPublishedPlaylists, authenticatingToken} from './redux/actionCreators'

class App extends Component {

  componentDidMount() {
    this.props.loadingData()
    this.props.fetchingPublishedPlaylists()
    let token = localStorage.getItem('token')
    if (token) {
      this.props.authenticatingToken(token)
    }

  }

  render() {
    return (
      <div className="App">
        <Header />
        <Navbar />
        <MainContainer />
        <MusicPlayer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => {
  return {
    loadingData: () => dispatch(loadingData()),
    fetchingFavorites: () => dispatch(fetchingFavorites()),
    fetchingPublishedPlaylists: () => dispatch(fetchingPublishedPlaylists()),
    authenticatingToken: (token) => dispatch(authenticatingToken(token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
