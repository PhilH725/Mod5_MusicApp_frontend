
import React, {Component} from 'react'
// import MusicItemList from './MusicItemList'
import MySongsContainer from './MySongsContainer'
import MyArtistsContainer from './MyArtistsContainer'
import MyAlbumsContainer from './MyAlbumsContainer'
import MyGenresContainer from './MyGenresContainer'
import {connect} from 'react-redux'

class MyMusicContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Music:</h2>
        <MySongsContainer title={'Genres'} items={this.props.myGenres}/>
        <MyArtistsContainer title={'Artists'} items={this.props.myArtists}/>
        <MyAlbumsContainer title={'Albums'} items={this.props.myAlbums}/>
        <MyGenresContainer title={'Songs'} items={this.props.mySongs}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    mySongs: state.mySongs,
    myArtists: state.myArtists,
    myAlbums: state.myAlbums,
    myGenres: state.myGenres
  })
}

export default connect(mapStateToProps)(MyMusicContainer)
