
import React from 'react'
import {Link} from 'react-router-dom'
import {Item} from 'semantic-ui-react'

// <Link to={`/items/songs/${props.song.id}`}>{props.song.name}</Link>
const SongItem = (props) => {

  return (
    <Item>
      <Item.Image size='tiny' src={require('../img/image.png')} />

      <Item.Content>
        <Item.Header><Link to={`/items/songs/${props.song.id}`}>{props.song.name}</Link></Item.Header>
        <Item.Meta>{props.song.artist} - {props.song.album}</Item.Meta>
      </Item.Content>
    </Item>
  )
}

export default SongItem
