
import React from 'react'
import {List, Image, Button} from 'semantic-ui-react'
import {addingFavoriteSong} from '../redux/actionCreators'
import {connect} from 'react-redux'

const SongItemFind = (props) => {

  return (
    <List.Item>
      <List.Content floated="right">
        <Button inverted color="linkedin" onClick={()=>props.addingFavoriteSong(props.song.name, props.song.artistName, props.user.id)}>Add to Favorites</Button>
      </List.Content>
      <List.Content id="search-song-item" floated="left">
        <Image src={props.song.images[3]} size="mini" floated="left"/>
        <span id="search-song-text" >{props.song.name} - {props.song.artistName}</span>
      </List.Content>
    </List.Item>
  )
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => {
  return {
    addingFavoriteSong: (song, artist, userId) => dispatch(addingFavoriteSong(song, artist, userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongItemFind)
