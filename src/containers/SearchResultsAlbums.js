
import React from 'react'
import AlbumItemFind from '../components/AlbumItemFind'
import {List} from 'semantic-ui-react'
import { connect } from 'react-redux'

const SearchResultsAlbums = (props) => {

  return (
    <List celled>
      {props.albums.length > 0 ?
      props.albums.map((a, index) => <AlbumItemFind key={index} album={a}/>)
      :
      "No results"}
    </List>
  )
}

const mapStateToProps = state => ({
  albums: state.albumSearchResults
})

export default connect(mapStateToProps)(SearchResultsAlbums)
