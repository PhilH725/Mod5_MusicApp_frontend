
import React, {Component} from 'react'
import Item from '../components/Item'

class SelectedPlaylist extends Component {

  render() {
    return (
      <div>
        <h3>Selected Playlist</h3>
        <Item />
        <Item />
        <Item />
      </div>
    )
  }
}

export default SelectedPlaylist
