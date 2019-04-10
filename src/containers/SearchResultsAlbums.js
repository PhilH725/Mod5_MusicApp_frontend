
import React from 'react'
import AlbumItemFind from '../components/AlbumItemFind'
import { connect } from 'react-redux'

const SearchResultsAlbums = (props) => {

  return (
    <div>
      {props.albums.length > 0 ?
      props.albums.map((a, index) => <AlbumItemFind key={index} album={a}/>)
      :
      "No results"}
    </div>
  )
}

const mapStateToProps = state => ({
  albums: state.albumSearchResults
})

export default connect(mapStateToProps)(SearchResultsAlbums)
