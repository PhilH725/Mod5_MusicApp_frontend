
import React, {Component} from 'react'
import PlaylistAddSongItem from '../components/PlaylistAddSongItem'
import {connect} from 'react-redux'

class NewPlaylistAddSongsContainer extends Component {

  render() {
    return (
      <div>
        {this.props.songs.map(s => <PlaylistAddSongItem key={s.id} song={s} />)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  songs: state.mySongs
})

export default connect(mapStateToProps)(NewPlaylistAddSongsContainer)
