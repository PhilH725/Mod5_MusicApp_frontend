
import React, { Component } from 'react'
import NewPlaylistNameBar from '../components/NewPlaylistNameBar'
import NewPlaylistPreviewContainer from './NewPlaylistPreviewContainer'
import NewPlaylistAddSongsContainer from './NewPlaylistAddSongsContainer'
import {Link} from 'react-router-dom'
import {creatingNewPlaylist} from '../redux/actionCreators'
import { connect } from 'react-redux'

class NewPlaylistContainer extends Component {

  render() {

    return (
      <div>
        <NewPlaylistAddSongsContainer />
        <NewPlaylistNameBar />
        <NewPlaylistPreviewContainer />
        <Link to="/my_playlists"><button onClick={() => {
          this.props.creatingNewPlaylist(this.props.newPlaylistNameText, this.props.newPlaylistSongs, this.props.user.id)
          }
        }>Create New Playlist</button></Link>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  newPlaylistNameText: state.newPlaylistNameText,
  newPlaylistSongs: state.newPlaylistSongs
})

const mapDispatchToProps = dispatch => {
  return {
    creatingNewPlaylist: (name, songs, id) => dispatch(creatingNewPlaylist(name, songs, id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPlaylistContainer)
