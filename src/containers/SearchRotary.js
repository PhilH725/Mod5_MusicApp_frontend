
import React, {Component} from 'react'
import SearchResultsSongs from './SearchResultsSongs'
import SearchResultsArtists from './SearchResultsArtists'
import SearchResultsAlbums from './SearchResultsAlbums'
import SearchResultsGenres from './SearchResultsGenres'
import { connect } from 'react-redux'

class SearchRotary extends Component {

  displayProperTypeDiv() {
    switch (this.props.searchType) {
      case "songs":
        return (
          <div>
            Searching songs
            <SearchResultsSongs />
          </div>
        )
      case "artists":
        return (
          <div>
            Searching artists
            <SearchResultsArtists />
          </div>
        )
      case "albums":
        return (
          <div>
            Searching albums
            <SearchResultsAlbums />
          </div>
        )
      case "genres":
        return (
          <div>
            Searching genres
            <SearchResultsGenres />
          </div>
        )
      default:
        return (
          <div> Searching with no filter </div>
        )
    }
  }

  render() {
    return this.displayProperTypeDiv()
  }
}

const mapStateToProps = state => ({
  searchType: state.searchType
})

export default connect(mapStateToProps)(SearchRotary)
