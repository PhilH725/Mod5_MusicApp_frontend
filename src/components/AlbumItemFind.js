
import React from 'react'
import {addFavoriteAlbum} from '../redux/actionCreators'
import {connect} from 'react-redux'

const AlbumItemFind = (props) => {

  return (
    <div onClick={ () => props.addFavoriteAlbum(props.album)}>
        {props.album.name}
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    addFavoriteAlbum: (album) => dispatch(addFavoriteAlbum(album))
  }
}

export default connect(null, mapDispatchToProps)(AlbumItemFind)
