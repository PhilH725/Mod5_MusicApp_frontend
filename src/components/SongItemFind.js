
import React from 'react'
import {List, Image} from 'semantic-ui-react'
import {addFavoriteSong} from '../redux/actionCreators'
import {connect} from 'react-redux'

const SongItemFind = (props) => {

  return (
    <List.Item>
      <List.Content floated="right">
        <button onClick={()=>props.addFavoriteSong(props.song, props.user.id)}>Add to Favorites</button>
      </List.Content>
      <List.Content floated="left" verticalAlign="middle">
      <Image src={require('../img/image.png')} size="mini" floated="left"/>
      <span>{props.song.name} - {props.song.artistName}</span>
      </List.Content>
    </List.Item>
  )
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => {
  return {
    addFavoriteSong: (song, id) => dispatch(addFavoriteSong(song, id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongItemFind)
