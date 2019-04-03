
import React, {Component} from 'react'
import PlaylistList from './PlaylistList'
import NewPlaylistBar from '../components/NewPlaylistBar'
import SelectedPlaylist from './SelectedPlaylist'

class PlaylistContainer extends Component {

  render() {
    return (
      <div>
        <h2>Playlists:</h2>
        <PlaylistList />
        <NewPlaylistBar />
        <SelectedPlaylist />
      </div>
    )
  }
}

export default PlaylistContainer
