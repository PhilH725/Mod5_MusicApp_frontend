
import React from 'react'
import ArtistItemFind from '../components/ArtistItemFind'
import { connect } from 'react-redux'

const SearchResultsArtists = (props) => {

  return (
    <div>
      {props.artists.length > 0 ?
      props.artists.map((s, index) => <ArtistItemFind key={index} artist={s}/>)
      :
      "No results"}
    </div>
  )
}

const mapStateToProps = state => ({
  // artists: state.artists.filter(a => a.name.toLowerCase().includes(state.searchText.toLowerCase()) &&
  //   !state.myArtists.map(a => a.id).includes(a.id))
  artists: state.artistSearchResults
})

export default connect(mapStateToProps)(SearchResultsArtists)
