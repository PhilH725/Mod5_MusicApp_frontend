
import React, { Component } from 'react'
import NewPlaylistNameBar from '../components/NewPlaylistNameBar'
import NewPlaylistPreviewContainer from './NewPlaylistPreviewContainer'
import NewPlaylistAddSongsContainer from './NewPlaylistAddSongsContainer'
import {Link} from 'react-router-dom'
import {creatingNewPlaylist, renderNewPlaylist} from '../redux/actionCreators'
import { connect } from 'react-redux'

class NewPlaylistContainer extends Component {

  render() {

    return (
      <div>
        <NewPlaylistAddSongsContainer />
        <NewPlaylistNameBar />
        <NewPlaylistPreviewContainer />
        <Link to="/my_playlists"><button onClick={() => {
          this.props.creatingNewPlaylist(this.props.newPlaylistNameText, this.props.newPlaylistSongs, 1)
          this.props.renderNewPlaylist(this.props.newPlaylistNameText, this.props.newPlaylistSongs)}
        }>Create New Playlist</button></Link>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  //need user_id here, replace 1 with this.props.user_id
  newPlaylistNameText: state.newPlaylistNameText,
  newPlaylistSongs: state.newPlaylistSongs
})

const mapDispatchToProps = dispatch => {
  return {
    creatingNewPlaylist: (name, songs, id) => dispatch(creatingNewPlaylist(name, songs, id)),
    renderNewPlaylist: (name, songs) => dispatch(renderNewPlaylist(name, songs))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPlaylistContainer)
