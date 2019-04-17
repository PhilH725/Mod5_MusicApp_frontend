
import React from 'react'
import ArtistItemFind from '../components/ArtistItemFind'
import {List, Header} from 'semantic-ui-react'
import { connect } from 'react-redux'

const SearchResultsArtists = (props) => {

  return (
    <List celled>
      {props.artists.length > 0 ?
      props.artists.map((s, index) => <ArtistItemFind key={index} artist={s}/>)
      :
      <Header id="no-results-header" as="h4">No results</Header>}
    </List>
  )
}

const mapStateToProps = state => ({
  artists: state.artistSearchResults.filter(a => !state.myArtists.map(a => a.name).includes(a.name))
})

export default connect(mapStateToProps)(SearchResultsArtists)
