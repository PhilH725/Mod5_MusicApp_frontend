
import React from 'react'
// import {Item} from 'semantic-ui-react'
import {addFavoriteAlbum} from '../redux/actionCreators'
import {connect} from 'react-redux'

const AlbumItemFind = (props) => {

  return (
    <div onClick={ () => props.addFavoriteAlbum(props.album)}>
        <img src={props.album.images[1]} alt={props.album.name}/>{props.album.name} - {props.album.artistName}
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    addFavoriteAlbum: (album) => dispatch(addFavoriteAlbum(album))
  }
}

export default connect(null, mapDispatchToProps)(AlbumItemFind)
