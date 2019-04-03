
import React, {Component} from 'react'
import MusicItemList from './MusicItemList'
import {connect} from 'react-redux'

class MyMusicContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Music:</h2>
        <MusicItemList title={'Genres'} items={this.props.myGenres}/>
        <MusicItemList title={'Artists'} items={this.props.myArtists}/>
        <MusicItemList title={'Albums'} items={this.props.myAlbums}/>
        <MusicItemList title={'Songs'} items={this.props.mySongs}/>
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
