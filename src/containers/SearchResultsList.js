
import React, {Component} from 'react'
import FindMusicItem from '../components/FindMusicItem'

class SearchResultsList extends Component {

  render() {
    return (
      <div>
        {1 === 1 ?
        <FindMusicItem />
        :
        "No results"}
      </div>
    )
  }
}

export default SearchResultsList
