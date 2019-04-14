
import React, {Component} from 'react'
import FindFilterBar from '../components/FindFilterBar'
import SearchRotary from './SearchRotary'
import {Header} from 'semantic-ui-react'

class FindMusicContainer extends Component {

  render() {
    return (
      <div>
        <Header id="my-music-header" as="h2" dividing>Find Music</Header>
        <FindFilterBar />
        <SearchRotary />
      </div>
    )
  }
}



export default FindMusicContainer
