
import React, {Component} from 'react'
import FindFilterBar from '../components/FindFilterBar'
import SearchResultsList from './SearchResultsList'

class FindMusicContainer extends Component {

  render() {
    return (
      <div>
        <h2>Find new music:</h2>
        <FindFilterBar />
        <SearchResultsList />
      </div>
    )
  }
}

export default FindMusicContainer
