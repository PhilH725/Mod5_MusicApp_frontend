
import React, { Component, Fragment } from 'react'
import NewPlaylistPreviewContainer from './NewPlaylistPreviewContainer'
import NewPlaylistAddSongsContainer from './NewPlaylistAddSongsContainer'
import NewPlaylistForm from '../components/NewPlaylistForm'
import {Header, Divider} from 'semantic-ui-react'
import {creatingNewPlaylist} from '../redux/actionCreators'
import { connect } from 'react-redux'

class NewPlaylistContainer extends Component {

  render() {

    return (
      <Fragment>
        <Header id="my-music-header" as="h2" dividing>Create A Playlist</Header>
        <NewPlaylistForm />
        <Divider />
        <NewPlaylistPreviewContainer />
        <Divider />
        <NewPlaylistAddSongsContainer />
      </Fragment>
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
