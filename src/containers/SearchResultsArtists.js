
import React from 'react'
import ArtistItemFind from '../components/ArtistItemFind'
import {List} from 'semantic-ui-react'
import { connect } from 'react-redux'

const SearchResultsArtists = (props) => {

  return (
    <List celled>
      {props.artists.length > 0 ?
      props.artists.map((s, index) => <ArtistItemFind key={index} artist={s}/>)
      :
      "No results"}
    </List>
  )
}

const mapStateToProps = state => ({
  artists: state.artistSearchResults
})

export default connect(mapStateToProps)(SearchResultsArtists)
