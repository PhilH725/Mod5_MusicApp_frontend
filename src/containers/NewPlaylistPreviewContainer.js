
import React, {Component} from 'react'
import NewPlaylistSongItem from '../components/NewPlaylistSongItem'
import {removeNewPlaylistSong} from '../redux/actionCreators'
import {connect} from 'react-redux'

class NewPlaylistPreviewContainer extends Component {

  render() {
    return (
      <div>
        {this.props.newPlaylistSongs.map(s => <NewPlaylistSongItem key={s.id} song={s} handleClick={this.props.removeNewPlaylistSong}/>)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  newPlaylistSongs: state.newPlaylistSongs
})

const mapDispatchToProps = dispatch => {
  return {
    removeNewPlaylistSong: (song) => dispatch(removeNewPlaylistSong(song))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPlaylistPreviewContainer)
