
import React from 'react'
import {addFavoriteArtist} from '../redux/actionCreators'
import {connect} from 'react-redux'

const ArtistItemFind = (props) => {

  return (
    <div onClick={()=>props.addFavoriteArtist(props.artist)}>
        {props.artist.name}
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    addFavoriteArtist: (artist) => dispatch(addFavoriteArtist(artist))
  }
}

export default connect(null, mapDispatchToProps)(ArtistItemFind)
