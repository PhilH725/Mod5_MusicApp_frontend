
import React from 'react'
import {addFavoriteArtist} from '../redux/actionCreators'
import {connect} from 'react-redux'

const ArtistItemFind = (props) => {

  return (
    <div onClick={()=>props.addFavoriteArtist(props.artist)}>
        <img src={props.artist.images[1]} alt={props.artist.name}/> {props.artist.name}
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    addFavoriteArtist: (artist) => dispatch(addFavoriteArtist(artist))
  }
}

export default connect(null, mapDispatchToProps)(ArtistItemFind)
