
import React, {Component} from 'react'
import MyMusicContainer from './MyMusicContainer'
import FindMusicContainer from './FindMusicContainer'
import PlaylistContainer from './PlaylistContainer'

class MainContainer extends Component {

  render() {
    return (
      <div>
        <MyMusicContainer />
        <FindMusicContainer />
        <PlaylistContainer />
      </div>
    )
  }
}

export default MainContainer
