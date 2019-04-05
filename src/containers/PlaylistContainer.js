
import React, {Component, Fragment} from 'react'
import PlaylistList from './PlaylistList'
import SelectedPlaylist from './SelectedPlaylist'
import {Grid} from 'semantic-ui-react'

class PlaylistContainer extends Component {

  render() {
    return (
      <Fragment>
        <h2>Playlists:</h2>
        <Grid columns={2} divided>
          <PlaylistList />
          <SelectedPlaylist />
        </Grid>
      </Fragment>
    )
  }
}

export default PlaylistContainer
