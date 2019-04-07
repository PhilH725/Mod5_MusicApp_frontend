import React, { Component } from 'react';
import Header from './components/Header'
import Navbar from './components/Navbar'
import MainContainer from './containers/MainContainer'
import './App.css';
import {connect} from 'react-redux'
import { fetchingSongs, fetchingArtists, fetchingAlbums, fetchingGenres, fetchingFavorites, fetchingPlaylists, authenticatingToken} from './redux/actionCreators'
// import {isEmpty} from 'lodash'

class App extends Component {

  componentDidMount() {
    this.props.fetchingSongs()
    this.props.fetchingArtists()
    this.props.fetchingAlbums()
    this.props.fetchingGenres()
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => {
  return {
    fetchingSongs: () => dispatch(fetchingSongs()),
    fetchingArtists: () => dispatch(fetchingArtists()),
    fetchingAlbums: () => dispatch(fetchingAlbums()),
    fetchingGenres: () => dispatch(fetchingGenres()),
    fetchingFavorites: () => dispatch(fetchingFavorites()),
    fetchingPlaylists: () => dispatch(fetchingPlaylists()),
    authenticatingToken: (token) => dispatch(authenticatingToken(token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
