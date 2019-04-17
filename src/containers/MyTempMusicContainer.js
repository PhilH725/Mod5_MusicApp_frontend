
import React, {Component} from 'react'
import GuestSongsContainer from './GuestSongsContainer'
import GuestArtistsContainer from './GuestArtistsContainer'
import GuestAlbumsContainer from './GuestAlbumsContainer'
import {Header} from 'semantic-ui-react'

class MyTempMusicContainer extends Component {

  render() {
    return (
      <div>
        <Header id="my-music-header" as="h2" dividing>My Music</Header>
        <Header id="guest-warning" sub>You are browsing as a guest user. Sign in or create an account to save favorites or create a playlist</Header>
        <br/><br/>
        <GuestSongsContainer/>
        <br/>
        <GuestArtistsContainer/>
        <br/>
        <GuestAlbumsContainer/>
      </div>
    )
  }
}

export default MyTempMusicContainer
