
import React, {Component} from 'react'
import FindFilterBar from '../components/FindFilterBar'
import SearchRotary from './SearchRotary'

class FindMusicContainer extends Component {

  render() {
    return (
      <div>
        <h2>Find new music:</h2>
        <FindFilterBar />
        <SearchRotary />
      </div>
    )
  }
}



export default FindMusicContainer
