
import React, {Component} from 'react'
import MusicItemList from './MusicItemList'

class MyMusicContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Music:</h2>
        <MusicItemList title={'Genres'} />
        <MusicItemList title={'Artists'} />
        <MusicItemList title={'Albums'} />
        <MusicItemList title={'Songs'} />
      </div>
    )
  }
}

export default MyMusicContainer
