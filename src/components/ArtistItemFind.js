
import React from 'react'
import {Item} from 'semantic-ui-react'
import {addFavoriteArtist} from '../redux/actionCreators'
import {connect} from 'react-redux'

const ArtistItemFind = (props) => {

  return (
    <Item onClick={()=>props.addFavoriteArtist(props.artist)}>
      <Item.Image src={props.artist.images[1]} alt={props.artist.name}/>
      <Item.Content>
        {props.artist.name}
      </Item.Content>
    </Item>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    addFavoriteArtist: (artist) => dispatch(addFavoriteArtist(artist))
  }
}

export default connect(null, mapDispatchToProps)(ArtistItemFind)
