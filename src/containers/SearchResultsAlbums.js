
import React from 'react'
import AlbumItemFind from '../components/AlbumItemFind'
import { connect } from 'react-redux'

const SearchResultsAlbums = (props) => {

  return (
    <div>
      {props.albums.length > 0 ?
      props.albums.map(s => <AlbumItemFind key={s.id} album={s}/>)
      :
      "No results"}
    </div>
  )
}

const mapStateToProps = state => ({
  albums: state.albums.filter(s => s.name.toLowerCase().includes(state.searchText.toLowerCase()))
})

export default connect(mapStateToProps)(SearchResultsAlbums)
