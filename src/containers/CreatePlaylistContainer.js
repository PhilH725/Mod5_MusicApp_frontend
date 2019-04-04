
import React, { Component } from 'react'
import NewPlaylistBar from '../components/NewPlaylistBar'
import NewPlaylistPreviewContainer from './NewPlaylistPreviewContainer'
import NewPlaylistAddSongsContainer from './NewPlaylistAddSongsContainer'
import { connect } from 'react-redux'

class CreatePlaylistContainer extends Component {

  render() {

    return (
      <div>
        Create New Playlist
        <NewPlaylistBar />
        <NewPlaylistAddSongsContainer />
        <NewPlaylistPreviewContainer />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  newPlaylistNameText: state.newPlaylistNameText,
  newPlaylistSongs: state.newPlaylistSongs
})

export default connect(mapStateToProps)(CreatePlaylistContainer)
