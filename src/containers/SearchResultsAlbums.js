
import React from 'react'
import AlbumItemFind from '../components/AlbumItemFind'
import {List, Header} from 'semantic-ui-react'
import { connect } from 'react-redux'

const SearchResultsAlbums = (props) => {

  return (
    <List celled>
      {props.albums.length > 0 ?
      props.albums.map((a, index) => <AlbumItemFind key={index} album={a}/>)
      :
      <Header id="no-results-header" as="h4">No results</Header>}
    </List>
  )
}

const mapStateToProps = state => ({
  albums: state.albumSearchResults.filter(a => !state.myAlbums.map(al => al.name).includes(a.name))
})

export default connect(mapStateToProps)(SearchResultsAlbums)
