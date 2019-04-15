
import React, {Component, Fragment} from 'react'
import PlaylistList from './PlaylistList'
import SelectedPlaylist from './SelectedPlaylist'
import {Grid, Header} from 'semantic-ui-react'

class PlaylistContainer extends Component {

  render() {
    return (
      <Fragment>
        <Header id="my-music-header" as="h2">My Playlists</Header>
        <Grid celled>
          <PlaylistList />
          <SelectedPlaylist />
        </Grid>
      </Fragment>
    )
  }
}

export default PlaylistContainer
