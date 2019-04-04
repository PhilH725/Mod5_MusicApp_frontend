
import React, { Component } from 'react'
import NewPlaylistNameBar from '../components/NewPlaylistNameBar'
import NewPlaylistPreviewContainer from './NewPlaylistPreviewContainer'
import NewPlaylistAddSongsContainer from './NewPlaylistAddSongsContainer'
import {creatingNewPlaylist} from '../redux/actionCreators'
import { connect } from 'react-redux'

class NewPlaylistContainer extends Component {

  render() {

    return (
      <div>
        <NewPlaylistAddSongsContainer />
        <NewPlaylistNameBar />
        <NewPlaylistPreviewContainer />
        <button onClick={() => this.props.creatingNewPlaylist(this.props.newPlaylistNameText, this.props.newPlaylistSongs, 1)}>Create New Playlist</button>
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
    creatingNewPlaylist: (name, songs, id) => dispatch(creatingNewPlaylist(name, songs, id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPlaylistContainer)
