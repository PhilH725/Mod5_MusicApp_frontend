
import React from 'react'
import AlbumItemFind from '../components/AlbumItemFind'
import { connect } from 'react-redux'

const SearchResultsAlbums = (props) => {

  return (
    <div>
      {props.albums.length > 0 ?
      props.albums.map(a => <AlbumItemFind key={a.id} album={a}/>)
      :
      "No results"}
    </div>
  )
}

const mapStateToProps = state => ({
  albums: state.albums.filter(a => a.name.toLowerCase().includes(state.searchText.toLowerCase()) &&
    !state.myAlbums.map(a => a.id).includes(a.id))
})

export default connect(mapStateToProps)(SearchResultsAlbums)
