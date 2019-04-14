
import React, {Component} from 'react'
import SearchResultsSongs from './SearchResultsSongs'
import SearchResultsArtists from './SearchResultsArtists'
import SearchResultsAlbums from './SearchResultsAlbums'
import SearchResultsGenres from './SearchResultsGenres'
import {Header} from 'semantic-ui-react'
import { connect } from 'react-redux'

class SearchRotary extends Component {

  displayProperTypeDiv() {
    switch (this.props.searchType) {
      case "songs":
        return (
          <div>
            <Header id="search-header" >Searching songs</Header>
            <SearchResultsSongs />
          </div>
        )
      case "artists":
        return (
          <div>
            <Header id="search-header" >Searching artists</Header>
            <SearchResultsArtists />
          </div>
        )
      case "albums":
        return (
          <div>
            <Header id="search-header" >Searching albums</Header>
            <SearchResultsAlbums />
          </div>
        )
      case "genres":
        return (
          <div>
            <Header id="search-header" >Searching genres</Header>
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
