
import React from 'react'
import {Item, Image, Button, Icon} from 'semantic-ui-react'

const NewPlaylistSongItem = (props) => {

  return (
    <Item>
      <Image size='mini' src={props.song.album.image} alt={'album-art'} />

      <Item.Content id="create-playlist-text">
        <Item.Header>{props.song.name.slice(0,60)}</Item.Header>
        <Item.Meta>{props.song.artist} - {props.song.album.name}</Item.Meta>
      </Item.Content>
      <Item.Content id="create-playlist-button-container" float="right">
        <Button inverted color="linkedin" size="mini" float="right" onClick={()=>props.handleClick(props.song)} icon>
          <Icon name={props.buttonText}/>
        </Button>
      </Item.Content>
    </Item>

  )
}

export default NewPlaylistSongItem
