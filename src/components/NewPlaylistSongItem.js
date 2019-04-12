
import React from 'react'
import {Item, Image, Button, Icon} from 'semantic-ui-react'

const NewPlaylistSongItem = (props) => {

  return (
    <Item>
    <Button size="mini" float="right" onClick={()=>props.handleClick(props.song)} icon>
      <Icon name={props.buttonText}/>
    </Button>
      <Image size='mini' src={props.song.album.image} alt={'album-art'} />

      <Item.Content>
        <Item.Header>{props.song.name.slice(0,60)}</Item.Header>
        <Item.Meta>{props.song.artist} - {props.song.album.name}</Item.Meta>
      </Item.Content>
    </Item>

  )
}

export default NewPlaylistSongItem
