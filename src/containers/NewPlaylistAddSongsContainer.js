
import React, {Component} from 'react'
import NewPlaylistSongItem from '../components/NewPlaylistSongItem'
import {addNewPlaylistSong} from '../redux/actionCreators'
import {connect} from 'react-redux'

class NewPlaylistAddSongsContainer extends Component {

  render() {
    return (
      <div>
        {this.props.songs.map(s => <NewPlaylistSongItem key={s.id} song={s} handleClick={this.props.addNewPlaylistSong}/>)}
        -----------------------------------------------
      </div>
    )
  }
}

const mapStateToProps = state => ({
  songs: state.mySongs.filter(s => !state.newPlaylistSongs.includes(s))
})

const mapDispatchToProps = dispatch => {
  return {
    addNewPlaylistSong: (song) => dispatch(addNewPlaylistSong(song))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPlaylistAddSongsContainer)
