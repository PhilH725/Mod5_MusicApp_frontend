
import React from 'react'
import {List, Image, Button} from 'semantic-ui-react'
import {addingFavoriteArtist} from '../redux/actionCreators'
import {connect} from 'react-redux'

const ArtistItemFind = (props) => {

  return (
    <List.Item>
      <List.Content floated="right">
        <Button inverted color="linkedin" onClick={()=>props.addingFavoriteArtist(props.artist, props.user.id)}>Add to Favorites</Button>
      </List.Content>
      <List.Content floated="left" verticalAlign="middle">
      <Image src={props.artist.images[3]} size="mini" floated="left"/>
      <span id="search-artists-text" >{props.artist.name.slice(0,75)}</span>
      </List.Content>
    </List.Item>
  )
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => {
  return {
    addingFavoriteArtist: (artist, id) => dispatch(addingFavoriteArtist(artist, id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistItemFind)
