
import React from 'react'
import ArtistItemFind from '../components/ArtistItemFind'
import { connect } from 'react-redux'

const SearchResultsArtists = (props) => {

  return (
    <div>
      {props.artists.length > 0 ?
      props.artists.map(s => <ArtistItemFind key={s.id} artist={s}/>)
      :
      "No results"}
    </div>
  )
}

const mapStateToProps = state => ({
  artists: state.artists.filter(s => s.name.toLowerCase().includes(state.searchText.toLowerCase()))
})

export default connect(mapStateToProps)(SearchResultsArtists)
