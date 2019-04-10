
import React from 'react'
import {List, Image} from 'semantic-ui-react'
import {addFavoriteArtist} from '../redux/actionCreators'
import {connect} from 'react-redux'

const ArtistItemFind = (props) => {

  return (
    <List.Item>
      <List.Content floated="right">
        <button onClick={()=>props.addFavoriteArtist(props.artist, props.user.id)}>Add to Favorites</button>
      </List.Content>
      <List.Content floated="left" verticalAlign="middle">
      <Image src={props.artist.images[3]} size="mini" floated="left"/>
      <span>{props.artist.name}</span>
      </List.Content>
    </List.Item>
  )
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => {
  return {
    addFavoriteArtist: (artist, id) => dispatch(addFavoriteArtist(artist, id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistItemFind)
