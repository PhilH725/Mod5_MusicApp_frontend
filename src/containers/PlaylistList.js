
import React, {Component} from 'react'
import PlaylistItem from '../components/PlaylistItem'

class PlaylistList extends Component {

  render() {
    return (
      <div>
        <h3>My Playlists</h3>
        <PlaylistItem />
        <PlaylistItem />
      </div>
    )
  }
}

export default PlaylistList
