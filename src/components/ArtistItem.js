
import React from 'react'
import {Item} from 'semantic-ui-react'

const ArtistItem = (props) => {

  return (
    <Item>
      <Item.Image id="artist-pic" size='small' src={props.artist.image} alt={'artist-pic'} />
      <Item.Content>
        <Item.Header as="h2">{props.artist.name}</Item.Header>
        <Item.Description>
          {props.artist.bio}
        </Item.Description>
      </Item.Content>
    </Item>
  )
}

export default ArtistItem
